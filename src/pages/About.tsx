import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Users, Shield, Clock, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

const values = [
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Operating in over 200 countries with a network of reliable partners worldwide.',
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Every package is insured and handled with the highest security standards.',
  },
  {
    icon: Clock,
    title: '24/7 Operations',
    description: 'Round-the-clock operations and customer support, always here when you need us.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to excellence in every delivery, every time.',
  },
];

const milestones = [
  { year: '2009', title: 'Founded', description: 'HNL Shipping Management was established in Los Angeles.' },
  { year: '2012', title: 'National Expansion', description: 'Expanded operations to cover all 50 US states.' },
  { year: '2015', title: 'Going Global', description: 'Launched international shipping services to 50+ countries.' },
  { year: '2018', title: 'Tech Innovation', description: 'Introduced real-time tracking and mobile app.' },
  { year: '2022', title: '200+ Countries', description: 'Expanded network to over 200 countries worldwide.' },
  { year: '2024', title: '1M+ Deliveries', description: 'Celebrated our one millionth successful delivery.' },
];

const About = () => {
  useEffect(() => {
    document.title = 'About Us | HNL Shipping Management';
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
              About HNL Shipping
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Trusted Partner in{' '}
              <span className="bg-gradient-to-r from-accent to-ocean-light bg-clip-text text-transparent">
                Global Logistics
              </span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              For over 15 years, we've been connecting businesses and people through reliable, efficient shipping solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built on Trust, Driven by Innovation
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                HNL Shipping Management was founded with a simple mission: to make global shipping accessible, reliable, and transparent for everyone. What started as a small courier service in Los Angeles has grown into a worldwide logistics network.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Today, we serve thousands of businesses and individuals across more than 200 countries. Our commitment to customer satisfaction, combined with cutting-edge technology, has made us a leader in the logistics industry.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                <div>
                  <p className="text-3xl font-display font-bold gradient-text">15+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold gradient-text">200+</p>
                  <p className="text-sm text-muted-foreground">Countries Served</p>
                </div>
                <div>
                  <p className="text-3xl font-display font-bold gradient-text">10K+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-32 h-32 text-secondary/30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-elevated">
                <p className="text-4xl font-display font-bold gradient-text">99.8%</p>
                <p className="text-muted-foreground text-sm">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at HNL Shipping Management.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="card-feature text-center">
                <div className="w-14 h-14 bg-ocean-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our path to becoming a global logistics leader.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-ocean-gradient rounded-full flex items-center justify-center text-white font-bold text-sm shadow-card">
                      {milestone.year.slice(2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-secondary font-semibold">{milestone.year}</span>
                      <span className="text-muted-foreground">•</span>
                      <h3 className="font-semibold text-foreground">{milestone.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-main text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Behind every successful delivery is our dedicated team of logistics professionals, customer support specialists, and operations experts.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Operations', 'Customer Support', 'Logistics', 'Technology'].map((dept) => (
              <div key={dept} className="bg-card rounded-xl p-6 shadow-soft">
                <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="font-semibold text-foreground">{dept}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers who trust HNL Shipping for their logistics needs.
          </p>
          <Link to="/contact" className="btn-hero inline-flex items-center gap-2">
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
