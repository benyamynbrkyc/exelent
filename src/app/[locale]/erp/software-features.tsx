import { Badge } from "@/components/ui/badge";
import { getMessages, getTranslations } from "next-intl/server";

export async function SoftwareFeatures() {
  const t = await getTranslations("softwareFeatures");
  const messages = await getMessages();
  const modules = Object.keys(
    (messages.softwareFeatures as { modules: Record<string, unknown> })
      ?.modules ?? {},
  );

  return (
    <div className="flex items-center justify-center p-6">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
          {t("title")}
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {modules.map((key) => (
            <Badge
              key={key}
              variant="secondary"
              className="flex h-auto w-fit cursor-pointer items-center justify-start px-4 py-2 text-base transition-colors hover:bg-secondary/80"
            >
              <span>{t(`modules.${key}`)}</span>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
