import React from 'react';
import styles from '@/styles/modules/CustomizeCampaignPanel.module.scss';
import { AudienceKey, WritingMode } from '@/types/campaign';

interface CustomizeCampaignPanelProps {
  selectedAudience: AudienceKey;
  writingMode: WritingMode;
  onAudienceChange: (key: AudienceKey) => void;
  onWritingModeChange: (mode: WritingMode) => void;
}

const CustomizeCampaignPanel: React.FC<CustomizeCampaignPanelProps> = ({
  selectedAudience,
  writingMode,
  onAudienceChange,
  onWritingModeChange,
}) => {
  return (
    <div className={styles.panel}>
      <div className={styles.header}>
        <h3>Campaign Studio</h3>
        <span className={styles.badge}>Beta</span>
      </div>
      
      <div className={styles.section}>
        <label>Video Source</label>
        <div className={styles.sourceInfo}>
          <div className={styles.dot}></div>
          <span>Demo PixVerse Video</span>
        </div>
      </div>

      <div className={styles.section}>
        <label>Target Audience</label>
        <select 
          value={selectedAudience} 
          onChange={(e) => onAudienceChange(e.target.value as AudienceKey)}
          className={styles.select}
        >
          <option value="global">Global</option>
          <option value="vietnam">Vietnam</option>
          <option value="japan">Japan</option>
          <option value="taiwan">Taiwan</option>
          <option value="china">China</option>
          <option value="korea">Korea</option>
        </select>
      </div>

      <div className={styles.section}>
        <label>Writing Mode</label>
        <div className={styles.btnGroup}>
          <button 
            className={writingMode === 'horizontal' ? styles.active : ''}
            onClick={() => onWritingModeChange('horizontal')}
          >
            Horizontal
          </button>
          <button 
            className={writingMode === 'vertical' ? styles.active : ''}
            onClick={() => onWritingModeChange('vertical')}
          >
            Vertical
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <button className={styles.previewBtn}>Preview Public Page</button>
      </div>
    </div>
  );
};

export default CustomizeCampaignPanel;
