import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function HighlightedQuoteTransparent() {
  const t = await getTranslations("highlightedQuote");

  return (
    <div className="px-4 py-8">
      <Card className="mx-auto my-8 max-w-3xl border-2 border-primary bg-transparent shadow-md">
        <CardContent className="p-6">
          <Quote className="mb-4 h-12 w-12 text-primary opacity-50" />
          <blockquote className="mb-4 text-lg font-medium leading-relaxed text-foreground">
            {t("content")}
          </blockquote>
          <footer className="text-right text-sm text-muted-foreground">
            - {t("author")}
          </footer>
        </CardContent>
      </Card>
    </div>
  );
}
