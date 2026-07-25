"use client";

import { useEffect, useState } from "react";
import { analytics } from "@/lib/data";

async function fetchCount(query?: string): Promise<string> {
  const url = `https://${analytics.goatcounterCode}.goatcounter.com/counter/TOTAL.json${
    query ? `?${query}` : ""
  }`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`GoatCounter request failed: ${res.status}`);
  const data: { count: string } = await res.json();
  return data.count;
}

export function ViewCounter() {
  const [today, setToday] = useState<string | null>(null);
  const [total, setTotal] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const day = new Date().toISOString().slice(0, 10);

    Promise.all([fetchCount(`start=${day}&end=${day}`), fetchCount()])
      .then(([todayCount, totalCount]) => {
        if (cancelled) return;
        setToday(todayCount);
        setTotal(totalCount);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (failed || total === null) return null;

  return (
    <p className="font-mono text-xs text-slate-dim">
      {today !== null && <>{today} views today &middot; </>}
      {total} total views
    </p>
  );
}
