import { getTranslations } from "next-intl/server";
import ContactContent from "./ContactContent";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> | { locale: string } }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "id";
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function KontakPage() {
  return <ContactContent />;
}
