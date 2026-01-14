const HeroText = () => {
  return (
    <div className="text-center perspective-1000">
      <h1 className="hero-text text-8xl sm:text-9xl font-bold tracking-tight text-foreground">
        <span className="inline-block text-glow-strong">h</span>
        <span className="inline-block text-glow-strong">o</span>
        <span className="inline-block text-glow-strong">s</span>
      </h1>
      
      {/* Animated underline */}
      <div className="mt-6 h-[2px] w-32 mx-auto hero-underline bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
      
      <p className="mt-6 text-muted-foreground text-lg animate-fade-up-delay-1">
        <span className="link-hover">
          <a 
            href="https://discord.gg/e-rich" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary/80 hover:text-primary transition-colors"
          >
            discord.gg/e-rich
          </a>
        </span>
      </p>
    </div>
  );
};

export default HeroText;
