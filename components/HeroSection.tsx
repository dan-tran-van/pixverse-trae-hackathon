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
      <div className={`${styles.videoWrapper} ${styles[`videoWrapper--${writingMode}`]}`}>
        <video 
          className={`${styles.video} ${styles[`video--${writingMode}`]}`}
          src="/videos/vietnam-discovery.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
        >
          {t('app.video.unsupported')}
        </video>
      </div>
      <div className={`${styles.content} ${styles[`content--${writingMode}`]}`}>
        <div className={`${styles.headerInfo} ${styles[`headerInfo--${writingMode}`]}`}>
          <span className={`${styles.badge} ${styles[`badge--${writingMode}`]}`}>{t('app.hero.featuredBadge')}</span>
          <h1 className={`${styles.headline} ${styles[`headline--${writingMode}`]}`}>{variant.headline}</h1>
          <p className={`${styles.subheadline} ${styles[`subheadline--${writingMode}`]}`}>{variant.subheadline}</p>
        </div>
        <div className={`${styles.actions} ${styles[`actions--${writingMode}`]}`}>
          <button className={`${styles.primaryCta} ${styles[`primaryCta--${writingMode}`]}`} onClick={onCtaClick}>
            {variant.ctaLabel}
          </button>
          <button className={`${styles.secondaryCta} ${styles[`secondaryCta--${writingMode}`]}`} onClick={onExploreClick}>
            {t('app.hero.exploreScenes')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
