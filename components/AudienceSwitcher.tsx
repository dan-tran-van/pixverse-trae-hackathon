import React from 'react';
import styles from '@/styles/modules/AudienceSwitcher.module.scss';
import { AudienceVariant, AudienceKey } from '@/types/campaign';

interface AudienceSwitcherProps {
  audiences: AudienceVariant[];
  selectedKey: AudienceKey;
  onSelect: (key: AudienceKey) => void;
}

const AudienceSwitcher: React.FC<AudienceSwitcherProps> = ({ audiences, selectedKey, onSelect }) => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Global Reach, Local Soul</h2>
        <p className={styles.description}>
          Select an audience to see how the campaign adapts its message and visual style for different cultures.
        </p>
      </div>

      <div className={styles.grid}>
        {audiences.map((audience) => (
          <button
            key={audience.key}
            className={`${styles.card} ${selectedKey === audience.key ? styles.active : ''}`}
            onClick={() => onSelect(audience.key)}
          >
            <div className={styles.flagPlaceholder}>
              {audience.label[0]}
            </div>
            <div className={styles.info}>
              <h4 className={styles.label}>{audience.label}</h4>
              <p className={styles.preview}>{audience.previewText}</p>
            </div>
            {selectedKey === audience.key && (
              <div className={styles.check}>✓</div>
            )}
          </button>
        ))}
      </div>

      <div className={styles.livePreview}>
        <div className={styles.previewHeader}>
          <span>Live Localization Preview</span>
          <span className={styles.pulse}></span>
        </div>
        <div className={styles.previewContent}>
          <div className={styles.previewItem}>
            <label>Headline</label>
            <p>{audiences.find(a => a.key === selectedKey)?.headline}</p>
          </div>
          <div className={styles.previewItem}>
            <label>Subheadline</label>
            <p>{audiences.find(a => a.key === selectedKey)?.subheadline}</p>
          </div>
          <div className={styles.previewItem}>
            <label>CTA Label</label>
            <span className={styles.ctaPreview}>{audiences.find(a => a.key === selectedKey)?.ctaLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSwitcher;
