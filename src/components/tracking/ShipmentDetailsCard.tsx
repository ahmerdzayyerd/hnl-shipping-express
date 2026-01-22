import { MapPin, Clock, Calendar, Package } from 'lucide-react';

interface ShipmentDetailsProps {
  trackingNumber: string;
  status: 'in-transit' | 'delivered' | 'pending' | 'exception';
  origin: string;
  destination: string;
  estimatedDelivery: string;
  lastUpdated: string;
}

const ShipmentDetailsCard = ({
  trackingNumber,
  status,
  origin,
  destination,
  estimatedDelivery,
  lastUpdated,
}: ShipmentDetailsProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'in-transit':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary border border-secondary/20">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            In Transit
          </span>
        );
      case 'delivered':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent/20 text-accent border border-accent/30">
            <span className="w-2 h-2 rounded-full bg-accent" />
            Delivered
          </span>
        );
      case 'exception':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-destructive/10 text-destructive border border-destructive/20">
            <span className="w-2 h-2 rounded-full bg-destructive" />
            Exception
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-muted text-muted-foreground border border-border">
            <span className="w-2 h-2 rounded-full bg-muted-foreground" />
            Pending
          </span>
        );
    }
  };

  return (
    <div className="bg-card rounded-2xl p-5 md:p-6 shadow-lg border border-border">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
            <Package className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Tracking Number</p>
            <p className="font-display font-bold text-lg text-foreground">{trackingNumber}</p>
          </div>
        </div>
        {getStatusBadge()}
      </div>

      {/* Route */}
      <div className="bg-muted/50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-accent" />
            <div className="w-3 h-3 rounded-full bg-accent" />
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <p className="text-xs text-muted-foreground">Origin</p>
              <p className="font-medium text-foreground">{origin}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Destination</p>
              <p className="font-medium text-foreground">{destination}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-start gap-2.5">
          <Calendar className="w-4 h-4 text-secondary mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground">Est. Delivery</p>
            <p className="font-medium text-sm text-foreground">{estimatedDelivery}</p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />
          <div>
            <p className="text-xs text-muted-foreground">Last Updated</p>
            <p className="font-medium text-sm text-foreground">{lastUpdated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetailsCard;
