import { ReactNode, useState } from "react";

interface SocialLinkProps {
  href?: string;
  icon: ReactNode;
  label: string;
  username: string;
  external?: boolean;
  copyValue?: string;
}

const SocialLink = ({ href, icon, label, username, external = true, copyValue }: SocialLinkProps) => {
  const [showCopied, setShowCopied] = useState(false);
  
  const handleClick = (e: React.MouseEvent) => {
    if (copyValue) {
      e.preventDefault();
      navigator.clipboard.writeText(copyValue);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    }
  };

  const Component = copyValue ? 'button' : 'a';
  
  return (
    <div className="relative">
      <Component
        href={!copyValue ? href : undefined}
        target={!copyValue && external ? "_blank" : undefined}
        rel={!copyValue && external ? "noopener noreferrer" : undefined}
        onClick={handleClick}
        className="social-card group w-full text-left relative z-10"
      >
        <div className="icon-wrapper text-primary">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-muted-foreground font-medium">{label}</span>
          <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-400">
            {username}
          </span>
        </div>
      </Component>
      
      {/* Copied message UNDER the card (no overlap) */}
      {copyValue && (
        <div
          className={`
            overflow-hidden transition-[max-height] duration-300 ease-out
            ${showCopied ? "max-h-16" : "max-h-0"}
          `}
        >
          <div
            className={`
              mt-2 flex items-center justify-center
              py-2 px-4 rounded-xl
              bg-primary/20 border border-primary/30
              text-primary text-sm font-medium
              transition-all duration-300 ease-out
              ${showCopied ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
            `}
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </div>
        </div>
      )}

    </div>
  );
};

export default SocialLink;
