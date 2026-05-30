import React, { useRef, useState } from 'react';
import styles from '@/styles/modules/VideoStorySection.module.scss';
import { SceneChapter } from '@/types/campaign';

interface VideoStorySectionProps {
  chapters: SceneChapter[];
  onChapterSelect?: (chapter: SceneChapter) => void;
}

const VideoStorySection: React.FC<VideoStorySectionProps> = ({ chapters, onChapterSelect }) => {
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
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Visual Storytelling</h2>
        <p className={styles.description}>
          Explore Vietnam through these curated scenes, each capturing a unique facet of our spirit.
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
              Your browser does not support the video tag.
            </video>
            <div className={styles.chapterOverlay}>
              <span>Currently Viewing: {activeChapter.title}</span>
            </div>
          </div>
          <div className={styles.activeChapterInfo}>
            <h3>{activeChapter.title}</h3>
            <p>{activeChapter.description}</p>
          </div>
        </div>

        <div className={styles.chaptersColumn}>
          <h3 className={styles.chaptersTitle}>Scene Chapters</h3>
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
