import React from 'react';
import styles from '@/styles/modules/HeroSection.module.scss';
import { AudienceVariant } from '@/types/campaign';
import { useWritingMode } from '@/components/WritingModeContext';
import { useI18n } from '@/components/I18nContext';

interface HeroSectionProps {
  variant: AudienceVariant;
  onCtaClick: () => void;
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ variant, onCtaClick, onExploreClick }) => {
  const { writingMode } = useWritingMode();
  const { t } = useI18n();

  return (
    <section className={`${styles.hero} ${styles[`hero--${writingMode}`]}`}>
      <div className={styles.videoWrapper}>
        <video 
          className={styles.video}
          src="/videos/vietnam-discovery.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          {t('app.video.unsupported')}
        </video>
      </div>
      <div className={styles.content}>
        <div className={styles.headerInfo}>
          <span className={styles.badge}>{t('app.hero.featuredBadge')}</span>
          <h1 className={styles.headline}>{variant.headline}</h1>
          <p className={styles.subheadline}>{variant.subheadline}</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.primaryCta} onClick={onCtaClick}>
            {variant.ctaLabel}
          </button>
          <button className={styles.secondaryCta} onClick={onExploreClick}>
            {t('app.hero.exploreScenes')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
