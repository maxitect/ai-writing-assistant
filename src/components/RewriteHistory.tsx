import { Button } from "@/components/ui/button";
import HistoryItem from "./HistoryItem";
import { RewriteEntry } from "../lib/types";

interface RewriteHistoryProps {
  history: RewriteEntry[];
  deleteFromHistory: (index: number) => void;
  downloadHistory: () => void;
}

export default function RewriteHistory({
  history,
  deleteFromHistory,
  downloadHistory,
}: RewriteHistoryProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">The Muses&apos; Archives</h2>
      {history.length > 0 ? (
        <>
          <ul className="space-y-4">
            {history.map((entry, index) => (
              <HistoryItem
                key={index}
                entry={entry}
                onDelete={() => deleteFromHistory(index)}
              />
            ))}
          </ul>
          <Button onClick={downloadHistory} className="mt-4">
            Download History
          </Button>
        </>
      ) : (
        <p>No rewrite history yet.</p>
      )}
    </div>
  );
}
