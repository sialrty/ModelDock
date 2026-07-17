import { afterEach, describe, expect, it, vi } from "vitest";
import { isTauri } from "@tauri-apps/api/core";
import { settingsApi } from "@/lib/api/settings";

describe("settingsApi.openExternal", () => {
  afterEach(() => vi.restoreAllMocks());

  it("uses the browser when Tauri is unavailable", async () => {
    vi.mocked(isTauri).mockReturnValueOnce(false);
    const open = vi.spyOn(window, "open").mockImplementation(() => null);

    await settingsApi.openExternal("https://flaredeep.cn");

    expect(open).toHaveBeenCalledWith(
      "https://flaredeep.cn",
      "_blank",
      "noopener,noreferrer",
    );
  });

  it("rejects unsupported URL schemes", async () => {
    await expect(
      settingsApi.openExternal("javascript:alert(1)"),
    ).rejects.toThrow("Invalid URL");
  });
});
