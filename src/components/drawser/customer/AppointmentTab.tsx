import { Calendar } from "lucide-react";
import { EmptyState } from "./CommonInfo";

export function AppointmentsTab() {
  return (
    <EmptyState
      icon={Calendar}
      title="No appointments yet"
      description="Appointment history will appear here once backend integration is complete."
    />
  );
}