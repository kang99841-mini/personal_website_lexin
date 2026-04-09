# Lexin — AI PM Portfolio

Personal portfolio site for Lexin, Human Centred Design (SUTD) → AI Product Manager.

**Live site:** [your GitHub Pages URL once deployed]

---

## How to edit your portfolio

All editable content lives in one place — **the top of `index.html`**. You never need to touch the HTML, CSS, or render logic below it.

### Opening the file

Open `index.html` in a plain text editor. On Mac, right-click the file → **Open With → TextEdit**, then switch TextEdit to plain text mode: **Format → Make Plain Text**.

> A better option: download [Visual Studio Code](https://code.visualstudio.com/) (free). It colour-codes the file so it's easy to read.

### The editable section

The file opens with a comment block:

```
✏️  LEXIN'S PORTFOLIO — EDIT YOUR CONTENT HERE
```

Everything between that comment and the matching `END OF EDITABLE CONTENT` line is yours to change. The sections are numbered and labelled clearly.

**Rule:** only change text inside `" "` quote marks. Never delete commas `,`, colons `:`, or brackets `{ }` `[ ]`.

---

## Section-by-section editing guide

### Section 1 — Basic details

```js
name:             "Lexin",
role:             "AI Product Manager",
location:         "Singapore",
email:            "your.email@gmail.com",       // ← your real email
linkedin_url:     "https://linkedin.com/in/yourprofile",
linkedin_display: "linkedin.com/in/yourprofile",
resume_file:      "assets/resume/Lexin_Resume.pdf",
open_to_work:     true,
```

- `email` — used for the "Get in touch" button and the contact card at the bottom
- `linkedin_url` — the full URL people click through to
- `linkedin_display` — the shorter text shown on screen (can be different from the URL)
- `resume_file` — path to your PDF; drop the file into `assets/resume/` first
- `open_to_work` — change to `false` to hide the green "Open to Opportunities" badge

---

### Section 2 — Hero headline

```js
headline: [
  "I design products",         // line 1 — normal colour
  "where AI does the work",    // line 2 — normal colour
  "humans hate."               // line 3 — purple accent colour
],
subtext: "Human Centred Design graduate from SUTD..."
```

The third line of the headline is automatically highlighted in purple. Make it the most memorable part.

---

### Section 3 — Stats (4 cards)

```js
stats: [
  { value: "HCD",   label: "Master's Focus"    },
  { value: "AI PM", label: "Target Role"        },
  { value: "SUTD",  label: "Graduating Sept 2026" },
  { value: "0→1",   label: "Builder Mindset"    },
],
```

Change `value` (the big text) and `label` (the small text below) for each card.

---

### Section 4 — About me

```js
photo:    "assets/photos/profile.jpg",   // drop your photo here
initials: "LX",                          // shown if no photo found
bio:      "I'm a Human Centred Design student...",
currently: [
  "Building an AI agent platform...",
  "...",
  "...",
]
```

- Drop your profile photo into `assets/photos/` and make sure the filename matches
- If no photo is found, your initials are shown automatically — that's fine
- `currently` — 3 short sentences about what you're working on or learning right now

---

### Section 5 — Value props (3 cards)

```js
props: [
  { icon: "🎯", title: "...", body: "..." },
  { icon: "🤖", title: "...", body: "..." },
  { icon: "🔗", title: "...", body: "..." },
]
```

Three cards explaining your strengths. Change the `icon` (any emoji), `title`, and `body` text.

---

### Section 6 — Featured project (Workato capstone)

This is your main case study card. It has more fields than the other projects.

```js
title:   "AI Agent Platform for Enterprise Workflows",
company: "Workato × SUTD Capstone",
period:  "2024 – 2026",
status:  "In Progress",   // change to "Completed" when done
my_role: "Product Manager & UX Lead",
summary: "...",
```

**The 4 HCD process steps** — fill in what you actually did at each stage:

```js
process: [
  { step: "Discover", icon: "🔍", what: "..." },
  { step: "Define",   icon: "📋", what: "..." },
  { step: "Design",   icon: "✏️", what: "..." },
  { step: "Deliver",  icon: "🚀", what: "..." },
]
```

**Outcomes** — key numbers or results. Update with your real data:

```js
outcomes: [
  { value: "12+",   label: "User interviews"       },
  { value: "1 PRD", label: "Requirements document" },
  { value: "Tested",label: "With enterprise users" },
],
```

**Case study link** — once you have a written case study (Notion, Figma, PDF), paste the URL here:

```js
case_study_url: "",   // paste URL here — button appears automatically when not blank
```

---

### Section 7 — More projects

The three placeholder cards show suggestions for what to add. Once you have a real project, **copy the template block** shown in the comments and paste it above the placeholders:

```js
{
  placeholder: false,
  title:         "Project Name",
  company:       "Company or Course",
  period:        "Year",
  logo:          "assets/logos/company_logo.png",
  logo_bg:       "#000000",    // hex colour shown behind logo
  logo_initials: "AB",         // fallback text if no logo file
  summary:       "One or two sentence description.",
  outcomes: [
    { value: "X%", label: "Describe the result" },
  ],
  tags: ["Tag 1", "Tag 2"],
  link_url:   "",              // link to project, or leave blank
  link_label: "View Project",
},
```

To **remove a placeholder**, delete the whole `{ placeholder: true, ... }` block including its closing `},`.

---

### Section 8 — Skills

To **add a skill tag**, add `"New Skill",` inside any category's `tags` list:

```js
{ category: "Design Tools", tags: ["Figma", "Prototyping", "Your New Tool"] }
```

To **remove a tag**, delete that line. Keep the commas correct — the last item in a list should not have a trailing comma, but JavaScript is forgiving about this.

To **add a new category**, copy an existing category block and paste it at the end of the list (before the closing `]`).

---

### Section 9 — Education

Each degree is a block. The SUTD master's is already filled in. The City University of Macau undergrad is filled in — update it with your specific GPA, awards, or notable projects:

```js
{
  degree:        "Bachelor of Arts, Environmental Design",
  school:        "City University of Macau",
  period:        "2020 – 2024",
  logo:          "assets/logos/cityu_macau_logo.png",  // drop logo here
  logo_bg:       "#003f7f",
  logo_initials: "CityU",
  highlight:     "",           // e.g. "Dean's List" or leave blank
  achievements: [
    "Add your GPA, honours, or awards here",
    "Add a notable project or thesis",
  ],
  placeholder: false
}
```

When `placeholder: false`, the card renders normally. Remove `placeholder: true` from any block once it's filled in.

---

## Adding logos and photos

### Profile photo

1. Get a good headshot or photo of yourself
2. Name it `profile.jpg` (or `profile.png`)
3. Drop it into `assets/photos/`
4. The site picks it up automatically

### School / company logos

1. Download the logo from the school or company's press/media page
2. Drop it into `assets/logos/`
3. Update the `logo` field in the relevant section to match the filename:
   ```js
   logo: "assets/logos/sutd_logo.png"
   ```
4. If the file isn't found, the site shows the `logo_initials` text as a fallback — so the site always looks clean even before you add logos

**Recommended logo sources:**
- SUTD: [sutd.edu.sg](https://www.sutd.edu.sg) — media/press section
- Workato: workato.com press kit
- City University of Macau: cityu.edu.mo

---

## Viewing the site locally

Just double-click `index.html` — it opens in your browser. No server needed.

After any edit: save the file → switch to your browser → press `Cmd+R` (Mac) to refresh.

---

## Pushing to GitHub and deploying with GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click **New repository** (the `+` button → New repository)
3. Name it: `portfolio` (or anything you like)
4. Set it to **Public**
5. Do **not** tick "Add a README" (you already have one)
6. Click **Create repository**

### Step 2 — Push your files

GitHub will show you a set of commands. Open **Terminal** (search Terminal in Spotlight) and run these one by one. Replace `YOUR_USERNAME` with your GitHub username:

```bash
# Navigate to the portfolio folder
cd ~/personal_website_lexin

# Initialise git (only needed once)
git init

# Stage all files
git add .

# Create the first commit
git commit -m "Initial portfolio commit"

# Link to your GitHub repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

If asked for a password, use a **Personal Access Token** (not your GitHub password):
- GitHub → Settings → Developer settings → Personal access tokens → Generate new token
- Tick `repo` scope → Generate → copy the token → paste it as the password

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: `main`, folder: `/ (root)`
5. Click **Save**
6. After 1–2 minutes, your site is live at:
   ```
   https://YOUR_USERNAME.github.io/REPO_NAME/
   ```

### Step 4 — Update the site after edits

Every time you edit `index.html` and want to publish the changes:

```bash
cd ~/personal_website_lexin
git add index.html
git commit -m "Update portfolio content"
git push
```

GitHub Pages automatically redeploys within about 60 seconds.

---

## File structure reference

```
personal_website_lexin/
├── index.html              ← your entire site (edit the top section only)
├── content.js              ← legacy file, no longer used — can delete
├── README.md               ← this file
├── EDIT_ME.txt             ← quick reference guide
└── assets/
    ├── logos/
    │   ├── _HOW_TO.txt
    │   ├── sutd_logo.png       ← drop SUTD logo here
    │   ├── workato_logo.png    ← drop Workato logo here
    │   └── cityu_macau_logo.png ← drop City U Macau logo here
    ├── photos/
    │   ├── _HOW_TO.txt
    │   └── profile.jpg         ← drop your photo here
    └── resume/
        ├── _HOW_TO.txt
        └── Lexin_Resume.pdf    ← drop your resume here
```

---

## Common mistakes

| Problem | Likely cause | Fix |
|---|---|---|
| Site shows error message | Deleted a `"`, `,`, or `}` by accident | Undo your last edit (Cmd+Z) and try again |
| Photo not showing | Wrong filename or wrong folder | Check the filename matches exactly, including capitalisation |
| Logo not showing | File not in `assets/logos/` | Drop the file in the right folder and check the filename in Section 6 or 9 |
| Resume link broken | PDF not in `assets/resume/` | Drop your PDF in `assets/resume/` and check the filename in Section 1 |
| GitHub push asks for password | GitHub no longer accepts passwords | Use a Personal Access Token (see Step 2 above) |

---

*Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools, no dependencies.*
