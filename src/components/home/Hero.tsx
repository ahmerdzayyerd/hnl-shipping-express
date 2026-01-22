import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Globe, Shield, Clock } from 'lucide-react';

const Hero = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const navigate = useNavigate();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/tracking?number=${encodeURIComponent(trackingNumber)}`);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-secondary/5 to-transparent rounded-full" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container-main relative z-10 pt-24 pb-16">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-up">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-white/90 text-sm font-medium">Trusted by 10,000+ businesses worldwide</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Global Shipping,{' '}
            <span className="bg-gradient-to-r from-accent to-ocean-light bg-clip-text text-transparent">
              On-Time Delivery
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            We deliver fast, secure, and trackable shipping solutions across the world with real-time updates and exceptional support.
          </p>

          {/* Tracking Form */}
          <form onSubmit={handleTrack} className="mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter your tracking number"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary shadow-elevated text-base"
                />
              </div>
              <button type="submit" className="btn-hero flex items-center justify-center gap-2 whitespace-nowrap">
                Track Shipment
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-white font-semibold">200+ Countries</p>
                <p className="text-white/60 text-sm">Global Network</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-white font-semibold">100% Secure</p>
                <p className="text-white/60 text-sm">Insured Shipping</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-white font-semibold">24/7 Support</p>
                <p className="text-white/60 text-sm">Always Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(210 20% 98%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
