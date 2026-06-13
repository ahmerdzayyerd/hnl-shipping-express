import {
  Clock,
  Calendar,
  Package,
  FileText,
  ShieldCheck,
  Barcode,
} from 'lucide-react';

interface ShipmentDetailsProps {
  trackingNumber: string;
  awb: string;
  bol: string;
  cargoId: string;
  carrier: string;

  status: 'in-transit' | 'delivered' | 'pending' | 'exception' | 'Picked Up';

  origin: string;
  destination: string;
  estimatedDelivery: string;
  lastUpdated: string;
}

const ShipmentDetailsCard = ({
  trackingNumber,
  awb,
  bol,
  cargoId,
  carrier,
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
    <div className="p-5 border shadow-lg bg-card rounded-2xl md:p-6 border-border">

      {/* Header */}
      <div className="flex flex-col gap-3 mb-5 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">

          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary/10">
            <Package className="w-5 h-5 text-secondary" />
          </div>

          <div>
            <p className="text-xs tracking-wider uppercase text-muted-foreground">
              Tracking Number
            </p>

            <p className="text-lg font-bold font-display text-foreground">
              {trackingNumber}
            </p>
          </div>

        </div>

        {getStatusBadge()}
      </div>

      {/* Logistics Verification Panel */}
      <div className="relative p-5 mb-5 overflow-hidden border rounded-2xl bg-muted/40 border-border">

        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-secondary/5 blur-3xl" />

        <div className="relative z-10 flex items-center justify-between mb-5">

          <div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">
              International Cargo Verification
            </p>

            <h3 className="mt-1 text-lg font-bold text-foreground font-display">
              Shipment Documentation
            </h3>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold text-accent">
              Valid
            </span>
          </div>

        </div>

        <div className="grid gap-4 mb-5 sm:grid-cols-2">

          <div className="p-4 border rounded-xl bg-background/70 border-border">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-secondary" />
              <p className="text-xs tracking-wide uppercase text-muted-foreground">
                Air Waybill
              </p>
            </div>

            <p className="font-semibold break-all text-foreground">
              {awb}
            </p>
          </div>

          <div className="p-4 border rounded-xl bg-background/70 border-border">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-secondary" />
              <p className="text-xs tracking-wide uppercase text-muted-foreground">
                Sea Waybill
              </p>
            </div>

            <p className="font-semibold break-all text-foreground">
              {bol}
            </p>
          </div>

          <div className="p-4 border rounded-xl bg-background/70 border-border">
            <p className="mb-2 text-xs tracking-wide uppercase text-muted-foreground">
              Cargo Identification
            </p>

            <p className="font-semibold break-all text-foreground">
              {cargoId}
            </p>
          </div>

          <div className="p-4 border rounded-xl bg-background/70 border-border">
            <p className="mb-2 text-xs tracking-wide uppercase text-muted-foreground">
              Carrier
            </p>

            <p className="font-semibold text-foreground">
              {carrier}
            </p>
          </div>

        </div>

        {/* Barcode Section */}
        {/* <div className="p-4 border rounded-xl bg-background/80 border-border">

          <div className="flex items-center gap-2 mb-3">
            <Barcode className="w-5 h-5 text-secondary" />

            <p className="text-xs tracking-widest uppercase text-muted-foreground">
              Cargo Scan Verification
            </p>
          </div>

          <div className="flex items-end gap-[2px] h-16 overflow-hidden">
            {[1,2,1,3,2,1,4,1,2,3,1,2,4,1,3,1,2,1,3,2,1,4,2,1,3,1,2,4,1,2,3,1,4,2,1,3].map((w, i) => (
              <div
                key={i}
                className="bg-black rounded-sm"
                style={{
                  width: `${w * 2}px`,
                  height: `${40 + ((i % 5) * 5)}px`,
                }}
              />
            ))}
          </div>

          <div className="flex items-center justify-between mt-3">
            <p className="text-xs text-muted-foreground">
              Scan Reference
            </p>

            <p className="font-mono text-xs tracking-widest text-foreground">
              {trackingNumber}
            </p>
          </div>

        </div> */}

      </div>

      {/* Route */}
      <div className="p-4 mb-4 bg-muted/50 rounded-xl">

        <div className="flex items-center gap-3">

          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-secondary" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-secondary to-accent" />
            <div className="w-3 h-3 rounded-full bg-accent" />
          </div>

          <div className="flex-1 space-y-4">

            <div>
              <p className="text-xs text-muted-foreground">
                Origin
              </p>

              <p className="font-medium text-foreground">
                {origin}
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground">
                Destination
              </p>

              <p className="font-medium text-foreground">
                {destination}
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-4">

        <div className="flex items-start gap-2.5">
          <Calendar className="w-4 h-4 text-secondary mt-0.5" />

          <div>
            <p className="text-xs text-muted-foreground">
              Est. Delivery
            </p>

            <p className="text-sm font-medium text-foreground">
              {estimatedDelivery}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-muted-foreground mt-0.5" />

          <div>
            <p className="text-xs text-muted-foreground">
              Last Updated
            </p>

            <p className="text-sm font-medium text-foreground">
              {lastUpdated}
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ShipmentDetailsCard;