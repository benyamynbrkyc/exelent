"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@/i18n/routing";
import { Menu } from "lucide-react";
import { LangSwitcher } from "./lang-switcher";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function MobileMenu() {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <Menu className="h-8 w-8" />
      </SheetTrigger>
      <SheetContent>
        <div className="mt-8 space-y-10">
          <nav className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <Button
              asChild
              variant={"outline"}
              onClick={() => setIsOpen(false)}
            >
              <Link href="/">{t("home")}</Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              onClick={() => setIsOpen(false)}
            >
              <Link href="/erp">{t("isaErp")}</Link>
            </Button>
            <Button
              asChild
              variant={"outline"}
              onClick={() => setIsOpen(false)}
            >
              <Link href="/contact">{t("contact")}</Link>
            </Button>
            <LangSwitcher />
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
