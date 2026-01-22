import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Package, Truck, CheckCircle2, MapPin, Clock, AlertCircle } from 'lucide-react';

interface TrackingEvent {
  status: string;
  location: string;
  timestamp: string;
  description: string;
}

interface TrackingResult {
  trackingNumber: string;
  status: 'in-transit' | 'delivered' | 'pending' | 'exception';
  estimatedDelivery: string;
  origin: string;
  destination: string;
  events: TrackingEvent[];
}

// Mock tracking data
const mockTrackingData: Record<string, TrackingResult> = {
  'HNL123456789': {
    trackingNumber: 'HNL123456789',
    status: 'in-transit',
    estimatedDelivery: 'January 24, 2026',
    origin: 'Los Angeles, CA',
    destination: 'New York, NY',
    events: [
      { status: 'In Transit', location: 'Denver, CO', timestamp: 'Jan 22, 2026 - 2:30 PM', description: 'Package in transit to next facility' },
      { status: 'Departed Facility', location: 'Phoenix, AZ', timestamp: 'Jan 21, 2026 - 11:45 AM', description: 'Package departed from sorting facility' },
      { status: 'Arrived at Facility', location: 'Phoenix, AZ', timestamp: 'Jan 21, 2026 - 6:20 AM', description: 'Package arrived at sorting facility' },
      { status: 'Picked Up', location: 'Los Angeles, CA', timestamp: 'Jan 20, 2026 - 3:15 PM', description: 'Package picked up from sender' },
    ],
  },
  'HNL987654321': {
    trackingNumber: 'HNL987654321',
    status: 'delivered',
    estimatedDelivery: 'January 20, 2026',
    origin: 'Seattle, WA',
    destination: 'Chicago, IL',
    events: [
      { status: 'Delivered', location: 'Chicago, IL', timestamp: 'Jan 20, 2026 - 10:45 AM', description: 'Package delivered to recipient' },
      { status: 'Out for Delivery', location: 'Chicago, IL', timestamp: 'Jan 20, 2026 - 7:30 AM', description: 'Package out for delivery' },
      { status: 'Arrived at Facility', location: 'Chicago, IL', timestamp: 'Jan 19, 2026 - 11:00 PM', description: 'Package arrived at local facility' },
      { status: 'In Transit', location: 'Minneapolis, MN', timestamp: 'Jan 18, 2026 - 4:15 PM', description: 'Package in transit' },
    ],
  },
};

const Tracking = () => {
  const [searchParams] = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState(searchParams.get('number') || '');
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    document.title = 'Track Your Shipment | HNL Shipping Management';
    
    // Auto-search if tracking number is in URL
    const urlNumber = searchParams.get('number');
    if (urlNumber) {
      handleSearch(urlNumber);
    }
  }, []);

  const handleSearch = async (number?: string) => {
    const searchNumber = number || trackingNumber;
    if (!searchNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setIsSearching(true);
    setError('');
    setResult(null);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const data = mockTrackingData[searchNumber.toUpperCase()];
    if (data) {
      setResult(data);
    } else {
      setError('No shipment found with this tracking number. Try HNL123456789 or HNL987654321 for demo.');
    }

    setIsSearching(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in-transit':
        return <Truck className="w-6 h-6 text-secondary" />;
      case 'delivered':
        return <CheckCircle2 className="w-6 h-6 text-accent" />;
      case 'exception':
        return <AlertCircle className="w-6 h-6 text-destructive" />;
      default:
        return <Package className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-transit':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'delivered':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'exception':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-hero-gradient py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Track Your Shipment
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Enter your tracking number to get real-time updates on your package location.
            </p>

            {/* Search Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
              className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
            >
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  placeholder="Enter tracking number (e.g., HNL123456789)"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary shadow-elevated"
                />
              </div>
              <button
                type="submit"
                disabled={isSearching}
                className="btn-hero disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? 'Searching...' : 'Track'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-background">
        <div className="container-main max-w-4xl">
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 text-center">
              <AlertCircle className="w-10 h-10 text-destructive mx-auto mb-3" />
              <p className="text-destructive font-medium">{error}</p>
            </div>
          )}

          {result && (
            <div className="space-y-8 animate-fade-up">
              {/* Status Card */}
              <div className="card-service">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(result.status)}
                    <div>
                      <p className="text-sm text-muted-foreground">Tracking Number</p>
                      <p className="font-display font-bold text-xl text-foreground">{result.trackingNumber}</p>
                    </div>
                  </div>
                  <span className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold border ${getStatusColor(result.status)} self-start md:ml-auto`}>
                    {result.status === 'in-transit' ? 'In Transit' : result.status.charAt(0).toUpperCase() + result.status.slice(1)}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Origin</p>
                      <p className="font-medium text-foreground">{result.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Destination</p>
                      <p className="font-medium text-foreground">{result.destination}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                      <p className="font-medium text-foreground">{result.estimatedDelivery}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-muted rounded-2xl h-64 flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">Interactive tracking map</p>
                  <p className="text-sm text-muted-foreground/70">Coming soon</p>
                </div>
              </div>

              {/* Timeline */}
              <div className="card-service">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">Shipment History</h3>
                <div className="space-y-6">
                  {result.events.map((event, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className={`w-4 h-4 rounded-full ${index === 0 ? 'bg-secondary' : 'bg-border'}`} />
                        {index < result.events.length - 1 && (
                          <div className="w-0.5 h-full bg-border absolute top-4" />
                        )}
                      </div>
                      <div className="flex-1 pb-6">
                        <p className="font-semibold text-foreground">{event.status}</p>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {event.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {event.timestamp}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {!result && !error && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Ready to Track
              </h3>
              <p className="text-muted-foreground">
                Enter your tracking number above to see your shipment status.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Tracking;
