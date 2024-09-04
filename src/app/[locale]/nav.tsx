"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LangSwitcher } from "./lang-switcher";

export function Nav() {
  const t = useTranslations();

  return (
    <div className="sticky top-0 isolate z-50 flex items-center justify-between bg-white/20 p-10 backdrop-blur-md dark:bg-gray-900/20 lg:justify-center lg:gap-44">
      <div className="font-bold">Coming Soon</div>
      {/* desktop menu */}
      <div className="hidden items-center gap-44 lg:flex">
        <Links />
        <LangSwitcher />
      </div>
      {/* mobile menu */}
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-8 w-8" />
          </SheetTrigger>
          <SheetContent>
            <div className="mt-8 space-y-10">
              <Links />
              <LangSwitcher />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

function Links() {
  const t = useTranslations();
  return (
    <nav className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Button asChild variant={"outline"}>
        <Link href="/">{t("Home")}</Link>
      </Button>
      <Button asChild variant={"outline"}>
        <Link href="#">{t("ISA-ERP")}</Link>
      </Button>
      <Button asChild variant={"outline"}>
        <Link href="#">{t("Contact")}</Link>
      </Button>
    </nav>
  );
}
