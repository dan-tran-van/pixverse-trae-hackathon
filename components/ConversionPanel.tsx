import React, { useState } from 'react';
import styles from '@/styles/modules/ConversionPanel.module.scss';
import { AudienceKey } from '@/types/campaign';
import { useWritingMode } from '@/components/WritingModeContext';
import { useI18n } from '@/components/I18nContext';

interface ConversionPanelProps {
  selectedAudience: AudienceKey;
}

const ConversionPanel: React.FC<ConversionPanelProps> = ({ selectedAudience }) => {
  const { writingMode } = useWritingMode();
  const { t } = useI18n();
  const [isSaved, setIsSaved] = useState(false);
  const [copyStatus, setCopyStatus] = useState<string>('');

  React.useEffect(() => {
    setCopyStatus(t('app.conversion.copy'));
  }, [t]);

  const handleSave = () => {
    const campaignData = {
      audience: selectedAudience,
      writingMode: writingMode,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('saved_campaign', JSON.stringify(campaignData));
    setIsSaved(true);
  };

  const mockUrl = `https://vietnam-discovery.com/p/${selectedAudience}-${writingMode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(mockUrl);
    setCopyStatus(t('app.conversion.copied'));
    setTimeout(() => setCopyStatus(t('app.conversion.copy')), 2000);
  };

  return (
    <section className={`${styles.container} ${styles[`container--${writingMode}`]}`}>
      <div className={styles.card}>
        {!isSaved ? (
          <div className={styles.initialState}>
            <h2 className={styles.title}>{t('app.conversion.readyTitle')}</h2>
            <p className={styles.description}>
              {t('app.conversion.readyDescription')}
            </p>
            <div className={styles.summary}>
              <div className={styles.summaryItem}>
                <span>{t('app.conversion.summaryAudience')}</span>
                <strong>{selectedAudience.toUpperCase()}</strong>
              </div>
              <div className={styles.summaryItem}>
                <span>{t('app.conversion.summaryLayout')}</span>
                <strong>{writingMode.toUpperCase()}</strong>
              </div>
            </div>
            <button className={styles.saveButton} onClick={handleSave}>
              {t('app.conversion.create')}
            </button>
          </div>
        ) : (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.title}>{t('app.conversion.savedTitle')}</h2>
            <p className={styles.description}>
              {t('app.conversion.savedDescription')}
            </p>
            <div className={styles.linkBox}>
              <code className={styles.url}>{mockUrl}</code>
              <button className={styles.copyButton} onClick={handleCopy}>
                {copyStatus}
              </button>
            </div>
            <button className={styles.resetButton} onClick={() => setIsSaved(false)}>
              {t('app.conversion.customizeAnother')}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConversionPanel;
