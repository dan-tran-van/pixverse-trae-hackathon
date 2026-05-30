# Vietnam Discovery Campaign

An interactive campaign landing page built for the **TRAE x PixVerse Video Generation Track** hackathon.

## Track Category
**Marketing / E-commerce campaign landing page**
A campaign page where the video drives interaction or conversion.

## Project Concept
Vietnam Discovery Campaign is an interactive PixVerse-powered landing page that localizes Vietnam’s travel, food, and culture story for Global, Vietnamese, Japanese, Chinese, Taiwanese, and Korean audiences. It utilizes native vertical writing layouts as a cultural differentiator for East Asian localized versions.

## PixVerse Integration
- **Video Usage**: The PixVerse video serves as the emotional and visual anchor of the campaign. It is not just decorative but drives the interaction flow.
- **Meaningful Interaction**: Users explore the "Visual Storytelling" section where clicking on different chapters (Nature, Hanoi, Hội An, etc.) seeks the video to specific moments, creating a narrative-driven discovery experience.
- **Conversion Flow**: The localization switcher demonstrates how a single PixVerse-generated video can be adapted for multiple markets by changing the editorial layer (copy, typography, and layout) to resonate with local cultural expectations.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules (No Tailwind)
- **State Management**: React State & localStorage

## TRAE-Assisted Workflow
This project was developed using **Trae IDE**, utilizing its AI-powered pair programming capabilities to:
1.  Analyze the repository structure and propose a clean architecture.
2.  Implement a type-safe data structure for multi-market localization.
3.  Create reusable components with SCSS Modules for complex layouts like vertical writing.
4.  Implement interactive video chapter seeking and mock conversion logic.

## How to replace the placeholder video
To replace the demo video with your final PixVerse MP4:
1.  Export your video from the PixVerse app as an MP4.
2.  Save it as `public/videos/vietnam-discovery.mp4`.
3.  The application will automatically use the new video file.
4.  Update the timestamps in `data/campaignData.ts` if your scene chapters occur at different times.

## Getting Started
First, install the dependencies:
```bash
pnpm install
```

Then, run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
