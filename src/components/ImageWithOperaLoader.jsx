import { useEffect, useState } from "react";

function OperaHouseLoader() {
  return (
    <div className="opera-loader" aria-hidden="true">
      <svg viewBox="0 0 220 128" className="h-20 w-32 text-[#4F5373]">
        <g className="opera-frame opera-frame-1">
          <path d="M22 88 L42 64 L88 64 L92 74 L178 74 L198 84 L198 94 L18 94 Z" />
          <path d="M42 64 L42 30 C66 33 80 48 82 64 Z" />
          <path d="M52 64 L52 33" />
        </g>

        <g className="opera-frame opera-frame-2">
          <path d="M22 88 L42 64 L88 64 L92 74 L178 74 L198 84 L198 94 L18 94 Z" />
          <path d="M42 64 L42 34 C61 35 72 48 72 64 Z" />
          <path d="M60 64 L60 22 C85 28 98 47 100 72 Z" />
          <path d="M86 72 L86 12 C126 18 150 45 158 76 C146 91 120 96 100 72 Z" />
        </g>

        <g className="opera-frame opera-frame-3">
          <path d="M22 88 L42 64 L88 64 L92 74 L178 74 L198 84 L198 94 L18 94 Z" />
          <path d="M42 64 L42 34 C61 35 72 48 72 64 Z" />
          <path d="M60 64 L60 22 C85 28 98 47 100 72 Z" />
          <path d="M86 72 L86 12 C126 18 150 45 158 76 C146 91 120 96 100 72 Z" />
          <path d="M136 92 C150 62 174 52 204 66 C198 88 174 104 140 96 Z" />
          <path d="M138 92 L152 72" />
        </g>

        <g className="opera-frame opera-frame-4">
          <path d="M22 88 L42 64 L88 64 L92 74 L178 74 L198 84 L198 94 L18 94 Z" />
          <path d="M42 64 L42 34 C61 35 72 48 72 64 Z" />
          <path d="M60 64 L60 22 C85 28 98 47 100 72 Z" />
          <path d="M86 72 L86 12 C126 18 150 45 158 76 C146 91 120 96 100 72 Z" />
          <path d="M136 92 C150 62 174 52 204 66 C198 88 174 104 140 96 Z" />
          <path d="M38 78 H70" />
          <path d="M36 84 H76" />
          <path d="M102 84 H128" />
          <path d="M104 94 V84" />
          <path d="M116 94 V84" />
          <path d="M128 94 V84" />
          <path d="M92 94 H164" />
        </g>
      </svg>
    </div>
  );
}

function ImageWithOperaLoader({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  onError,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <span className={`relative inline-flex ${wrapperClassName}`}>
      {!isLoaded ? (
        <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] bg-white/35 backdrop-blur-sm">
          <OperaHouseLoader />
        </span>
      ) : null}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
        onError={onError}
        {...props}
      />
    </span>
  );
}

export default ImageWithOperaLoader;
