# ModelDock

ModelDock 是一个跨平台桌面配置管理工具，支持 Claude Code、Claude Desktop、Codex、Gemini CLI、OpenCode、OpenClaw 和 Hermes。

## 功能

- 图形化供应商与配置管理
- 一键切换，并在写入前自动备份本地配置
- 本地协议路由、故障转移和健康检查
- MCP、提示词、Skills、会话与用量管理
- 基于 Tauri 2，支持 Windows、macOS 和 Linux

此版本不展示合作推广内容，不在应用内跳转原项目网站，也不包含应用自身的自动更新功能。供应商预设和正常配置功能仍然保留。

## 开发

需要 Node.js、pnpm 10+、Rust 1.85+ 及对应平台的 Tauri 构建依赖。

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm test:unit
pnpm build
```

## 许可证

ModelDock 使用 MIT 许可证分发，原始版权与许可证声明保留在 [LICENSE](LICENSE) 中。
