"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function LangSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="text-foreground">
      <Link
        href={pathname}
        locale="en"
        className={locale === "en" ? "font-bold" : ""}
      >
        {t("english")}
      </Link>
      {" | "}
      <Link
        href={pathname}
        locale="bs"
        className={locale === "bs" ? "font-bold" : ""}
      >
        {t("bosnian")}
      </Link>
    </div>
  );
}