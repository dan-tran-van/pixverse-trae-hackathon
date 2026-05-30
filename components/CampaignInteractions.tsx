'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/modules/CampaignInteractions.module.scss';
import { CampaignComment, CampaignStats } from '@/types/campaign';
import { useWritingMode } from '@/components/WritingModeContext';
import { useI18n } from '@/components/I18nContext';

const CampaignInteractions: React.FC = () => {
  const { writingMode } = useWritingMode();
  const { t, locale } = useI18n();
  const INITIAL_STATS: CampaignStats = {
    likes: 1240,
    bookings: 42,
    comments: [
      { id: '1', user: 'TravelEnthusiast', text: t('app.sections.interactions.seedComment1'), timestamp: '2026-05-28T10:00:00Z' },
      { id: '2', user: 'FoodieExplorer', text: t('app.sections.interactions.seedComment2'), timestamp: '2026-05-29T14:30:00Z' },
    ],
  };
  const [stats, setStats] = useState<CampaignStats>(INITIAL_STATS);
  const [newComment, setNewComment] = useState('');
  const [hasLiked, setHasLiked] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [bookedDate, setBookedDate] = useState<string | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarMode, setCalendarMode] = useState<'book' | 'edit'>('book');
  const [pendingDate, setPendingDate] = useState<string>('');

  useEffect(() => {
    const savedStats = localStorage.getItem('campaign_stats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
    setHasLiked(localStorage.getItem('campaign_liked') === 'true');
    setIsBooked(localStorage.getItem('campaign_booked') === 'true');
    const storedDate = localStorage.getItem('campaign_booked_date');
    setBookedDate(storedDate || null);
  }, []);

  const saveStats = (newStats: CampaignStats) => {
    setStats(newStats);
    localStorage.setItem('campaign_stats', JSON.stringify(newStats));
  };

  const handleLike = () => {
    if (hasLiked) {
      const nextLikes = Math.max(0, stats.likes - 1);
      const newStats = { ...stats, likes: nextLikes };
      saveStats(newStats);
      setHasLiked(false);
      localStorage.setItem('campaign_liked', 'false');
      return;
    }

    const newStats = { ...stats, likes: stats.likes + 1 };
    saveStats(newStats);
    setHasLiked(true);
    localStorage.setItem('campaign_liked', 'true');
  };

  const openCalendar = (mode: 'book' | 'edit') => {
    setCalendarMode(mode);
    setPendingDate(bookedDate || new Date().toISOString().slice(0, 10));
    setIsCalendarOpen(true);
  };

  const handleConfirmBooking = () => {
    if (!pendingDate) return;

    if (!isBooked) {
      const newStats = { ...stats, bookings: stats.bookings + 1 };
      saveStats(newStats);
      setIsBooked(true);
      localStorage.setItem('campaign_booked', 'true');
    }

    setBookedDate(pendingDate);
    localStorage.setItem('campaign_booked_date', pendingDate);
    setIsCalendarOpen(false);
  };

  const handleCancelBooking = () => {
    if (!isBooked) return;
    const nextBookings = Math.max(0, stats.bookings - 1);
    const newStats = { ...stats, bookings: nextBookings };
    saveStats(newStats);
    setIsBooked(false);
    setBookedDate(null);
    localStorage.setItem('campaign_booked', 'false');
    localStorage.removeItem('campaign_booked_date');
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: CampaignComment = {
      id: Date.now().toString(),
      user: t('app.sections.interactions.you'),
      text: newComment,
      timestamp: new Date().toISOString()
    };

    const newStats = { ...stats, comments: [comment, ...stats.comments] };
    saveStats(newStats);
    setNewComment('');
  };

  return (
    <section className={`${styles.container} ${styles[`container--${writingMode}`]}`}>
      <div className={styles.statsBar}>
        <div className={styles.stat}>
          <button 
            className={`${styles.likeBtn} ${hasLiked ? styles.active : ''}`}
            onClick={handleLike}
            aria-pressed={hasLiked}
          >
            {hasLiked ? '❤️' : '🤍'} {t('app.sections.interactions.likes', { count: stats.likes.toLocaleString() })}
          </button>
        </div>
        <div className={styles.stat}>
          <span>📅 {t('app.sections.interactions.bookedCount', { count: stats.bookings })}</span>
        </div>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.bookingSection}>
          <div className={styles.bookingCard}>
            <h3>{t('app.sections.interactions.readyTitle')}</h3>
            <p>{t('app.sections.interactions.readyDescription')}</p>
            <button 
              className={`${styles.bookBtn} ${isBooked ? styles.success : ''}`}
              onClick={() => openCalendar(isBooked ? 'edit' : 'book')}
            >
              {isBooked ? t('app.sections.interactions.booked') : t('app.sections.interactions.bookNow')}
            </button>
            {isBooked && (
              <>
                <p className={styles.successMsg}>{t('app.sections.interactions.successMsg')}</p>
                {bookedDate && (
                  <p className={styles.bookedDate}>
                    {t('app.sections.interactions.bookedDate', {
                      date: new Date(bookedDate).toLocaleDateString(locale),
                    })}
                  </p>
                )}
                <div className={styles.bookingActions}>
                  <button className={styles.editBtn} onClick={() => openCalendar('edit')}>
                    {t('app.sections.interactions.editTrip')}
                  </button>
                  <button className={styles.cancelBtn} onClick={handleCancelBooking}>
                    {t('app.sections.interactions.cancelTrip')}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className={styles.commentSection}>
          <h3>{t('app.sections.interactions.communityTitle')}</h3>
          <form onSubmit={handleAddComment} className={styles.commentForm}>
            <textarea
              placeholder={t('app.sections.interactions.commentPlaceholder')}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit">{t('app.sections.interactions.postComment')}</button>
          </form>

          <div className={styles.commentList}>
            {stats.comments.map((comment) => (
              <div key={comment.id} className={styles.commentItem}>
                <div className={styles.commentHeader}>
                  <span className={styles.user}>{comment.user}</span>
                  <span className={styles.date}>{new Date(comment.timestamp).toLocaleDateString()}</span>
                </div>
                <p className={styles.text}>{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isCalendarOpen && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h4 id="booking-modal-title">
                {calendarMode === 'book'
                  ? t('app.sections.interactions.modal.title.book')
                  : t('app.sections.interactions.modal.title.edit')}
              </h4>
              <button className={styles.modalClose} onClick={() => setIsCalendarOpen(false)}>
                {t('app.sections.interactions.modal.close')}
              </button>
            </div>

            <label className={styles.dateLabel}>
              <span>{t('app.sections.interactions.modal.dateLabel')}</span>
              <input
                className={styles.dateInput}
                type="date"
                value={pendingDate}
                onChange={(e) => setPendingDate(e.target.value)}
              />
            </label>

            <div className={styles.modalActions}>
              <button className={styles.modalPrimary} onClick={handleConfirmBooking} disabled={!pendingDate}>
                {t('app.sections.interactions.modal.confirm')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CampaignInteractions;
