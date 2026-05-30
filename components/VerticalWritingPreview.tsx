import React from 'react';
import styles from '@/styles/modules/VerticalWritingPreview.module.scss';
import { AudienceVariant } from '@/types/campaign';
import { useWritingMode } from '@/components/WritingModeContext';
import { useI18n } from '@/components/I18nContext';

interface VerticalWritingPreviewProps {
  variant: AudienceVariant;
}

const VerticalWritingPreview: React.FC<VerticalWritingPreviewProps> = ({ variant }) => {
  const { writingMode, setWritingMode } = useWritingMode();
  const { t } = useI18n();

  return (
    <section className={`${styles.container} ${styles[`container--${writingMode}`]}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t('app.preview.typographyTitle')}</h2>
        <p className={styles.description}>
          {t('app.preview.typographyDescription')}
        </p>
      </div>

      <div className={styles.controls}>
        <button 
          className={`${styles.toggle} ${writingMode === 'horizontal' ? styles.active : ''}`}
          onClick={() => setWritingMode('horizontal')}
        >
          {t('app.preview.toggle.horizontal')}
        </button>
        <button 
          className={`${styles.toggle} ${writingMode === 'vertical' ? styles.active : ''}`}
          onClick={() => setWritingMode('vertical')}
        >
          {t('app.preview.toggle.vertical')}
        </button>
      </div>

      <div className={`${styles.previewArea} ${writingMode === 'vertical' ? styles.isVertical : ''}`}>
        <div className={styles.paper}>
          <div className={styles.content}>
            <h3 className={styles.headline}>{variant.headline}</h3>
            <p className={styles.subheadline}>{variant.subheadline}</p>
            <div className={styles.ctaWrapper}>
              <button className={styles.cta}>{variant.ctaLabel}</button>
            </div>
          </div>
          <div className={styles.decorativeElements}>
            <div className={styles.seal}>Vietnam</div>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
      
      {!variant.supportsVertical && writingMode === 'vertical' && (
        <p className={styles.warning}>
          {t('app.preview.warning')}
        </p>
      )}
    </section>
  );
};

export default VerticalWritingPreview;
