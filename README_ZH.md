# ModelDock

ModelDock 是一个跨平台桌面配置管理工具，支持 Claude Code、Claude Desktop、Codex、Gemini CLI、OpenCode、OpenClaw 和 Hermes。

## 功能

- 图形化供应商与配置管理
- 一键切换，并在写入前自动备份本地配置
- 本地协议路由、故障转移和健康检查
- MCP、提示词、Skills、会话与用量管理
- 基于 Tauri 2，支持 Windows、macOS 和 Linux

## 下载

前往 [GitHub Releases](https://github.com/sialrty/ModelDock/releases) 下载 Windows、macOS 和 Linux 安装包。

## 唯一赞助商

[FlareDeep](https://flaredeep.cn) 是 ModelDock 的唯一赞助商，提供坚持原生上游、如实路由和透明计费的 AI API Gateway 服务。

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
