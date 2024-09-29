"use client";

import { Button } from "@/components/ui/button";
import { Phone, Mail, Instagram, ExternalLinkIcon } from "lucide-react";
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const footerBlacklist = ["/contact"]; // Add paths where footer shouldn't appear

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const t = useTranslations("footer");

  if (footerBlacklist.includes(pathname)) {
    return null;
  }

  return (
    <footer className="mx-auto max-w-lg py-8">
      <h1 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
        {t("title")}
      </h1>
      <div className="container mx-auto space-y-8 px-4">
        <div className="space-y-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href="tel:+38761637475">
              <Phone className="mr-2 h-4 w-4" />
              <span className="w-full text-center">{t("phone")}</span>
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href="mailto:exelent@bih.net.ba">
              <Mail className="mr-2 h-4 w-4" />
              <span className="w-full text-center">{t("email1")}</span>
            </a>
          </Button>
          <Button variant="outline" className="w-full justify-start" asChild>
            <a href="mailto:exelent.maglaj@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              <span className="w-full text-center">{t("email2")}</span>
            </a>
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center">
            {currentYear} | Development by{" "}
            <Link
              href="https://benjaminbrkic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center text-pink-500 hover:text-pink-600"
            >
              <ExternalLinkIcon className="mr-1 h-4 w-4" />
              benjaminbrkic.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
