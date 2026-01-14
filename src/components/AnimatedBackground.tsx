const AnimatedBackground = () => {
  return (
    <>
      {/* Animated grid */}
      <div className="grid-background" />
      
      {/* Floating orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      
      {/* Noise texture */}
      <div className="noise-overlay" />
    </>
  );
};

export default AnimatedBackground;
