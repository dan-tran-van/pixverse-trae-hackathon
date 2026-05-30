import React, { useState } from 'react';
import styles from '@/styles/modules/ConversionPanel.module.scss';
import { AudienceKey, WritingMode } from '@/types/campaign';

interface ConversionPanelProps {
  selectedAudience: AudienceKey;
  writingMode: WritingMode;
}

const ConversionPanel: React.FC<ConversionPanelProps> = ({ selectedAudience, writingMode }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [copyStatus, setCopyStatus] = useState('Copy Link');

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
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus('Copy Link'), 2000);
  };

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        {!isSaved ? (
          <div className={styles.initialState}>
            <h2 className={styles.title}>Ready to Launch Your Campaign?</h2>
            <p className={styles.description}>
              Save your localized settings and generate a unique campaign link to share with your audience.
            </p>
            <div className={styles.summary}>
              <div className={styles.summaryItem}>
                <span>Audience</span>
                <strong>{selectedAudience.toUpperCase()}</strong>
              </div>
              <div className={styles.summaryItem}>
                <span>Layout</span>
                <strong>{writingMode.toUpperCase()}</strong>
              </div>
            </div>
            <button className={styles.saveButton} onClick={handleSave}>
              Create Localized Campaign
            </button>
          </div>
        ) : (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h2 className={styles.title}>Campaign Saved!</h2>
            <p className={styles.description}>
              Your localized Vietnam Discovery campaign has been successfully created.
            </p>
            <div className={styles.linkBox}>
              <code className={styles.url}>{mockUrl}</code>
              <button className={styles.copyButton} onClick={handleCopy}>
                {copyStatus}
              </button>
            </div>
            <button className={styles.resetButton} onClick={() => setIsSaved(false)}>
              Customize Another
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ConversionPanel;
