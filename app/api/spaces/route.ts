import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const spaces = await prisma.space.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return NextResponse.json(spaces);
  } catch (error) {
    console.error("Failed to fetch spaces:", error);
    return NextResponse.json(
      { error: "スペース情報の取得に失敗しました。" },
      { status: 500 }
    );
  }
}