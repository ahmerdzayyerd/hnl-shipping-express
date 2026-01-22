import { Globe, MapPin, Headphones } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Worldwide Network',
    description: 'Our extensive global network spans over 200 countries, ensuring your packages reach any destination efficiently.',
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Stay informed with live updates on your shipment\'s journey from pickup to delivery, accessible anytime.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Our expert team is available 24/7 to assist with any questions or concerns about your shipments.',
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="gradient-text">HNL Shipping</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our commitment to reliability, transparency, and exceptional service at every step.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-feature text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-ocean-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
