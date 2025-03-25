import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email || !session.user.email.endsWith("@admin.com")) {
      return NextResponse.json(
        { error: "管理者権限が必要です。" },
        { status: 403 }
      );
    }

    const data = await req.json();
    const space = await prisma.space.create({
      data,
    });

    return NextResponse.json(space, { status: 201 });
  } catch (error) {
    console.error("Failed to create space:", error);
    return NextResponse.json(
      { error: "スペースの作成に失敗しました。" },
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

    const { id, ...data } = await req.json();
    const space = await prisma.space.update({
      where: { id },
      data,
    });

    return NextResponse.json(space);
  } catch (error) {
    console.error("Failed to update space:", error);
    return NextResponse.json(
      { error: "スペースの更新に失敗しました。" },
      { status: 500 }
    );
  }
}