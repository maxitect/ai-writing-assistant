"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RewriteEntry } from "../lib/types";
import ExplainButton from "./ExplainButton";

interface RewriteFormProps {
  addToHistory: (entry: RewriteEntry) => void;
}

export default function RewriteForm({ addToHistory }: RewriteFormProps) {
  const [input, setInput] = useState("");
  const [rewritten, setRewritten] = useState("");
  const [tone, setTone] = useState("neutral");
  const [length, setLength] = useState("same");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/rewrite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input, tone, length }),
      });

      if (!response.ok) {
        throw new Error("Failed to rewrite text");
      }

      const data = await response.json();
      setRewritten(data.rewritten);
      addToHistory({
        original: input,
        rewritten: data.rewritten,
        tone,
        length,
      });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while rewriting the text.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <Label htmlFor="input">Original Text</Label>
        <Textarea
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your text here..."
          className="mt-1"
          rows={4}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Label htmlFor="tone">Tone</Label>
          <Select value={tone} onValueChange={setTone}>
            <SelectTrigger id="tone">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="formal">Formal</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="persuasive">Persuasive</SelectItem>
              <SelectItem value="neutral">Neutral</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="length">Length</Label>
          <Select value={length} onValueChange={setLength}>
            <SelectTrigger id="length">
              <SelectValue placeholder="Select length" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="shorter">Shorter</SelectItem>
              <SelectItem value="longer">Longer</SelectItem>
              <SelectItem value="same">Same</SelectItem>
              <SelectItem value="concise">Concise</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="submit" disabled={isLoading || !input}>
        {isLoading ? "The Muses are rewriting..." : "Ask the Muses"}
      </Button>

      {rewritten && (
        <div className="mt-4">
          <Label htmlFor="rewritten">Rewritten Text</Label>
          <Textarea
            id="rewritten"
            value={rewritten}
            readOnly
            className="mt-1"
            rows={4}
          />
          <ExplainButton original={input} rewritten={rewritten} />
        </div>
      )}
    </form>
  );
}
