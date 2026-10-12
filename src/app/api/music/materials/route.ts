import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth/session";
import { db, MusicLicenseType } from "@/lib/db";

/**
 * GET /api/music/materials
 * Requirement MU-04: Licensed materials and intellectual property repertoire management.
 * Filter by instrument, license type, or search term.
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const instrument = searchParams.get("instrument") || undefined;
    const licenseType = (searchParams.get("licenseType") as MusicLicenseType) || undefined;
    const search = searchParams.get("search") || undefined;

    const materials = await db.listMusicLicensedMaterials({
      instrument,
      licenseType,
      search,
    });

    return NextResponse.json({
      success: true,
      count: materials.length,
      materials,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to retrieve licensed music repertoire" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/music/materials
 * Requirements MU-04, MU-05:
 * Extensible music curriculum and repertoire authoring.
 * Registers new licensed score or instructional music piece.
 */
export async function POST(request: Request) {
  try {
    const session = await getSession();
    // In demo environment, allow authenticated or demo tutor/content manager
    const body = await request.json();

    const {
      title,
      composer,
      instrument,
      licenseType,
      licenseNumber,
      publisher,
      copyrightNotice,
      scorePdfUrl,
      audioSampleUrl,
      gradeLevel,
    } = body;

    if (!title || !composer || !instrument || !licenseType || !licenseNumber || !publisher || !copyrightNotice) {
      return NextResponse.json(
        { error: "Missing required license and repertoire metadata fields." },
        { status: 400 }
      );
    }

    const validLicenseTypes: MusicLicenseType[] = [
      "ABRSM_LICENSED",
      "MUSON_CURRICULUM",
      "PUBLIC_DOMAIN",
      "TRAINBOW_ORIGINAL",
      "COPYRIGHT_COMMISSIONED",
    ];

    if (!validLicenseTypes.includes(licenseType)) {
      return NextResponse.json(
        { error: `Invalid license type. Must be one of: ${validLicenseTypes.join(", ")}` },
        { status: 400 }
      );
    }

    const created = await db.createMusicLicensedMaterial({
      title: title.trim(),
      composer: composer.trim(),
      instrument: instrument.trim(),
      licenseType,
      licenseNumber: licenseNumber.trim(),
      publisher: publisher.trim(),
      copyrightNotice: copyrightNotice.trim(),
      scorePdfUrl: scorePdfUrl || "/scores/default-score.pdf",
      audioSampleUrl: audioSampleUrl || undefined,
      gradeLevel: gradeLevel || "All Grades",
      isLicensed: true,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Licensed repertoire material registered successfully.",
        material: created,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Failed to create music repertoire material" },
      { status: 500 }
    );
  }
}
