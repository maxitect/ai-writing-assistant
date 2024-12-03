import { Button } from "@/components/ui/button";
import { RewriteEntry } from "../lib/types";

interface HistoryItemProps {
  entry: RewriteEntry;
  onDelete: () => void;
}

export default function HistoryItem({ entry, onDelete }: HistoryItemProps) {
  return (
    <li className="bg-gray-100 p-4 rounded-lg">
      <div className="mb-2">
        <strong>Original:</strong> {entry.original}
      </div>
      <div className="mb-2">
        <strong>The Muses rewrote:</strong> {entry.rewritten}
      </div>
      <div className="mb-2">
        <strong>Tone:</strong> {entry.tone}, <strong>Length:</strong>{" "}
        {entry.length}
      </div>
      <Button variant="destructive" onClick={onDelete}>
        Delete
      </Button>
    </li>
  );
}
