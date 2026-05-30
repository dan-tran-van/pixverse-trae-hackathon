'use client';

import React, { useState, useEffect } from 'react';
import styles from '@/styles/modules/CampaignInteractions.module.scss';
import { CampaignComment, CampaignStats } from '@/types/campaign';

const INITIAL_STATS: CampaignStats = {
  likes: 1240,
  bookings: 42,
  comments: [
    { id: '1', user: 'TravelEnthusiast', text: 'The cinematography in this video is absolutely stunning! Vietnam looks magical.', timestamp: '2026-05-28T10:00:00Z' },
    { id: '2', user: 'FoodieExplorer', text: 'Can\'t wait to try that Bánh Mì culture scene in person!', timestamp: '2026-05-29T14:30:00Z' },
  ]
};

const CampaignInteractions: React.FC = () => {
  const [stats, setStats] = useState<CampaignStats>(INITIAL_STATS);
  const [newComment, setNewComment] = useState('');
  const [hasLiked, setHasLiked] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    const savedStats = localStorage.getItem('campaign_stats');
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
    setHasLiked(localStorage.getItem('campaign_liked') === 'true');
    setIsBooked(localStorage.getItem('campaign_booked') === 'true');
  }, []);

  const saveStats = (newStats: CampaignStats) => {
    setStats(newStats);
    localStorage.setItem('campaign_stats', JSON.stringify(newStats));
  };

  const handleLike = () => {
    if (!hasLiked) {
      const newStats = { ...stats, likes: stats.likes + 1 };
      saveStats(newStats);
      setHasLiked(true);
      localStorage.setItem('campaign_liked', 'true');
    }
  };

  const handleBookTrip = () => {
    if (!isBooked) {
      const newStats = { ...stats, bookings: stats.bookings + 1 };
      saveStats(newStats);
      setIsBooked(true);
      localStorage.setItem('campaign_booked', 'true');
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: CampaignComment = {
      id: Date.now().toString(),
      user: 'You',
      text: newComment,
      timestamp: new Date().toISOString()
    };

    const newStats = { ...stats, comments: [comment, ...stats.comments] };
    saveStats(newStats);
    setNewComment('');
  };

  return (
    <section className={styles.container}>
      <div className={styles.statsBar}>
        <div className={styles.stat}>
          <button 
            className={`${styles.likeBtn} ${hasLiked ? styles.active : ''}`}
            onClick={handleLike}
          >
            {hasLiked ? '❤️' : '🤍'} {stats.likes.toLocaleString()} Likes
          </button>
        </div>
        <div className={styles.stat}>
          <span>📅 {stats.bookings} People booked this trip</span>
        </div>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.bookingSection}>
          <div className={styles.bookingCard}>
            <h3>Ready to Discover?</h3>
            <p>Join the thousands of travelers who have explored Vietnam after seeing this campaign.</p>
            <button 
              className={`${styles.bookBtn} ${isBooked ? styles.success : ''}`}
              onClick={handleBookTrip}
              disabled={isBooked}
            >
              {isBooked ? '✓ Trip Booked!' : 'Book Your Vietnam Trip Now'}
            </button>
            {isBooked && <p className={styles.successMsg}>A travel consultant will contact you soon!</p>}
          </div>
        </div>

        <div className={styles.commentSection}>
          <h3>Community Discussion</h3>
          <form onSubmit={handleAddComment} className={styles.commentForm}>
            <textarea
              placeholder="What do you think about the Vietnam Discovery campaign?"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button type="submit">Post Comment</button>
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
    </section>
  );
};

export default CampaignInteractions;
