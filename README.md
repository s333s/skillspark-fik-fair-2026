<p align="center">
  <img src="docs/thumbnail.png" alt="SkillSpark" width="700">
</p>

# 🔥 SkillSpark

> Nyalakan kariermu dengan AI.

**SkillSpark** is an AI Career Co-Pilot & Peer Matchmaker for university tech students. It detects skill gaps, builds a 4-week project-based learning roadmap, and recommends peers with complementary skills.

Built for **Hackathon FIK FAIR 2026 – IGNITE**
(Inspiring Growth, Networking, Innovation, Technology, and Exploration).

🎥 **Demo video:** https://youtu.be/1MbB59uVJ8k
📝 **Devpost:** https://fik-fair-2026.devpost.com/
🔗 **Live demo:** [ https://ai.studio/apps/f60e7d9e-5cfa-48d5-b0e0-416d0d8a6a69]

## 📸 Screenshots
| Skill Gap Analysis | 4-Week Roadmap |
|---|---|
| ![Gap](docs/screenshot-1.png) | ![Roadmap](docs/screenshot-2.png) |

| Peer Matching | User Flow |
|---|---|
| ![Peers](docs/screenshot-3.png) | ![Flow](docs/screenshot-4.png) |

## 🎯 Problem
Students don't know which skills they lack for their target career, learn without direction, and struggle to find teammates with complementary skills.

## 💡 Solution
1. **Skill gap analysis**: readiness score, matched skills, and critical gaps
2. **4-week roadmap**: weekly themes and a capstone project
3. **Peer matching**: teammates with complementary skills
4. **Milestone tracker**: weekly checklist

## 🧩 IGNITE Alignment
| Element | How SkillSpark supports it |
|---|---|
| Growth | Personalized 4-week roadmap |
| Networking | Peer matching across campuses |
| Innovation | LLM-based semantic gap analysis |
| Technology | Gemini API with structured JSON output |
| Exploration | Explore new tech career paths |

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS
- **AI:** Google Gemini API (structured JSON output)

## 🔄 User Flow
1. Open the app and complete the profile
2. Enter skills and levels
3. Choose a target career
4. AI analyzes skill gaps
5. AI generates the 4-week roadmap and capstone project
6. See recommended peers
7. Track progress and invite collaborators

## 🚀 Getting Started
```bash
git clone https://github.com/s333s/skillspark-fik-fair-2026.git
cd skillspark-fik-fair-2026
npm install
cp .env.example .env.local
npm run dev
```

Add your key to `.env.local`:
