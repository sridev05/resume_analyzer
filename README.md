# Resume Analyzer

Stop guessing whether your resume is good enough. This project analyzes resumes, extracts skills, matches them against job descriptions, ranks candidates, and even helps rewrite content. It’s a clean **full‑stack React + Node.js** application powered by AI.

---

## 🚀 Features

* **Resume Analyzer** – Extracts structured insights from resumes
* **Skill Extractor** – Identifies technical and soft skills automatically
* **JD Matcher** – Compares resume with job description and gives a match score
* **Multi‑Resume Ranking** – Ranks multiple resumes against a single JD
* **Resume Rewriter** – Improves resume bullet points using AI
* **Cover Letter Generator** – Creates customized cover letters
* **Radar Chart Visualization** – Visual comparison of skill strengths

---

## 🧰 Tech Stack

### Frontend (`client/`)

* **React.js** – Component‑based UI
* **CSS** – Simple, clean styling
* **Charts (Radar Chart)** – Skill visualization

### Backend (`server/`)

* **Node.js**
* **Express.js** – REST API
* **Gemini API** – AI‑powered analysis, rewriting, and matching

---

## 📁 Project Structure

```text
RESUME ANALYZER/
│
├── client/                 # Frontend (React)
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Analyzer.jsx        # Resume analysis UI
│   │   │   ├── CoverLetter.jsx     # Cover letter generator
│   │   │   ├── JDMatcher.jsx       # Resume vs JD matching
│   │   │   ├── MultiRank.jsx       # Ranking multiple resumes
│   │   │   ├── RadarChartPage.jsx  # Skill visualization
│   │   │   ├── Rewriter.jsx        # Resume rewriting
│   │   │   └── SkillExtractor.jsx  # Skill extraction
│   │   ├── api.js                  # Frontend API calls
│   │   ├── App.js                  # App routing
│   │   ├── index.js                # React entry point
│   │   └── styles.css
│   ├── package.json
│   └── package-lock.json
│
├── server/                 # Backend (Node + Express)
│   ├── gemini.js           # Gemini AI integration
│   ├── helpers.js          # Utility/helper functions
│   ├── parser.js           # Resume parsing logic
│   ├── server.js           # Express server entry point
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── README.md
└── readme.txt
```

---

## ⚙️ Setup & Run

### 1️⃣ Clone the Repository

```bash
git clone <repo-url>
cd resume-analyzer
```

### 2️⃣ Start Backend

```bash
cd server
npm install
node server.js
```

### 3️⃣ Start Frontend

```bash
cd client
npm install
npm start
```

Frontend runs on `http://localhost:3000`
Backend runs on `http://localhost:5000`

---

## 🔑 Environment Variables

Create a `.env` file in `server/`:

```env
GEMINI_API_KEY=your_api_key_here
```

---
## 📌 Use Cases

* Resume screening for recruiters
* Job seekers optimizing resumes
* ATS‑style resume matching
* Interview preparation

---


## 📈 Future Improvements

* Authentication & user profiles
* Resume history tracking
* PDF export
* ATS keyword optimization

---

## 🧠 Final Note

If you can’t explain this project clearly in an interview, that’s on you — not the project. Learn it properly.






