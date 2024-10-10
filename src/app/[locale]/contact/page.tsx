import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getTranslations } from "@/utils/translations";
import { Mail, MapPin, Phone } from "lucide-react";

export default async function ContactPage() {
  const t = await getTranslations("contactPage");

  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <Card>
            <CardContent className="pt-6">
              <h1 className="mb-8 text-3xl font-bold">{t("title")}</h1>
              <div className="flex flex-col items-start gap-4">
                <Button variant="link" className="text-lg" asChild>
                  <a
                    href={"https://maps.app.goo.gl/M1qDwzKEgkeZLzAy9"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3"
                  >
                    <MapPin className="h-5 w-5" />
                    <span>Viteška bb, Maglaj, BiH</span>
                  </a>
                </Button>
                <Button variant="link" className="text-lg" asChild>
                  <a
                    href="tel:+38761-637-475"
                    className="flex items-center space-x-3"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+387 61 637 475</span>
                  </a>
                </Button>
                <Button variant="link" className="text-lg" asChild>
                  <a
                    href="mailto:exelent@bih.net.ba"
                    className="flex items-center space-x-3"
                  >
                    <Mail className="h-5 w-5" />
                    <span>exelent@bih.net.ba</span>
                  </a>
                </Button>
                <Button variant="link" className="text-lg" asChild>
                  <a
                    href="mailto:exelent.maglaj@gmail.com"
                    className="flex items-center space-x-3"
                  >
                    <Mail className="h-5 w-5" />
                    <span>exelent.maglaj@gmail.com</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full lg:w-1/2">
          <GoogleMapIframeLazyComponent />
        </div>
      </div>
    </div>
  );
}

const GoogleMapIframeLazyComponent = () => {
  return (
    <div className="relative h-96 lg:h-full lg:flex-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d177.710715372957!2d18.096883000000002!3d44.548501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x277797c4f142c0b6!2sEXElent%20Maglaj!5e0!3m2!1sen!2sba!4v1595879378539!5m2!1sen!2sba"
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
