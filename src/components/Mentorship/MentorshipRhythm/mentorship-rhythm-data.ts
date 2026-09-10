import { RhythmStep } from "./MentorshipRhythm.types";

export const mentorshipRhythmData = {
  eyebrow: "A PRACTICAL RHYTHM",
  title: "Know what to bring, what to expect and what happens next",
  description:
    "Each relationship is personal, but the structure keeps sessions purposeful and progress visible.",
  points: [
    "Bring one clear question or decision",
    "Share the real work behind the challenge",
    "Leave with one or two specific next actions",
  ],
  cadence: "Suggested cadence · weekly or biweekly",
  cardEyebrow: "YOUR MENTORSHIP RHYTHM",
  cardTitle: "From first conversation to milestone review",
  steps: [
    {
      number: "01",
      title: "Align",
      description:
        "Agree goals, boundaries, communication and what a useful outcome looks like.",
    },
    {
      number: "02",
      title: "Work",
      description:
        "Bring live project decisions, feedback requests and evidence of what you tried.",
    },
    {
      number: "03",
      title: "Act",
      description:
        "Complete agreed actions between sessions and record questions while the work is fresh.",
    },
    {
      number: "04",
      title: "Review",
      description:
        "Reflect on progress, refine the plan and identify the next professional milestone.",
    },
  ],
};

export const mentorshipRhythmSteps: RhythmStep[] = mentorshipRhythmData.steps;
