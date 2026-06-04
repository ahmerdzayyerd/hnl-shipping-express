import { useState, useEffect, useCallback } from 'react';
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
  awb: string;
  bol: string;
  carrier: string;
  cargoId: string;                    // ← Added to fix the error

  status: 'in-transit' | 'delivered' | 'pending' | 'exception' | 'Picked Up';
  estimatedDelivery: string;
  lastUpdated: string;
  origin: string;
  destination: string;
  progress: number;
  events: TimelineEvent[];
}

// Mock tracking data
const mockTrackingData: Record<string, TrackingResult> = {
    'HNL21385536': {
    trackingNumber: 'HNL21385536',
    status: 'in-transit',
    estimatedDelivery: 'June 04, 2026',
    lastUpdated: '19 minutes ago',
    origin: 'Stockholm, Sweden',
    destination: 'Key Biscayne, Florida',
    progress: 100,
    events: [
      { date: 'Jun 1', time: '07:00', location: 'New York', status: 'In Transit', isCompleted: true },
      { date: 'May 19', time: '19:20', location: 'John F. Kennedy International Airport (JFK) - New York', status: 'On Hold; Customs Clearance', isCompleted: true },
      { date: 'May 19', time: '13:00', location: 'A350-900ULR, Cargo', status: 'In Transit', isCompleted: true },
      { date: 'May 18', time: '12:17', location: 'A350-900ULR, Cargo', status: 'In Transit', isCompleted: true },
      { date: 'May 18', time: '07:14', location: 'Stockholm, Sweden', status: 'Picked Up', isCompleted: true },
    ],
  },

  'C13158-RI4-CC': {
    trackingNumber: 'C13158-RI4-CC',
    awb: 'AWB-CL-26-11808',
    bol: 'BOL-CL-26-11808',
    carrier: 'Clipper Courier Service',
    cargoId: 'CRG-RI4-CC',
    status: 'in-transit',
    estimatedDelivery: 'June 04, 2026',
    lastUpdated: 'Today',
    origin: 'New York, USA',
    destination: 'Florida, USA',
    progress: 90,
    events: [
      { date: 'June 04', time: '10:00', location: 'Jacksonville, Florida', status: 'In Transit', isCompleted: true },
      { date: 'June 03', time: '14:30', location: 'Florence, South Carolina', status: 'In Transit', isCompleted: true },
      { date: 'June 02', time: '16:53', location: 'Seaford, Delaware', status: 'In Transit', isCompleted: true },
      { date: 'June 01', time: '13:30', location: 'Vineland, New Jersey', status: 'In Transit', isCompleted: true },
      { date: 'June 01', time: '09:52', location: 'John F. Kennedy International Airport (JFK) - New York', status: 'Picked Up', isCompleted: true },
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

  const handleSearch = useCallback(
    async (number?: string) => {
      const searchNumber = number || trackingNumber;

      if (!searchNumber.trim()) {
        setError('Please enter a tracking number');
        return;
      }

      setIsSearching(true);
      setError('');
      setResult(null);
      setShowResults(false);

      await new Promise((resolve) => setTimeout(resolve, 800));

      const data = mockTrackingData[searchNumber.toUpperCase()];

      if (data) {
        setResult(data);
        setTimeout(() => setShowResults(true), 100);
      } else {
        setError('No shipment found with this tracking number.');
        setShowResults(true);
      }

      setIsSearching(false);
    },
    [trackingNumber]
  );

  useEffect(() => {
    document.title = 'Track Your Shipment | Clipper Courier Services';

    const urlNumber = searchParams.get('number');
    if (urlNumber) {
      handleSearch(urlNumber);
    }
  }, [searchParams, handleSearch]);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden bg-hero-gradient md:py-20">
        <div className="absolute inset-0">
          <div className="absolute w-64 h-64 rounded-full top-10 right-10 bg-accent/20 blur-3xl" />
          <div className="absolute rounded-full bottom-10 left-10 w-80 h-80 bg-secondary/20 blur-3xl" />
        </div>

        <div className="relative z-10 px-4 container-main">
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <h1 className="mb-3 text-3xl font-bold text-white font-display md:text-5xl">
              Track Your Shipment
            </h1>
            <p className="text-base text-white/80 md:text-lg">
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
        <div className="px-4 container-main">

          {/* Error */}
          {error && showResults && (
            <div className="max-w-md p-6 mx-auto text-center border bg-destructive/10 border-destructive/20 rounded-2xl animate-fade-in">
              <AlertCircle className="w-12 h-12 mx-auto mb-3 text-destructive" />
              <p className="mb-2 font-medium text-destructive">{error}</p>
            </div>
          )}

          {/* Results */}
          {result && showResults && (
            <div className="animate-fade-in" style={{ animationDuration: '0.4s' }}>
              <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
                <div className="space-y-6">
                  <ShipmentDetailsCard
                    trackingNumber={result.trackingNumber}
                    awb={result.awb}
                    bol={result.bol}
                    carrier={result.carrier}
                    cargoId={result.cargoId}           // ← Fixed
                    status={result.status}
                    origin={result.origin}
                    destination={result.destination}
                    estimatedDelivery={result.estimatedDelivery}
                    lastUpdated={result.lastUpdated}
                  />

                  <ShipmentTimeline events={result.events} />
                </div>

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

          {/* Empty state */}
          {!result && !error && !isSearching && (
            <div className="py-16 text-center">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-5 rounded-2xl bg-muted">
                <Package className="w-10 h-10 text-muted-foreground" />
              </div>

              <h3 className="mb-2 text-xl font-semibold font-display text-foreground">
                Ready to Track
              </h3>

              <p className="max-w-sm mx-auto text-muted-foreground">
                Enter your tracking number above to see real-time shipment status and location.
              </p>
            </div>
          )}

          {/* Loading */}
          {isSearching && (
            <div className="py-16 text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 animate-pulse">
                <Package className="w-8 h-8 text-secondary" />
              </div>

              <p className="text-muted-foreground">
                Locating your shipment...
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Tracking;
