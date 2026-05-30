import type { AudienceKey } from '@/types/campaign';

export type LocaleKey = 'en' | 'vi' | 'ja' | 'zh' | 'ko';

export const getLocaleFromAudience = (audience: AudienceKey): LocaleKey => {
  switch (audience) {
    case 'vietnam':
      return 'vi';
    case 'japan':
      return 'ja';
    case 'china':
    case 'taiwan':
      return 'zh';
    case 'korea':
      return 'ko';
    case 'global':
    default:
      return 'en';
  }
};

export type TranslationKey =
  | 'app.video.unsupported'
  | 'app.hero.exploreScenes'
  | 'app.hero.featuredBadge'
  | 'app.page.section.worldwideInterest'
  | 'app.page.section.globalStoryTitle'
  | 'app.page.section.globalStoryDescription'
  | 'app.page.section.culturalElegance'
  | 'app.page.section.localizedExperienceTitle'
  | 'app.page.section.localizedExperienceDescription'
  | 'app.sections.visualStorytelling.title'
  | 'app.sections.visualStorytelling.description'
  | 'app.sections.sceneChapters'
  | 'app.sections.currentlyViewing'
  | 'app.sections.discoveryMoments.title'
  | 'app.sections.discoveryMoments.description'
  | 'app.sections.discoveryMoments.learnMore'
  | 'app.categories.places'
  | 'app.categories.food'
  | 'app.categories.culture'
  | 'app.categories.cityLife'
  | 'app.sections.interactions.likes'
  | 'app.sections.interactions.bookedCount'
  | 'app.sections.interactions.readyTitle'
  | 'app.sections.interactions.readyDescription'
  | 'app.sections.interactions.bookNow'
  | 'app.sections.interactions.booked'
  | 'app.sections.interactions.successMsg'
  | 'app.sections.interactions.communityTitle'
  | 'app.sections.interactions.commentPlaceholder'
  | 'app.sections.interactions.postComment'
  | 'app.sections.interactions.seedComment1'
  | 'app.sections.interactions.seedComment2'
  | 'app.sections.interactions.you'
  | 'app.sections.interactions.editTrip'
  | 'app.sections.interactions.cancelTrip'
  | 'app.sections.interactions.bookedDate'
  | 'app.sections.interactions.modal.title.book'
  | 'app.sections.interactions.modal.title.edit'
  | 'app.sections.interactions.modal.dateLabel'
  | 'app.sections.interactions.modal.confirm'
  | 'app.sections.interactions.modal.close'
  | 'app.sections.interactions.modal.nameLabel'
  | 'app.sections.interactions.modal.phoneLabel'
  | 'app.sections.interactions.modal.emailLabel'
  | 'app.sections.interactions.modal.phonePlaceholder'
  | 'app.sections.interactions.modal.namePlaceholder'
  | 'app.sections.interactions.modal.emailPlaceholder'
  | 'app.sections.interactions.modal.phoneError'
  | 'app.sections.audienceSwitcher.title'
  | 'app.sections.audienceSwitcher.description'
  | 'app.sections.audienceSwitcher.livePreview'
  | 'app.sections.audienceSwitcher.headline'
  | 'app.sections.audienceSwitcher.subheadline'
  | 'app.sections.audienceSwitcher.ctaLabel'
  | 'app.conversion.readyTitle'
  | 'app.conversion.readyDescription'
  | 'app.conversion.summaryAudience'
  | 'app.conversion.summaryLayout'
  | 'app.conversion.create'
  | 'app.conversion.savedTitle'
  | 'app.conversion.savedDescription'
  | 'app.conversion.copy'
  | 'app.conversion.copied'
  | 'app.conversion.customizeAnother'
  | 'app.preview.typographyTitle'
  | 'app.preview.typographyDescription'
  | 'app.preview.toggle.horizontal'
  | 'app.preview.toggle.vertical'
  | 'app.preview.warning'
  | 'app.studioBridge.badge'
  | 'app.studioBridge.title'
  | 'app.studioBridge.description'
  | 'app.studioBridge.enter'
  | 'app.studio.back'
  | 'app.studio.title'
  | 'app.studio.description'
  | 'app.studio.controls.targetAudience'
  | 'app.studio.controls.writingMode'
  | 'app.studio.controls.videoPlaceholder'
  | 'app.studio.generate'
  | 'app.studio.generating'
  | 'app.studio.shareReady'
  | 'app.studio.openPreview'
  | 'app.studio.previewHeader'
  | 'app.footer.copyright'
  | 'app.footer.link.destinations'
  | 'app.footer.link.gastronomy'
  | 'app.footer.link.culturalHeritage'
  | 'app.preview.topBar';

export type Translations = Record<TranslationKey, string>;

