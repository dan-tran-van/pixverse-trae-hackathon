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

export interface StorySection {
  title: string;
  paragraphs: string[];
}

const STORY_SECTIONS: Record<LocaleKey, Record<SceneChapter['id'], StorySection[]>> = {
  en: {
    nature: [
      {
        title: 'Breathe in the Landscape',
        paragraphs: [
          'Vietnam’s natural rhythm is cinematic by design—misty bays, layered mountains, and rivers that turn sunlight into a moving canvas.',
          'In this scene, the video becomes a compass: every cut invites you to slow down, listen, and imagine your route.',
        ],
      },
      {
        title: 'How to Explore',
        paragraphs: [
          'Tap chapters to jump through the film and compare moods—coastline calm, highland cool, delta warmth.',
          'Save your preferred chapter and writing mode to build a localized campaign that matches your audience’s reading habits.',
        ],
      },
    ],
    hanoi: [
      {
        title: 'A City of Layers',
        paragraphs: [
          'Hanoi is a living archive—street cafés, quiet courtyards, and lakeside walks stitched together by everyday rituals.',
          'The video’s pacing mirrors the city: unhurried, detailed, and unexpectedly modern.',
        ],
      },
      {
        title: 'Local Tips',
        paragraphs: [
          'Watch for small cues: morning markets, scooters at golden hour, and the soft glow of storefronts after rain.',
          'Use the booking panel to pick a date and leave your contact details for a mock trip request.',
        ],
      },
    ],
    'hoi-an': [
      {
        title: 'Lantern Light & Quiet Alleys',
        paragraphs: [
          'Hội An slows time. The glow of lanterns turns the riverfront into a gentle stage—romantic, calm, and beautifully framed.',
          'This chapter is designed for audiences who love atmosphere: the layout can shift into vertical writing for an editorial feel.',
        ],
      },
      {
        title: 'A Campaign Moment',
        paragraphs: [
          'Pair this scene with discovery cards about culture and heritage to guide users from inspiration to action.',
          'Save the configuration to generate a localized preview link.',
        ],
      },
    ],
    food: [
      {
        title: 'Flavor as a Story',
        paragraphs: [
          'Vietnamese cuisine is built on balance—fresh herbs, bright acidity, and slow simmered depth.',
          'In the video, food isn’t a cutaway; it’s a narrative engine that triggers curiosity and conversion.',
        ],
      },
      {
        title: 'From Watch to Taste',
        paragraphs: [
          'Use the chapter list to revisit the food sequence and compare it against the city scenes for a full itinerary arc.',
          'Book a trip date to simulate a real travel flow after the story lands.',
        ],
      },
    ],
    heritage: [
      {
        title: 'Tradition in Motion',
        paragraphs: [
          'Heritage in Vietnam is not static—temples, craft villages, and festivals remain part of daily life.',
          'This scene highlights texture and ceremony, ideal for localized campaigns that lean into cultural respect.',
        ],
      },
      {
        title: 'Editorial Layout',
        paragraphs: [
          'Vertical typography can make the campaign feel more native for East Asian audiences without changing the video.',
          'Use the audience selector to see copy, CTAs, and layout shift together.',
        ],
      },
    ],
    'modern-vietnam': [
      {
        title: 'Tomorrow, Already Here',
        paragraphs: [
          'Modern Vietnam is a contrast: sleek cafés, new skylines, and the energy of late-night streets.',
          'The campaign uses this chapter to signal freshness and progress—perfect for conversion-focused CTAs.',
        ],
      },
      {
        title: 'Build a Localized Variant',
        paragraphs: [
          'Switch audiences to change the tone, then choose vertical writing for a bold, magazine-like layout.',
          'Save your selections to create a shareable mock campaign link.',
        ],
      },
    ],
  },
  vi: {
    nature: [
      {
        title: 'Hít thở cùng thiên nhiên',
        paragraphs: [
          'Thiên nhiên Việt Nam giàu chất điện ảnh—sương phủ vịnh biển, núi lớp lớp và những dòng sông phản chiếu ánh nắng.',
          'Ở chương này, video đóng vai trò “la bàn”: mỗi nhịp cắt mở ra một lối khám phá mới.',
        ],
      },
      {
        title: 'Gợi ý khám phá',
        paragraphs: [
          'Chạm vào các chương để nhảy qua các phân cảnh và so sánh cảm xúc—êm đềm ven biển, mát lạnh cao nguyên, ấm áp miền sông nước.',
          'Lưu chương yêu thích và chế độ chữ để dựng bản chiến dịch phù hợp thói quen đọc của từng thị trường.',
        ],
      },
    ],
    hanoi: [
      {
        title: 'Thành phố nhiều lớp',
        paragraphs: [
          'Hà Nội như một cuốn lưu trữ sống—quán cà phê vỉa hè, sân nhỏ yên tĩnh và những bước chân bên hồ.',
          'Nhịp video cũng giống thành phố: chậm rãi, chi tiết, và hiện đại một cách bất ngờ.',
        ],
      },
      {
        title: 'Mẹo nhỏ',
        paragraphs: [
          'Để ý những dấu hiệu tinh tế: chợ sáng, ánh vàng giờ hoàng hôn, và đèn phố sau cơn mưa.',
          'Chọn ngày đi và để lại thông tin liên hệ để mô phỏng luồng đặt chuyến đi.',
        ],
      },
    ],
    'hoi-an': [
      {
        title: 'Ánh đèn lồng & ngõ nhỏ',
        paragraphs: [
          'Hội An làm thời gian chậm lại. Đèn lồng biến phố cổ thành một sân khấu dịu dàng bên sông.',
          'Chương này phù hợp cho những thị trường yêu không khí—có thể chuyển sang chữ dọc để tăng chất biên tập.',
        ],
      },
      {
        title: 'Khoảnh khắc chiến dịch',
        paragraphs: [
          'Kết hợp với thẻ khám phá về văn hoá và di sản để dẫn dắt người xem từ cảm hứng đến hành động.',
          'Lưu cấu hình để tạo link xem trước bản địa hoá.',
        ],
      },
    ],
    food: [
      {
        title: 'Hương vị kể chuyện',
        paragraphs: [
          'Ẩm thực Việt là sự cân bằng—rau thơm tươi, vị chua sáng và độ đậm đà từ nồi nước dùng.',
          'Trong video, món ăn không chỉ là “cắt cảnh”, mà là động lực kích hoạt tò mò và chuyển đổi.',
        ],
      },
      {
        title: 'Từ xem đến thưởng',
        paragraphs: [
          'Xem lại phân cảnh ẩm thực rồi đối chiếu với cảnh thành phố để tạo một mạch lịch trình hoàn chỉnh.',
          'Chọn ngày đi để mô phỏng hành trình sau khi câu chuyện chạm cảm xúc.',
        ],
      },
    ],
    heritage: [
      {
        title: 'Truyền thống đang chuyển động',
        paragraphs: [
          'Di sản ở Việt Nam không đứng yên—đền chùa, làng nghề và lễ hội vẫn là một phần đời sống.',
          'Chương này nhấn vào chất liệu và nghi lễ, phù hợp chiến dịch bản địa hoá đề cao sự tôn trọng văn hoá.',
        ],
      },
      {
        title: 'Bố cục biên tập',
        paragraphs: [
          'Chữ dọc có thể làm chiến dịch “nội địa” hơn cho khán giả Đông Á mà không cần đổi video.',
          'Dùng bộ chọn đối tượng để xem copy, CTA và bố cục thay đổi đồng bộ.',
        ],
      },
    ],
    'modern-vietnam': [
      {
        title: 'Ngày mai đã đến',
        paragraphs: [
          'Việt Nam hiện đại là tương phản: quán cà phê mới, đường chân trời đang vươn lên và nhịp phố đêm.',
          'Chiến dịch dùng chương này để tạo cảm giác mới mẻ—rất hợp CTA theo hướng chuyển đổi.',
        ],
      },
      {
        title: 'Dựng bản địa hoá',
        paragraphs: [
          'Chuyển đối tượng để đổi tông, rồi bật chữ dọc để có bố cục như tạp chí.',
          'Lưu lựa chọn để tạo link chiến dịch mô phỏng có thể chia sẻ.',
        ],
      },
    ],
  },
  ja: {
    nature: [
      {
        title: '風景を深呼吸する',
        paragraphs: [
          'ベトナムの自然は最初から映画的です。霧の湾、幾重にも重なる山、光を映す川。',
          'この章では映像が羅針盤となり、カットごとに新しい旅程が立ち上がります。',
        ],
      },
      {
        title: '楽しみ方',
        paragraphs: [
          '章をタップして映像を行き来し、海・高原・デルタの空気感を比較してみてください。',
          'お気に入りの章と書字方向を保存すると、読み慣れた体験に合わせたキャンペーンが作れます。',
        ],
      },
    ],
    hanoi: [
      {
        title: '重なり合う都市',
        paragraphs: [
          'ハノイは生きたアーカイブ。路地のカフェ、静かな中庭、湖畔の散歩が日常の儀式として続きます。',
          '映像のテンポも同じく、ゆったりと細部を見せながら、現代性を差し込みます。',
        ],
      },
      {
        title: 'ローカルの視点',
        paragraphs: [
          '朝市、雨上がりの店先の光、黄昏時のバイクの流れ—小さな合図が魅力を深めます。',
          '日付と連絡先を入力して、旅の予約フローをデモとして体験できます。',
        ],
      },
    ],
    'hoi-an': [
      {
        title: 'ランタンの光、静かな路地',
        paragraphs: [
          'ホイアンは時間をゆるめます。灯りが川辺を優しく照らし、穏やかな舞台のように。',
          '雰囲気重視のオーディエンスに最適。縦書きに切り替えると編集感が増します。',
        ],
      },
      {
        title: 'キャンペーンの見せ場',
        paragraphs: [
          '文化・遺産のカードと組み合わせ、興味から行動へ導く導線を作れます。',
          '設定を保存してローカライズ版のプレビューリンクを生成しましょう。',
        ],
      },
    ],
    food: [
      {
        title: '味が物語を動かす',
        paragraphs: [
          'ベトナム料理の核はバランス。ハーブの香り、酸味、出汁の深みが一体になります。',
          '映像では食が“挿し絵”ではなく、好奇心と転換を生むストーリーの装置です。',
        ],
      },
      {
        title: '観る→行く',
        paragraphs: [
          '食の章を見返し、都市の章と対比して旅の弧を描いてみてください。',
          '日付を選んで予約デモを完了すると、キャンペーンの流れが体感できます。',
        ],
      },
    ],
    heritage: [
      {
        title: '伝統は動いている',
        paragraphs: [
          '遺産は固定された展示ではありません。寺院、工芸の村、祭りが日常の中で生きています。',
          '質感と儀礼を強調し、文化への敬意を前面に出すローカライズに向きます。',
        ],
      },
      {
        title: '編集レイアウト',
        paragraphs: [
          '動画はそのままに、縦書きを使うだけで東アジア向けに“より自然”にできます。',
          'オーディエンスを切り替えて、コピー・CTA・レイアウトが一緒に変わる様子を確認できます。',
        ],
      },
    ],
    'modern-vietnam': [
      {
        title: 'すでに始まっている明日',
        paragraphs: [
          'モダンなベトナムはコントラスト。新しいカフェ、伸びるスカイライン、夜の熱量。',
          '新鮮さと前進を示すこの章は、コンバージョン重視のCTAと相性抜群です。',
        ],
      },
      {
        title: 'ローカライズを作る',
        paragraphs: [
          'オーディエンスでトーンを切り替え、縦書きで雑誌のような大胆さを加えられます。',
          '設定を保存して共有用のモックリンクを作成できます。',
        ],
      },
    ],
  },
  zh: {
    nature: [
      {
        title: '在风景里深呼吸',
        paragraphs: [
          '越南的自然天生电影感：薄雾海湾、层叠群山、把阳光变成画面的河流。',
          '这一章里，视频就是你的指南针，每一次剪辑都在邀请你放慢脚步。',
        ],
      },
      {
        title: '如何探索',
        paragraphs: [
          '点击章节在不同氛围间切换：海岸的平静、高地的清凉、三角洲的温暖。',
          '保存章节与书写模式，就能生成更贴合受众阅读习惯的本地化版本。',
        ],
      },
    ],
    hanoi: [
      {
        title: '层层叠叠的城市',
        paragraphs: [
          '河内是一座“活档案”：街角咖啡、安静庭院、湖边散步，都属于日常的仪式感。',
          '视频节奏也像这座城市：缓慢、细节丰富，同时不失现代气息。',
        ],
      },
      {
        title: '本地视角',
        paragraphs: [
          '留意细节：清晨市场、雨后门店的微光、金色时刻的车流。',
          '选择日期并填写联系方式，体验一个模拟的出行预订流程。',
        ],
      },
    ],
    'hoi-an': [
      {
        title: '灯笼与静巷',
        paragraphs: [
          '会安让时间慢下来。灯笼把河岸点亮成温柔的舞台，浪漫又克制。',
          '适合偏爱氛围的受众；切换纵排排版会更像杂志式叙事。',
        ],
      },
      {
        title: '转化时刻',
        paragraphs: [
          '搭配文化与遗产的探索卡片，引导用户从“被打动”走向“行动”。',
          '保存设置并生成本地化预览链接。',
        ],
      },
    ],
    food: [
      {
        title: '风味也是故事',
        paragraphs: [
          '越南菜讲究平衡：香草、明亮的酸度、慢火熬出的深度。',
          '在视频里，美食不是装饰，而是驱动探索与转化的叙事引擎。',
        ],
      },
      {
        title: '从观看到品尝',
        paragraphs: [
          '反复观看美食段落，再与城市段落对比，拼出完整的行程弧线。',
          '选择出行日期，模拟一次真实的旅行决策。',
        ],
      },
    ],
    heritage: [
      {
        title: '传统在流动',
        paragraphs: [
          '越南的文化遗产不是静态展品：寺庙、手工艺村落与节庆依然是生活的一部分。',
          '这一章强调质感与仪式，非常适合重视文化尊重的本地化呈现。',
        ],
      },
      {
        title: '编辑式版面',
        paragraphs: [
          '无需更换视频，仅通过纵排书写就能让东亚受众感到更“本地”。',
          '切换受众即可看到文案、CTA 与布局同步变化。',
        ],
      },
    ],
    'modern-vietnam': [
      {
        title: '明天已在此刻',
        paragraphs: [
          '现代越南充满对比：精品咖啡馆、新天际线、夜晚街头的能量。',
          '这一章用来传递新鲜与进取，非常适合转化导向的CTA。',
        ],
      },
      {
        title: '创建本地化版本',
        paragraphs: [
          '先切换受众调整语气，再切换纵排获得更大胆的杂志感。',
          '保存选择即可生成可分享的活动链接。',
        ],
      },
    ],
  },
  ko: {
    nature: [
      {
        title: '풍경을 깊게 들이마시다',
        paragraphs: [
          '베트남의 자연은 그 자체로 영화적입니다. 안개 낀 만, 겹겹이 이어진 산, 빛을 담는 강.',
          '이 장면에서 영상은 나침반이 되어, 컷마다 새로운 동선을 제안합니다.',
        ],
      },
      {
        title: '탐색 방법',
        paragraphs: [
          '챕터를 눌러 분위기를 비교해보세요: 해안의 고요함, 고지대의 선선함, 델타의 따뜻함.',
          '챕터와 쓰기 모드를 저장하면 오디언스의 읽기 습관에 맞춘 로컬라이즈 캠페인을 만들 수 있어요.',
        ],
      },
    ],
    hanoi: [
      {
        title: '겹겹이 쌓인 도시',
        paragraphs: [
          '하노이는 살아있는 아카이브입니다. 거리의 카페, 조용한 안뜰, 호숫가 산책이 일상의 리듬을 만듭니다.',
          '영상의 템포도 도시처럼 느긋하고 디테일하며, 의외의 모던함을 보여줍니다.',
        ],
      },
      {
        title: '로컬 팁',
        paragraphs: [
          '아침 시장, 비 온 뒤 가게 불빛, 골든아워의 스쿠터 흐름 같은 작은 신호를 찾아보세요.',
          '날짜 선택과 연락처 입력으로 예약 플로우 데모를 완성할 수 있습니다.',
        ],
      },
    ],
    'hoi-an': [
      {
        title: '등불의 빛, 고요한 골목',
        paragraphs: [
          '호이안은 시간을 느리게 만듭니다. 강변의 등불은 부드러운 무대를 만들어내죠.',
          '분위기를 좋아하는 타깃에 적합하며, 세로쓰기 레이아웃으로 편집적 감성을 더할 수 있어요.',
        ],
      },
      {
        title: '전환의 순간',
        paragraphs: [
          '문화/유산 카드와 함께 배치해 감정에서 행동으로 이어지는 흐름을 만들 수 있습니다.',
          '설정을 저장해 로컬라이즈 프리뷰 링크를 생성하세요.',
        ],
      },
    ],
    food: [
      {
        title: '맛이 이야기를 움직인다',
        paragraphs: [
          '베트남 음식은 균형이 핵심입니다. 허브의 신선함, 산미, 오래 끓인 국물의 깊이.',
          '영상 속 음식은 장식이 아니라 탐색과 전환을 만드는 서사 장치입니다.',
        ],
      },
      {
        title: '보기에서 맛보기로',
        paragraphs: [
          '음식 챕터를 다시 보고 도시 챕터와 대비하며 완성도 높은 일정 곡선을 만들어보세요.',
          '여행 날짜를 선택해 실제 결정 흐름을 데모로 체험할 수 있어요.',
        ],
      },
    ],
    heritage: [
      {
        title: '전통은 움직인다',
        paragraphs: [
          '유산은 박제된 전시가 아닙니다. 사원, 공예 마을, 축제가 여전히 일상 속에 살아있습니다.',
          '이 장면은 질감과 의례를 강조해 문화적 존중을 중시하는 로컬라이즈에 잘 맞습니다.',
        ],
      },
      {
        title: '에디토리얼 레이아웃',
        paragraphs: [
          '영상을 바꾸지 않아도 세로쓰기만으로 동아시아 타깃에게 더 자연스러운 인상을 줄 수 있어요.',
          '오디언스를 바꾸면 문구/CTA/레이아웃이 함께 변하는 걸 확인할 수 있습니다.',
        ],
      },
    ],
    'modern-vietnam': [
      {
        title: '내일이 이미 시작됐다',
        paragraphs: [
          '현대 베트남은 대비가 매력입니다. 세련된 카페, 올라가는 스카이라인, 밤거리의 에너지.',
          '이 챕터는 신선함과 전진성을 보여주며 전환형 CTA와 잘 어울립니다.',
        ],
      },
      {
        title: '로컬라이즈 버전 만들기',
        paragraphs: [
          '오디언스로 톤을 바꾼 뒤, 세로쓰기로 매거진 같은 강한 레이아웃을 만들 수 있어요.',
          '선택을 저장해 공유 가능한 캠페인 링크를 생성하세요.',
        ],
      },
    ],
  },
};

export function getLocalizedStorySections(locale: LocaleKey, chapterId: SceneChapter['id']): StorySection[] {
  const byLocale = STORY_SECTIONS[locale] ?? STORY_SECTIONS.en;
  return byLocale[chapterId] ?? STORY_SECTIONS.en[chapterId];
}


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
