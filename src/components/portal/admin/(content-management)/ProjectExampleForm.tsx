// src/components/portal/admin/content/create/ProjectExampleForm.tsx

"use client";

interface Props {
  data: Record<string, unknown>;
  onChange: (data: Record<string, unknown>) => void;
}

const input =
  "h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#00B6CE]";

const textarea =
  "w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#00B6CE]";

export default function ProjectExampleForm({ data, onChange }: Props) {
  const value = (key: string) =>
    typeof data[key] === "string" ? String(data[key]) : "";

  const update = (key: string, value: unknown) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  const disciplines = Array.isArray(data.disciplines)
    ? (data.disciplines as string[])
    : [];

  return (
    <div className="space-y-4">
      {/* TEAM PROJECT */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="mb-5">
          <p className="text-xs font-bold tracking-wide text-[#00A7BD]">
            TEAM PROJECT
          </p>

          <h2 className="mt-1 text-xl font-semibold">Project information</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Project title
            </span>

            <input
              value={value("title")}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Digital Wallet Service Redesign"
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Project slug
            </span>

            <input
              value={value("slug")}
              onChange={(e) => update("slug", e.target.value)}
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">Team name</span>

            <input
              value={value("teamName")}
              onChange={(e) => update("teamName", e.target.value)}
              placeholder="Team Atlas"
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Number of members
            </span>

            <input
              value={value("teamSize")}
              onChange={(e) => update("teamSize", e.target.value)}
              placeholder="6"
              className={input}
            />
          </label>

          <div className="md:col-span-2">
            <label>
              <span className="mb-1.5 block text-xs font-medium">
                Project description
              </span>

              <textarea
                rows={4}
                value={value("description")}
                onChange={(e) => update("description", e.target.value)}
                placeholder="Improve onboarding and payment confidence for a mobile finance service."
                className={textarea}
              />
            </label>
          </div>
        </div>
      </section>

      {/* CLASSIFICATION */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-4 text-lg font-semibold">Project classification</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Project type
            </span>

            <select
              value={value("projectType")}
              onChange={(e) => update("projectType", e.target.value)}
              className={input}
            >
              <option>Product</option>
              <option>Software</option>
              <option>Data</option>
              <option>Management</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">Duration</span>

            <input
              value={value("duration")}
              onChange={(e) => update("duration", e.target.value)}
              placeholder="8 weeks"
              className={input}
            />
          </label>

          <div>
            <span className="mb-2 block text-xs font-medium">Disciplines</span>

            <div className="space-y-2">
              {disciplines.map((item, index) => (
                <input
                  key={index}
                  value={item}
                  onChange={(e) => {
                    const next = [...disciplines];

                    next[index] = e.target.value;

                    update("disciplines", next);
                  }}
                  className={input}
                />
              ))}

              <button
                type="button"
                onClick={() => update("disciplines", [...disciplines, ""])}
                className="text-sm font-semibold text-[#009CB2]"
              >
                + Add discipline
              </button>
            </div>
          </div>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Review status
            </span>

            <select
              value={value("reviewStatus")}
              onChange={(e) => update("reviewStatus", e.target.value)}
              className={input}
            >
              <option>Mentor-reviewed</option>
              <option>Pending review</option>
              <option>Employer-reviewed</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Credit type
            </span>

            <select
              value={value("creditType")}
              onChange={(e) => update("creditType", e.target.value)}
              className={input}
            >
              <option>Shared team credit</option>
              <option>Individual credit</option>
            </select>
          </label>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <p className="text-xs font-bold tracking-wide text-[#00A7BD]">
          OUTCOME
        </p>

        <h2 className="mt-1 text-lg font-semibold">Project outcome</h2>

        <label className="mt-4 block">
          <span className="mb-1.5 block text-xs font-medium">Outcome</span>

          <textarea
            rows={4}
            value={value("outcome")}
            onChange={(e) => update("outcome", e.target.value)}
            placeholder="Validated flow + developer handoff"
            className={textarea}
          />
        </label>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label>
            <span className="mb-1.5 block text-xs font-medium">Cohort</span>

            <input
              value={value("cohort")}
              onChange={(e) => update("cohort", e.target.value)}
              placeholder="Cohort 6"
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">Mentor</span>

            <input
              value={value("mentor")}
              onChange={(e) => update("mentor", e.target.value)}
              placeholder="Amina Yusuf"
              className={input}
            />
          </label>
        </div>
      </section>

      {/* PROJECT MEDIA */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Project media</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <button
            type="button"
            onClick={() => update("projectImage", "project-image.jpg")}
            className="flex h-32 items-center justify-center rounded-lg border border-dashed border-[#00B6CE] bg-[#F0FBFD] text-sm font-semibold text-[#009CB2]"
          >
            + Upload project image
          </button>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Project URL
            </span>

            <input
              value={value("projectUrl")}
              onChange={(e) => update("projectUrl", e.target.value)}
              placeholder="/projects/digital-wallet"
              className={input}
            />
          </label>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Team members</h2>

        <div className="mt-4 space-y-3">
          {Array.isArray(data.teamMembers) &&
            (
              data.teamMembers as {
                name: string;
                role: string;
              }[]
            ).map((member, index) => (
              <div key={index} className="grid gap-3 md:grid-cols-2">
                <input
                  value={member.name}
                  onChange={(e) => {
                    const next = [...(data.teamMembers as object[])];

                    next[index] = {
                      ...member,
                      name: e.target.value,
                    };

                    update("teamMembers", next);
                  }}
                  placeholder="Member name"
                  className={input}
                />

                <input
                  value={member.role}
                  onChange={(e) => {
                    const next = [...(data.teamMembers as object[])];

                    next[index] = {
                      ...member,
                      role: e.target.value,
                    };

                    update("teamMembers", next);
                  }}
                  placeholder="Role"
                  className={input}
                />
              </div>
            ))}

          <button
            type="button"
            onClick={() =>
              update("teamMembers", [
                ...(Array.isArray(data.teamMembers) ? data.teamMembers : []),
                {
                  name: "",
                  role: "",
                },
              ])
            }
            className="h-9 w-full rounded-lg border border-[#00B6CE] text-sm font-semibold text-[#009CB2]"
          >
            + Add team member
          </button>
        </div>
      </section>
    </div>
  );
}