export const TRANSLATIONS: Record<LocaleKey, Translations> = {
  en: {
    'app.video.unsupported': 'Your browser does not support the video tag.',
    'app.hero.exploreScenes': 'Explore Scenes',
    'app.hero.featuredBadge': 'Featured PixVerse Production',
    'app.page.section.worldwideInterest': 'Worldwide Interest',
    'app.page.section.globalStoryTitle': 'A Global Story',
    'app.page.section.globalStoryDescription':
      'See how travelers from different cultures experience the Vietnam Discovery campaign.',
    'app.page.section.culturalElegance': 'Cultural Elegance',
    'app.page.section.localizedExperienceTitle': 'Localized Experience',
    'app.page.section.localizedExperienceDescription':
      'Our campaign adapts to the local soul, including native vertical typography for East Asian audiences.',
    'app.sections.visualStorytelling.title': 'Visual Storytelling',
    'app.sections.visualStorytelling.description':
      'Explore Vietnam through these curated scenes, each capturing a unique facet of our spirit.',
    'app.sections.sceneChapters': 'Scene Chapters',
    'app.sections.currentlyViewing': 'Currently Viewing: {title}',
    'app.sections.discoveryMoments.title': 'Discovery Moments',
    'app.sections.discoveryMoments.description':
      'Dive deeper into the details that make Vietnam a destination like no other.',
    'app.sections.discoveryMoments.learnMore': 'Learn More →',
    'app.categories.places': 'Places',
    'app.categories.food': 'Food',
    'app.categories.culture': 'Culture',
    'app.categories.cityLife': 'City Life',
    'app.sections.interactions.likes': '{count} Likes',
    'app.sections.interactions.bookedCount': '{count} People booked this trip',
    'app.sections.interactions.readyTitle': 'Ready to Discover?',
    'app.sections.interactions.readyDescription':
      'Join the thousands of travelers who have explored Vietnam after seeing this campaign.',
    'app.sections.interactions.bookNow': 'Book Your Vietnam Trip Now',
    'app.sections.interactions.booked': '✓ Trip Booked!',
    'app.sections.interactions.successMsg': 'A travel consultant will contact you soon!',
    'app.sections.interactions.communityTitle': 'Community Discussion',
    'app.sections.interactions.commentPlaceholder': 'What do you think about the Vietnam Discovery campaign?',
    'app.sections.interactions.postComment': 'Post Comment',
    'app.sections.interactions.seedComment1': 'The cinematography in this video is absolutely stunning! Vietnam looks magical.',
    'app.sections.interactions.seedComment2': "Can't wait to try that Bánh Mì culture scene in person!",
    'app.sections.interactions.you': 'You',
    'app.sections.interactions.editTrip': 'Edit Date',
    'app.sections.interactions.cancelTrip': 'Cancel Trip',
    'app.sections.interactions.bookedDate': 'Booked date: {date}',
    'app.sections.interactions.modal.title.book': 'Select your travel date',
    'app.sections.interactions.modal.title.edit': 'Edit your travel date',
    'app.sections.interactions.modal.dateLabel': 'Travel date',
    'app.sections.interactions.modal.confirm': 'Confirm',
    'app.sections.interactions.modal.close': 'Close',
    'app.sections.interactions.modal.nameLabel': 'Full name',
    'app.sections.interactions.modal.phoneLabel': 'Phone number',
    'app.sections.interactions.modal.emailLabel': 'Email (optional)',
    'app.sections.interactions.modal.namePlaceholder': 'Your name',
    'app.sections.interactions.modal.phonePlaceholder': 'e.g. +81 90 1234 5678',
    'app.sections.interactions.modal.emailPlaceholder': 'you@example.com',
    'app.sections.interactions.modal.phoneError': 'Please enter a valid phone number.',
    'app.sections.audienceSwitcher.title': 'Global Reach, Local Soul',
    'app.sections.audienceSwitcher.description':
      'Select an audience to see how the campaign adapts its message and visual style for different cultures.',
    'app.sections.audienceSwitcher.livePreview': 'Live Localization Preview',
    'app.sections.audienceSwitcher.headline': 'Headline',
    'app.sections.audienceSwitcher.subheadline': 'Subheadline',
    'app.sections.audienceSwitcher.ctaLabel': 'CTA Label',
    'app.conversion.readyTitle': 'Ready to Launch Your Campaign?',
    'app.conversion.readyDescription':
      'Save your localized settings and generate a unique campaign link to share with your audience.',
    'app.conversion.summaryAudience': 'Audience',
    'app.conversion.summaryLayout': 'Layout',
    'app.conversion.create': 'Create Localized Campaign',
    'app.conversion.savedTitle': 'Campaign Saved!',
    'app.conversion.savedDescription': 'Your localized Vietnam Discovery campaign has been successfully created.',
    'app.conversion.copy': 'Copy Link',
    'app.conversion.copied': 'Copied!',
    'app.conversion.customizeAnother': 'Customize Another',
    'app.preview.typographyTitle': 'Typography & Layout',
    'app.preview.typographyDescription':
      'Experience the elegance of East Asian vertical writing modes, a key cultural differentiator for Japan, Taiwan, and China.',
    'app.preview.toggle.horizontal': 'Horizontal',
    'app.preview.toggle.vertical': 'Vertical',
    'app.preview.warning':
      '* Note: This audience typically uses horizontal layout, but we are previewing the vertical mode for demonstration.',
    'app.studioBridge.badge': 'For Marketing Teams',
    'app.studioBridge.title': 'Customize Your Campaign',
    'app.studioBridge.description':
      'Use our Studio tool to customize this campaign for your region, adjust typography, and generate localized preview links in seconds.',
    'app.studioBridge.enter': 'Enter Studio Mode →',
    'app.studio.back': '← Back to Campaign',
    'app.studio.title': 'Campaign Studio',
    'app.studio.description': 'Experiment and customize your campaign preview using the PixVerse demo video.',
    'app.studio.controls.targetAudience': 'Target Audience',
    'app.studio.controls.writingMode': 'Writing Mode',
    'app.studio.controls.videoPlaceholder': 'Video Placeholder',
    'app.studio.generate': 'Generate Campaign Link',
    'app.studio.generating': 'Generating...',
    'app.studio.shareReady': 'Your campaign is ready!',
    'app.studio.openPreview': 'Open Preview ↗',
    'app.studio.previewHeader': 'Live Preview',
    'app.footer.copyright': '© 2026 Vietnam Discovery Campaign. Powered by PixVerse AI Video Production.',
    'app.footer.link.destinations': 'Destinations',
    'app.footer.link.gastronomy': 'Gastronomy',
    'app.footer.link.culturalHeritage': 'Cultural Heritage',
    'app.preview.topBar':
      'You are viewing a shared Vietnam Discovery Campaign localized for {audience} ({mode})',
  },
  vi: {
    'app.video.unsupported': 'Trình duyệt của bạn không hỗ trợ phát video.',
    'app.hero.exploreScenes': 'Khám phá các cảnh',
    'app.hero.featuredBadge': 'Video PixVerse nổi bật',
    'app.page.section.worldwideInterest': 'Sức hút toàn cầu',
    'app.page.section.globalStoryTitle': 'Câu chuyện toàn cầu',
    'app.page.section.globalStoryDescription': 'Xem cách du khách từ các nền văn hoá trải nghiệm Vietnam Discovery.',
    'app.page.section.culturalElegance': 'Tinh tế văn hoá',
    'app.page.section.localizedExperienceTitle': 'Trải nghiệm bản địa hoá',
    'app.page.section.localizedExperienceDescription':
      'Chiến dịch thích ứng với từng thị trường, bao gồm typography dọc cho khán giả Đông Á.',
    'app.sections.visualStorytelling.title': 'Kể chuyện bằng hình ảnh',
    'app.sections.visualStorytelling.description':
      'Khám phá Việt Nam qua các cảnh được tuyển chọn, mỗi cảnh thể hiện một sắc thái riêng của tinh thần Việt.',
    'app.sections.sceneChapters': 'Chương cảnh',
    'app.sections.currentlyViewing': 'Đang xem: {title}',
    'app.sections.discoveryMoments.title': 'Khoảnh khắc khám phá',
    'app.sections.discoveryMoments.description':
      'Đi sâu hơn vào những chi tiết làm nên một Việt Nam không thể trộn lẫn.',
    'app.sections.discoveryMoments.learnMore': 'Tìm hiểu thêm →',
    'app.categories.places': 'Địa điểm',
    'app.categories.food': 'Ẩm thực',
    'app.categories.culture': 'Văn hoá',
    'app.categories.cityLife': 'Đời sống đô thị',
    'app.sections.interactions.likes': '{count} lượt thích',
    'app.sections.interactions.bookedCount': '{count} người đã đặt chuyến đi',
    'app.sections.interactions.readyTitle': 'Sẵn sàng khám phá?',
    'app.sections.interactions.readyDescription':
      'Tham gia cùng hàng ngàn du khách đã khám phá Việt Nam sau khi xem chiến dịch này.',
    'app.sections.interactions.bookNow': 'Đặt chuyến đi Việt Nam ngay',
    'app.sections.interactions.booked': '✓ Đã đặt chuyến!',
    'app.sections.interactions.successMsg': 'Tư vấn viên du lịch sẽ liên hệ với bạn sớm!',
    'app.sections.interactions.communityTitle': 'Thảo luận cộng đồng',
    'app.sections.interactions.commentPlaceholder': 'Bạn nghĩ gì về chiến dịch Vietnam Discovery?',
    'app.sections.interactions.postComment': 'Đăng bình luận',
    'app.sections.interactions.seedComment1': 'Khung hình quá đẹp! Việt Nam thật kỳ diệu trong video này.',
    'app.sections.interactions.seedComment2': 'Mình muốn thử cảnh văn hoá Bánh Mì ngoài đời ngay!',
    'app.sections.interactions.you': 'Bạn',
    'app.sections.interactions.editTrip': 'Sửa ngày',
    'app.sections.interactions.cancelTrip': 'Huỷ chuyến',
    'app.sections.interactions.bookedDate': 'Ngày đã đặt: {date}',
    'app.sections.interactions.modal.title.book': 'Chọn ngày đi',
    'app.sections.interactions.modal.title.edit': 'Sửa ngày đi',
    'app.sections.interactions.modal.dateLabel': 'Ngày đi',
    'app.sections.interactions.modal.confirm': 'Xác nhận',
    'app.sections.interactions.modal.close': 'Đóng',
    'app.sections.interactions.modal.nameLabel': 'Họ và tên',
    'app.sections.interactions.modal.phoneLabel': 'Số điện thoại',
    'app.sections.interactions.modal.emailLabel': 'Email (không bắt buộc)',
    'app.sections.interactions.modal.namePlaceholder': 'Tên của bạn',
    'app.sections.interactions.modal.phonePlaceholder': 'Ví dụ: +84 912 345 678',
    'app.sections.interactions.modal.emailPlaceholder': 'ban@example.com',
    'app.sections.interactions.modal.phoneError': 'Vui lòng nhập số điện thoại hợp lệ.',
    'app.sections.audienceSwitcher.title': 'Vươn xa toàn cầu, giữ hồn địa phương',
    'app.sections.audienceSwitcher.description':
      'Chọn đối tượng để xem chiến dịch thay đổi thông điệp và phong cách hình ảnh theo văn hoá.',
    'app.sections.audienceSwitcher.livePreview': 'Xem trước bản địa hoá',
    'app.sections.audienceSwitcher.headline': 'Tiêu đề',
    'app.sections.audienceSwitcher.subheadline': 'Mô tả',
    'app.sections.audienceSwitcher.ctaLabel': 'Nút CTA',
    'app.conversion.readyTitle': 'Sẵn sàng ra mắt chiến dịch?',
    'app.conversion.readyDescription': 'Lưu thiết lập bản địa hoá và tạo link chiến dịch để chia sẻ với khán giả.',
    'app.conversion.summaryAudience': 'Đối tượng',
    'app.conversion.summaryLayout': 'Bố cục',
    'app.conversion.create': 'Tạo chiến dịch bản địa hoá',
    'app.conversion.savedTitle': 'Đã lưu chiến dịch!',
    'app.conversion.savedDescription': 'Chiến dịch Vietnam Discovery bản địa hoá của bạn đã được tạo thành công.',
    'app.conversion.copy': 'Sao chép link',
    'app.conversion.copied': 'Đã sao chép!',
    'app.conversion.customizeAnother': 'Tuỳ biến cái khác',
    'app.preview.typographyTitle': 'Typography & Bố cục',
    'app.preview.typographyDescription':
      'Trải nghiệm vẻ đẹp của chế độ chữ dọc Đông Á — yếu tố khác biệt cho Nhật, Đài Loan và Trung Quốc.',
    'app.preview.toggle.horizontal': 'Ngang',
    'app.preview.toggle.vertical': 'Dọc',
    'app.preview.warning':
      '* Lưu ý: Đối tượng này thường dùng bố cục ngang, nhưng chúng tôi đang xem trước chế độ dọc để minh hoạ.',
    'app.studioBridge.badge': 'Dành cho đội Marketing',
    'app.studioBridge.title': 'Tuỳ biến chiến dịch',
    'app.studioBridge.description':
      'Dùng Studio để tuỳ biến chiến dịch theo khu vực, điều chỉnh typography và tạo link xem trước chỉ trong vài giây.',
    'app.studioBridge.enter': 'Vào Studio →',
    'app.studio.back': '← Quay lại chiến dịch',
    'app.studio.title': 'Studio chiến dịch',
    'app.studio.description': 'Thử nghiệm và tuỳ biến bản xem trước với video demo PixVerse.',
    'app.studio.controls.targetAudience': 'Đối tượng mục tiêu',
    'app.studio.controls.writingMode': 'Chế độ chữ',
    'app.studio.controls.videoPlaceholder': 'Video mẫu',
    'app.studio.generate': 'Tạo link chiến dịch',
    'app.studio.generating': 'Đang tạo...',
    'app.studio.shareReady': 'Chiến dịch của bạn đã sẵn sàng!',
    'app.studio.openPreview': 'Mở bản xem trước ↗',
    'app.studio.previewHeader': 'Xem trước trực tiếp',
    'app.footer.copyright': '© 2026 Vietnam Discovery Campaign. Video do PixVerse tạo.',
    'app.footer.link.destinations': 'Điểm đến',
    'app.footer.link.gastronomy': 'Ẩm thực',
    'app.footer.link.culturalHeritage': 'Di sản',
    'app.preview.topBar': 'Bạn đang xem bản chia sẻ cho {audience} ({mode})',
  },
  ja: {
    'app.video.unsupported': 'お使いのブラウザは video タグに対応していません。',
    'app.hero.exploreScenes': 'シーンを探る',
    'app.hero.featuredBadge': 'PixVerse 作品（特集）',
    'app.page.section.worldwideInterest': '世界の関心',
    'app.page.section.globalStoryTitle': 'グローバルな物語',
    'app.page.section.globalStoryDescription': '文化ごとにキャンペーンの受け止め方がどう変わるかを確認できます。',
    'app.page.section.culturalElegance': '文化の美意識',
    'app.page.section.localizedExperienceTitle': 'ローカライズ体験',
    'app.page.section.localizedExperienceDescription': '東アジア向けに縦書きを含むタイポグラフィへ最適化します。',
    'app.sections.visualStorytelling.title': '映像でたどる物語',
    'app.sections.visualStorytelling.description':
      '厳選したシーンからベトナムを発見。映像が旅のストーリーを導きます。',
    'app.sections.sceneChapters': 'シーン章',
    'app.sections.currentlyViewing': '現在のシーン：{title}',
    'app.sections.discoveryMoments.title': '発見の瞬間',
    'app.sections.discoveryMoments.description':
      '旅・食・文化・都市の魅力を、映像とともに深く体験しましょう。',
    'app.sections.discoveryMoments.learnMore': 'もっと見る →',
    'app.categories.places': '場所',
    'app.categories.food': '食',
    'app.categories.culture': '文化',
    'app.categories.cityLife': '都市',
    'app.sections.interactions.likes': 'いいね {count}',
    'app.sections.interactions.bookedCount': '{count} 人が予約しました',
    'app.sections.interactions.readyTitle': '旅の準備はできましたか？',
    'app.sections.interactions.readyDescription':
      'このキャンペーンをきっかけにベトナムへ旅立った多くの旅行者に続きましょう。',
    'app.sections.interactions.bookNow': 'ベトナム旅行を予約する',
    'app.sections.interactions.booked': '✓ 予約完了！',
    'app.sections.interactions.successMsg': '担当者よりまもなくご連絡します。',
    'app.sections.interactions.communityTitle': 'コミュニティ',
    'app.sections.interactions.commentPlaceholder': 'この Vietnam Discovery キャンペーンの感想は？',
    'app.sections.interactions.postComment': 'コメントする',
    'app.sections.interactions.seedComment1': '映像が本当に美しい。ベトナムが魔法のように見える！',
    'app.sections.interactions.seedComment2': 'バインミーのシーン、現地で体験したい！',
    'app.sections.interactions.you': 'あなた',
    'app.sections.interactions.editTrip': '日付を変更',
    'app.sections.interactions.cancelTrip': 'キャンセル',
    'app.sections.interactions.bookedDate': '予約日：{date}',
    'app.sections.interactions.modal.title.book': '旅行日を選択',
    'app.sections.interactions.modal.title.edit': '旅行日を変更',
    'app.sections.interactions.modal.dateLabel': '旅行日',
    'app.sections.interactions.modal.confirm': '確定',
    'app.sections.interactions.modal.close': '閉じる',
    'app.sections.interactions.modal.nameLabel': 'お名前',
    'app.sections.interactions.modal.phoneLabel': '電話番号',
    'app.sections.interactions.modal.emailLabel': 'メール（任意）',
    'app.sections.interactions.modal.namePlaceholder': 'お名前',
    'app.sections.interactions.modal.phonePlaceholder': '例：+81 90 1234 5678',
    'app.sections.interactions.modal.emailPlaceholder': 'you@example.com',
    'app.sections.interactions.modal.phoneError': '有効な電話番号を入力してください。',
    'app.sections.audienceSwitcher.title': '世界へ、ローカルな心で',
    'app.sections.audienceSwitcher.description':
      'オーディエンスを選択して、コピーとレイアウトが文化に合わせて変化する様子を確認できます。',
    'app.sections.audienceSwitcher.livePreview': 'ローカライズのプレビュー',
    'app.sections.audienceSwitcher.headline': '見出し',
    'app.sections.audienceSwitcher.subheadline': 'サブ見出し',
    'app.sections.audienceSwitcher.ctaLabel': 'CTA',
    'app.conversion.readyTitle': 'キャンペーンを公開しますか？',
    'app.conversion.readyDescription': 'ローカライズ設定を保存し、共有用のキャンペーンリンクを生成します。',
    'app.conversion.summaryAudience': '対象',
    'app.conversion.summaryLayout': 'レイアウト',
    'app.conversion.create': 'ローカライズ版を作成',
    'app.conversion.savedTitle': '保存しました！',
    'app.conversion.savedDescription': 'ローカライズされた Vietnam Discovery キャンペーンを作成しました。',
    'app.conversion.copy': 'リンクをコピー',
    'app.conversion.copied': 'コピーしました',
    'app.conversion.customizeAnother': '別の設定で作る',
    'app.preview.typographyTitle': 'タイポグラフィ & レイアウト',
    'app.preview.typographyDescription':
      '縦書きの美しさを体験。日本・台湾・中国向けの文化的な差別化要素です。',
    'app.preview.toggle.horizontal': '横書き',
    'app.preview.toggle.vertical': '縦書き',
    'app.preview.warning':
      '* 注: このオーディエンスは通常横書きですが、デモとして縦書きを表示しています。',
    'app.studioBridge.badge': 'マーケティング向け',
    'app.studioBridge.title': 'キャンペーンをカスタマイズ',
    'app.studioBridge.description':
      'Studio で地域に合わせて調整し、タイポグラフィを整え、プレビューリンクを生成できます。',
    'app.studioBridge.enter': 'Studio を開く →',
    'app.studio.back': '← キャンペーンへ戻る',
    'app.studio.title': 'キャンペーン Studio',
    'app.studio.description': 'PixVerse のデモ動画でプレビューを試作・調整できます。',
    'app.studio.controls.targetAudience': 'ターゲット',
    'app.studio.controls.writingMode': '表記モード',
    'app.studio.controls.videoPlaceholder': '動画（デモ）',
    'app.studio.generate': 'リンクを生成',
    'app.studio.generating': '生成中…',
    'app.studio.shareReady': 'キャンペーンの準備ができました！',
    'app.studio.openPreview': 'プレビューを開く ↗',
    'app.studio.previewHeader': 'ライブプレビュー',
    'app.footer.copyright': '© 2026 Vietnam Discovery Campaign. PixVerse 動画を活用。',
    'app.footer.link.destinations': '目的地',
    'app.footer.link.gastronomy': '美食',
    'app.footer.link.culturalHeritage': '文化遺産',
    'app.preview.topBar': '{audience} 向けの共有プレビュー（{mode}）を表示中',
  },
  zh: {
    'app.video.unsupported': '你的浏览器不支持 video 标签。',
    'app.hero.exploreScenes': '探索章节',
    'app.hero.featuredBadge': 'PixVerse 精选作品',
    'app.page.section.worldwideInterest': '全球关注',
    'app.page.section.globalStoryTitle': '全球故事',
    'app.page.section.globalStoryDescription': '看看不同文化背景的观众如何体验 Vietnam Discovery 活动。',
    'app.page.section.culturalElegance': '文化美学',
    'app.page.section.localizedExperienceTitle': '本地化体验',
    'app.page.section.localizedExperienceDescription': '针对东亚受众支持纵排排版与本地化文案。',
    'app.sections.visualStorytelling.title': '影像故事',
    'app.sections.visualStorytelling.description': '通过精选场景探索越南，影像带动你的发现旅程。',
    'app.sections.sceneChapters': '章节目录',
    'app.sections.currentlyViewing': '正在观看：{title}',
    'app.sections.discoveryMoments.title': '发现时刻',
    'app.sections.discoveryMoments.description': '深入体验越南的旅行、美食、文化与城市活力。',
    'app.sections.discoveryMoments.learnMore': '了解更多 →',
    'app.categories.places': '目的地',
    'app.categories.food': '美食',
    'app.categories.culture': '文化',
    'app.categories.cityLife': '城市生活',
    'app.sections.interactions.likes': '{count} 次喜欢',
    'app.sections.interactions.bookedCount': '{count} 人已预订行程',
    'app.sections.interactions.readyTitle': '准备出发了吗？',
    'app.sections.interactions.readyDescription': '加入看过这支影片后踏上越南旅程的旅行者行列。',
    'app.sections.interactions.bookNow': '立即预订越南之旅',
    'app.sections.interactions.booked': '✓ 已预订！',
    'app.sections.interactions.successMsg': '旅行顾问将尽快与您联系！',
    'app.sections.interactions.communityTitle': '社区讨论',
    'app.sections.interactions.commentPlaceholder': '你对 Vietnam Discovery 活动有什么看法？',
    'app.sections.interactions.postComment': '发布评论',
    'app.sections.interactions.seedComment1': '镜头语言太美了！越南看起来像电影一样。',
    'app.sections.interactions.seedComment2': '好想亲自去体验那段“法棍三明治”文化场景！',
    'app.sections.interactions.you': '你',
    'app.sections.interactions.editTrip': '修改日期',
    'app.sections.interactions.cancelTrip': '取消行程',
    'app.sections.interactions.bookedDate': '已预订日期：{date}',
    'app.sections.interactions.modal.title.book': '选择出行日期',
    'app.sections.interactions.modal.title.edit': '修改出行日期',
    'app.sections.interactions.modal.dateLabel': '出行日期',
    'app.sections.interactions.modal.confirm': '确认',
    'app.sections.interactions.modal.close': '关闭',
    'app.sections.interactions.modal.nameLabel': '姓名',
    'app.sections.interactions.modal.phoneLabel': '手机号',
    'app.sections.interactions.modal.emailLabel': '邮箱（可选）',
    'app.sections.interactions.modal.namePlaceholder': '你的姓名',
    'app.sections.interactions.modal.phonePlaceholder': '例如：+86 138 0000 0000',
    'app.sections.interactions.modal.emailPlaceholder': 'you@example.com',
    'app.sections.interactions.modal.phoneError': '请输入有效的手机号。',
    'app.sections.audienceSwitcher.title': '全球传播，本地灵魂',
    'app.sections.audienceSwitcher.description': '选择受众，查看活动如何根据不同文化调整文案与版式。',
    'app.sections.audienceSwitcher.livePreview': '本地化预览',
    'app.sections.audienceSwitcher.headline': '标题',
    'app.sections.audienceSwitcher.subheadline': '副标题',
    'app.sections.audienceSwitcher.ctaLabel': 'CTA 文案',
    'app.conversion.readyTitle': '准备发布活动了吗？',
    'app.conversion.readyDescription': '保存本地化设置并生成可分享的活动链接。',
    'app.conversion.summaryAudience': '受众',
    'app.conversion.summaryLayout': '版式',
    'app.conversion.create': '创建本地化活动',
    'app.conversion.savedTitle': '已保存！',
    'app.conversion.savedDescription': '你的 Vietnam Discovery 本地化活动已成功创建。',
    'app.conversion.copy': '复制链接',
    'app.conversion.copied': '已复制！',
    'app.conversion.customizeAnother': '再创建一个',
    'app.preview.typographyTitle': '字体与版式',
    'app.preview.typographyDescription': '体验东亚纵排书写的优雅，这是日本/台湾/中国版本的文化差异点。',
    'app.preview.toggle.horizontal': '横排',
    'app.preview.toggle.vertical': '纵排',
    'app.preview.warning': '* 注：该受众通常使用横排，这里仅作为纵排演示预览。',
    'app.studioBridge.badge': '面向营销团队',
    'app.studioBridge.title': '定制你的活动',
    'app.studioBridge.description': '使用 Studio 按地区调整内容与排版，并快速生成预览链接。',
    'app.studioBridge.enter': '进入 Studio →',
    'app.studio.back': '← 返回活动页',
    'app.studio.title': '活动 Studio',
    'app.studio.description': '使用 PixVerse 演示视频进行试验与预览定制。',
    'app.studio.controls.targetAudience': '目标受众',
    'app.studio.controls.writingMode': '书写模式',
    'app.studio.controls.videoPlaceholder': '占位视频',
    'app.studio.generate': '生成活动链接',
    'app.studio.generating': '生成中…',
    'app.studio.shareReady': '你的活动已准备就绪！',
    'app.studio.openPreview': '打开预览 ↗',
    'app.studio.previewHeader': '实时预览',
    'app.footer.copyright': '© 2026 Vietnam Discovery Campaign. 由 PixVerse 影像驱动。',
    'app.footer.link.destinations': '目的地',
    'app.footer.link.gastronomy': '美食',
    'app.footer.link.culturalHeritage': '文化遗产',
    'app.preview.topBar': '你正在查看面向 {audience} 的分享预览（{mode}）',
  },
  ko: {
    'app.video.unsupported': '브라우저가 video 태그를 지원하지 않습니다.',
    'app.hero.exploreScenes': '장면 탐색',
    'app.hero.featuredBadge': 'PixVerse 대표 영상',
    'app.page.section.worldwideInterest': '글로벌 관심',
    'app.page.section.globalStoryTitle': '글로벌 스토리',
    'app.page.section.globalStoryDescription': '문화권별로 Vietnam Discovery 캠페인이 어떻게 다르게 전달되는지 확인하세요.',
    'app.page.section.culturalElegance': '문화적 우아함',
    'app.page.section.localizedExperienceTitle': '로컬라이즈 경험',
    'app.page.section.localizedExperienceDescription': '동아시아 타깃을 위한 세로쓰기 타이포그래피까지 지원합니다.',
    'app.sections.visualStorytelling.title': '비주얼 스토리텔링',
    'app.sections.visualStorytelling.description':
      '엄선된 장면을 클릭해 베트남을 탐험하세요. 영상이 발견 흐름을 이끕니다.',
    'app.sections.sceneChapters': '장면 챕터',
    'app.sections.currentlyViewing': '현재 장면: {title}',
    'app.sections.discoveryMoments.title': '디스커버리 모먼트',
    'app.sections.discoveryMoments.description':
      '여행, 음식, 문화, 도시의 매력을 더 깊이 만나보세요.',
    'app.sections.discoveryMoments.learnMore': '자세히 보기 →',
    'app.categories.places': '장소',
    'app.categories.food': '음식',
    'app.categories.culture': '문화',
    'app.categories.cityLife': '도시 생활',
    'app.sections.interactions.likes': '좋아요 {count}',
    'app.sections.interactions.bookedCount': '{count}명이 여행을 예약했어요',
    'app.sections.interactions.readyTitle': '떠날 준비 되셨나요?',
    'app.sections.interactions.readyDescription':
      '이 캠페인을 보고 베트남을 여행한 수많은 사람들과 함께하세요.',
    'app.sections.interactions.bookNow': '베트남 여행 예약하기',
    'app.sections.interactions.booked': '✓ 예약 완료!',
    'app.sections.interactions.successMsg': '여행 컨설턴트가 곧 연락드릴게요!',
    'app.sections.interactions.communityTitle': '커뮤니티',
    'app.sections.interactions.commentPlaceholder': 'Vietnam Discovery 캠페인에 대한 의견을 남겨주세요.',
    'app.sections.interactions.postComment': '댓글 작성',
    'app.sections.interactions.seedComment1': '영상미가 정말 멋져요! 베트남이 마치 영화 같네요.',
    'app.sections.interactions.seedComment2': '반미 문화 장면을 실제로 꼭 경험해보고 싶어요!',
    'app.sections.interactions.you': '나',
    'app.sections.interactions.editTrip': '날짜 수정',
    'app.sections.interactions.cancelTrip': '여행 취소',
    'app.sections.interactions.bookedDate': '예약 날짜: {date}',
    'app.sections.interactions.modal.title.book': '여행 날짜 선택',
    'app.sections.interactions.modal.title.edit': '여행 날짜 수정',
    'app.sections.interactions.modal.dateLabel': '여행 날짜',
    'app.sections.interactions.modal.confirm': '확인',
    'app.sections.interactions.modal.close': '닫기',
    'app.sections.interactions.modal.nameLabel': '이름',
    'app.sections.interactions.modal.phoneLabel': '전화번호',
    'app.sections.interactions.modal.emailLabel': '이메일(선택)',
    'app.sections.interactions.modal.namePlaceholder': '이름 입력',
    'app.sections.interactions.modal.phonePlaceholder': '예: +82 10 1234 5678',
    'app.sections.interactions.modal.emailPlaceholder': 'you@example.com',
    'app.sections.interactions.modal.phoneError': '유효한 전화번호를 입력해주세요.',
    'app.sections.audienceSwitcher.title': '글로벌 확장, 로컬 감성',
    'app.sections.audienceSwitcher.description':
      '타깃을 선택하면 문화에 맞춰 문구와 레이아웃이 어떻게 바뀌는지 확인할 수 있어요.',
    'app.sections.audienceSwitcher.livePreview': '로컬라이즈 미리보기',
    'app.sections.audienceSwitcher.headline': '헤드라인',
    'app.sections.audienceSwitcher.subheadline': '서브헤드',
    'app.sections.audienceSwitcher.ctaLabel': 'CTA',
    'app.conversion.readyTitle': '캠페인을 시작할까요?',
    'app.conversion.readyDescription': '로컬라이즈 설정을 저장하고 공유할 캠페인 링크를 생성하세요.',
    'app.conversion.summaryAudience': '타깃',
    'app.conversion.summaryLayout': '레이아웃',
    'app.conversion.create': '로컬라이즈 캠페인 생성',
    'app.conversion.savedTitle': '저장 완료!',
    'app.conversion.savedDescription': 'Vietnam Discovery 로컬라이즈 캠페인이 성공적으로 생성됐어요.',
    'app.conversion.copy': '링크 복사',
    'app.conversion.copied': '복사됨!',
    'app.conversion.customizeAnother': '다른 설정으로',
    'app.preview.typographyTitle': '타이포그래피 & 레이아웃',
    'app.preview.typographyDescription': '동아시아 세로쓰기 모드의 우아함을 체험해보세요.',
    'app.preview.toggle.horizontal': '가로',
    'app.preview.toggle.vertical': '세로',
    'app.preview.warning': '* 참고: 이 타깃은 보통 가로 레이아웃을 사용하지만, 데모를 위해 세로 모드를 미리보기로 보여줍니다.',
    'app.studioBridge.badge': '마케팅 팀용',
    'app.studioBridge.title': '캠페인 커스터마이즈',
    'app.studioBridge.description':
      'Studio에서 지역별로 조정하고 타이포그래피를 설정해 미리보기 링크를 생성하세요.',
    'app.studioBridge.enter': 'Studio로 이동 →',
    'app.studio.back': '← 캠페인으로',
    'app.studio.title': '캠페인 Studio',
    'app.studio.description': 'PixVerse 데모 영상으로 캠페인 프리뷰를 실험하고 커스터마이즈하세요.',
    'app.studio.controls.targetAudience': '타깃 오디언스',
    'app.studio.controls.writingMode': '쓰기 모드',
    'app.studio.controls.videoPlaceholder': '데모 영상',
    'app.studio.generate': '캠페인 링크 생성',
    'app.studio.generating': '생성 중…',
    'app.studio.shareReady': '캠페인이 준비됐어요!',
    'app.studio.openPreview': '프리뷰 열기 ↗',
    'app.studio.previewHeader': '라이브 프리뷰',
    'app.footer.copyright': '© 2026 Vietnam Discovery Campaign. PixVerse 영상 기반.',
    'app.footer.link.destinations': '여행지',
    'app.footer.link.gastronomy': '미식',
    'app.footer.link.culturalHeritage': '문화유산',
    'app.preview.topBar': '{audience} 대상 공유 프리뷰 ({mode})',
  },
};
