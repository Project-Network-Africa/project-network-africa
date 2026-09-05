// src/components/portal/admin/content/create/ProgrammeForm.tsx

"use client";

interface Props {
  data: Record<string, unknown>;
  onChange: (data: Record<string, unknown>) => void;
}

const input =
  "h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#00B6CE]";

const textarea =
  "w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#00B6CE]";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>

      {children}
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-600">
        {label}
      </span>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={input}
      />
    </label>
  );
}

export default function ProgrammeForm({ data, onChange }: Props) {
  const value = (key: string) =>
    typeof data[key] === "string" ? String(data[key]) : "";

  const update = (key: string, value: unknown) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  const outcomes = Array.isArray(data.learningOutcomes)
    ? (data.learningOutcomes as string[])
    : [];

  const requirements = Array.isArray(data.requirements)
    ? (data.requirements as string[])
    : [];

  const curriculum = Array.isArray(data.curriculum) ? data.curriculum : [];

  const faqs = Array.isArray(data.faqs) ? data.faqs : [];

  return (
    <div className="space-y-4">
      {/* PROGRAMME DETAILS */}
      <Section title="Programme details">
        <div className="grid gap-4 md:grid-cols-3">
          <Field
            label="Programme ID"
            value={value("programmeId")}
            onChange={(v) => update("programmeId", v)}
          />

          <Field
            label="Slug"
            value={value("slug")}
            onChange={(v) => update("slug", v)}
          />

          <Field
            label="Category"
            value={value("category")}
            onChange={(v) => update("category", v)}
          />

          <div className="md:col-span-2">
            <Field
              label="Programme title"
              value={value("title")}
              onChange={(v) => update("title", v)}
            />
          </div>

          <Field
            label="Programme image"
            value={value("image")}
            onChange={(v) => update("image", v)}
          />

          <div className="md:col-span-3">
            <label>
              <span className="mb-1.5 block text-xs font-medium text-slate-600">
                Description
              </span>

              <textarea
                rows={4}
                value={value("description")}
                onChange={(e) => update("description", e.target.value)}
                className={textarea}
              />
            </label>
          </div>
        </div>
      </Section>

      {/* HERO */}
      <Section title="Hero section">
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Hero title"
            value={value("heroTitle")}
            onChange={(v) => update("heroTitle", v)}
          />

          <Field
            label="Programme name"
            value={value("heroProgrammeName")}
            onChange={(v) => update("heroProgrammeName", v)}
          />

          <div className="md:col-span-2">
            <label>
              <span className="mb-1.5 block text-xs font-medium text-slate-600">
                Hero description
              </span>

              <textarea
                rows={4}
                value={value("heroDescription")}
                onChange={(e) => update("heroDescription", e.target.value)}
                className={textarea}
              />
            </label>
          </div>

          <Field
            label="Duration"
            value={value("duration")}
            onChange={(v) => update("duration", v)}
          />

          <Field
            label="Format"
            value={value("format")}
            onChange={(v) => update("format", v)}
          />

          <Field
            label="Level"
            value={value("level")}
            onChange={(v) => update("level", v)}
          />

          <Field
            label="Button text"
            value={value("heroButtonText")}
            onChange={(v) => update("heroButtonText", v)}
          />

          <Field
            label="Button link"
            value={value("heroButtonLink")}
            onChange={(v) => update("heroButtonLink", v)}
          />

          <Field
            label="Mentor supporting text"
            value={value("mentorText")}
            onChange={(v) => update("mentorText", v)}
          />
        </div>
      </Section>

      {/* LEARNING OUTCOMES */}
      <Section title="Learning outcomes">
        <div className="space-y-2">
          {outcomes.map((item, index) => (
            <input
              key={index}
              value={item}
              onChange={(e) => {
                const next = [...outcomes];
                next[index] = e.target.value;

                update("learningOutcomes", next);
              }}
              placeholder={`Learning outcome ${index + 1}`}
              className={input}
            />
          ))}

          <button
            type="button"
            onClick={() => update("learningOutcomes", [...outcomes, ""])}
            className="h-9 w-full rounded-lg border border-[#00B6CE] text-sm font-semibold text-[#009CB2]"
          >
            + Add outcome
          </button>
        </div>
      </Section>

      {/* INSTRUCTOR */}
      <Section title="Instructor">
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Name"
            value={value("instructorName")}
            onChange={(v) => update("instructorName", v)}
          />

          <Field
            label="Role"
            value={value("instructorRole")}
            onChange={(v) => update("instructorRole", v)}
          />

          <Field
            label="Initials"
            value={value("instructorInitials")}
            onChange={(v) => update("instructorInitials", v)}
          />

          <Field
            label="Avatar background"
            value={value("instructorBackground")}
            onChange={(v) => update("instructorBackground", v)}
          />

          <Field
            label="Profile image"
            value={value("instructorImage")}
            onChange={(v) => update("instructorImage", v)}
          />

          <div className="md:col-span-2">
            <label>
              <span className="mb-1.5 block text-xs font-medium text-slate-600">
                Biography
              </span>

              <textarea
                rows={4}
                value={value("instructorBiography")}
                onChange={(e) => update("instructorBiography", e.target.value)}
                className={textarea}
              />
            </label>
          </div>

          <Field
            label="Experience"
            value={value("instructorExperience")}
            onChange={(v) => update("instructorExperience", v)}
          />

          <Field
            label="Learners mentored"
            value={value("learnersMentored")}
            onChange={(v) => update("learnersMentored", v)}
          />

          <Field
            label="Products shipped"
            value={value("productsShipped")}
            onChange={(v) => update("productsShipped", v)}
          />
        </div>
      </Section>

      {/* REQUIREMENTS */}
      <Section title="Requirements">
        <div className="grid gap-3 md:grid-cols-2">
          {requirements.map((item, index) => (
            <input
              key={index}
              value={item}
              onChange={(e) => {
                const next = [...requirements];
                next[index] = e.target.value;

                update("requirements", next);
              }}
              className={input}
            />
          ))}

          <button
            type="button"
            onClick={() => update("requirements", [...requirements, ""])}
            className="md:col-span-2 h-9 rounded-lg border border-[#00B6CE] text-sm font-semibold text-[#009CB2]"
          >
            + Add requirement
          </button>
        </div>
      </Section>

      {/* CURRICULUM */}
      <Section title="Curriculum">
        <div className="space-y-3">
          {curriculum.map((item, index) => {
            const curriculumItem = item as {
              week?: string;
              title?: string;
              description?: string;
            };

            return (
              <div
                key={index}
                className="rounded-lg border border-slate-200 p-4"
              >
                <div className="grid gap-3 md:grid-cols-[120px_1fr]">
                  <Field
                    label="Weeks"
                    value={curriculumItem.week ?? ""}
                    onChange={(value) => {
                      const next = [...curriculum];

                      next[index] = {
                        ...curriculumItem,
                        week: value,
                      };

                      update("curriculum", next);
                    }}
                  />

                  <Field
                    label="Module title"
                    value={curriculumItem.title ?? ""}
                    onChange={(value) => {
                      const next = [...curriculum];

                      next[index] = {
                        ...curriculumItem,
                        title: value,
                      };

                      update("curriculum", next);
                    }}
                  />

                  <div className="md:col-span-2">
                    <label>
                      <span className="mb-1.5 block text-xs font-medium text-slate-600">
                        Description
                      </span>

                      <textarea
                        rows={2}
                        value={curriculumItem.description ?? ""}
                        onChange={(e) => {
                          const next = [...curriculum];

                          next[index] = {
                            ...curriculumItem,
                            description: e.target.value,
                          };

                          update("curriculum", next);
                        }}
                        className={textarea}
                      />
                    </label>
                  </div>
                </div>
              </div>
            );
          })}

          <button
            type="button"
            onClick={() =>
              update("curriculum", [
                ...curriculum,
                {
                  week: "",
                  title: "",
                  description: "",
                  style: "cyan",
                },
              ])
            }
            className="h-9 w-full rounded-lg border border-[#00B6CE] text-sm font-semibold text-[#009CB2]"
          >
            + Add curriculum module
          </button>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Frequently asked questions">
        <div className="space-y-3">
          {faqs.map((item, index) => {
            const faq = item as {
              question?: string;
              answer?: string;
            };

            return (
              <div
                key={index}
                className="rounded-lg border border-slate-200 p-4"
              >
                <Field
                  label="Question"
                  value={faq.question ?? ""}
                  onChange={(v) => {
                    const next = [...faqs];

                    next[index] = {
                      ...faq,
                      question: v,
                    };

                    update("faqs", next);
                  }}
                />

                <div className="mt-3">
                  <label>
                    <span className="mb-1.5 block text-xs font-medium text-slate-600">
                      Answer
                    </span>

                    <textarea
                      rows={3}
                      value={faq.answer ?? ""}
                      onChange={(e) => {
                        const next = [...faqs];

                        next[index] = {
                          ...faq,
                          answer: e.target.value,
                        };

                        update("faqs", next);
                      }}
                      className={textarea}
                    />
                  </label>
                </div>
              </div>
            );
          })}

          <button
            type="button"
            onClick={() =>
              update("faqs", [
                ...faqs,
                {
                  question: "",
                  answer: "",
                },
              ])
            }
            className="h-9 w-full rounded-lg border border-[#00B6CE] text-sm font-semibold text-[#009CB2]"
          >
            + Add FAQ
          </button>
        </div>
      </Section>

      {/* CAPSTONE */}
      <Section title="Capstone project">
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="Project image"
            value={value("capstoneImage")}
            onChange={(v) => update("capstoneImage", v)}
          />

          <div>
            <label>
              <span className="mb-1.5 block text-xs font-medium text-slate-600">
                Description
              </span>

              <textarea
                rows={3}
                value={value("capstoneDescription")}
                onChange={(e) => update("capstoneDescription", e.target.value)}
                className={textarea}
              />
            </label>
          </div>

          <div className="md:col-span-2">
            <label>
              <span className="mb-1.5 block text-xs font-medium text-slate-600">
                Featured quote
              </span>

              <textarea
                rows={2}
                value={value("capstoneQuote")}
                onChange={(e) => update("capstoneQuote", e.target.value)}
                className={textarea}
              />
            </label>
          </div>
        </div>
      </Section>

      {/* CAREER OUTCOMES */}
      <Section title="Career outcomes">
        <div className="space-y-3">
          {Array.isArray(data.careerOutcomes) &&
            (
              data.careerOutcomes as {
                name?: string;
                role?: string;
                company?: string;
              }[]
            ).map((person, index) => (
              <div
                key={index}
                className="grid gap-3 rounded-lg border border-slate-200 p-4 md:grid-cols-3"
              >
                <Field
                  label="Name"
                  value={person.name ?? ""}
                  onChange={(v) => {
                    const next = [...(data.careerOutcomes as object[])];

                    next[index] = {
                      ...person,
                      name: v,
                    };

                    update("careerOutcomes", next);
                  }}
                />

                <Field
                  label="Role"
                  value={person.role ?? ""}
                  onChange={(v) => {
                    const next = [...(data.careerOutcomes as object[])];

                    next[index] = {
                      ...person,
                      role: v,
                    };

                    update("careerOutcomes", next);
                  }}
                />

                <Field
                  label="Company"
                  value={person.company ?? ""}
                  onChange={(v) => {
                    const next = [...(data.careerOutcomes as object[])];

                    next[index] = {
                      ...person,
                      company: v,
                    };

                    update("careerOutcomes", next);
                  }}
                />
              </div>
            ))}

          <button
            type="button"
            onClick={() =>
              update("careerOutcomes", [
                ...(Array.isArray(data.careerOutcomes)
                  ? data.careerOutcomes
                  : []),
                {
                  name: "",
                  role: "",
                  company: "",
                },
              ])
            }
            className="h-9 w-full rounded-lg border border-[#00B6CE] text-sm font-semibold text-[#009CB2]"
          >
            + Add career outcome
          </button>
        </div>
      </Section>

      {/* CTA */}
      <Section title="Final call to action">
        <div className="grid gap-4 md:grid-cols-2">
          <Field
            label="CTA heading"
            value={value("ctaHeading")}
            onChange={(v) => update("ctaHeading", v)}
          />

          <Field
            label="Button text"
            value={value("ctaButtonText")}
            onChange={(v) => update("ctaButtonText", v)}
          />

          <Field
            label="Button link"
            value={value("ctaButtonLink")}
            onChange={(v) => update("ctaButtonLink", v)}
          />

          <Field
            label="Next cohort date"
            value={value("nextCohortDate")}
            onChange={(v) => update("nextCohortDate", v)}
          />

          <Field
            label="Application deadline"
            value={value("applicationDeadline")}
            onChange={(v) => update("applicationDeadline", v)}
          />
        </div>
      </Section>
    </div>
  );
}
