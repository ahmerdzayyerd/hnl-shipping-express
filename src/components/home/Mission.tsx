import { CheckCircle2 } from 'lucide-react';

const Mission = () => {
  const highlights = [
    'Over 15 years of logistics expertise',
    'Serving 200+ countries worldwide',
    'State-of-the-art tracking technology',
    'Dedicated customer success teams',
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              About Our Mission
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Delivering Excellence,{' '}
              <span className="gradient-text">Every Single Time</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              At HNL Shipping Management, we're committed to providing world-class logistics solutions that connect businesses and people across the globe. Our mission is simple: deliver your packages safely, on time, and with complete transparency.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With our cutting-edge technology and dedicated team, we ensure that every shipment is handled with the utmost care and precision. From small parcels to large freight, we've got you covered.
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              
              {/* Stats Cards */}
              <div className="relative z-10 h-full flex flex-col justify-center space-y-6">
                <div className="bg-card rounded-2xl p-6 shadow-elevated">
                  <p className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">1M+</p>
                  <p className="text-muted-foreground">Packages Delivered</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-elevated ml-8">
                  <p className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">99.8%</p>
                  <p className="text-muted-foreground">On-Time Delivery Rate</p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-elevated ml-4">
                  <p className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">10K+</p>
                  <p className="text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
