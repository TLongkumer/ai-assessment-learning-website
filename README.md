# AI Assessment Lab

This repository contains a public static website explaining an AI-supported assessment workflow.

The site is organized around the actual assessment process:

- students use Google AI Studio with a teacher-designed system prompt,
- students follow a clear instruction sheet while interacting with AI,
- a sample assignment shows what strong AI-supported learning looks like,
- rubric criteria explain how the learning process is assessed,
- and a ChatGPT Codex grading agent evaluates transcripts using `Agents.md` style instructions.

## Pages

- `index.html` - overview of the full workflow
- `process.html` - Google AI Studio setup, student instructions, and system prompt structure
- `sample.html` - dedicated assignment sample page
- `rubric.html` - assessment criteria and rubric creation logic
- `codex-agent.html` - how the Codex grading agent reviews transcripts

## Local Preview

Open `index.html` directly in a browser, or run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## GitHub Pages

The repository includes a GitHub Pages workflow at `.github/workflows/pages.yml`. After pushing this repository to GitHub, the workflow deploys the static site from the repository root.

## Privacy Note

The website uses curated public-facing explanations. It does not publish raw student submissions or private assessment files.
