import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Package, AlertCircle } from 'lucide-react';
import TrackingInput from '@/components/tracking/TrackingInput';
import ShipmentDetailsCard from '@/components/tracking/ShipmentDetailsCard';
import ShipmentTimeline from '@/components/tracking/ShipmentTimeline';
import LiveRouteVisual from '@/components/tracking/LiveRouteVisual';

interface TimelineEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  isCompleted: boolean;
  isCurrent?: boolean;
}

interface TrackingResult {
  trackingNumber: string;
  status: 'in-transit' | 'delivered' | 'pending' | 'exception';
  estimatedDelivery: string;
  lastUpdated: string;
  origin: string;
  destination: string;
  progress: number;
  events: TimelineEvent[];
}

// Mock tracking data
const mockTrackingData: Record<string, TrackingResult> = {
  'HNL11385532': {
    trackingNumber: 'HNL11385532',
    status: 'in-transit',
    estimatedDelivery: 'Nov 13, 2025',
    lastUpdated: '5 hours ago',
    origin: 'Dubai, UAE',
    destination: 'Puerto Rico',
    progress: 68,
    events: [
      { date: 'Nov 12', time: '13:11', location: "Li'Undray Rocks", status: 'In Transit', isCompleted: true, isCurrent: true },
      { date: 'Nov 11', time: '22:31', location: 'Charlotte Amalie', status: 'In Transit', isCompleted: true },
      { date: 'Nov 11', time: '14:53', location: 'British Virgin Islands', status: 'In Transit', isCompleted: true },
      { date: 'Nov 10', time: '04:18', location: 'Las Palmas de Gran Canaria, Spain', status: 'Cleared Customs', isCompleted: true },
      { date: 'Nov 07', time: '11:10', location: 'Dubai, UAE', status: 'In Transit', isCompleted: true },
      { date: 'Nov 07', time: '07:22', location: 'Dubai, UAE', status: 'Picked Up', isCompleted: true },
    ],
  },
  'HNL123456789': {
    trackingNumber: 'HNL123456789',
    status: 'in-transit',
    estimatedDelivery: 'January 24, 2026',
    lastUpdated: '2 hours ago',
    origin: 'Los Angeles, CA',
    destination: 'New York, NY',
    progress: 55,
    events: [
      { date: 'Jan 22', time: '14:30', location: 'Denver, CO', status: 'In Transit', isCompleted: true, isCurrent: true },
      { date: 'Jan 21', time: '11:45', location: 'Phoenix, AZ', status: 'Departed Facility', isCompleted: true },
      { date: 'Jan 21', time: '06:20', location: 'Phoenix, AZ', status: 'Arrived at Facility', isCompleted: true },
      { date: 'Jan 20', time: '15:15', location: 'Los Angeles, CA', status: 'Picked Up', isCompleted: true },
    ],
  },
  'HNL987654321': {
    trackingNumber: 'HNL987654321',
    status: 'delivered',
    estimatedDelivery: 'January 20, 2026',
    lastUpdated: '2 days ago',
    origin: 'Seattle, WA',
    destination: 'Chicago, IL',
    progress: 100,
    events: [
      { date: 'Jan 20', time: '10:45', location: 'Chicago, IL', status: 'Delivered', isCompleted: true, isCurrent: true },
      { date: 'Jan 20', time: '07:30', location: 'Chicago, IL', status: 'Out for Delivery', isCompleted: true },
      { date: 'Jan 19', time: '23:00', location: 'Chicago, IL', status: 'Arrived at Facility', isCompleted: true },
      { date: 'Jan 18', time: '16:15', location: 'Minneapolis, MN', status: 'In Transit', isCompleted: true },
    ],
  },
};

const Tracking = () => {
  const [searchParams] = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState(searchParams.get('number') || '');
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

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
    setShowResults(false);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const data = mockTrackingData[searchNumber.toUpperCase()];
    if (data) {
      setResult(data);
      // Trigger animation after a brief delay
      setTimeout(() => setShowResults(true), 100);
    } else {
      setError('No shipment found with this tracking number.');
      setShowResults(true);
    }

    setIsSearching(false);
  };

  return (
    <main className="pt-20">
      {/* Hero Section with Search */}
      <section className="bg-hero-gradient py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
              Track Your Shipment
            </h1>
            <p className="text-white/80 text-base md:text-lg">
              Enter your tracking number to get real-time updates
            </p>
          </div>

          <TrackingInput
            value={trackingNumber}
            onChange={setTrackingNumber}
            onSubmit={() => handleSearch()}
            isSearching={isSearching}
          />
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 md:py-12 bg-background min-h-[50vh]">
        <div className="container-main px-4">
          {/* Error State */}
          {error && showResults && (
            <div 
              className="max-w-md mx-auto bg-destructive/10 border border-destructive/20 rounded-2xl p-6 text-center animate-fade-in"
            >
              <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-3" />
              <p className="text-destructive font-medium mb-2">{error}</p>
              <p className="text-sm text-muted-foreground">
                
              </p>
            </div>
          )}

          {/* Results */}
          {result && showResults && (
            <div 
              className="animate-fade-in"
              style={{ animationDuration: '0.4s' }}
            >
              {/* Mobile: Stack vertically | Desktop: Two columns */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {/* Left Column: Details + Timeline */}
                <div className="space-y-6">
                  <ShipmentDetailsCard
                    trackingNumber={result.trackingNumber}
                    status={result.status}
                    origin={result.origin}
                    destination={result.destination}
                    estimatedDelivery={result.estimatedDelivery}
                    lastUpdated={result.lastUpdated}
                  />
                  <ShipmentTimeline events={result.events} />
                </div>

                {/* Right Column: Live Route */}
                <div className="lg:sticky lg:top-24 lg:self-start">
                  <LiveRouteVisual
                    origin={result.origin}
                    destination={result.destination}
                    progress={result.progress}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {!result && !error && !isSearching && (
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-5">
                <Package className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Ready to Track
              </h3>
              <p className="text-muted-foreground max-w-sm mx-auto">
                Enter your tracking number above to see real-time shipment status and location.
              </p>
            </div>
          )}

          {/* Loading State */}
          {isSearching && (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Package className="w-8 h-8 text-secondary" />
              </div>
              <p className="text-muted-foreground">Locating your shipment...</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Tracking;
