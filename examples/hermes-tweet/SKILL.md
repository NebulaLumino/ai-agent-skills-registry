---
name: hermes-tweet
description: Use Hermes Agent with Xquik for X/Twitter search, reads, posting, replies, likes, retweets, follows, DMs, monitors, extraction jobs, draws, media, and trends.
version: 0.1.6
author: Xquik
license: MIT
homepage: https://github.com/Xquik-dev/hermes-tweet
keywords: [hermes-agent, xquik, twitter, x, social-media, automation, tweets, monitoring]
compatibility:
  - hermes-agent
tools:
  - tweet_explore
  - tweet_read
  - tweet_action
environment:
  variables:
    - XQUIK_API_KEY
    - HERMES_TWEET_ENABLE_ACTIONS
    - HERMES_ENABLE_PROJECT_PLUGINS
trigger:
  keywords: [tweet search, x search, social listening, post tweet, reply to tweet, monitor account, twitter automation]
  allow_implicit: true
---
# Hermes Tweet Skill

Use Hermes Tweet when a Hermes Agent session needs X/Twitter discovery, authenticated reads, or explicitly approved X/Twitter workflow actions through Xquik.

## Capabilities

- Find catalog-listed Xquik X/Twitter API routes with `tweet_explore`.
- Read public or authenticated X/Twitter data with `tweet_read` after an endpoint is known.
- Prepare and run approved account-changing workflows with `tweet_action` only when actions are enabled.
- Support social listening, launch monitoring, support triage, creator research, brand research, giveaway audits, community audits, and controlled publishing workflows.

## Workflow

1. Use `tweet_explore` to find the route for the user request.
2. Use `tweet_read` for read-only GET routes after confirming `XQUIK_API_KEY` exists in the runtime environment.
3. Use `tweet_action` only for write-capable routes, private state, monitors, webhooks, extraction jobs, media workflows, or giveaway draws after stating the endpoint, payload, and side effects.
4. If `tweet_action` is unavailable, explain that actions require `HERMES_TWEET_ENABLE_ACTIONS=true`.
5. If the plugin is project-local, confirm `HERMES_ENABLE_PROJECT_PLUGINS=true` is set for trusted repositories.

## Safety Rules

- Never ask for or reveal API keys, signing keys, passwords, cookies, or TOTP secrets.
- Never pass credentials in tool arguments.
- Use only catalog-listed `/api/v1/...` endpoints returned by `tweet_explore`.
- Do not create direct HTTP fallbacks or guess endpoint paths.
- Do not use account connection, re-authentication, API key, billing, credit top-up, or support-ticket endpoints.
- Keep `HERMES_TWEET_ENABLE_ACTIONS=false` by default for unattended, scheduled, gateway-driven, or cron-driven workflows.

## Examples

Search tweets:

```json
{"query":"tweet search","method":"GET"}
```

Then call `tweet_read` with the catalog-listed search path and query parameters.

Post a tweet:

```json
{"query":"post tweet","include_actions":true}
```

Then call `tweet_action` only after the user approves the exact payload and side effects.

## Validation

After installing or upgrading Hermes Tweet in Hermes Agent:

1. Run `hermes plugins enable hermes-tweet` unless install used `--enable`.
2. Run `hermes plugins list` and confirm the plugin is enabled.
3. Run `hermes tools list` and confirm `tweet_explore`, `tweet_read`, and `tweet_action` are registered as expected.
4. Confirm `tweet_explore` works without `XQUIK_API_KEY`.
5. Confirm `tweet_read` appears only when `XQUIK_API_KEY` is configured.
6. Confirm `tweet_action` stays hidden or disabled unless `HERMES_TWEET_ENABLE_ACTIONS=true`.

## Trust Note

This skill is a public self-assessment. Do not present Hermes Tweet as NVIDIA-verified unless the reviewed release includes a clean SkillSpector scan, Tier-3 eval data, `BENCHMARK.md`, `skill-card.md`, `skill.oms.sig`, and signature verification instructions.