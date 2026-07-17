# ModelDock

ModelDock is a cross-platform desktop application for managing provider configurations for Claude Code, Claude Desktop, Codex, Gemini CLI, OpenCode, OpenClaw, and Hermes.

## Features

- Visual provider and profile management
- One-click switching with automatic local backups
- Local protocol routing and failover
- MCP, prompts, skills, session, and usage management
- Windows, macOS, and Linux support through Tauri 2

This distribution does not show partner promotions, does not link to an upstream project website from the application, and does not include application self-update functionality. Provider presets and normal provider configuration features remain available.

## Development

Requirements: Node.js, pnpm 10+, Rust 1.85+, and the platform-specific Tauri prerequisites.

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm test:unit
pnpm build
```

## License

ModelDock is distributed under the MIT License. The original copyright and license notices are retained in [LICENSE](LICENSE).
