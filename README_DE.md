# ModelDock

ModelDock ist eine plattformuebergreifende Desktop-Anwendung zur Verwaltung von Provider-Konfigurationen fuer Claude Code, Claude Desktop, Codex, Gemini CLI, OpenCode, OpenClaw und Hermes.

## Funktionen

- Grafische Verwaltung von Providern und Profilen
- Wechsel mit einem Klick und lokalen Sicherungen
- Lokales Routing und Failover
- Verwaltung von MCP, Prompts, Skills, Sitzungen und Nutzung
- Unterstuetzung fuer Windows, macOS und Linux

## Downloads

Installationspakete fuer alle Plattformen stehen unter [GitHub Releases](https://github.com/sialrty/ModelDock/releases) bereit.

## Exklusiver Sponsor

[FlareDeep](https://flaredeep.cn) ist der exklusive Sponsor von ModelDock und bietet ein AI API Gateway mit nativen Upstream-Modellen, transparentem Routing und klarer Abrechnung.

## Entwicklung

Voraussetzungen: Node.js, pnpm 10+, Rust 1.85+ und die plattformspezifischen Tauri-Abhaengigkeiten.

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm test:unit
pnpm build
```
