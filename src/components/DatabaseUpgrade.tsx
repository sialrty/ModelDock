import { invoke } from "@tauri-apps/api/core";
import { exit } from "@tauri-apps/plugin-process";
import { AlertTriangle, FolderOpen, LogOut } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

interface DatabaseUpgradeProps {
  payload: {
    path?: string;
    error?: string;
    kind?: string;
    db_version?: number;
    supported_version?: number;
  };
}

export function DatabaseUpgrade({ payload }: DatabaseUpgradeProps) {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <section className="w-full max-w-xl rounded-lg border bg-card p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <AlertTriangle className="h-6 w-6 text-amber-500" />
          <h1 className="text-lg font-semibold">
            {t("dbUpgrade.title", "数据库版本不兼容")}
          </h1>
        </div>

        <p className="text-sm leading-6 text-muted-foreground">
          {t(
            "dbUpgrade.manualRecovery",
            "当前数据库由更高版本的应用创建。自动更新已禁用，请安装兼容版本或从备份恢复后重试。",
          )}
        </p>

        <dl className="mt-4 grid grid-cols-2 gap-2 rounded-md bg-muted/50 p-3 text-sm">
          <dt className="text-muted-foreground">Database</dt>
          <dd>{payload.db_version ?? "-"}</dd>
          <dt className="text-muted-foreground">Supported</dt>
          <dd>{payload.supported_version ?? "-"}</dd>
        </dl>

        <div className="mt-6 flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => void invoke("open_app_config_folder")}
          >
            <FolderOpen className="mr-2 h-4 w-4" />
            {t("dbUpgrade.openConfigDir", "打开配置目录")}
          </Button>
          <Button variant="secondary" onClick={() => void exit(0)}>
            <LogOut className="mr-2 h-4 w-4" />
            {t("common.exit", "退出")}
          </Button>
        </div>
      </section>
    </main>
  );
}
