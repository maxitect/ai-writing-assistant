"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ExplainButtonProps {
  original: string;
  rewritten: string;
}

export default function ExplainButton({
  original,
  rewritten,
}: ExplainButtonProps) {
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleExplain() {
    setIsLoading(true);
    try {
      const response = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: `Explain how this rewritten version improves the original:
Original: "${original}"
Rewritten: "${rewritten}"`,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get explanation");
      }

      const data = await response.json();
      setExplanation(data.explanation);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while getting the explanation.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-2">
      <Button onClick={handleExplain} disabled={isLoading}>
        {isLoading
          ? "The Muses will illuminate..."
          : "Ask the Muses to explain"}
      </Button>
      {explanation && (
        <div className="mt-2 p-2 bg-gray-100 rounded">
          <strong>Explanation:</strong> {explanation}
        </div>
      )}
    </div>
  );
}
