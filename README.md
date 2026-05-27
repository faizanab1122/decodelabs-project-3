# ⚡ Project 3 — Interactive Web Elements

**DecodeLabs Industrial Training | Frontend Development | Batch 2026**

---

## 📌 Overview

A JavaScript-powered interactive webpage built on a HubSpot Customer Platform clone as part of the DecodeLabs Frontend Development training programme. This project focuses on DOM manipulation, event listeners, and state management — making a static page come alive with real user interactions.

---

## 🎯 Objective

Add interactivity to a webpage using JavaScript by demonstrating:

- DOM selection and manipulation
- Event-driven programming
- State management with variables
- Dynamic content updates
- Dark mode toggle using CSS custom properties

---

## 🛠️ Tech Stack

| Technology    | Purpose                          |
|---------------|----------------------------------|
| HTML5         | Page structure                   |
| CSS3          | Styling, variables, dark mode    |
| JavaScript    | Interactivity and DOM manipulation |
| Bootstrap 4   | Responsive grid layout           |
| Font Awesome 6| Icons                            |

---

## 📁 File Structure

```
project-3/
├── index.html          → Main file (HTML + CSS + JS)
├── assets/
│   ├── css/style.css   → External stylesheet
│   ├── page1-img.webp
│   ├── card1-img.svg … card6-img.svg
│   └── page 9 img-1.webp … page9-img4.webp
├── login.html          → Linked from Log in button
├── README.md           → This file
└── register.html       → Linked from Get started free button
```

---

## ✨ Interactive Features

### 🔍 Feature 1 — Live Hub Search Filter
Type in the search box to filter HubSpot product cards in real time.
- **Concepts:** `addEventListener('input')`, `Array.filter()`, `createElement`, `appendChild`

### 📋 Feature 2 — Get a Demo Form
Fill the form and submit to see a personalised success message.
- **Concepts:** Input validation, `style.display`, `classList.add`, `textContent`

### 💰 Feature 3 — Pricing Toggle
Switch between Monthly and Annual pricing with a click.
- **Concepts:** State variable (`let isAnnual`), `innerHTML`, `classList.toggle`

### 🔖 Feature 4 — Blog Post Save / Bookmark
Save and unsave blog posts with a live counter update.
- **Concepts:** `addEventListener('click')`, `classList.toggle`, live counter

### ❓ Feature 5 — FAQ Accordion
Click any question to expand its answer — only one open at a time.
- **Concepts:** `querySelectorAll`, `forEach`, `classList.add/remove`, CSS `max-height` transition

---

## 🌙 Dark Mode

Click the toggle pill in the top bar to switch between light and dark mode.

JavaScript adds/removes `.is-dark` on `<body>`. All CSS variables switch automatically via `body.is-dark` overrides — no inline styles needed.

---

## 🐛 Header Bug Fixed

**Original bug:** `<script>` tag was inside `<head>`, calling `getElementById` before the HTML body loaded → returned `null` → page broke.

**Fix applied:** All JavaScript moved to the bottom of `<body>` so every element exists before any JS runs.

The broken second navbar with placeholder `<h1>head</h1>` was also replaced with the real HubSpot logo.

---

## 📐 IPO Loop

Every feature follows the **Input → Process → Output** pattern:

| Phase   | Description                                      |
|---------|--------------------------------------------------|
| Input   | A user action — click, keypress, form submit     |
| Process | JavaScript logic — validate, filter, flip state  |
| Output  | DOM updates — text changes, classes toggle, elements appear/disappear |

---

## 🔗 Links

- **GitHub Repository:** https://github.com/faizanab1122/decodelabs-project-3
- **Live Website:** https://faizanab1122.github.io/decodelabs-project-3/

---

## 📸 Screenshots

> Add your screenshots in this section after taking them from the browser.

**Full Page View**
<!-- paste screenshot here -->

**Hub Search Filter**
<!-- paste screenshot here -->

**Demo Form — Success State**
<!-- paste screenshot here -->

**Pricing Toggle — Annual View**
<!-- paste screenshot here -->

**Dark Mode**
<!-- paste screenshot here -->

---

## 📚 Key Learnings

- How JavaScript makes HTML interactive through the IPO loop
- DOM manipulation — selecting, reading, and updating elements
- State management using variables to drive UI changes
- Event-driven programming — attaching listeners to user actions
- Why script placement in HTML matters and how to fix null errors
- CSS custom properties as a powerful theming system
- Clean code — `js-` prefixes for hooks, `is-` prefixes for state classes

---

## 👤 Author

**Faizan**
DecodeLabs Industrial Training — Batch 2026
Frontend Development Track

---

*Built as part of DecodeLabs Project 3 — Interactive Web Elements*
