interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  dark?: boolean;
}

export const Logo = ({ className = "", iconOnly = false, dark = false }: LogoProps) => {
  const textColor = dark ? "text-white" : "text-uc-black";

  return (
    <a href="#" className={`inline-flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-uc-violet rounded-lg flex items-center justify-center shadow-[0_1px_3px_rgba(124,58,237,0.3)]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 9L14 21L15.8 15.8L21 14L9 9Z"
            fill="white"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M7.2 2.2L8 5.1" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M5.1 8L2.2 7.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <path d="M14 4.1L12 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>
      {!iconOnly && (
        <span className={`font-serif text-[19px] font-semibold tracking-tight ${textColor}`}>
          unclic
        </span>
      )}
    </a>
  );
};
