# Nexus Frontend – Internship (Week 1)

## Project Overview
Nexus is an investor–entrepreneur collaboration platform frontend built with React and Vite.

## Tech Stack
- React
- Vite
- TypeScript
- Tailwind CSS

## Setup Instructions
1. Fork the base repository
2. Clone your fork
3. Install dependencies:
   npm install
4. Run locally:
   npm run dev

## UI Theme
Tailwind CSS is used with a custom theme:
- Primary (Blue)
- Secondary (Teal)
- Accent (Yellow)
- Status colors (Success, Warning, Error)
- Font: Inter

## Folder Structure (High-Level)
- src/
  - components/
  - pages/
  - assets/
  - styles/
  - routes/ (if present)

## Architecture Notes
- App is bootstrapped using Vite
- Routing via React Router
- Tailwind CSS for styling
- Components are modular and reusable

## 🚀 Features (Completed up to Week 2)

### 1. Entrepreneur Dashboard
- **Summary Cards:** Pending requests, Total connections, Upcoming meetings, aur Profile views ka visual summary.
- **Collaboration Requests:** Investors ki taraf se aane wali requests ko accept ya reject karne ka system.
- **Recommended Investors:** Startup ke mutabiq top investors ki list.

### 2. Video Pitching System (New)
- **Virtual Meeting Room:** Dashboard ke center mein ek dedicated video call section jahan se entrepreneurs live pitch join kar sakte hain.
- **Modern UI:** Gradient designs aur responsive layout ke saath.

### 3. Scheduling & Documentation (New)
- **Meeting Calendar:** Startup meetings aur investor pitches ko track karne ke liye integrated calendar view.
- **Document Chamber:** Pitch decks aur legal documents ko manage aur e-sign karne ke liye ek secure area.

## 🛠️ Tech Stack
- **Frontend:** React.js, TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router DOM

## 📂 Project Structure (Key Components)
- `EntrepreneurDashboard.tsx`: Main dashboard interface.
- `MeetingCalendar.tsx`: Calendar functionality.
- `DocumentChamber.tsx`: Files aur signatures handle karne ka component.
- `InvestorCard.tsx`: Investors ki profile dikhane ke liye reusable card.

## ⚙️ Installation & Setup

1. **Repository Clone karein:**
   ```bash
   git clone [apka-repository-link]
