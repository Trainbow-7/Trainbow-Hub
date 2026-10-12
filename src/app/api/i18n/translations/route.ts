import { NextResponse } from "next/server";
import { getDictionary, SUPPORTED_LOCALES, LocaleCode } from "@/lib/i18n";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const locale = (searchParams.get("locale") || "en") as LocaleCode;

    const dictionary = getDictionary(locale);

    return NextResponse.json({
      locale,
      supportedLocales: SUPPORTED_LOCALES,
      dictionary,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Failed to fetch translations" },
      { status: 500 }
    );
  }
}
