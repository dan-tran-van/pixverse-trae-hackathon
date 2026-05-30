import React from 'react';
import styles from '@/styles/modules/HeroSection.module.scss';
import { AudienceVariant } from '@/types/campaign';

interface HeroSectionProps {
  variant: AudienceVariant;
  onCtaClick: () => void;
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ variant, onCtaClick, onExploreClick }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.videoWrapper}>
        <video 
          className={styles.video}
          src="/videos/vietnam-discovery.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.content}>
        <div className={styles.headerInfo}>
          <span className={styles.badge}>Featured PixVerse Production</span>
          <h1 className={styles.headline}>{variant.headline}</h1>
          <p className={styles.subheadline}>{variant.subheadline}</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.primaryCta} onClick={onCtaClick}>
            {variant.ctaLabel}
          </button>
          <button className={styles.secondaryCta} onClick={onExploreClick}>
            Explore Scenes
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
