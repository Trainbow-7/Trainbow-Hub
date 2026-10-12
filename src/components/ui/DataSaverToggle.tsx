"use client";

import React, { useState, useEffect } from "react";
import { isDataSaverEnabled, toggleDataSaver, getPendingSyncCount, syncOfflineAttempts } from "@/lib/offline/sync";

interface DataSaverToggleProps {
  className?: string;
  showSyncBadge?: boolean;
}

export const DataSaverToggle: React.FC<DataSaverToggleProps> = ({
  className = "",
  showSyncBadge = true,
}) => {
  const [dataSaver, setDataSaverState] = useState<boolean>(false);
  const [pendingCount, setPendingCount] = useState<number>(0);
  const [syncing, setSyncing] = useState<boolean>(false);

  useEffect(() => {
    setDataSaverState(isDataSaverEnabled());
    setPendingCount(getPendingSyncCount());

    const dsHandler = (e: CustomEvent<{ enabled: boolean }>) => {
      setDataSaverState(e.detail.enabled);
    };

    const queueHandler = (e: CustomEvent<{ count: number }>) => {
      setPendingCount(e.detail.count);
    };

    window.addEventListener("trainbow-datasaver-change" as any, dsHandler);
    window.addEventListener("trainbow-offline-queue-change" as any, queueHandler);

    return () => {
      window.removeEventListener("trainbow-datasaver-change" as any, dsHandler);
      window.removeEventListener("trainbow-offline-queue-change" as any, queueHandler);
    };
  }, []);

  const handleToggle = () => {
    const next = toggleDataSaver();
    setDataSaverState(next);
  };

  const handleManualSync = async () => {
    if (syncing || pendingCount === 0) return;
    setSyncing(true);
    try {
      await syncOfflineAttempts();
      setPendingCount(getPendingSyncCount());
    } finally {
      setSyncing(false);
    }
  };

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <button
        type="button"
        role="switch"
        aria-checked={dataSaver}
        aria-label="Toggle 2G Data Saver mode"
        onClick={handleToggle}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
          dataSaver
            ? "bg-amber-100 text-amber-950 border-amber-300 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-700"
            : "bg-neutral-slate-100 text-neutral-slate-700 border-neutral-slate-300 hover:bg-neutral-slate-200 dark:bg-neutral-slate-800 dark:text-neutral-300 dark:border-neutral-slate-700"
        }`}
      >
        <span
          className={`w-2 h-2 rounded-full ${dataSaver ? "bg-amber-600 animate-pulse" : "bg-neutral-slate-400"}`}
          aria-hidden="true"
        />
        <span>{dataSaver ? "Data Saver: ON" : "Data Saver"}</span>
      </button>

      {showSyncBadge && pendingCount > 0 && (
        <button
          type="button"
          onClick={handleManualSync}
          disabled={syncing}
          aria-label={`Sync ${pendingCount} offline quiz attempts`}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium bg-brand-blue-50 text-brand-blue-700 border border-brand-blue-200 hover:bg-brand-blue-100 disabled:opacity-50"
        >
          <span>🔄</span>
          <span>{syncing ? "Syncing..." : `${pendingCount} Offline Sync`}</span>
        </button>
      )}
    </div>
  );
};
