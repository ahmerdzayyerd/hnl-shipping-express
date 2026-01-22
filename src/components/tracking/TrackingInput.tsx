import { Search } from 'lucide-react';

interface TrackingInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isSearching: boolean;
}

const TrackingInput = ({ value, onChange, onSubmit, isSearching }: TrackingInputProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="w-full max-w-xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter tracking number (e.g., AMF22385)"
            className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary shadow-lg text-base"
          />
        </div>
        <button
          type="submit"
          disabled={isSearching}
          className="btn-hero whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSearching ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Tracking...
            </span>
          ) : (
            'Track'
          )}
        </button>
      </div>
      <p className="text-center text-white/60 text-sm mt-3">
        
      </p>
    </form>
  );
};

export default TrackingInput;
