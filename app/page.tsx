'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.scss';
import HeroSection from '@/components/HeroSection';
import VideoStorySection from '@/components/VideoStorySection';
import AudienceSwitcher from '@/components/AudienceSwitcher';
import VerticalWritingPreview from '@/components/VerticalWritingPreview';
import DiscoveryCards from '@/components/DiscoveryCards';
import CampaignInteractions from '@/components/CampaignInteractions';
import { AUDIENCES, SCENE_CHAPTERS, DISCOVERY_CARDS } from '@/data/campaignData';
import { AudienceKey, WritingMode } from '@/types/campaign';

export default function CampaignPage() {
  const [selectedAudienceKey, setSelectedAudienceKey] = useState<AudienceKey>('global');
  const [writingMode, setWritingMode] = useState<WritingMode>('horizontal');

  const currentAudience = AUDIENCES.find(a => a.key === selectedAudienceKey) || AUDIENCES[0];

  const handleAudienceChange = (key: AudienceKey) => {
    setSelectedAudienceKey(key);
    const audience = AUDIENCES.find(a => a.key === key);
    if (audience) {
      setWritingMode(audience.defaultWritingMode);
    }
  };

  const scrollToDiscovery = () => {
    const el = document.getElementById('discovery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={`${styles.main} ${writingMode === 'vertical' ? 'isVerticalLayout' : ''}`}>
      {/* Featured Main Video Hero */}
      <HeroSection 
        variant={currentAudience} 
        onCtaClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
        onExploreClick={scrollToDiscovery}
      />

      {/* Visual Storytelling Section */}
      <div id="discovery">
        <VideoStorySection chapters={SCENE_CHAPTERS} />
      </div>

      {/* Discovery Moments Cards */}
      <DiscoveryCards cards={DISCOVERY_CARDS} />

      {/* Community Interactions - Likes, Comments, Booking */}
      <div id="booking">
        <CampaignInteractions />
      </div>

      {/* Global Audience View Switcher */}
      <div className={styles.localizationSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.accent}>Worldwide Interest</span>
          <h2>A Global Story</h2>
          <p>See how travelers from different cultures experience the Vietnam Discovery campaign.</p>
        </div>
        
        <AudienceSwitcher 
          audiences={AUDIENCES} 
          selectedKey={selectedAudienceKey} 
          onSelect={handleAudienceChange} 
        />
        
        <div className={styles.layoutPreviewWrapper}>
          <div className={styles.sectionHeader}>
            <span className={styles.accent}>Cultural Elegance</span>
            <h2>Localized Experience</h2>
            <p>Our campaign adapts to the local soul, including native vertical typography for East Asian audiences.</p>
          </div>
          <VerticalWritingPreview variant={currentAudience} />
        </div>
      </div>

      {/* Final Bridge to Studio - The only mention of Studio on this page */}
      <section className={styles.studioBridge}>
        <div className={styles.studioContent}>
          <div className={styles.studioText}>
            <span className={styles.badge}>For Marketing Teams</span>
            <h2>Customize Your Campaign</h2>
            <p>
              Are you a brand manager or marketing lead? Use our Studio tool to customize 
              this campaign for your specific region, adjust typography, and generate 
              localized preview links in seconds.
            </p>
            <Link href="/studio" className={styles.studioBtn}>
              Enter Studio Mode →
            </Link>
          </div>
          <div className={styles.studioVisual}>
            <div className={styles.mockInterface}>
              <div className={styles.mockSidebar}></div>
              <div className={styles.mockMain}>
                <div className={styles.mockVideo}></div>
                <div className={styles.mockLines}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>© 2026 Vietnam Discovery Campaign. Powered by PixVerse AI Video Production.</p>
          <div className={styles.footerLinks}>
            <span>Destinations</span>
            <span>Gastronomy</span>
            <span>Cultural Heritage</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
