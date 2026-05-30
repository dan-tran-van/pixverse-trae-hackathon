import type { LocaleKey } from '@/data/i18n';
import type { DiscoveryCard, SceneChapter } from '@/types/campaign';
import { DISCOVERY_CARDS, SCENE_CHAPTERS } from '@/data/campaignData';

type ChapterCopy = Pick<SceneChapter, 'title' | 'description'>;
type CardCopy = Pick<DiscoveryCard, 'title' | 'description' | 'category'>;

const CHAPTER_COPY: Record<LocaleKey, Record<SceneChapter['id'], ChapterCopy>> = {
  en: {
    nature: { title: 'Nature', description: 'Breathtaking landscapes from Ha Long Bay to the lush Mekong Delta.' },
    hanoi: { title: 'Hanoi', description: 'The soul of Vietnam, where history breathes in every ancient alley.' },
    'hoi-an': { title: 'Hội An', description: 'A lantern-lit journey through a timeless UNESCO World Heritage town.' },
    food: { title: 'Food', description: 'A symphony of flavors, from street-side Pho to royal Hue cuisine.' },
    heritage: { title: 'Heritage', description: 'Centuries of tradition preserved in temples, pagodas, and festivals.' },
    'modern-vietnam': { title: 'Modern Vietnam', description: 'The dynamic energy of Saigon and the rising skylines of tomorrow.' },
  },
  vi: {
    nature: { title: 'Thiên nhiên', description: 'Cảnh sắc ngoạn mục từ Vịnh Hạ Long đến đồng bằng sông Cửu Long trù phú.' },
    hanoi: { title: 'Hà Nội', description: 'Hồn Việt trong từng con phố, nơi lịch sử thở cùng nhịp sống.' },
    'hoi-an': { title: 'Hội An', description: 'Phố cổ đèn lồng – hành trình qua di sản UNESCO đầy hoài niệm.' },
    food: { title: 'Ẩm thực', description: 'Bản giao hưởng hương vị, từ phở vỉa hè đến ẩm thực cung đình Huế.' },
    heritage: { title: 'Di sản', description: 'Truyền thống được gìn giữ trong đền chùa, lễ hội và nếp sống.' },
    'modern-vietnam': { title: 'Việt Nam hiện đại', description: 'Năng lượng Sài Gòn và những đường chân trời đang vươn lên.' },
  },
  ja: {
    nature: { title: '自然', description: 'ハロン湾からメコンデルタまで、息をのむ風景。' },
    hanoi: { title: 'ハノイ', description: '古い路地に歴史が息づく、ベトナムの心。' },
    'hoi-an': { title: 'ホイアン', description: 'ランタンが灯る世界遺産の街をめぐる旅。' },
    food: { title: '食', description: '屋台のフォーからフエ宮廷料理まで、味の交響曲。' },
    heritage: { title: '文化遺産', description: '寺院や祭りに受け継がれる、何世紀もの伝統。' },
    'modern-vietnam': { title: '現代ベトナム', description: 'サイゴンの躍動と、未来へ伸びるスカイライン。' },
  },
  zh: {
    nature: { title: '自然', description: '从下龙湾到湄公河三角洲，壮丽风光尽收眼底。' },
    hanoi: { title: '河内', description: '在古老街巷里呼吸历史的城市灵魂。' },
    'hoi-an': { title: '会安', description: '灯笼点亮的世界遗产古镇之旅。' },
    food: { title: '美食', description: '从街头河粉到顺化宫廷菜，味觉交响。' },
    heritage: { title: '遗产', description: '寺庙、宝塔与节庆中被守护的千年传统。' },
    'modern-vietnam': { title: '现代越南', description: '西贡的动感与不断崛起的天际线。' },
  },
  ko: {
    nature: { title: '자연', description: '하롱베이부터 메콩델타까지, 숨 막히는 풍경.' },
    hanoi: { title: '하노이', description: '오래된 골목마다 역사가 숨 쉬는 베트남의 심장.' },
    'hoi-an': { title: '호이안', description: '등불이 비추는 유네스코 세계유산 고도.' },
    food: { title: '음식', description: '길거리 쌀국수부터 후에 궁중요리까지, 풍미의 교향곡.' },
    heritage: { title: '유산', description: '사원과 축제 속에 이어지는 수세기의 전통.' },
    'modern-vietnam': { title: '현대 베트남', description: '사이공의 에너지와 미래로 뻗는 스카이라인.' },
  },
};

