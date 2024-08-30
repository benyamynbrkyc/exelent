import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Nav() {
  return (
    <div className="sticky top-0 isolate z-50 flex items-center justify-between p-10 lg:justify-center lg:gap-44 bg-white/20 dark:bg-gray-900/20 backdrop-blur-md">
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
  return (
    <nav className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Button asChild variant={"outline"}>
        <Link href={"#"}>Home</Link>
      </Button>
      <Button asChild variant={"outline"}>
        <Link href={"#"}>ISA-ERP</Link>
      </Button>
      <Button asChild variant={"outline"}>
        <Link href={"#"}>Contact</Link>
      </Button>
    </nav>
  );
}

{
  /* todo: lang switcher */
}
function LangSwitcher() {
  return (
    <div className="text-foreground">
      ENG | <span className="text-muted-foreground">BOS</span>
    </div>
  );
}
