import { NextResponse } from "next/server";
import { getAllRepoData } from "@/lib/github";

export async function POST(request: Request) {
  try {
    const { repos } = await request.json();

    if (!Array.isArray(repos)) {
      return NextResponse.json(
        { error: "Invalid repos array" },
        { status: 400 }
      );
    }

    const repoData = await getAllRepoData(repos);

    // Convert Map to Object for JSON serialization
    const repoDataObj: Record<string, any> = {};
    repoData.forEach((value, key) => {
      repoDataObj[key] = value;
    });

    return NextResponse.json({ data: repoDataObj });
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub data" },
      { status: 500 }
    );
  }
}

