import ContactCard from "@/components/contact/contact-card";
import Footer from "@/components/home/footer/footer";
import { useTranslations } from "next-intl";
import React from "react";

export default function Page() {
  const t = useTranslations();
  const items = t.raw("ContactPage");
  return (
    <>
      <ContactCard
        white={items.white}
        green={items.green}
        label={items.label}
        name={items.name}
        email={items.email}
        subject={items.subject}
        message={items.message}
        button={items.button}
        response={items.response}
      />
      <Footer />
    </>
  );
}
