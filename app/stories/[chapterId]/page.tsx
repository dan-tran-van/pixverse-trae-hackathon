'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useI18n } from '@/components/I18nContext';
import { useWritingMode } from '@/components/WritingModeContext';
import { getLocalizedSceneChapters, getLocalizedStorySections } from '@/data/campaignContent';
import type { SceneChapter } from '@/types/campaign';
import styles from './page.module.scss';

function isChapterId(value: string): value is SceneChapter['id'] {
  return (
    value === 'nature' ||
    value === 'hanoi' ||
    value === 'hoi-an' ||
    value === 'food' ||
    value === 'heritage' ||
    value === 'modern-vietnam'
  );
}

export default function StoryChapterPage() {
  const params = useParams();
  const chapterIdParam = String(params.chapterId ?? '');
  const { locale, t } = useI18n();
  const { writingMode } = useWritingMode();
  const videoRef = useRef<HTMLVideoElement>(null);

  const chapters = useMemo(() => getLocalizedSceneChapters(locale), [locale]);
  const chapterId: SceneChapter['id'] = isChapterId(chapterIdParam) ? chapterIdParam : 'nature';
  const chapter = chapters.find((c) => c.id === chapterId) ?? chapters[0];
  const sections = useMemo(() => getLocalizedStorySections(locale, chapter.id), [chapter.id, locale]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const handleLoaded = () => {
      try {
        el.currentTime = chapter.timestamp;
      } catch {
      }
    };
    el.addEventListener('loadedmetadata', handleLoaded);
    return () => el.removeEventListener('loadedmetadata', handleLoaded);
  }, [chapter.timestamp]);

  return (
    <main className={`${styles.page} ${styles[`page--${writingMode}`]}`}>
      <header className={styles.topBar}>
        <Link href="/stories" className={styles.backLink}>
          {t('app.stories.backToStories')}
        </Link>
        <Link href="/" className={styles.backLinkSecondary}>
          {t('app.stories.backToCampaign')}
        </Link>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCover} data-chapter={chapter.id}>
          <span className={styles.heroHint}>
            {t('app.stories.imagePlaceholder', { path: `/images/stories/${chapter.id}.jpg` })}
          </span>
        </div>

        <div className={styles.heroText}>
          <span className={styles.kicker}>{t('app.stories.sceneLabel')}</span>
          <h1 className={styles.title}>{chapter.title}</h1>
          <p className={styles.subtitle}>{chapter.description}</p>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.videoBlock}>
          <div className={styles.videoHeader}>
            <h2 className={styles.blockTitle}>{t('app.stories.videoLabel')}</h2>
            <button
              className={styles.watchBtn}
              onClick={() => {
                const el = videoRef.current;
                if (!el) return;
                el.currentTime = chapter.timestamp;
                void el.play();
              }}
            >
              {t('app.stories.watchInVideo')}
            </button>
          </div>
          <div className={styles.videoFrame}>
            <video
              ref={videoRef}
              className={styles.video}
              src="/videos/vietnam-discovery.mp4"
              controls
              playsInline
            >
              {t('app.video.unsupported')}
            </video>
          </div>
        </div>

        <article className={styles.story}>
          {sections.map((s) => (
            <section key={s.title} className={styles.storySection}>
              <h2 className={styles.storyTitle}>{s.title}</h2>
              {s.paragraphs.map((p) => (
                <p key={p} className={styles.storyPara}>
                  {p}
                </p>
              ))}
            </section>
          ))}
        </article>

        <aside className={styles.chapterNav}>
          <h2 className={styles.blockTitle}>{t('app.stories.chaptersLabel')}</h2>
          <div className={styles.chapterList}>
            {chapters.map((c) => (
              <Link
                key={c.id}
                href={`/stories/${c.id}`}
                className={`${styles.chapterLink} ${c.id === chapter.id ? styles.active : ''}`}
              >
                <span className={styles.chapterName}>{c.title}</span>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}

