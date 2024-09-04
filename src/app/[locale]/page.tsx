import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, PenTool, Database } from "lucide-react";
import Image from "next/image";

export default async function HomePage() {
  const t = await getTranslations("hero");
  const st = await getTranslations("services");
  const pt = await getTranslations("portfolio");

  return (
    <>
      <Hero t={t} />
      <ServiceCards t={st} />
      <PortfolioShowcase t={pt} />
    </>
  );
}

function Hero({ t }: { t: any }) {
  return (
    <div className="relative isolate px-6 pt-10 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-20 sm:py-32 lg:py-40">
        <div className="text-center">
          <Badge
            variant="secondary"
            className="mb-4 transition-colors hover:bg-secondary/80"
          >
            <Link
              href="/erp-solution"
              className="inline-flex items-center text-sm font-semibold"
            >
              {t("discoverErp")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("description")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg" className="px-8 py-3 text-lg">
              <Link href="/contact">{t("contactUs")}</Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

const services = [
  {
    titleKey: "crossPlatform.title",
    descriptionKey: "crossPlatform.description",
    icon: <Globe className="h-8 w-8 text-primary" />,
  },
  {
    titleKey: "enterpriseSolutions.title",
    descriptionKey: "enterpriseSolutions.description",
    icon: <Database className="h-8 w-8 text-primary" />,
  },
  {
    titleKey: "customDevelopment.title",
    descriptionKey: "customDevelopment.description",
    icon: <PenTool className="h-8 w-8 text-primary" />,
  },
];

function ServiceCards({ t }: { t: any }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
        {t("sectionSubtitle")}
      </h2>
      <h1 className="mb-12 text-center text-4xl font-bold text-primary">
        {t("sectionTitle")}
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="bg-card text-card-foreground transition-shadow hover:shadow-lg"
          >
            <CardHeader className="flex flex-col items-center">
              {service.icon}
              <CardTitle className="mt-4 px-4 text-center text-xl font-semibold">
                <span className="line-clamp-3">{t(service.titleKey)}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                {t(service.descriptionKey)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PortfolioShowcase({ t }: { t: any }) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="mb-2 text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
        {t("subtitle")}
      </h2>
      <h1 className="mb-12 text-center text-4xl font-bold text-primary md:text-5xl">
        {t("title")}
      </h1>

      <Card className="overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center bg-muted p-6 md:w-1/2 md:p-12">
            <Image
              src="/ISA-ERP.png"
              alt="ISA-ERP Logo"
              width={200}
              height={200}
              className="h-auto max-w-full"
            />
          </div>
          <CardContent className="flex flex-col justify-center p-6 md:w-1/2 md:p-12">
            <h3 className="mb-4 text-lg font-semibold uppercase text-muted-foreground">
              {t("item.subtitle")}
            </h3>
            <h2 className="mb-4 text-3xl font-bold">{t("item.title")}</h2>
            <p className="mb-6 text-muted-foreground">
              {t("item.description")}
              <span className="font-semibold text-foreground">
                {" "}
                {t("item.highlight")}
              </span>
            </p>
            <Button className="self-start">{t("item.cta")}</Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
