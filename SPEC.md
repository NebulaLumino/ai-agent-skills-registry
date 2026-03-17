# AI Agent Skills Registry - Specification

## Version 1.0.0

## Skill Format Specification

A skill is a collection of files that define an AI agent's capability. The format follows the open standard used by Claude Code, Cursor, GitHub Copilot, and Codex CLI.

### Directory Structure

```
skill-name/
├── SKILL.md           # Required: Skill definition with YAML frontmatter
├── README.md          # Optional: Human-readable documentation
├── scripts/           # Optional: Executable scripts
│   └── *.sh, *.py, *.js
├── references/       # Optional: Additional documentation
│   └── *.md, *.pdf
├── assets/           # Optional: Templates, configs, media
│   └── *
├── tests/            # Optional: Test cases
│   └── *
└── config.json      # Optional: Skill configuration
```

### SKILL.md Format

The SKILL.md file uses YAML frontmatter followed by Markdown:

```yaml
---
name: web-scraper
description: Expert at extracting data from websites using Playwright and Cheerio
version: 1.2.0
author: your-name
license: MIT
homepage: https://github.com/user/skill-repo
keywords: [web, scraping, data-extraction, playwright]
compatibility:
  - claude-code
  - cursor
  - openclaw
  - langgraph
tools:
  - playwright
  - cheerio
environment:
  node_version: ">=18"
  dependencies: ["playwright", "cheerio"]
trigger:
  keywords: [scrape, extract, web data, crawl]
  allow_implicit: true
tests:
  - name: scrape-basic
    description: Test basic HTML extraction
---
# Web Scraper Skill

You are an expert web scraping specialist...

## Capabilities

- Extract data from static and dynamic websites
- Handle authentication and sessions
- Parse HTML, JSON, and XML
- Save to multiple formats

## Usage

Use this skill when you need to:
- Extract structured data from websites
- Build datasets from web sources
- Monitor web content changes
```

### Registry API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /skills | List all skills |
| GET | /skills/:name | Get skill details |
| GET | /skills/search?q=query | Search skills |
| POST | /skills | Add new skill (authenticated) |
| PUT | /skills/:name | Update skill |
| DELETE | /skills/:name | Remove skill |
| GET | /skills/:name/download | Download skill as ZIP |

### Registry Database Schema

```sql
CREATE TABLE skills (
  id TEXT PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  version TEXT NOT NULL,
  description TEXT,
  author TEXT,
  license TEXT,
  keywords TEXT[],
  compatibility TEXT[],
  downloads INTEGER DEFAULT 0,
  rating REAL DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE skill_versions (
  id TEXT PRIMARY KEY,
  skill_id TEXT REFERENCES skills(id),
  version TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE skill_ratings (
  id TEXT PRIMARY KEY,
  skill_id TEXT REFERENCES skills(id),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  user_id TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### CLI Commands

```bash
# Install a skill
skill install <name>
skill install <owner>/<name>
skill install <git-url>

# List installed skills
skill list

# Search registry
skill search <query>

# Update a skill
skill update <name>

# Remove a skill
skill uninstall <name>

# Publish to registry
skill publish

# View skill info
skill info <name>
```

### Rating Calculation

```
rating = (sum of all ratings) / (number of ratings)
```

### Search Ranking

1. Keyword match weight
2. Download count weight
3. Rating weight
4. Recent update weight

## Implementation Notes

- Skills are cached locally after first install
- Registry supports both public and private skills
- Authentication required for publishing
- Version follows semantic versioning (semver)
