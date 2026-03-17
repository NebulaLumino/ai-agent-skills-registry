# AI Agent Skills Registry

A centralized registry for AI agent skills with versioning, ratings, and one-click installation.

## Overview

This project provides:
- A standard skill format specification
- CLI tool for managing skills
- Registry backend API (coming soon)
- Web interface for discovery (coming soon)

## Quick Start

### Install CLI

```bash
npm install -g ai-agent-skills-registry
# or
npm install -g .
```

### Basic Usage

```bash
# List installed skills
skill list

# Install a skill
skill install web-scraper

# Search registry
skill search "api testing"

# View skill info
skill info web-scraper
```

## Skill Format

Skills follow the open standard used by Claude Code, Cursor, and GitHub Copilot.

```yaml
---
name: my-skill
description: What this skill does
version: 1.0.0
author: your-name
keywords: [tag1, tag2]
compatibility: [openclaw, claude-code]
trigger:
  keywords: [when to use this skill]
---
# Skill Instructions

Your skill prompt here...
```

See `examples/` for more skill templates.

## Project Structure

```
ai-agent-skills-registry/
├── SPEC.md              # Format specification
├── src/
│   └── cli.ts          # CLI implementation
├── examples/
│   ├── web-scraper/    # Example skill
│   └── api-tester/    # Example skill
└── package.json
```

## Features

- ✅ Skill format specification
- ✅ CLI tool with install/list/search
- ✅ Example skills
- ⏳ Registry API
- ⏳ Web interface
- ⏳ Rating system
- ⏳ Version management

## Development

```bash
# Build
npm run build

# Run CLI locally
npm run cli -- list

# Test
npm test
```

## License

MIT
