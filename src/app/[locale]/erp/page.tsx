import type { TranslationFunction } from "@/types/translations";
import { getTranslations } from "@/utils/translations";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { FeatureGrid } from "./feature-grid";
import { HighlightedQuoteTransparent } from "./highlighted-quote-transparent";
import { SoftwareFeatures } from "./software-features";

export default async function ERPPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = await getTranslations("hero");
  const tErp = await getTranslations("erpSection");

  return (
    <>
      <Hero t={t} />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="mb-12 text-4xl font-bold text-primary">
            {tErp("title")}
          </h1>
          <p className="max-w-prose text-lg text-muted-foreground">
            {tErp("description")}
          </p>
        </div>
        <SoftwareFeatures />
        <HighlightedQuoteTransparent />
        <FeatureGrid />
      </div>
    </>
  );
}

function Hero({ t }: { t: TranslationFunction }) {
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
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {t("description")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Image src="/isa-erp.webp" alt="ISA ERP" width={150} height={150} />
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
