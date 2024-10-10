import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { LangSwitcher } from "./lang-switcher";
import { MobileMenu } from "./mobile-menu";
import Image from "next/image";

export async function Nav() {
  const t = await getTranslations();

  return (
    <div className="sticky top-0 isolate z-50 flex items-center justify-between bg-white/20 px-10 py-6 backdrop-blur-md dark:bg-gray-900/20 lg:justify-center lg:gap-44">
      <Link href="/">
        <Image
          src="/exelent-maglaj-logo-small.png"
          alt="EXElent Maglaj Logo"
          width={100}
          height={100}
        />
      </Link>
      {/* desktop menu */}
      <div className="hidden items-center gap-44 lg:flex">
        <nav className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <Button asChild variant={"outline"}>
            <Link href="/">{t("home")}</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href="/erp">{t("isaErp")}</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href="/contact">{t("contact")}</Link>
          </Button>
        </nav>
        <LangSwitcher />
      </div>
      {/* mobile menu */}
      <div className="block lg:hidden">
        <MobileMenu />
      </div>
    </div>
  );
}
