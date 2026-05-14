# Agent Guide

## Project Context

This repository is a personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

Primary goals:

1. Keep the site visually polished and consistent with the established style.
2. Keep pages fast, responsive, and accessible.
3. Make content updates easy and safe.

## Mandatory Workflow (Superpowers First)

This repository uses the `.agents/skills/using-superpowers` process as the default execution model.

Required behavior for every new user request:

1. Check whether any local skill applies before doing implementation work.
2. If there is even a small chance a skill applies, load that skill first and follow it.
3. Prioritize process skills before implementation skills:
   - first: `brainstorming`, `systematic-debugging`, `test-driven-development`, etc.
   - second: domain/task implementation skills.
4. If a loaded skill has a checklist, convert it into a tracked execution plan and complete it.
5. Do not skip skill workflow because a task seems simple.

Priority model:

1. User instructions in this repository or direct user chat requests
2. Superpowers skill workflow
3. Default assistant behavior

Operational note for Codex:

- Skill files are available under `.agents/skills/`.
- For Codex mapping and multi-agent equivalents, see:
  - `.agents/skills/using-superpowers/references/codex-tools.md`

## Stack

- Framework: Next.js
- UI: React + Tailwind CSS
- Language: TypeScript
- Package manager: npm (`package-lock.json` is present)

## Quick Commands

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Repo Map

- `pages/`: route-level pages
- `components/`: reusable UI components
- `styles/`: global and shared styling
- `public/`: static assets (images, icons, files)
- `app/`: app-level modules/features used by the site
- `data/`: portfolio content and structured data
- `helpers/`, `lib/`, `context/`, `config/`, `types/`: support modules and shared typing/config

## Non-Negotiable Rules

1. Keep the existing visual language consistent unless the user explicitly asks for a redesign.
2. Preserve responsive behavior across mobile and desktop; new sections must be mobile-safe.
3. Maintain accessibility basics:
   - semantic HTML where practical
   - keyboard-friendly interactions
   - alt text for meaningful images
   - avoid obvious contrast failures
4. Protect performance:
   - avoid unnecessary client-side JavaScript
   - use optimized media patterns (including Next.js image best practices where applicable)
   - avoid large blocking assets without clear reason
5. Do not silently break SEO-critical metadata or canonical routing behavior.
6. Follow existing project patterns before introducing new architecture.

## Before Finishing Any Change

Run the available verification commands:

```bash
npm run lint
npm run build
```

Then do a quick manual check in dev mode for affected pages:

```bash
npm run dev
```

Validate:

1. No console errors on touched pages/components.
2. Layout looks correct on both mobile and desktop widths.
3. Links, buttons, and core interactions still work.

## Local Skills Found In `.agents/skills`

Available skill folders:

- `brainstorming`
- `dispatching-parallel-agents`
- `executing-plans`
- `finishing-a-development-branch`
- `receiving-code-review`
- `remembering-conversations`
- `requesting-code-review`
- `subagent-driven-development`
- `systematic-debugging`
- `test-driven-development`
- `using-git-worktrees`
- `using-superpowers`
- `verification-before-completion`
- `writing-plans`
- `writing-skills`

When a task matches one of these, load the corresponding `SKILL.md` first and follow it.

Recommended startup skill:

- `using-superpowers` (always apply at conversation start unless explicitly operating as a narrowly scoped subagent task)

## Subagent Model Selection (Token Efficiency Rule)

Before spawning any subagent, always perform a model-selection pre-step.

Required policy for `subagent-driven-development` and `dispatching-parallel-agents` workflows:

1. Classify the delegated task complexity first (simple/clear vs complex/ambiguous).
2. For simple, well-scoped, and low-risk tasks, use a lower-cost model first (default: `gpt-5.3-codex`).
3. Use higher reasoning effort only when a task requires difficult reasoning, ambiguous tradeoffs, architecture decisions, or high-risk debugging.
4. Do not default to high reasoning effort for routine delegation.
5. If unsure, start lower-cost and escalate only if output quality or progress is insufficient.

Goal: minimize token usage while preserving quality by choosing the smallest sufficient setup before each subagent spawn.

## Subagent Model Cap (Hard Rule)

For all subagent-based workflows in this repository (including `subagent-driven-development` and `dispatching-parallel-agents`):

1. Maximum allowed subagent model is `gpt-5.3-codex`.
2. Never use `gpt-5.4`, `gpt-5.4-mini`, or `gpt-5.5` for subagents.
3. Complexity should be handled by adjusting `gpt-5.3-codex` reasoning effort (`low`, `medium`, `high`, `xhigh`) rather than switching to a newer model.
4. If a task is difficult, escalate reasoning effort first; do not escalate model family.

This is a strict token-efficiency constraint and should be treated as non-optional.
