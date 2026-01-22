import { useEffect, useState } from 'react';

interface LiveRouteVisualProps {
  origin: string;
  destination: string;
  progress: number; // 0 to 100
}

const LiveRouteVisual = ({ origin, destination, progress }: LiveRouteVisualProps) => {
  const [dotPosition, setDotPosition] = useState(progress);

  // Subtle animation for the tracking dot
  useEffect(() => {
    const interval = setInterval(() => {
      setDotPosition((prev) => {
        const variation = Math.sin(Date.now() / 1000) * 2;
        return Math.min(Math.max(progress + variation, 0), 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [progress]);

  // Calculate dot position along the path
  const getDotTransform = () => {
    // Path goes from approximately x=50 to x=350 with a curve
    const t = dotPosition / 100;
    const x = 50 + t * 300;
    // Create a slight arc in the path
    const y = 120 - Math.sin(t * Math.PI) * 40;
    return { x, y };
  };

  const dotPos = getDotTransform();

  return (
    <div className="bg-card rounded-2xl p-5 md:p-6 shadow-lg border border-border">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">
        Live Route
      </h3>

      <div className="relative w-full aspect-[4/3] md:aspect-[16/10] bg-gradient-to-br from-secondary/5 to-accent/5 rounded-xl overflow-hidden">
        <svg
          viewBox="0 0 400 200"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Abstract land masses */}
          <defs>
            <linearGradient id="landGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.6" />
              <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Origin land mass (stylized) */}
          <path
            d="M20 100 Q30 70 50 80 Q70 60 80 90 Q90 110 70 130 Q50 140 30 120 Z"
            fill="url(#landGradient)"
            className="transition-all duration-500"
          />
          
          {/* Mid-route islands */}
          <ellipse cx="150" cy="140" rx="25" ry="15" fill="url(#landGradient)" opacity="0.5" />
          <ellipse cx="200" cy="100" rx="20" ry="12" fill="url(#landGradient)" opacity="0.4" />
          <ellipse cx="270" cy="130" rx="18" ry="10" fill="url(#landGradient)" opacity="0.5" />

          {/* Destination land mass */}
          <path
            d="M320 80 Q340 60 370 70 Q390 80 385 110 Q380 140 350 150 Q320 145 315 120 Q310 100 320 80 Z"
            fill="url(#landGradient)"
            className="transition-all duration-500"
          />

          {/* Route path (dashed background) */}
          <path
            d="M55 95 Q120 60 200 80 Q280 100 350 90"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="2"
            strokeDasharray="6 4"
          />

          {/* Animated route line (progress) */}
          <path
            d="M55 95 Q120 60 200 80 Q280 100 350 90"
            fill="none"
            stroke="url(#routeGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="300"
            strokeDashoffset={300 - (progress / 100) * 300}
            className="transition-all duration-1000"
          />

          {/* Origin marker */}
          <g transform="translate(55, 95)">
            <circle r="8" fill="hsl(var(--secondary))" opacity="0.2" />
            <circle r="5" fill="hsl(var(--secondary))" />
            <circle r="2" fill="white" />
          </g>

          {/* Destination marker */}
          <g transform="translate(350, 90)">
            <circle r="8" fill="hsl(var(--accent))" opacity="0.2" />
            <circle r="5" fill="hsl(var(--accent))" />
            <circle r="2" fill="white" />
          </g>

          {/* Animated tracking dot */}
          <g 
            transform={`translate(${55 + (dotPosition / 100) * 295}, ${95 - Math.sin((dotPosition / 100) * Math.PI) * 15})`}
            filter="url(#glow)"
          >
            {/* Pulse rings */}
            <circle r="12" fill="hsl(var(--secondary))" opacity="0.2">
              <animate
                attributeName="r"
                values="8;16;8"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.3;0;0.3"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="8" fill="hsl(var(--secondary))" opacity="0.3">
              <animate
                attributeName="r"
                values="6;12;6"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;0.1;0.4"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Main dot */}
            <circle r="6" fill="hsl(var(--secondary))" />
            <circle r="3" fill="white" />
          </g>

          {/* Origin label */}
          <text
            x="55"
            y="125"
            textAnchor="middle"
            className="text-[10px] font-medium fill-foreground"
          >
            {origin.split(',')[0]}
          </text>

          {/* Destination label */}
          <text
            x="350"
            y="120"
            textAnchor="middle"
            className="text-[10px] font-medium fill-foreground"
          >
            {destination.split(',')[0]}
          </text>
        </svg>

        {/* Legend */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-muted-foreground">Origin</span>
          </div>
          <div className="bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md">
            <span className="text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <div className="flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-muted-foreground">Destination</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveRouteVisual;
