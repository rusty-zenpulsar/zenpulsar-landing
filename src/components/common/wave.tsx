interface WaveProps {
  className?: string;
  variant?: 'fuchsia' | 'electric-blue' | 'gradient' | 'white' | 'black';
  size?: 'sm' | 'md' | 'lg';
}

export function Wave({ className = '', variant = 'gradient', size = 'md' }: WaveProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12', 
    lg: 'w-16 h-16'
  };

  const colorClasses = {
    fuchsia: 'text-zp-fuchsia',
    'electric-blue': 'text-zp-electric-blue',
    gradient: 'text-zp-gradient',
    white: 'text-white',
    black: 'text-black'
  };

  return (
    <svg 
      className={`${sizeClasses[size]} ${colorClasses[variant]} ${className}`}
      viewBox="0 0 100 100" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20,50 Q30,20 40,50 T60,50 T80,50" 
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none"
      />
      <path 
        d="M15,60 Q25,30 35,60 T55,60 T75,60" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none" 
        opacity="0.7"
      />
      <path 
        d="M25,70 Q35,40 45,70 T65,70 T85,70" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none" 
        opacity="0.5"
      />
    </svg>
  );
} 