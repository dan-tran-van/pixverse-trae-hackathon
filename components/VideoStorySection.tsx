import React, { useRef, useState } from 'react';
import Link from 'next/link';
import styles from '@/styles/modules/VideoStorySection.module.scss';
import { SceneChapter } from '@/types/campaign';
import { useWritingMode } from '@/components/WritingModeContext';
import { useI18n } from '@/components/I18nContext';

interface VideoStorySectionProps {
  chapters: SceneChapter[];
  onChapterSelect?: (chapter: SceneChapter) => void;
}

const VideoStorySection: React.FC<VideoStorySectionProps> = ({ chapters, onChapterSelect }) => {
  const { writingMode } = useWritingMode();
  const { t } = useI18n();
  const [activeChapterId, setActiveChapterId] = useState(chapters[0].id);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleChapterClick = (chapter: SceneChapter) => {
    setActiveChapterId(chapter.id);
    if (videoRef.current) {
      videoRef.current.currentTime = chapter.timestamp;
      videoRef.current.play();
    }
    if (onChapterSelect) {
      onChapterSelect(chapter);
    }
  };

  const activeChapter = chapters.find(c => c.id === activeChapterId) || chapters[0];

  return (
    <section className={`${styles.container} ${styles[`container--${writingMode}`]}`}>
      <div className={styles.header}>
        <h2 className={styles.title}>{t('app.sections.visualStorytelling.title')}</h2>
        <p className={styles.description}>
          {t('app.sections.visualStorytelling.description')}
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.videoColumn}>
          <div className={styles.videoWrapper}>
            <video
              ref={videoRef}
              className={styles.video}
              src="/videos/vietnam-discovery.mp4"
              controls
              playsInline
            >
              {t('app.video.unsupported')}
            </video>
            <div className={styles.chapterOverlay}>
              <span>{t('app.sections.currentlyViewing', { title: activeChapter.title })}</span>
            </div>
          </div>
          <div className={styles.activeChapterInfo}>
            <h3>{activeChapter.title}</h3>
            <p>{activeChapter.description}</p>
            <Link className={styles.readStoryLink} href={`/stories/${activeChapter.id}`}>
              {t('app.stories.readStory')}
            </Link>
          </div>
        </div>

        <div className={styles.chaptersColumn}>
          <h3 className={styles.chaptersTitle}>{t('app.sections.sceneChapters')}</h3>
          <div className={styles.chapterList}>
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                className={`${styles.chapterItem} ${activeChapterId === chapter.id ? styles.active : ''}`}
                onClick={() => handleChapterClick(chapter)}
              >
                <div className={styles.chapterNumber}>
                  {String(chapters.indexOf(chapter) + 1).padStart(2, '0')}
                </div>
                <div className={styles.chapterText}>
                  <h4>{chapter.title}</h4>
                  <p>{chapter.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoStorySection;
