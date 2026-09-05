"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { ProgrammeData, ProgrammeStatus } from "./programme.types";

interface ProgrammeEditorProps {
  programme: ProgrammeData;
}

const inputClassName =
  "mt-1 h-9 w-full rounded-md border border-slate-200 bg-white px-2.5 text-[11px] text-slate-700 outline-none transition focus:border-[#00B6CE] focus:ring-1 focus:ring-[#00B6CE]/20";

const textareaClassName =
  "mt-1 w-full resize-none rounded-md border border-slate-200 bg-white px-2.5 py-2 text-[11px] leading-5 text-slate-700 outline-none transition focus:border-[#00B6CE] focus:ring-1 focus:ring-[#00B6CE]/20";

const labelClassName = "text-[9px] font-medium text-slate-500";

function SectionCard({
  title,
  counter,
  children,
}: {
  title: string;
  counter?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-3">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[13px] font-semibold text-slate-800">{title}</h2>

        {counter && (
          <span className="text-[9px] font-medium text-[#00A7BD]">
            {counter}
          </span>
        )}
      </div>

      {children}
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className={labelClassName}>{label}</span>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClassName}
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className={labelClassName}>{label}</span>

      <textarea
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className={textareaClassName}
      />
    </label>
  );
}

function AddButton({
  children = "Add",
  onClick,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-8 w-full items-center justify-center rounded-md border border-[#00B6CE] text-[9px] font-semibold text-[#00A7BD] transition hover:bg-[#00B6CE]/5"
    >
      + {children}
    </button>
  );
}

export default function ProgrammeEditor({ programme }: ProgrammeEditorProps) {
  const [data, setData] = useState(programme);

  const [status, setStatus] = useState<ProgrammeStatus>(
    programme.publishing.status,
  );

  const [visibility, setVisibility] = useState(programme.publishing.visibility);

  const [publishDate, setPublishDate] = useState(
    programme.publishing.publishDate,
  );

  const updateDetails = (key: keyof typeof data.details, value: string) => {
    setData((current) => ({
      ...current,
      details: {
        ...current.details,
        [key]: value,
      },
    }));
  };

  const updateHero = (key: keyof typeof data.hero, value: string) => {
    setData((current) => ({
      ...current,
      hero: {
        ...current.hero,
        [key]: value,
      },
    }));
  };

  const updateInstructor = (
    key: keyof typeof data.instructor,
    value: string,
  ) => {
    setData((current) => ({
      ...current,
      instructor: {
        ...current.instructor,
        [key]: value,
      },
    }));
  };

  const updateCTA = (key: keyof typeof data.finalCTA, value: string) => {
    setData((current) => ({
      ...current,
      finalCTA: {
        ...current.finalCTA,
        [key]: value,
      },
    }));
  };

  const completeness = useMemo(() => {
    const checks = [
      Boolean(data.details.title),
      Boolean(data.details.description),
      Boolean(data.hero.title),
      Boolean(data.hero.description),
      data.learningOutcomes.length > 0,
      Boolean(data.instructor.name),
      data.requirements.length > 0,
      data.curriculum.length > 0,
      data.faqs.length > 0,
      Boolean(data.capstone.description),
      data.careerOutcomes.length > 0,
      Boolean(data.finalCTA.heading),
      Boolean(data.featuredImage),
    ];

    const completed = checks.filter(Boolean).length;

    return {
      completed,
      total: checks.length,
      percentage: Math.round((completed / checks.length) * 100),
    };
  }, [data]);

  const addOutcome = () => {
    setData((current) => ({
      ...current,
      learningOutcomes: [
        ...current.learningOutcomes,
        {
          id: Date.now(),
          text: "New learning outcome",
        },
      ],
    }));
  };

  const addRequirement = () => {
    setData((current) => ({
      ...current,
      requirements: [
        ...current.requirements,
        {
          id: Date.now(),
          text: "New requirement",
        },
      ],
    }));
  };

  const addCurriculum = () => {
    setData((current) => ({
      ...current,
      curriculum: [
        ...current.curriculum,
        {
          id: Date.now(),
          week: "13–14",
          title: "New module",
          description: "Module description.",
          accent: "cyan",
        },
      ],
    }));
  };

  const addFAQ = () => {
    setData((current) => ({
      ...current,
      faqs: [
        ...current.faqs,
        {
          id: Date.now(),
          question: "New question?",
          answer: "Answer to this question.",
        },
      ],
    }));
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA] text-slate-800">
      {/* TOP BAR */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1500px] px-4 py-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-1 flex items-center gap-1 text-[8px] text-slate-400">
                <span>Content Management</span>
                <span>/</span>
                <span>Program update</span>
                <span>/</span>
                <span className="text-slate-500">Programme page</span>
              </div>

              <h1 className="text-[17px] font-semibold text-slate-800">
                Programme page update
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 text-[8px] font-medium text-[#00A7BD]">
                Autosaved 2 min ago
              </span>

              <button
                type="button"
                className="h-8 rounded-md border border-slate-200 bg-white px-3 text-[9px] font-semibold text-slate-700"
              >
                Preview
              </button>

              <button
                type="button"
                className="h-8 rounded-md border border-slate-200 bg-white px-3 text-[9px] font-semibold text-slate-700"
              >
                Save draft
              </button>

              <button
                type="button"
                className="h-8 rounded-md bg-[#00B6CE] px-3 text-[9px] font-semibold text-white transition hover:bg-[#00A8BE]"
              >
                Publish content
              </button>
            </div>
          </div>

          {/* STEPS */}
          <div className="mt-3 grid grid-cols-2 overflow-hidden rounded-md border border-slate-200 md:grid-cols-4">
            {[
              "1  Programme details",
              "2  Page content",
              "3  Media & SEO",
              "4  Review & publish",
            ].map((step, index) => (
              <div
                key={step}
                className={`flex h-7 items-center justify-center text-[8px] ${
                  index === 1
                    ? "bg-[#DDF7FB] text-[#00A7BD]"
                    : "bg-white text-slate-500"
                }`}
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-4 py-3">
        <div className="grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,2fr)_320px]">
          {/* LEFT */}
          <div className="space-y-3">
            {/* PROGRAMME DETAILS */}
            <SectionCard title="Programme details" counter="Programme base">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <Field
                  label="Programme ID"
                  value={data.details.programmeId}
                  onChange={(value) => updateDetails("programmeId", value)}
                />

                <Field
                  label="Slug"
                  value={data.details.slug}
                  onChange={(value) => updateDetails("slug", value)}
                />

                <Field
                  label="Category"
                  value={data.details.category}
                  onChange={(value) => updateDetails("category", value)}
                />

                <div className="md:col-span-2">
                  <Field
                    label="Programme title"
                    value={data.details.title}
                    onChange={(value) => updateDetails("title", value)}
                  />
                </div>

                <div>
                  <span className={labelClassName}>Programme image</span>

                  <button
                    type="button"
                    className="mt-1 flex h-9 w-full items-center rounded-md border border-slate-200 px-2.5 text-left text-[10px] text-slate-500"
                  >
                    Upload or choose media
                  </button>
                </div>

                <div className="md:col-span-3">
                  <TextAreaField
                    label="Description"
                    value={data.details.description}
                    onChange={(value) => updateDetails("description", value)}
                    rows={3}
                  />
                </div>
              </div>
            </SectionCard>

            {/* HERO */}
            <SectionCard title="Hero section" counter="1 of 9 • Required">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <Field
                  label="Hero title"
                  value={data.hero.title}
                  onChange={(value) => updateHero("title", value)}
                />

                <Field
                  label="Programme name"
                  value={data.hero.programmeName}
                  onChange={(value) => updateHero("programmeName", value)}
                />

                <div className="md:col-span-2">
                  <TextAreaField
                    label="Hero description"
                    value={data.hero.description}
                    onChange={(value) => updateHero("description", value)}
                    rows={3}
                  />
                </div>

                <Field
                  label="Duration"
                  value={data.hero.duration}
                  onChange={(value) => updateHero("duration", value)}
                />

                <Field
                  label="Format"
                  value={data.hero.format}
                  onChange={(value) => updateHero("format", value)}
                />

                <Field
                  label="Level"
                  value={data.hero.level}
                  onChange={(value) => updateHero("level", value)}
                />

                <Field
                  label="Button text"
                  value={data.hero.buttonText}
                  onChange={(value) => updateHero("buttonText", value)}
                />

                <div className="md:col-span-2">
                  <Field
                    label="Button link"
                    value={data.hero.buttonLink}
                    onChange={(value) => updateHero("buttonLink", value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <Field
                    label="Mentor supporting text"
                    value={data.hero.mentorText}
                    onChange={(value) => updateHero("mentorText", value)}
                  />
                </div>

                <div className="md:col-span-2">
                  <span className={labelClassName}>Mentor avatars</span>

                  <div className="mt-2 flex items-center gap-2">
                    {data.hero.mentors.map((mentor) => (
                      <div
                        key={mentor.initials}
                        className="flex h-7 w-7 items-center justify-center rounded-full text-[8px] font-semibold text-white"
                        style={{
                          backgroundColor: mentor.avatarBg,
                        }}
                      >
                        {mentor.initials}
                      </div>
                    ))}

                    <button
                      type="button"
                      className="h-7 rounded-md border border-[#00B6CE] px-3 text-[9px] font-semibold text-[#00A7BD]"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* LEARNING OUTCOMES */}
            <SectionCard
              title="Learning outcomes"
              counter={`${data.learningOutcomes.length} outcomes`}
            >
              <div className="grid gap-2">
                {data.learningOutcomes.map((outcome, index) => (
                  <div key={outcome.id} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E4F9FC] text-[9px] font-semibold text-[#00A7BD]">
                      {index + 1}
                    </span>

                    <input
                      value={outcome.text}
                      onChange={(e) => {
                        const value = e.target.value;

                        setData((current) => ({
                          ...current,
                          learningOutcomes: current.learningOutcomes.map(
                            (item) =>
                              item.id === outcome.id
                                ? {
                                    ...item,
                                    text: value,
                                  }
                                : item,
                          ),
                        }));
                      }}
                      className={inputClassName.replace("mt-1", "")}
                    />
                  </div>
                ))}

                <AddButton onClick={addOutcome}>Add outcome</AddButton>
              </div>
            </SectionCard>

            {/* INSTRUCTOR */}
            <SectionCard title="Instructor" counter="Profile complete">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <Field
                  label="Name"
                  value={data.instructor.name}
                  onChange={(value) => updateInstructor("name", value)}
                />

                <Field
                  label="Role"
                  value={data.instructor.role}
                  onChange={(value) => updateInstructor("role", value)}
                />

                <Field
                  label="Initials"
                  value={data.instructor.initials}
                  onChange={(value) => updateInstructor("initials", value)}
                />

                <Field
                  label="Avatar background"
                  value={data.instructor.avatarBackground}
                  onChange={(value) =>
                    updateInstructor("avatarBackground", value)
                  }
                />

                <div className="md:col-span-2">
                  <span className={labelClassName}>Profile image</span>

                  <button
                    type="button"
                    className="mt-1 h-9 w-full rounded-md border border-slate-200 text-left px-2.5 text-[10px] text-slate-500"
                  >
                    Upload image
                  </button>
                </div>

                <div className="md:col-span-2">
                  <TextAreaField
                    label="Biography"
                    value={data.instructor.biography}
                    onChange={(value) => updateInstructor("biography", value)}
                    rows={3}
                  />
                </div>

                <Field
                  label="Experience"
                  value={data.instructor.experience}
                  onChange={(value) => updateInstructor("experience", value)}
                />

                <Field
                  label="Learners mentored"
                  value={data.instructor.learnersMentored}
                  onChange={(value) =>
                    updateInstructor("learnersMentored", value)
                  }
                />

                <Field
                  label="Products shipped"
                  value={data.instructor.productsShipped}
                  onChange={(value) =>
                    updateInstructor("productsShipped", value)
                  }
                />
              </div>
            </SectionCard>

            {/* REQUIREMENTS */}
            <SectionCard
              title="Requirements"
              counter={`${data.requirements.length} requirements`}
            >
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {data.requirements.map((requirement) => (
                  <input
                    key={requirement.id}
                    value={requirement.text}
                    onChange={(e) => {
                      const value = e.target.value;

                      setData((current) => ({
                        ...current,
                        requirements: current.requirements.map((item) =>
                          item.id === requirement.id
                            ? {
                                ...item,
                                text: value,
                              }
                            : item,
                        ),
                      }));
                    }}
                    className={inputClassName.replace("mt-1", "")}
                  />
                ))}

                <div className="md:col-span-2">
                  <AddButton onClick={addRequirement}>
                    Add requirement
                  </AddButton>
                </div>
              </div>
            </SectionCard>

            {/* CURRICULUM */}
            <SectionCard
              title="Curriculum"
              counter={`${data.curriculum.length} modules`}
            >
              <div className="space-y-2">
                {data.curriculum.map((module, index) => (
                  <div
                    key={module.id}
                    className="grid grid-cols-[32px_60px_minmax(0,1fr)_80px] items-center gap-2 rounded-md border border-slate-200 p-2"
                  >
                    <div
                      className={`flex h-7 w-7 items-center justify-center rounded-md text-[9px] font-semibold ${
                        module.accent === "cyan"
                          ? "bg-[#DDF7FB] text-[#00A7BD]"
                          : "bg-[#1F2937] text-white"
                      }`}
                    >
                      {index + 1}
                    </div>

                    <div>
                      <p className="text-[7px] uppercase text-slate-400">
                        Weeks
                      </p>

                      <input
                        value={module.week}
                        onChange={(e) => {
                          const value = e.target.value;

                          setData((current) => ({
                            ...current,
                            curriculum: current.curriculum.map((item) =>
                              item.id === module.id
                                ? {
                                    ...item,
                                    week: value,
                                  }
                                : item,
                            ),
                          }));
                        }}
                        className="w-full border-0 bg-transparent p-0 text-[9px] font-medium outline-none"
                      />
                    </div>

                    <div>
                      <input
                        value={module.title}
                        onChange={(e) => {
                          const value = e.target.value;

                          setData((current) => ({
                            ...current,
                            curriculum: current.curriculum.map((item) =>
                              item.id === module.id
                                ? {
                                    ...item,
                                    title: value,
                                  }
                                : item,
                            ),
                          }));
                        }}
                        className="w-full border-0 bg-transparent p-0 text-[10px] font-semibold outline-none"
                      />

                      <input
                        value={module.description}
                        onChange={(e) => {
                          const value = e.target.value;

                          setData((current) => ({
                            ...current,
                            curriculum: current.curriculum.map((item) =>
                              item.id === module.id
                                ? {
                                    ...item,
                                    description: value,
                                  }
                                : item,
                            ),
                          }));
                        }}
                        className="mt-1 w-full border-0 bg-transparent p-0 text-[8px] text-slate-500 outline-none"
                      />
                    </div>

                    <select
                      value={module.accent}
                      onChange={(e) => {
                        const value = e.target.value as "cyan" | "dark";

                        setData((current) => ({
                          ...current,
                          curriculum: current.curriculum.map((item) =>
                            item.id === module.id
                              ? {
                                  ...item,
                                  accent: value,
                                }
                              : item,
                          ),
                        }));
                      }}
                      className="h-7 rounded-md border border-slate-200 bg-slate-50 px-1 text-[8px]"
                    >
                      <option value="cyan">cyan</option>
                      <option value="dark">dark</option>
                    </select>
                  </div>
                ))}

                <AddButton onClick={addCurriculum}>
                  Add curriculum module
                </AddButton>
              </div>
            </SectionCard>

            {/* FAQ */}
            <SectionCard
              title="Frequently asked questions"
              counter={`${data.faqs.length} questions`}
            >
              <div className="space-y-2">
                {data.faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="rounded-md border border-slate-200"
                  >
                    <div className="flex items-center gap-2 px-2.5 py-2">
                      <input
                        value={faq.question}
                        onChange={(e) => {
                          const value = e.target.value;

                          setData((current) => ({
                            ...current,
                            faqs: current.faqs.map((item) =>
                              item.id === faq.id
                                ? {
                                    ...item,
                                    question: value,
                                  }
                                : item,
                            ),
                          }));
                        }}
                        className="flex-1 border-0 bg-transparent text-[9px] font-semibold outline-none"
                      />

                      <span className="text-[#00A7BD]">
                        {faq.open ? "−" : "+"}
                      </span>
                    </div>

                    {faq.open && (
                      <textarea
                        value={faq.answer}
                        onChange={(e) => {
                          const value = e.target.value;

                          setData((current) => ({
                            ...current,
                            faqs: current.faqs.map((item) =>
                              item.id === faq.id
                                ? {
                                    ...item,
                                    answer: value,
                                  }
                                : item,
                            ),
                          }));
                        }}
                        rows={3}
                        className="w-full border-0 border-t border-slate-200 bg-transparent px-2.5 py-2 text-[9px] leading-4 outline-none"
                      />
                    )}
                  </div>
                ))}

                <AddButton onClick={addFAQ}>Add FAQ</AddButton>
              </div>
            </SectionCard>

            {/* CAPSTONE */}
            <SectionCard title="Capstone project" counter="Media required">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-[125px_minmax(0,1fr)]">
                <button
                  type="button"
                  className="flex min-h-[110px] flex-col items-center justify-center rounded-md border border-dashed border-[#8BDDE7] bg-[#F0FBFD] text-[9px] text-[#00A7BD]"
                >
                  <span className="font-semibold">IMG</span>
                  <span className="mt-1">Upload project image</span>
                  <span className="mt-1 text-[7px] text-slate-400">
                    PNG, JPG or WebP • 5 MB
                  </span>
                </button>

                <div className="space-y-2">
                  <TextAreaField
                    label="Description"
                    value={data.capstone.description}
                    onChange={(value) =>
                      setData((current) => ({
                        ...current,
                        capstone: {
                          ...current.capstone,
                          description: value,
                        },
                      }))
                    }
                    rows={3}
                  />

                  <TextAreaField
                    label="Featured quote"
                    value={data.capstone.featuredQuote}
                    onChange={(value) =>
                      setData((current) => ({
                        ...current,
                        capstone: {
                          ...current.capstone,
                          featuredQuote: value,
                        },
                      }))
                    }
                    rows={2}
                  />
                </div>
              </div>
            </SectionCard>

            {/* CAREER OUTCOMES */}
            <SectionCard
              title="Career outcomes"
              counter={`${data.careerOutcomes.length} profiles`}
            >
              <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                {data.careerOutcomes.map((person) => (
                  <div
                    key={person.id}
                    className="rounded-md border border-slate-200 p-2"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="flex h-7 w-7 items-center justify-center rounded-full text-[8px] font-semibold text-white"
                        style={{
                          backgroundColor: person.avatarBackground,
                        }}
                      >
                        {person.initials}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[9px] font-semibold">
                          {person.name}
                        </p>

                        <p className="truncate text-[7px] text-slate-400">
                          {person.role}
                        </p>
                      </div>

                      <button type="button" className="text-slate-400">
                        ...
                      </button>
                    </div>

                    <p className="mt-2 text-[8px] font-semibold text-[#00A7BD]">
                      {person.company}
                    </p>

                    <p className="mt-1 text-[7px] text-slate-400">
                      Avatar • {person.avatarStatus}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-2">
                <AddButton>Add career outcome</AddButton>
              </div>
            </SectionCard>

            {/* CTA */}
            <SectionCard title="Final call to action" counter="Ready">
              <div className="space-y-3">
                <TextAreaField
                  label="CTA heading"
                  value={data.finalCTA.heading}
                  onChange={(value) => updateCTA("heading", value)}
                  rows={2}
                />

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <Field
                    label="Button text"
                    value={data.finalCTA.buttonText}
                    onChange={(value) => updateCTA("buttonText", value)}
                  />

                  <Field
                    label="Button link"
                    value={data.finalCTA.buttonLink}
                    onChange={(value) => updateCTA("buttonLink", value)}
                  />

                  <Field
                    label="Next cohort date"
                    value={data.finalCTA.nextCohortDate}
                    onChange={(value) => updateCTA("nextCohortDate", value)}
                  />

                  <Field
                    label="Application deadline"
                    value={data.finalCTA.applicationDeadline}
                    onChange={(value) =>
                      updateCTA("applicationDeadline", value)
                    }
                  />
                </div>

                <div className="rounded-md bg-[#202936] p-3 text-white">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-[9px] font-semibold">
                        {data.finalCTA.heading}
                      </p>

                      <p className="mt-1 text-[7px] text-slate-300">
                        Next cohort: {data.finalCTA.nextCohortDate} •
                        Applications close {data.finalCTA.applicationDeadline}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="h-8 rounded-md bg-[#00B6CE] px-3 text-[8px] font-semibold text-white"
                    >
                      {data.finalCTA.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </SectionCard>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-3">
            {/* PUBLISHING */}
            <SectionCard title="Publishing">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-slate-500">Status</span>

                  <span className="rounded-full bg-[#FFF8E5] px-2 py-1 text-[8px] font-semibold text-[#A97800]">
                    ● {status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <label>
                    <span className={labelClassName}>Status</span>

                    <select
                      value={status}
                      onChange={(e) =>
                        setStatus(e.target.value as ProgrammeStatus)
                      }
                      className={inputClassName}
                    >
                      <option value="Draft">Draft</option>
                      <option value="Published">Published</option>
                      <option value="Scheduled">Scheduled</option>
                    </select>
                  </label>

                  <label>
                    <span className={labelClassName}>Visibility</span>

                    <select
                      value={visibility}
                      onChange={(e) =>
                        setVisibility(e.target.value as "Public" | "Private")
                      }
                      className={inputClassName}
                    >
                      <option value="Public">Public</option>
                      <option value="Private">Private</option>
                    </select>
                  </label>
                </div>

                <Field
                  label="Publish date"
                  value={publishDate}
                  onChange={setPublishDate}
                />

                <button
                  type="button"
                  className="h-9 w-full rounded-md bg-[#00B6CE] text-[9px] font-semibold text-white"
                >
                  Publish content
                </button>
              </div>
            </SectionCard>

            {/* COMPLETENESS */}
            <SectionCard title="Page completeness">
              <div className="flex items-center justify-between">
                <span className="text-[9px] text-slate-500">
                  {completeness.completed} of {completeness.total} sections
                </span>

                <span className="text-[10px] font-semibold text-[#00A7BD]">
                  {completeness.percentage}%
                </span>
              </div>

              <div className="mt-2 h-1 rounded-full bg-slate-100">
                <div
                  className="h-1 rounded-full bg-[#00B6CE]"
                  style={{
                    width: `${completeness.percentage}%`,
                  }}
                />
              </div>

              <div className="mt-3 space-y-2">
                {[
                  ["Programme details and Hero", true],
                  ["Learning, Instructor and requirements", true],
                  ["Curriculum and FAQs", true],
                  ["Career outcomes and CTA", true],
                  ["Capstone project image", Boolean(data.capstone.image)],
                ].map(([label, complete]) => (
                  <div
                    key={String(label)}
                    className="flex items-center justify-between text-[8px]"
                  >
                    <span className="text-slate-500">{label}</span>

                    <span
                      className={complete ? "text-green-600" : "text-red-500"}
                    >
                      {complete ? "Complete" : "Required"}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="mt-3 h-8 w-full rounded-md border border-[#00B6CE] text-[8px] font-semibold text-[#00A7BD]"
              >
                Review missing media
              </button>
            </SectionCard>

            {/* MEDIA */}
            <SectionCard title="Programme media">
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex h-16 w-20 shrink-0 items-center justify-center rounded-md bg-[#DDF7FB] text-[8px] font-semibold text-[#00A7BD]"
                >
                  IMG
                </button>

                <div>
                  <p className="text-[9px] font-semibold text-slate-700">
                    {data.featuredImageName}
                  </p>

                  <p className="mt-1 text-[7px] text-slate-400">
                    {data.featuredImageSize}
                  </p>

                  <button
                    type="button"
                    className="mt-2 text-[8px] font-semibold text-[#00A7BD]"
                  >
                    Upload image
                  </button>
                </div>
              </div>

              <div className="mt-3">
                <Field
                  label="Programme image alt text"
                  value={data.imageAltText}
                  onChange={(value) =>
                    setData((current) => ({
                      ...current,
                      imageAltText: value,
                    }))
                  }
                />
              </div>
            </SectionCard>

            {/* SEO */}
            <SectionCard title="SEO & sharing">
              <div className="space-y-3">
                <Field
                  label="Search title"
                  value={data.seo.searchTitle}
                  onChange={(value) =>
                    setData((current) => ({
                      ...current,
                      seo: {
                        ...current.seo,
                        searchTitle: value,
                      },
                    }))
                  }
                />

                <TextAreaField
                  label="Meta description"
                  value={data.seo.metaDescription}
                  onChange={(value) =>
                    setData((current) => ({
                      ...current,
                      seo: {
                        ...current.seo,
                        metaDescription: value,
                      },
                    }))
                  }
                  rows={3}
                />

                <div className="rounded-md bg-slate-50 p-2">
                  <p className="text-[7px] text-green-600">
                    pnafrica.org/programs/product-design
                  </p>

                  <p className="mt-1 text-[8px] font-semibold text-[#00A7BD]">
                    {data.seo.searchTitle}
                  </p>
                </div>
              </div>
            </SectionCard>

            {/* VERSION HISTORY */}
            <SectionCard title="Version history & audit">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[8px] text-slate-400">
                  Last published 18 Aug 2026
                </span>

                <button
                  type="button"
                  className="text-[8px] font-semibold text-[#00A7BD]"
                >
                  View all
                </button>
              </div>

              <div className="space-y-3">
                {data.versions.map((version) => (
                  <div
                    key={`${version.version}-${version.date}`}
                    className="border-b border-slate-100 pb-2 last:border-0"
                  >
                    <p className="text-[8px] font-semibold text-slate-700">
                      {version.version} • {version.action}
                    </p>

                    <p className="mt-1 text-[7px] text-slate-400">
                      {version.date} • Edited by {version.author}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* ACTIVITY */}
            <SectionCard title="Recent activity">
              <div className="space-y-3">
                {data.activities.map((activity) => (
                  <div
                    key={`${activity.text}-${activity.time}`}
                    className="flex gap-2"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00B6CE]" />

                    <div>
                      <p className="text-[8px] text-slate-600">
                        {activity.text}
                      </p>

                      <p className="mt-1 text-[7px] text-slate-400">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionCard>
          </aside>
        </div>
      </main>
    </div>
  );
}
