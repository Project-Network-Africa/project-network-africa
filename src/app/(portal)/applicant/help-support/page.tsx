import ContactSupport from "@/src/components/portal/applicant/(help-support)/ContactSupport";
import FrequentlyAskedQuestions from "@/src/components/portal/applicant/(help-support)/FrequentlyAskedQuestions";
import SupportTickets from "@/src/components/portal/applicant/(help-support)/SupportTickets";

export default function HelpPage() {
  return (
    <div className="flex w-full flex-col gap-5">
      {/* FAQs */}
      <FrequentlyAskedQuestions />

      {/* Bottom cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <ContactSupport />
        <SupportTickets />
      </div>
    </div>
  );
}
