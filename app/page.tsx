import { Hero } from "@/components/hero";
import { CompanyStatement } from "@/components/company-statement";
import { BrandGrid } from "@/components/brand-grid";
import { BrandsStatement } from "@/components/brands-statement";
import { WhatWeDo } from "@/components/what-we-do";
import { VenturesSection } from "@/components/ventures-section";
import { NumbersSection } from "@/components/numbers-section";
import { ApproachSection } from "@/components/approach-section";
import { InsightsSection } from "@/components/insights-section";
import { NewsroomSection } from "@/components/newsroom-section";
import { PartnershipSection } from "@/components/partnership-section";
import { AboutSection } from "@/components/about-section";
import { CareersSection } from "@/components/careers-section";
import { ContactSection } from "@/components/contact-section";
import { IdeaSphere } from "@/components/idea-sphere";
import { VentureRail } from "@/components/venture-rail";
import { brands } from "@/lib/content/brands";

const BRAND_IDS = [...brands].sort((a, b) => a.displayOrder - b.displayOrder).map((b) => b.id);

export default function Home() {
  return (
    <>
      <VentureRail />
      <div className="relative">
        <Hero imageSrc="/hero.webp" imageSrcMobile="/hero-mobile.webp" />
        <CompanyStatement />
        <BrandGrid />
        <IdeaSphere brandIds={BRAND_IDS} />
      </div>
      <BrandsStatement />
      <WhatWeDo />
      <VenturesSection />
      <NumbersSection />
      <ApproachSection />
      <InsightsSection />
      <NewsroomSection />
      <PartnershipSection />
      <AboutSection />
      <CareersSection />
      <ContactSection />
    </>
  );
}
