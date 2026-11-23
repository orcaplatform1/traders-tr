import { Hero } from "@/components/hero";
import { CompanyStatement } from "@/components/company-statement";
import { BrandGrid } from "@/components/brand-grid";
import { BrandsStatement } from "@/components/brands-statement";
import { WhatWeDo } from "@/components/what-we-do";
import { NumbersSection } from "@/components/numbers-section";
import { ApproachSection } from "@/components/approach-section";
import { InsightsSection } from "@/components/insights-section";
import { PartnershipSection } from "@/components/partnership-section";
import { AboutSection } from "@/components/about-section";
import { CareersSection } from "@/components/careers-section";
import { ContactSection } from "@/components/contact-section";
import { VentureRail } from "@/components/venture-rail";

export default function Home() {
  return (
    <>
      <VentureRail />
      <div className="relative">
        <Hero imageSrc="/prizoma-hero-desktop.webp" imageSrcMobile="/prizoma-hero-mobile.webp" />
        <CompanyStatement />
        <BrandGrid />
      </div>
      <BrandsStatement />
      <WhatWeDo />
      <NumbersSection />
      <ApproachSection />
      <InsightsSection />
      <PartnershipSection />
      <AboutSection />
      <CareersSection />
      <ContactSection />
    </>
  );
}
