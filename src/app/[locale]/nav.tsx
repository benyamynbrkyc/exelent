import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { LangSwitcher } from "./lang-switcher";
import { type TranslationFunction } from "@/types/translations";

export async function Nav() {
  const t = await getTranslations();

  return (
    <div className="sticky top-0 isolate z-50 flex items-center justify-between bg-white/20 p-10 backdrop-blur-md dark:bg-gray-900/20 lg:justify-center lg:gap-44">
      <div className="font-bold">Coming Soon</div>
      {/* desktop menu */}
      <div className="hidden items-center gap-44 lg:flex">
        <Links t={t} />
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
              <Links t={t} />
              <LangSwitcher />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

function Links({ t }: { t: TranslationFunction }) {
  return (
    <nav className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Button asChild variant={"outline"}>
        <Link href="/">{t("home")}</Link>
      </Button>
      <Button asChild variant={"outline"}>
        <Link href="#">{t("isaErp")}</Link>
      </Button>
      <Button asChild variant={"outline"}>
        <Link href="#">{t("contact")}</Link>
      </Button>
    </nav>
  );
}
