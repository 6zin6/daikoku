import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "認証が必要です。" },
        { status: 401 }
      );
    }

    const { spaceId, startTime, endTime } = await req.json();

    // 予約時間の重複チェック
    const existingBooking = await prisma.booking.findFirst({
      where: {
        spaceId,
        OR: [
          {
            AND: [
              { startTime: { lte: new Date(startTime) } },
              { endTime: { gt: new Date(startTime) } },
            ],
          },
          {
            AND: [
              { startTime: { lt: new Date(endTime) } },
              { endTime: { gte: new Date(endTime) } },
            ],
          },
        ],
        status: "CONFIRMED",
      },
    });

    if (existingBooking) {
      return NextResponse.json(
        { error: "指定した時間帯は既に予約されています。" },
        { status: 400 }
      );
    }

    // 料金計算
    const space = await prisma.space.findUnique({
      where: { id: spaceId },
    });

    if (!space) {
      return NextResponse.json(
        { error: "指定したスペースが見つかりません。" },
        { status: 404 }
      );
    }

    const hours = (new Date(endTime).getTime() - new Date(startTime).getTime()) / (1000 * 60 * 60);
    const totalPrice = Math.ceil(hours * space.pricePerHour);

    const booking = await prisma.booking.create({
      data: {
        userId: session.user.id,
        spaceId,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        totalPrice,
        status: "CONFIRMED",
      },
      include: {
        space: true,
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("Booking creation error:", error);
    return NextResponse.json(
      { error: "予約の作成に失敗しました。" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "認証が必要です。" },
        { status: 401 }
      );
    }

    const { searchParams } = new URL(req.url);
    const userId = session.user.id;

    const bookings = await prisma.booking.findMany({
      where: {
        userId,
        startTime: {
          gte: searchParams.get('from') ? new Date(searchParams.get('from')!) : undefined,
        },
      },
      include: {
        space: true,
      },
      orderBy: {
        startTime: 'asc',
      },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Failed to fetch bookings:", error);
    return NextResponse.json(
      { error: "予約情報の取得に失敗しました。" },
      { status: 500 }
    );
  }
}