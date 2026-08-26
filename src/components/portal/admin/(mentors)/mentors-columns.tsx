import { Button } from "@/src/components/ui";
import { DataTableColumn } from "../DataTable";
import { Mentor } from "./mentors.types";

const availabilityStyles: Record<string, string> = {
  Available: "text-[#159A68]",
  Limited: "text-[#F36A21]",
  Full: "text-[#F36A21]",
  Inactive: "text-[#159A68]",
};

const verificationStyles: Record<string, string> = {
  Verified: "text-[#159A68]",
  Pending: "text-[#F36A21]",
};

export const mentorColumns: DataTableColumn<Mentor>[] = [
  {
    key: "name",
    header: "Mentor",
  },

  {
    key: "expertise",
    header: "Expertise",
  },

  {
    key: "availability",
    header: "Availability",
    render: (mentor) => (
      <span
        className={`font-semibold ${availabilityStyles[mentor.availability]}`}
      >
        {mentor.availability}
      </span>
    ),
  },

  {
    key: "mentees",
    header: "Mentees",
  },

  {
    key: "capacity",
    header: "Capacity",
  },

  {
    key: "verification",
    header: "Verification",
    render: (mentor) => (
      <span
        className={`font-semibold ${verificationStyles[mentor.verification]}`}
      >
        {mentor.verification}
      </span>
    ),
  },

  {
    key: "rating",
    header: "Rating",
    render: (mentor) => (
      <span>{mentor.rating !== null ? mentor.rating : "—"}</span>
    ),
  },

  {
    key: "overdue",
    header: "Overdue",
    render: (mentor) => (
      <span className="font-semibold text-[#00B6CE]">{mentor.overdue}</span>
    ),
  },

  {
    key: "lastActive",
    header: "Last active",
  },

  {
    key: "action",
    header: "Action",
    render: (mentor) => (
      <Button
        href={`/admin/mentors/${mentor.id}`}
        variant="link"
        className="text-[12px] font-semibold"
      >
        {mentor.verification === "Pending"
          ? "Verify"
          : mentor.overdue > 1
            ? "Review"
            : mentor.availability === "Inactive"
              ? "Contact"
              : "View"}
      </Button>
    ),
  },
];
