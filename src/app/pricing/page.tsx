import ComparePlans from "@/components/pricing/ComparePlans";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingHero from "@/components/pricing/PricingHero";
import Testimonials from "@/components/pricing/Testimonials";
import React from "react";

const Page = () => {
  return (
    <>
      <PricingHero />
      <ComparePlans />
      <Testimonials />
      <PricingFAQ />
    </>
  );
};

export default Page;
