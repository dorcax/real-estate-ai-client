import { MessageSquare } from "lucide-react";
import { EmptyState } from "./CommonInfo";

export function EnquiriesTab() {
  return (
    <EmptyState
      icon={MessageSquare}
      title="No enquiries recorded"
      description="Enquiry history will appear here once the backend integration is complete."
    />
  );
}