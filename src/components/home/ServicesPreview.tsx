import { Link } from 'react-router-dom';
import { Truck, Plane, Warehouse, Settings, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Express Courier Services',
    description: 'Fast, reliable delivery for time-sensitive shipments with guaranteed delivery windows.',
    color: 'from-secondary to-ocean-light',
  },
  {
    icon: Truck,
    title: 'Freight & Trucking Solutions',
    description: 'Comprehensive ground transportation for all cargo sizes, from small packages to full loads.',
    color: 'from-accent to-teal',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Distribution',
    description: 'Secure storage facilities with inventory management and efficient distribution networks.',
    color: 'from-navy-light to-secondary',
  },
  {
    icon: Settings,
    title: 'Custom Logistics Planning',
    description: 'Tailored logistics solutions designed to meet your unique business requirements.',
    color: 'from-teal to-secondary',
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-main">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Comprehensive shipping and logistics solutions tailored to your business needs.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-secondary font-medium text-sm hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
