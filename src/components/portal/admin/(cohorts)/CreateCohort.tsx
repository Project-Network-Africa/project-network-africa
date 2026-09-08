"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui";
import { createCohort } from "@/src/services/cohorts";
import axios from "axios";

export default function CreateCohortPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    program: "",
    startDate: "",
    endDate: "",
    // applicationDeadline: "",
    capacity: "",
    // leadMentor: "",
    fee: "",
    // status: "Draft",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      await createCohort({
        name: formData.name,
        program: formData.program,
        startDate: formData.startDate,
        endDate: formData.endDate,
        // applicationDeadline: formData.applicationDeadline,
        capacity: Number(formData.capacity),
        // leadMentor: formData.leadMentor,
        // status: formData.status,
        fee: Number(formData.fee),
        // isOpen: formData.status === "Active",
      });

      router.push("/admin/cohorts");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Failed to create cohort.");
      } else {
        setError("Failed to create cohort.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-semibold leading-[29px] text-[#1F2529]">
              Create Cohort
            </h1>

            <div className="mt-2 flex items-center gap-2 text-[13px] text-[#687178]">
              <span>Cohorts</span>
              <span>/</span>
              <span>Create a new programme cohort</span>
            </div>
          </div>

          <Button
            href="/admin/cohorts"
            variant="light"
            className="h-9 rounded-lg border border-[#D8DDE2] bg-white px-4 text-[12px] font-semibold text-[#303035]"
          >
            ←&nbsp; Back to cohorts
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,760px)_344px]">
          <section className="min-h-[760px] rounded-[8px] border border-[#DDE1E4] bg-white p-6">
            <div className="mb-5">
              <h2 className="text-[17px] font-semibold text-[#20262A]">
                Cohort details
              </h2>

              <p className="mt-1 text-[13px] text-[#687178]">
                Set the programme, timeline and capacity for this cohort.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-[12px] font-medium text-[#20262A]"
                  >
                    Cohort name
                  </label>

                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Product Design — Cohort 7"
                    className="h-9 rounded-[4px] border border-[#CDD2D6] bg-white px-3 text-[12px] text-[#303035] outline-none placeholder:text-[#9A9EA2] focus:border-[#00B6CE]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="program"
                    className="text-[12px] font-medium text-[#20262A]"
                  >
                    Programme
                  </label>

                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="h-9 rounded-[4px] border border-[#CDD2D6] bg-white px-3 text-[12px] text-[#303035] outline-none focus:border-[#00B6CE]"
                    required
                  >
                    <option value="">Select a programme</option>
                    <option value="Product Design">Product Design</option>
                    <option value="Software Engineering">
                      Software Engineering
                    </option>
                    <option value="roduct Management">
                      Product Management
                    </option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Cloud Engineering">Cloud Engineering</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>
                    <option value="Project Management">
                      Project Management
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fee"
                    className="text-[12px] font-medium text-[#20262A]"
                  >
                    Cohort fee
                  </label>

                  <input
                    id="fee"
                    name="fee"
                    type="number"
                    min="0"
                    value={formData.fee}
                    onChange={handleChange}
                    placeholder="e.g. 50000"
                    className="h-9 rounded-[4px] border border-[#CDD2D6] bg-white px-3 text-[12px] text-[#303035] outline-none placeholder:text-[#9A9EA2] focus:border-[#00B6CE]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="startDate"
                    className="text-[12px] font-medium text-[#20262A]"
                  >
                    Start date
                  </label>

                  <input
                    id="startDate"
                    name="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="h-9 rounded-[4px] border border-[#CDD2D6] bg-white px-3 text-[12px] text-[#303035] outline-none focus:border-[#00B6CE]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="endDate"
                    className="text-[12px] font-medium text-[#20262A]"
                  >
                    End date
                  </label>

                  <input
                    id="endDate"
                    name="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="h-9 rounded-[4px] border border-[#CDD2D6] bg-white px-3 text-[12px] text-[#303035] outline-none focus:border-[#00B6CE]"
                    required
                  />
                </div>

                {/* <div className="flex flex-col gap-2">
                  <label
                    htmlFor="applicationDeadline"
                    className="text-[12px] font-medium text-[#20262A]"
                  >
                    Application deadline
                  </label>

                  <input
                    id="applicationDeadline"
                    name="applicationDeadline"
                    type="date"
                    value={formData.applicationDeadline}
                    onChange={handleChange}
                    className="h-9 rounded-[4px] border border-[#CDD2D6] bg-white px-3 text-[12px] text-[#303035] outline-none focus:border-[#00B6CE]"
                    required
                  />
                </div> */}

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="capacity"
                    className="text-[12px] font-medium text-[#20262A]"
                  >
                    Maximum capacity
                  </label>

                  <input
                    id="capacity"
                    name="capacity"
                    type="number"
                    min="1"
                    value={formData.capacity}
                    onChange={handleChange}
                    placeholder="e.g. 80 learners"
                    className="h-9 rounded-[4px] border border-[#CDD2D6] bg-white px-3 text-[12px] text-[#303035] outline-none placeholder:text-[#9A9EA2] focus:border-[#00B6CE]"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="leadMentor"
                    className="text-[12px] font-medium text-[#20262A]"
                  >
                    Lead mentor
                  </label>

                  {/* <select
                    id="leadMentor"
                    name="leadMentor"
                    value={formData.leadMentor}
                    onChange={handleChange}
                    className="h-9 rounded-[4px] border border-[#CDD2D6] bg-white px-3 text-[12px] text-[#303035] outline-none focus:border-[#00B6CE]"
                  >
                    <option value="">Select a mentor</option>
                    <option value="Halima">Halima</option>
                    <option value="Ige">Ige</option>
                  </select> */}
                </div>

                {/* <div className="flex flex-col gap-2">
                  <label
                    htmlFor="status"
                    className="text-[12px] font-medium text-[#20262A]"
                  >
                    Cohort status
                  </label>

                  <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="h-9 rounded-[4px] border border-[#CDD2D6] bg-white px-3 text-[12px] text-[#303035] outline-none focus:border-[#00B6CE]"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Active">Active</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div> */}
              </div>

              {error && <p className="text-[12px] text-red-500">{error}</p>}

              <div className="mt-1 flex justify-end gap-3">
                <Button
                  variant="light"
                  onClick={() => router.push("/admin/cohorts")}
                  className="h-10 rounded-[6px] border border-[#20262A] bg-white px-5 text-[12px] font-semibold text-[#20262A]"
                >
                  Cancel
                </Button>

                <Button
                  variant="dark"
                  disabled={loading}
                  className="h-10 rounded-[6px] bg-[#20262A] px-5 text-[12px] font-semibold text-white"
                >
                  {loading ? "Creating..." : "Create cohort"}
                </Button>
              </div>
            </form>
          </section>

          <aside className="h-fit rounded-[8px] border border-[#DDE1E4] bg-white p-5">
            <h2 className="text-[16px] font-semibold text-[#20262A]">
              Before creating the cohort
            </h2>

            <p className="mt-3 text-[12px] leading-[18px] text-[#687178]">
              Confirm these details before making the cohort available to
              applicants.
            </p>

            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-[13px] text-[#384047]">
                <span>✓</span>
                <span>Programme and learning track</span>
              </div>

              <div className="flex items-center gap-2 text-[13px] text-[#384047]">
                <span>✓</span>
                <span>Application and cohort dates</span>
              </div>

              <div className="flex items-center gap-2 text-[13px] text-[#384047]">
                <span>✓</span>
                <span>Capacity and mentor coverage</span>
              </div>

              <div className="flex items-center gap-2 text-[13px] text-[#384047]">
                <span>✓</span>
                <span>Draft or active publishing status</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
