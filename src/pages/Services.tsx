import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plane, Truck, Warehouse, Settings, Ship, Package, ArrowRight, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Express Courier Services',
    description: 'When time is critical, our express courier services deliver. We offer same-day, next-day, and scheduled deliveries with real-time tracking and proof of delivery.',
    features: ['Same-day delivery options', 'Priority handling', 'Signature confirmation', 'Temperature-controlled transport'],
    color: 'from-secondary to-ocean-light',
  },
  {
    icon: Truck,
    title: 'Freight & Trucking Solutions',
    description: 'Our comprehensive ground transportation solutions cover everything from small parcels to full truckloads. We optimize routes for efficiency and reliability.',
    features: ['LTL and FTL options', 'Cross-docking services', 'Route optimization', 'GPS-enabled fleet'],
    color: 'from-accent to-teal',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Distribution',
    description: 'State-of-the-art warehousing facilities with advanced inventory management systems. We handle storage, picking, packing, and distribution seamlessly.',
    features: ['Climate-controlled storage', 'Inventory management', 'Order fulfillment', 'Returns processing'],
    color: 'from-navy-light to-secondary',
  },
  {
    icon: Settings,
    title: 'Custom Logistics Planning',
    description: 'Every business is unique. Our logistics experts design tailored solutions that optimize your supply chain, reduce costs, and improve delivery times.',
    features: ['Supply chain analysis', 'Custom routing', 'Cost optimization', 'Dedicated account management'],
    color: 'from-teal to-secondary',
  },
  {
    icon: Ship,
    title: 'International Shipping',
    description: 'Navigate global logistics with confidence. We handle customs, documentation, and international regulations so your shipments arrive smoothly.',
    features: ['Customs clearance', 'Documentation handling', 'Multi-modal transport', 'Duty and tax management'],
    color: 'from-secondary to-accent',
  },
  {
    icon: Package,
    title: 'E-Commerce Fulfillment',
    description: 'Specialized fulfillment services for online retailers. From storage to last-mile delivery, we help you scale your e-commerce operations.',
    features: ['Multi-channel integration', 'Fast processing times', 'Branded packaging', 'Returns management'],
    color: 'from-ocean-light to-teal',
  },
];

const Services = () => {
  useEffect(() => {
    document.title = 'Our Services | HNL Shipping Management';
  }, []);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              What We Offer
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Logistics{' '}
              <span className="bg-gradient-to-r from-accent to-ocean-light bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              From express deliveries to complex supply chain management, we provide end-to-end logistics services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`card-service overflow-hidden ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-card`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-main text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our logistics experts are ready to design a tailored solution for your unique requirements.
          </p>
          <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
            Contact Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;
