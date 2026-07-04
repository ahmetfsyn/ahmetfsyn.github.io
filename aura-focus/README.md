<p align="center">
  <picture>
    <!-- TODO: replace with actual app icon -->
    <img alt="AuraFocus" src="https://ahmetfsyn.github.io/AuraFocus-public/app-icon.png" width="120" height="120">
  </picture>
</p>

<h1 align="center">AuraFocus</h1>

<p align="center">
  <strong>Find your flow. Stay there.</strong>
</p>

<p align="center">
  A minimalist, lo-fi deep-focus timer with immersive ambient environments.<br/>
  Built for uninterrupted creative work, study sessions, and mindful productivity.
</p>

<p align="center">
  <img alt="Expo SDK 55" src="https://img.shields.io/badge/Expo%20SDK-55-4630EB?logo=expo&style=flat-square">
  <img alt="React Native 0.83" src="https://img.shields.io/badge/React%20Native-0.83-61DAFB?logo=react&style=flat-square">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&style=flat-square">
</p>

<!-- TODO: add screenshot -->
<!-- ![AuraFocus Focus Screen](docs/screenshots/focus.png) -->

---

## What is AuraFocus?

AuraFocus combines a distraction-free countdown timer with cinematic lo-fi backgrounds and calibrated 60 BPM ambient soundscapes. Each theme pairs a seamless looping video with a matching audio track to create a sensory environment that makes it easy to slip into deep focus — and stay there.

The UI is designed to fade away. Gesture controls (drag, double-tap) let you reposition or compact the timer without hunting for buttons. An auto-dim system fades the interface when you stop interacting, leaving only the ambient scene and the ticking clock.

---

## Key Features

### 🎬 Lo-Fi Ambient Environments

Three beautifully crafted focus themes — each with a looping background video and matching ambient audio.

<!-- TODO: add theme screenshots -->

- **Rainy Night** — Gentle rain and distant thunder over a moody cityscape
- **Windy Fields** — Golden grass swaying under a soft breeze
- **Rainy Window** — Cozy window view with droplets and quiet ambiance

_Premium themes with cinematic motion available via subscription._

### ⏱️ Gesture-Driven Timer

- **Double-tap** to toggle between expanded and compact mode
- **Long-press + drag** to reposition the timer anywhere on screen
- **Start / Pause / Reset** with smooth animated transitions
- Persists across app restarts — your timer survives crashes

### 🌑 Auto-Dim Focus UI

The interface fades when you stop interacting, keeping distractions minimal. Configure the delay and intensity to match your workflow.

### 📊 Focus Analytics

Understand your patterns with beautiful animated charts:

- **Weekly Focus** — Minutes per day, tap for details
- **Completion Rate** — Success vs. drop-offs over the past year
- **Productive Themes** — Which environments help you focus best

<!-- TODO: add analytics screenshots -->
<!-- ![Analytics Dashboard](docs/screenshots/analytics.png) -->

### 🌌 Live Constellation

See how many people are currently in deep focus around the world, powered by real-time presence. You're never focusing alone.

### 🔔 Abandonment Recovery

If you leave the app during a session, a gentle (or cheeky) notification reminds you to come back. Return within the grace period and the session continues — otherwise it's saved as an abandoned session for your analytics.

### 💬 In-App Feedback

Report bugs, suggest features, or share thoughts — directly from the app. Attach screenshots, no account required. Anonymous by design.

### 🛡️ Privacy-First

No accounts. No sign-up. Sessions are tracked by an anonymous device ID that never leaves your phone unless you decide to submit feedback. The full source code is open for audit.

---

## Monetization & Open-Core

AuraFocus is **open-core**. The public repository contains the full application source code.

| Tier              | Includes                                                                                                                     |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Free**          | 3 lo-fi themes, unlimited focus sessions, full analytics, constellation counter, auto-dim UI, abandonment recovery, feedback |
| **Premium** (IAP) | Additional cinematic premium themes with instant download                                                                    |

Premium access is managed through **RevenueCat**. Subscriptions are offered as Monthly, Yearly, or Lifetime plans. The paywall screen appears when you tap a locked theme — you can always dismiss it and continue with the free themes.

---

## Tech Stack

| Category             | Technology                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------------ |
| **Framework**        | [Expo SDK 55](https://expo.dev) (Managed Workflow)                                         |
| **Runtime**          | [React Native 0.83](https://reactnative.dev) + Hermes                                      |
| **Language**         | [TypeScript 5.9](https://www.typescriptlang.org) (strict mode)                             |
| **Routing**          | [expo-router](https://docs.expo.dev/router/introduction/) (file-based)                     |
| **State Management** | [Zustand 5](https://zustand.docs.pmnd.rs) + [TanStack Query 5](https://tanstack.com/query) |
| **Backend**          | [Supabase](https://supabase.com) (Postgres, Realtime, Storage)                             |
| **Media**            | expo-video, expo-audio                                                                     |
| **Payments**         | [RevenueCat](https://www.revenuecat.com) (react-native-purchases)                          |
| **Ads**              | Google AdMob (react-native-google-mobile-ads)                                              |
| **Animations**       | [react-native-reanimated 4](https://docs.swmansion.com/react-native-reanimated/)           |
| **Charts**           | [react-native-gifted-charts](https://gifted-charts.web.app)                                |
| **Icons**            | [lucide-react-native](https://lucide.dev)                                                  |
| **File Handling**    | expo-file-system + [JSZip](https://stuk.github.io/jszip)                                   |
| **Notifications**    | expo-notifications                                                                         |

<p align="center">
  <sub>Built with focus. For focus.</sub>
</p>
