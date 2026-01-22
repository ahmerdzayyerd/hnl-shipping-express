import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Mission from '@/components/home/Mission';
import ServicesPreview from '@/components/home/ServicesPreview';
import CTA from '@/components/home/CTA';

const Index = () => {
  useEffect(() => {
    document.title = 'HNL Shipping Management | Global Shipping & Logistics';
  }, []);

  return (
    <main>
      <Hero />
      <Features />
      <Mission />
      <ServicesPreview />
      <CTA />
    </main>
  );
};

export default Index;
