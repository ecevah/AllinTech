import ProjectItem from "@/components/products/project-item";
import ProjectItemV2 from "@/components/products/project-item-v2";
import TitleCard from "@/components/products/title-card";
import { useTranslations } from "next-intl";
import React from "react";

export default function Page() {
  const t = useTranslations();
  const items = t.raw("ProductsPage");
  return (
    <>
      <TitleCard
        title={items.title}
        description={items.description}
        slogan={items.slogan}
      />
      {items.products.map((items, index) => (
        <ProjectItemV2
          key={index}
          linkData={items.socialMedia}
          logo={items.logo}
          mockup={items.mockup}
          location={index % 2 === 0 ? true : false}
          title={items.title}
          desc={items.desc}
        />
      ))}
    </>
  );
}
