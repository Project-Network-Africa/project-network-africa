import { Button } from "@/src/components/ui";
import { DataTableColumn } from "../DataTable";
import { Applicant } from "./applicants.types";

const stageStyles: Record<string, string> = {
  Onboarding: "text-[#00B6CE]",
  Interviewing: "text-[#00B6CE]",
  Applied: "text-[#00B6CE]",
  Matched: "text-[#00B6CE]",
  Review: "text-[#F36A21]",
};

const paymentStyles: Record<string, string> = {
  Paid: "text-[#159A68]",
  Pending: "text-[#F36A21]",
  Failed: "text-[#D93636]",
};

const riskStyles: Record<string, string> = {
  Low: "text-[#159A68]",
  Medium: "text-[#F36A21]",
  High: "text-[#D93636]",
};

export const applicantColumns: DataTableColumn<Applicant>[] = [
  {
    key: "name",
    header: "Applicant",
  },
  {
    key: "programme",
    header: "Programme",
  },
  {
    key: "cohort",
    header: "Cohort",
  },
  {
    key: "stage",
    header: "Stage",
    render: (row) => (
      <span className={`font-semibold ${stageStyles[row.stage]}`}>
        {row.stage}
      </span>
    ),
  },
  {
    key: "payment",
    header: "Payment",
    render: (row) => (
      <span className={`font-semibold ${paymentStyles[row.payment]}`}>
        {row.payment}
      </span>
    ),
  },
  {
    key: "mentor",
    header: "Mentor",
  },
  {
    key: "applied",
    header: "Applied",
  },
  {
    key: "risk",
    header: "Risk",
    render: (row) => (
      <span className={`font-semibold ${riskStyles[row.risk]}`}>
        {row.risk}
      </span>
    ),
  },
  {
    key: "action",
    header: "Action",
    render: (row) => (
      <Button
        href={`/admin/applicants/${row.id}`}
        variant="link"
        className="text-[12px] font-semibold"
      >
        {row.risk === "High" && row.mentor === "Unassigned"
          ? "Assign"
          : row.risk === "High"
            ? "Resolve"
            : "View"}
      </Button>
    ),
  },
];
