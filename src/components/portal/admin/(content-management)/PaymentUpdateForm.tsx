// src/components/portal/admin/content/create/PaymentUpdateForm.tsx

"use client";

interface Props {
  data: Record<string, unknown>;
  onChange: (data: Record<string, unknown>) => void;
}

const input =
  "h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-[#00B6CE]";

const textarea =
  "w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#00B6CE]";

export default function PaymentUpdateForm({ data, onChange }: Props) {
  const value = (key: string) =>
    typeof data[key] === "string" ? String(data[key]) : "";

  const update = (key: string, value: unknown) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  return (
    <div className="space-y-4">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-4 text-lg font-semibold">Payment details</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Update title
            </span>

            <input
              value={value("title")}
              onChange={(e) => update("title", e.target.value)}
              placeholder="Cohort 6 fee update"
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">URL slug</span>

            <input
              value={value("slug")}
              onChange={(e) => update("slug", e.target.value)}
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Affected programme
            </span>

            <select
              value={value("affectedProgramme")}
              onChange={(e) => update("affectedProgramme", e.target.value)}
              className={input}
            >
              <option value="">Select programme</option>

              <option>Product Design</option>
              <option>Software Engineering</option>
              <option>Data Analysis</option>
              <option>Product Management</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">Cohort</span>

            <select
              value={value("cohort")}
              onChange={(e) => update("cohort", e.target.value)}
              className={input}
            >
              <option value="">Select cohort</option>
              <option>Cohort 6</option>
              <option>Cohort 7</option>
              <option>Cohort 8</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Update type
            </span>

            <select
              value={value("updateType")}
              onChange={(e) => update("updateType", e.target.value)}
              className={input}
            >
              <option value="">Select update type</option>

              <option>Cohort fee change</option>
              <option>Payment deadline</option>
              <option>Instalment plan</option>
              <option>Payment method</option>
              <option>Refund information</option>
            </select>
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Effective date
            </span>

            <input
              value={value("effectiveDate")}
              onChange={(e) => update("effectiveDate", e.target.value)}
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Previous fee
            </span>

            <input
              value={value("previousFee")}
              onChange={(e) => update("previousFee", e.target.value)}
              placeholder="₦100,000"
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              New cohort fee
            </span>

            <input
              value={value("newFee")}
              onChange={(e) => update("newFee", e.target.value)}
              placeholder="₦120,000"
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Payment methods
            </span>

            <input
              value={value("paymentMethods")}
              onChange={(e) => update("paymentMethods", e.target.value)}
              placeholder="Card or bank transfer"
              className={input}
            />
          </label>

          <label>
            <span className="mb-1.5 block text-xs font-medium">
              Support contact
            </span>

            <input
              value={value("supportContact")}
              onChange={(e) => update("supportContact", e.target.value)}
              placeholder="payments@pnafrica.org"
              className={input}
            />
          </label>

          <div className="md:col-span-2">
            <label>
              <span className="mb-1.5 block text-xs font-medium">
                Payment notice summary
              </span>

              <textarea
                rows={4}
                value={value("summary")}
                onChange={(e) => update("summary", e.target.value)}
                className={textarea}
              />
            </label>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Body content</h2>

        <textarea
          value={value("body")}
          onChange={(e) => update("body", e.target.value)}
          rows={15}
          placeholder="Write the payment update..."
          className={`${textarea} mt-4`}
        />

        <div className="mt-3 rounded-lg bg-[#E8FAFD] p-4 text-sm text-[#00879A]">
          Privacy reminder: Never include individual transaction details, payer
          information or gateway references in public CMS content.
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-lg font-semibold">Payment notice attachment</h2>

        <button
          type="button"
          onClick={() => update("attachment", "document.pdf")}
          className="mt-4 flex h-24 w-full items-center justify-center rounded-lg border border-dashed border-[#00B6CE] bg-[#F0FBFD] text-sm font-semibold text-[#009CB2]"
        >
          + Attach document
        </button>
      </section>
    </div>
  );
}
