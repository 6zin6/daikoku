import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email || !session.user.email.endsWith("@admin.com")) {
      return NextResponse.json(
        { error: "管理者権限が必要です。" },
        { status: 403 }
      );
    }

    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    const bookings = await prisma.booking.findMany({
      where: {
        status: status as any || undefined,
        startTime: {
          gte: from ? new Date(from) : undefined,
          lte: to ? new Date(to) : undefined,
        },
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
            profile: {
              select: {
                phone: true,
              },
            },
          },
        },
        space: true,
      },
      orderBy: {
        startTime: "desc",
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

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email || !session.user.email.endsWith("@admin.com")) {
      return NextResponse.json(
        { error: "管理者権限が必要です。" },
        { status: 403 }
      );
    }

    const { id, status } = await req.json();

    const booking = await prisma.booking.update({
      where: { id },
      data: { status },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
        space: true,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.error("Failed to update booking:", error);
    return NextResponse.json(
      { error: "予約情報の更新に失敗しました。" },
      { status: 500 }
    );
  }
}