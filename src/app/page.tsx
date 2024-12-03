"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import RewriteForm from "../components/RewriteForm";
import RewriteHistory from "../components/RewriteHistory";
import { RewriteEntry } from "../lib/types";

export default function Home() {
  const [history, setHistory] = useState<RewriteEntry[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("rewriteHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  function addToHistory (entry: RewriteEntry) {
    const updatedHistory = [entry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem("rewriteHistory", JSON.stringify(updatedHistory));
  };

  function deleteFromHistory (index: number) {
    const updatedHistory = history.filter((_, i) => i !== index);
    setHistory(updatedHistory);
    localStorage.setItem("rewriteHistory", JSON.stringify(updatedHistory));
  };

  function downloadHistory () {
    const historyText = history
      .map(
        (entry) =>
          `Original: ${entry.original}\nRewritten: ${entry.rewritten}\nTone: ${entry.tone}\nLength: ${entry.length}\n\n`
      )
      .join("---\n\n");

    const blob = new Blob([historyText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "rewrite-history.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      <RewriteForm addToHistory={addToHistory} />
      <RewriteHistory
        history={history}
        deleteFromHistory={deleteFromHistory}
        downloadHistory={downloadHistory}
      />
    </main>
  );
}
