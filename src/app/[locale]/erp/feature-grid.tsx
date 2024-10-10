import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTranslations } from "next-intl/server";
import {
  LucideIcon,
  InfinityIcon,
  UserCheck,
  Database,
  Lock,
  RefreshCw,
  UserCog,
  Wifi,
  File,
  Smartphone,
  Network,
  Receipt,
  BookOpen,
} from "lucide-react";

const featureIcons: { [key: string]: LucideIcon } = {
  InfinityIcon,
  UserCheck,
  Database,
  Lock,
  RefreshCw,
  UserCog,
  Wifi,
  File,
  Smartphone,
  Network,
  Receipt,
  BookOpen,
};

export async function FeatureGrid() {
  const t = await getTranslations("generalFeatures");

  const features = t.raw("items") as Array<{
    title: string;
    description: string;
    icon: string;
  }>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mb-6 text-center text-3xl font-bold">{t("title")}</h2>
      <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const IconComponent = featureIcons[feature.icon] || InfinityIcon;
          return (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
