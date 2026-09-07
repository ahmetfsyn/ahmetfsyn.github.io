# CampuWise - System Architecture & Product Overview

CampuWise is an all-in-one digital campus ecosystem mobile application built for university students in Turkey (initially targeting Mersin and Tarsus universities). The project follows a zero-cost infrastructure strategy for its MVP phase, prioritizing quick market entry and low maintenance overhead.

---

## 1. Technical Stack & Infrastructure

- **Mobile App (Frontend):** React Native with Expo (Expo Router), NativeWind / Gluestack UI for styling, Zustand for global state management, and React Query for asynchronous data fetching.
- **Backend & Database:** Supabase (PostgreSQL, Database Webhooks, Row Level Security, Edge Functions, and Auth).
- **Automation & Data Pipeline:** n8n workflows for automated web scraping, cleaning HTML payloads, normalizing dates to ISO 8601, and ingesting institutional announcements.
- **Geocoding & Maps:** `EventInlineMap` component using a Native WebView + Leaflet.js with **Photon API** (`photon.komoot.io`) for fuzzy OSM geocoding.
- **App Configuration:** Centralized config (`src/constants/config.ts`) dynamically building identifying headers (`User-Agent: CampuWise/1.0.0 (contact@...)`) using `expo-constants`.
- **Deep Linking:** Native Expo Custom Scheme (`campuwise://`).
- **Communications:** Cloudflare Email Routing (Inbound), Resend / Brevo SMTP (Outbound transactional emails via Supabase Auth), and Expo Push Notifications for high-frequency alerts.

---

## 2. Core Modules & Features

### Institutional Announcements Aggregator

Automated ingestion engine pulling real-time announcements and feeds from national and academic platforms:

- **National Feeds:** ÖSYM, TÜBİTAK, GSB (Gençlik ve Spor Bakanlığı).
- **University Feeds:** Direct scraping of university and faculty notice boards.

### Events & Clubs System

- Interactive event discovery for campus activities.
- **Venue Mapping:** Address resolution using Photon API fuzzy search to render interactive Leaflet maps with directional links.
- **Club Directories:** Student club profiles, activity listings, and community feeds.

### Organizer & Club Admin Dashboard

- Role-based access control allowing verified club administrators and event organizers to create, edit, and manage their own events and announcements.

### Ring (Campus Shuttle) System

- Timetables, routes, and operational schedules for campus shuttle buses (Ring services).

### Daily Meal (Yemekhane) System

- Daily and weekly cafeteria menus with nutritional and pricing details for university dining halls.

### Academic Calendar System

- Centralized tracking of key academic dates, registration deadlines, midterm/final exam periods, and holidays.

### Push & System Notifications

- Expo Push Notification integration for instant alerts (deadline reminders, event changes, urgent announcements) without incurring email quota costs.
- Supabase Auth integration for transactional account emails (password resets, account verification).

---

## 3. Database & Data Models

- **Academic Hierarchy:** Structured relations linking `universities`, `faculties`, and `departments` (utilizing normalized naming for search indexing).
- **User Profile & Auth:** Supabase Auth mapped to user profile tables storing university, department, and academic level associations.
- **Events & Locations:** Events store textual venue details (`place`, `building`, `room`) that combine on the client side for geocoding, with a planned migration toward a dedicated `buildings` coordinate model (`lat`/`lng`).
