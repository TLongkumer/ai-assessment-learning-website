# Assessing AI-Supported Learning

This repository contains a React and Tailwind CSS website explaining a process-based framework for assessing AI-supported learning in higher education.

The site is grounded in the assessment documents in the local `Assessment` folder and the attached website prompt. It explains the actual process:

- students use Google AI Studio with a teacher-designed system prompt;
- students follow a structured learning conversation before asking for a final essay;
- the transcript is treated as learning evidence;
- rubrics assess student agency, strategic prompting, critical reflection, and learning transfer;
- and a Codex grading agent applies hard caps when the transcript shows passive or implausible AI use.

## Site Sections

- Home
- About the assessment model
- Full assessment process
- Google AI Studio setup
- Student workflow
- System prompt method
- Student-AI conversation process
- Final essay generation process
- What students submit
- Rubric and grading criteria
- Assessment agent and grading logic
- Examples and samples
- Templates and downloads
- FAQ
- Contact / About Me

## Local Preview

Install dependencies and start the Vite dev server:

```bash
npm install
npm run dev
```

Then visit the local URL printed by Vite.

To create a production build:

```bash
npm run build
```

## GitHub Pages

The repository includes a GitHub Pages workflow at `.github/workflows/pages.yml`. On push to `main`, GitHub Actions installs dependencies, builds the Vite site, and deploys `dist`.

## Privacy Note

The website uses curated public-facing explanations and sample descriptions. It does not publish raw private student submissions.
