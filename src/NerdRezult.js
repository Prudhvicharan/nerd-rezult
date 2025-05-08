import React from "react";
import { Layout } from "./components/layout";
import {
  HeroSection,
  KeyFeatures,
  HowItWorks,
  ComparisonTable,
  IndustriesGrid,
  PricingPlans,
  Testimonials,
  CTASection,
} from "./components/sections";

function NerdRezult() {
  return (
    <Layout>
      <HeroSection />
      <KeyFeatures />
      <HowItWorks />
      <ComparisonTable />
      <IndustriesGrid />
      <PricingPlans />
      <Testimonials />
      <CTASection />
      {/* More sections will be added here */}
    </Layout>
  );
}
export default NerdRezult;
