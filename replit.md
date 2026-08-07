# Notibot

A Discord selfbot → official bot forwarder for **Play Together Customizer**.

It reads messages from a selfbot account and forwards them through an official Discord bot, with support for usage limits, invite tracking, and role-based access.

## Stack

- **Runtime:** Node.js (CommonJS)
- **Discord:** `discord.js-selfbot-v13` (selfbot) + `discord.js v13` (official bot)
- **Database:** MongoDB via Mongoose (usage limits, invite records, creators)

## How to run

The `Notibot` workflow runs automatically:

```
pnpm --filter @workspace/notibot run dev
```

This executes `node index.js` inside `bots/notibot/`.

## Required secrets

| Secret | Description |
|---|---|
| `DISCORD_TOKEN` | Selfbot account token (reads source channels) |
| `BOT_TOKEN` | Official Discord bot token (sends to target channels) |
| `MONGODB_URI` | MongoDB connection string |

## Configuration

Channel mappings and bot behaviour are set in `bots/notibot/config.json`.

## Project layout

```
bots/notibot/        # Main bot code
  index.js           # Entry point
  setup.js           # Token/admin config (reads from env)
  db.js              # MongoDB connection
  config.json        # Channel mappings & settings
  models/            # Mongoose models
  listeners/         # Event listeners (invites, reminders)
artifacts/api-server/ # Express API server (separate artifact)
```

## User preferences
