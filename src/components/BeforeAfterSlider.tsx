import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Treatment',
  afterLabel = 'After by Dr. Tina',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = () => {
    isDragging.current = true;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleClick = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onClick={handleClick}
      className={`relative select-none overflow-hidden rounded-2xl cursor-ew-resize bg-zinc-900 shadow-md ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* Background Image: AFTER */}
      <img
        src={afterImage}
        alt="After Treatment"
        className="w-full h-full object-cover block pointer-events-none"
      />

      {/* Foreground Clipped Image: BEFORE */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before Treatment"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none max-w-none"
          style={{
            width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
          }}
        />
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle circle */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#1C1C1A] shadow-xl flex items-center justify-center border border-zinc-200">
          <svg className="w-4 h-4 fill-current text-[#1C1C1A]" viewBox="0 0 24 24">
            <path d="M8.5 7l-5 5 5 5V7zm7 10l5-5-5-5v10z" />
          </svg>
        </div>
      </div>

      {/* Floating Pill Labels */}
      <div className="absolute top-3 left-3 bg-[#1C1C1A]/80 backdrop-blur-sm text-[#FCF9F3] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded border border-white/10 pointer-events-none">
        {beforeLabel}
      </div>
      <div className="absolute top-3 right-3 bg-[#1C1C1A]/80 backdrop-blur-sm text-[#FCF9F3] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded border border-white/10 pointer-events-none">
        {afterLabel}
      </div>

      {/* Hint helper at bottom */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-zinc-300 text-[10px] uppercase tracking-wider px-3 py-0.5 rounded-full pointer-events-none">
        Drag or tap to compare
      </div>
    </div>
  );
};
