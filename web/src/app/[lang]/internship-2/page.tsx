import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternshipPage from "@/components/InternshipPage";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { internshipProps } from "@/lib/internship";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/internship-2">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return { title: internshipProps(lang, dict, "internship-2").title };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/internship-2">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return <InternshipPage {...internshipProps(lang, dict, "internship-2").props} />;
}
