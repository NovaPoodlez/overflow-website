import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ 
  backgroundImage, 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  onCtaClick,
  height = 'min-h-[100dvh]'
}) => {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          {ctaText && (
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-200 active:scale-[0.98]"
              onClick={onCtaClick}
              asChild={!!ctaLink}
            >
              {ctaLink ? (
                <a href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              ) : (
                <>
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;