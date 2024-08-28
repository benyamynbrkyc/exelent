import { Button } from "@/components/ui/button";
import { Images } from "lucide-react";
import Link from "next/link";

export function Nav() {
  return (
    <div className="sticky top-0 isolate z-50 flex items-center justify-center gap-44 p-10">
      <Images className="h-8 w-8" size={24} />
      <div className="flex items-center gap-44">
        <nav className="flex items-center gap-4">
          <Button asChild variant={"outline"}>
            <Link href={"/"}>Home</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href={"/contact"}>Contact</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href={"/about"}>About</Link>
          </Button>
        </nav>
        {/* todo: lang switcher */}
        <div>ENG | BOS</div>
      </div>
    </div>
  );
}
