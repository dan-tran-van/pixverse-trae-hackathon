import React, { useState } from 'react';
import styles from '@/styles/modules/VerticalWritingPreview.module.scss';
import { AudienceVariant, WritingMode } from '@/types/campaign';

interface VerticalWritingPreviewProps {
  variant: AudienceVariant;
}

const VerticalWritingPreview: React.FC<VerticalWritingPreviewProps> = ({ variant }) => {
  const [mode, setMode] = useState<WritingMode>(variant.defaultWritingMode);

  const toggleMode = () => {
    setMode(prev => prev === 'horizontal' ? 'vertical' : 'horizontal');
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Typography & Layout</h2>
        <p className={styles.description}>
          Experience the elegance of East Asian vertical writing modes, a key cultural differentiator for Japan, Taiwan, and China.
        </p>
      </div>

      <div className={styles.controls}>
        <button 
          className={`${styles.toggle} ${mode === 'horizontal' ? styles.active : ''}`}
          onClick={() => setMode('horizontal')}
        >
          Horizontal
        </button>
        <button 
          className={`${styles.toggle} ${mode === 'vertical' ? styles.active : ''}`}
          onClick={() => setMode('vertical')}
        >
          Vertical
        </button>
      </div>

      <div className={`${styles.previewArea} ${mode === 'vertical' ? styles.isVertical : ''}`}>
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
      
      {!variant.supportsVertical && mode === 'vertical' && (
        <p className={styles.warning}>
          * Note: This audience typically uses horizontal layout, but we are previewing the vertical mode for demonstration.
        </p>
      )}
    </section>
  );
};

export default VerticalWritingPreview;
