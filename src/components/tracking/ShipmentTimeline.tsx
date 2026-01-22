import { CheckCircle2, Circle } from 'lucide-react';

interface TimelineEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  isCompleted: boolean;
  isCurrent?: boolean;
}

interface ShipmentTimelineProps {
  events: TimelineEvent[];
}

const ShipmentTimeline = ({ events }: ShipmentTimelineProps) => {
  return (
    <div className="bg-card rounded-2xl p-5 md:p-6 shadow-lg border border-border">
      <h3 className="font-display text-lg font-semibold text-foreground mb-5">
        Shipment Timeline
      </h3>

      <div className="space-y-0">
        {events.map((event, index) => (
          <div key={index} className="relative flex gap-4">
            {/* Timeline line and dot */}
            <div className="flex flex-col items-center">
              {event.isCompleted ? (
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  event.isCurrent 
                    ? 'bg-secondary text-white' 
                    : 'bg-accent/20 text-accent'
                }`}>
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-full border-2 border-border bg-background flex items-center justify-center">
                  <Circle className="w-3 h-3 text-muted-foreground" />
                </div>
              )}
              {index < events.length - 1 && (
                <div className={`w-0.5 flex-1 min-h-[3rem] ${
                  event.isCompleted ? 'bg-accent/40' : 'bg-border'
                }`} />
              )}
            </div>

            {/* Event content */}
            <div className="flex-1 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <p className={`font-medium text-sm ${
                    event.isCurrent ? 'text-secondary' : 'text-foreground'
                  }`}>
                    {event.status}
                  </p>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                </div>
                <p className="text-xs text-muted-foreground whitespace-nowrap">
                  {event.date} • {event.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShipmentTimeline;