const CARD_COPY: Record<LocaleKey, Record<DiscoveryCard['id'], CardCopy>> = {
  en: {
    'card-1': { title: 'Sapa Terraces', description: 'Emerald green rice fields sculpted into the mountainside.', category: 'places' },
    'card-2': { title: 'Bánh Mì Culture', description: "The world's favorite sandwich, perfected on the streets of Saigon.", category: 'food' },
    'card-3': { title: 'Ao Dai Elegance', description: 'The traditional silk tunic that embodies Vietnamese grace.', category: 'culture' },
    'card-4': { title: 'Da Nang Nightlife', description: 'Modern bridges and vibrant lights along the Han River.', category: 'cityLife' },
  },
  vi: {
    'card-1': { title: 'Ruộng bậc thang Sa Pa', description: 'Sắc xanh ngọc uốn lượn theo sườn núi.' , category: 'places' },
    'card-2': { title: 'Văn hoá Bánh Mì', description: 'Chiếc bánh “quốc dân” trên những con phố Sài Gòn.', category: 'food' },
    'card-3': { title: 'Vẻ đẹp Áo Dài', description: 'Trang phục truyền thống tôn vinh nét duyên Việt.', category: 'culture' },
    'card-4': { title: 'Đà Nẵng về đêm', description: 'Những cây cầu hiện đại và ánh đèn rực rỡ bên sông Hàn.', category: 'cityLife' },
  },
  ja: {
    'card-1': { title: 'サパの棚田', description: '山肌に刻まれたエメラルドの稲穂。', category: 'places' },
    'card-2': { title: 'バインミー文化', description: 'サイゴンの街角で磨かれた、世界が愛するサンド。', category: 'food' },
    'card-3': { title: 'アオザイの優雅', description: 'ベトナムの美を象徴する伝統衣装。', category: 'culture' },
    'card-4': { title: 'ダナンのナイトライフ', description: 'ハン川沿いに輝く近代的な橋と光。', category: 'cityLife' },
  },
  zh: {
    'card-1': { title: '沙坝梯田', description: '山间层层叠叠的翡翠稻田。', category: 'places' },
    'card-2': { title: '法棍三明治文化', description: '在西贡街头被打磨到极致的招牌美味。', category: 'food' },
    'card-3': { title: '奥黛之美', description: '丝绸长衫承载着越南的优雅。', category: 'culture' },
    'card-4': { title: '岘港夜色', description: '韩江两岸的现代桥梁与璀璨灯火。', category: 'cityLife' },
  },
  ko: {
    'card-1': { title: '사파 계단식 논', description: '산비탈을 따라 펼쳐진 에메랄드빛 논.', category: 'places' },
    'card-2': { title: '반미 문화', description: '사이공 거리에서 완성된 세계적인 샌드위치.', category: 'food' },
    'card-3': { title: '아오자이의 우아함', description: '베트남의 품격을 담은 전통 실크 의상.', category: 'culture' },
    'card-4': { title: '다낭의 밤', description: '한강을 따라 이어지는 현대적인 다리와 야경.', category: 'cityLife' },
  },
};


export function getLocalizedSceneChapters(locale: LocaleKey): SceneChapter[] {
  const copy = CHAPTER_COPY[locale] ?? CHAPTER_COPY.en;
  return SCENE_CHAPTERS.map((c) => ({ ...c, ...copy[c.id] }));
}

export function getLocalizedDiscoveryCards(locale: LocaleKey): DiscoveryCard[] {
  const copy = CARD_COPY[locale] ?? CARD_COPY.en;
  return DISCOVERY_CARDS.map((c) => {
    const localized = copy[c.id] ?? { title: c.title, description: c.description, category: c.category };
    return { ...c, ...localized };
  });
}
