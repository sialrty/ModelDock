# ModelDock

ModelDock は Claude Code、Claude Desktop、Codex、Gemini CLI、OpenCode、OpenClaw、Hermes に対応する、クロスプラットフォームのプロバイダー設定管理アプリです。

## 機能

- プロバイダーとプロファイルの GUI 管理
- ローカルバックアップ付きのワンクリック切り替え
- ローカルルーティングとフェイルオーバー
- MCP、プロンプト、Skills、セッション、使用量の管理
- Windows、macOS、Linux 対応

## ダウンロード

[GitHub Releases](https://github.com/sialrty/ModelDock/releases) から各プラットフォーム向けインストーラーをダウンロードできます。

## 唯一のスポンサー

[FlareDeep](https://flaredeep.cn) は ModelDock の唯一のスポンサーです。ネイティブなアップストリームモデル、透明なルーティング、明確な課金を重視した AI API Gateway を提供しています。

## 開発

必要環境: Node.js、pnpm 10 以上、Rust 1.85 以上、および各 OS の Tauri ビルド依存関係。

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm test:unit
pnpm build
```

## ライセンス

ModelDock は MIT License で配布されています。元の著作権表示とライセンス表示は [LICENSE](LICENSE) に保持されています。
