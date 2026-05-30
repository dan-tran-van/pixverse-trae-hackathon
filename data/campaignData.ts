import { AudienceVariant, SceneChapter, DiscoveryCard } from '../types/campaign';

export const AUDIENCES: AudienceVariant[] = [
  {
    key: 'global',
    label: 'Global',
    headline: 'Vietnam Discovery: A Journey Through Time and Spirit',
    subheadline: 'Experience the perfect harmony of ancient heritage, breathtaking nature, and vibrant modern life.',
    ctaLabel: 'Start Your Journey',
    previewText: 'Discover the hidden gems of Southeast Asia.',
    defaultWritingMode: 'horizontal',
    supportsVertical: false,
  },
  {
    key: 'vietnam',
    label: 'Việt Nam',
    headline: 'Khám Phá Việt Nam: Hành Trình Của Tâm Hồn',
    subheadline: 'Cùng trải nghiệm sự giao thoa tuyệt vời giữa di sản nghìn năm và nhịp sống hiện đại năng động.',
    ctaLabel: 'Bắt Đầu Hành Trình',
    previewText: 'Vẻ đẹp tiềm ẩn của dải đất hình chữ S.',
    defaultWritingMode: 'horizontal',
    supportsVertical: false,
  },
  {
    key: 'japan',
    label: '日本',
    headline: 'ベトナム発見：時と心をつなぐ旅',
    subheadline: '古き良き伝統と息をのむ大自然、そして活気あふれる現代が織りなす究極の調和を。',
    ctaLabel: '旅を始める',
    previewText: '東南アジアの隠れた宝石を探索しましょう。',
    defaultWritingMode: 'vertical',
    supportsVertical: true,
  },
  {
    key: 'taiwan',
    label: '台灣',
    headline: '探索越南：時光與心靈的奇遇',
    subheadline: '體驗古老傳承、壯麗自然與現代都市生活的完美融合。',
    ctaLabel: '開啟旅程',
    previewText: '探索東南亞最璀璨的明珠。',
    defaultWritingMode: 'vertical',
    supportsVertical: true,
  },
  {
    key: 'china',
    label: '中国',
    headline: '发现越南：时光与灵魂的交响',
    subheadline: '在这里，古老的遗产、迷人的自然与繁华的现代生活和谐共生。',
    ctaLabel: '开启旅程',
    previewText: '揭秘东南亚不为人知的魅力。',
    defaultWritingMode: 'vertical',
    supportsVertical: true,
  },
  {
    key: 'korea',
    label: '대한민국',
    headline: '베트남 디스커버리: 시간과 영혼의 여정',
    subheadline: '고대 유산, 숨막히는 자연, 그리고 활기찬 현대 도시가 어우러진 완벽한 조화를 경험하세요.',
    ctaLabel: '여행 시작하기',
    previewText: '동남아시아의 숨겨진 보석을 만나보세요.',
    defaultWritingMode: 'horizontal',
    supportsVertical: true,
  },
];

export const SCENE_CHAPTERS: SceneChapter[] = [
  {
    id: 'nature',
    title: 'Nature',
    description: 'Breathtaking landscapes from Ha Long Bay to the lush Mekong Delta.',
    timestamp: 0,
  },
  {
    id: 'hanoi',
    title: 'Hanoi',
    description: 'The soul of Vietnam, where history breathes in every ancient alley.',
    timestamp: 6,
  },
  {
    id: 'hoi-an',
    title: 'Hội An',
    description: 'A lantern-lit journey through a timeless UNESCO World Heritage town.',
    timestamp: 12,
  },
  {
    id: 'food',
    title: 'Food',
    description: 'A symphony of flavors, from street-side Pho to royal Hue cuisine.',
    timestamp: 18,
  },
  {
    id: 'heritage',
    title: 'Heritage',
    description: 'Centuries of tradition preserved in temples, pagodas, and festivals.',
    timestamp: 24,
  },
  {
    id: 'modern-vietnam',
    title: 'Modern Vietnam',
    description: 'The dynamic energy of Saigon and the rising skylines of tomorrow.',
    timestamp: 30,
  },
];

export const DISCOVERY_CARDS: DiscoveryCard[] = [
  {
    id: 'card-1',
    title: 'Sapa Terraces',
    description: 'Emerald green rice fields sculpted into the mountainside.',
    category: 'places',
  },
  {
    id: 'card-2',
    title: 'Bánh Mì Culture',
    description: 'The world\'s favorite sandwich, perfected on the streets of Saigon.',
    category: 'food',
  },
  {
    id: 'card-3',
    title: 'Ao Dai Elegance',
    description: 'The traditional silk tunic that embodies Vietnamese grace.',
    category: 'culture',
  },
  {
    id: 'card-4',
    title: 'Da Nang Nightlife',
    description: 'Modern bridges and vibrant lights along the Han River.',
    category: 'cityLife',
  },
];
