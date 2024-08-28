import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Images, Menu } from "lucide-react";
import Link from "next/link";

export function Nav() {
  return (
    <div className="sticky top-0 isolate z-50 flex items-center justify-between p-10 lg:justify-center lg:gap-44">
      <div className="font-bold">Coming Soon</div>
      {/* desktop menu */}
      <div className="hidden items-center gap-44 lg:flex">
        <nav className="flex items-center gap-4">
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
        {/* todo: lang switcher */}
        <div className="text-foreground">
          ENG | <span className="text-muted-foreground">BOS</span>
        </div>
      </div>
      {/* mobile menu */}
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-8 w-8" />
          </SheetTrigger>
          <SheetContent>hello</SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
