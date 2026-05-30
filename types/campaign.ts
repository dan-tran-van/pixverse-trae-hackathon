export type AudienceKey = 'global' | 'vietnam' | 'japan' | 'taiwan' | 'china' | 'korea';

export type WritingMode = 'horizontal' | 'vertical';

export interface SceneChapter {
  id: string;
  title: string;
  description: string;
  timestamp: number; // in seconds
}

export interface AudienceVariant {
  key: AudienceKey;
  label: string;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  previewText: string;
  defaultWritingMode: WritingMode;
  supportsVertical: boolean;
}

export interface DiscoveryCard {
  id: string;
  title: string;
  description: string;
  category: 'Places' | 'Food' | 'Culture' | 'City Life';
}

export interface CampaignState {
  audience: AudienceKey;
  writingMode: WritingMode;
  selectedChapterId: string;
}
