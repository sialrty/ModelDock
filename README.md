# ModelDock

ModelDock is a cross-platform desktop application for managing provider configurations for Claude Code, Claude Desktop, Codex, Gemini CLI, OpenCode, OpenClaw, and Hermes.

## Features

- Visual provider and profile management
- One-click switching with automatic local backups
- Local protocol routing and failover
- MCP, prompts, skills, session, and usage management
- Windows, macOS, and Linux support through Tauri 2

## Downloads

Download installers for Windows, macOS, and Linux from [GitHub Releases](https://github.com/sialrty/ModelDock/releases).

## Exclusive Sponsor

[FlareDeep](https://flaredeep.cn) is the exclusive sponsor of ModelDock. FlareDeep provides an AI API gateway focused on native upstream models, transparent routing, and clear billing.

## Development

Requirements: Node.js, pnpm 10+, Rust 1.85+, and the platform-specific Tauri prerequisites.

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm test:unit
pnpm build
```
