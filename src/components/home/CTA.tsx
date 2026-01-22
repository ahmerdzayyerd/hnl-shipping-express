import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-padding bg-hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Get started today and experience the reliability and speed of HNL Shipping Management. Your packages deserve the best.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-hero flex items-center gap-2">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+18005551234"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold px-6 py-4 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +1 (800) 555-1234
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
