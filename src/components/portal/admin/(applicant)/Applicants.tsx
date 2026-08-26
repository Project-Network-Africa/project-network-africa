// // import { AdminFilters, AdminStats } from "../AdminPage";
// // import { DataTable } from "../DataTable";
// // import { applicantStats, applicants } from "./applicant-data";
// // import { applicantColumns } from "./applicants-columns";
// // export default function Applicants() {
// //   return (
// //     <main className="min-h-screen bg-[#F8F9FA] font-body  ">
// //       <div className="mx-auto w-full max-w-[1440px]">
// //         <div className="">
// //           <AdminFilters
// //             searchPlaceholder="Search applicants"
// //             filters={[
// //               { label: "All programmes" },
// //               { label: "All cohorts" },
// //               { label: "All stages" },
// //             ]}
// //             showBulkActions
// //             showExport
// //             exportLabel="Export CSV"
// //           />
// //         </div>

// //         <div className="mt-5">
// //           <AdminStats stats={applicantStats} />
// //         </div>

// //         <div className="mt-4">
// //           {/* <DataTable columns={applicantColumns} data={applicants} rowKey="id" /> */}
// //           <DataTable
// //             columns={applicantColumns}
// //             data={filteredApplicants}
// //             rowKey="id"
// //             pageSize={10}
// //             selectable
// //             onSelectionChange={setSelectedApplicants}
// //           />
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }

// "use client";

// import { useMemo, useState } from "react";

// import AdminFilters from "@/src/components/portal/admin/AdminFilters";
// import StatCards from "@/src/components/portal/admin/StatCards";
// import DataTable from "@/src/components/portal/admin/DataTable";

// import { Applicant, ApplicantFilters } from "./applicants.types";
// import { applicants } from "./applicants-data";

// export default function Applicants() {
//   /*
//    * Filters
//    */
//   const [filters, setFilters] = useState<ApplicantFilters>({
//     search: "",
//     programme: "All programmes",
//     cohort: "All cohorts",
//     stage: "All stages",
//   });

//   /*
//    * Filter applicants
//    */
//   const filteredApplicants = useMemo(() => {
//     return applicants.filter((applicant) => {
//       /*
//        * Search
//        */
//       const search = filters.search.toLowerCase().trim();

//       const matchesSearch =
//         !search ||
//         applicant.name.toLowerCase().includes(search) ||
//         applicant.programme.toLowerCase().includes(search) ||
//         applicant.cohort.toLowerCase().includes(search) ||
//         applicant.mentor.toLowerCase().includes(search);

//       /*
//        * Programme
//        */
//       const matchesProgramme =
//         filters.programme === "All programmes" ||
//         applicant.programme === filters.programme;

//       /*
//        * Cohort
//        */
//       const matchesCohort =
//         filters.cohort === "All cohorts" || applicant.cohort === filters.cohort;

//       /*
//        * Stage
//        */
//       const matchesStage =
//         filters.stage === "All stages" || applicant.stage === filters.stage;

//       return matchesSearch && matchesProgramme && matchesCohort && matchesStage;
//     });
//   }, [filters]);

//   /*
//    * Applicant statistics
//    */
//   const stats = [
//     {
//       value: "1,842",
//       label: "Total applicants",
//       helper: "↑ 12% this month",
//       helperColor: "green",
//     },
//     {
//       value: "126",
//       label: "Awaiting review",
//       helper: "18 overdue",
//       helperColor: "red",
//     },
//     {
//       value: "34",
//       label: "Unassigned",
//       helper: "Needs attention",
//       helperColor: "red",
//     },
//     {
//       value: "18",
//       label: "High-risk applicants",
//       helper: "Review today",
//       helperColor: "cyan",
//     },
//   ];

//   /*
//    * Table columns
//    */
//   const columns = [
//     {
//       key: "name",
//       header: "Applicant",
//     },
//     {
//       key: "programme",
//       header: "Programme",
//     },
//     {
//       key: "cohort",
//       header: "Cohort",
//     },
//     {
//       key: "stage",
//       header: "Stage",
//       render: (applicant: Applicant) => {
//         const stageStyles: Record<string, string> = {
//           Onboarding: "text-[#00B6CE]",
//           Interviewing: "text-[#00B6CE]",
//           Applied: "text-[#00B6CE]",
//           Matched: "text-[#00B6CE]",
//           Review: "text-[#F97316]",
//         };

//         return (
//           <span
//             className={`font-semibold ${
//               stageStyles[applicant.stage] ?? "text-[#303035]"
//             }`}
//           >
//             {applicant.stage}
//           </span>
//         );
//       },
//     },
//     {
//       key: "payment",
//       header: "Payment",
//       render: (applicant: Applicant) => {
//         const paymentStyles: Record<string, string> = {
//           Paid: "text-[#008F5A]",
//           Pending: "text-[#F97316]",
//           Failed: "text-[#DC2727]",
//         };

//         return (
//           <span
//             className={`font-semibold ${
//               paymentStyles[applicant.payment] ?? "text-[#303035]"
//             }`}
//           >
//             {applicant.payment}
//           </span>
//         );
//       },
//     },
//     {
//       key: "mentor",
//       header: "Mentor",
//     },
//     {
//       key: "applied",
//       header: "Applied",
//     },
//     {
//       key: "risk",
//       header: "Risk",
//       render: (applicant: Applicant) => {
//         const riskStyles: Record<string, string> = {
//           Low: "text-[#008F5A]",
//           Medium: "text-[#F97316]",
//           High: "text-[#DC2727]",
//         };

//         return (
//           <span
//             className={`font-semibold ${
//               riskStyles[applicant.risk] ?? "text-[#303035]"
//             }`}
//           >
//             {applicant.risk}
//           </span>
//         );
//       },
//     },
//     {
//       key: "action",
//       header: "Action",
//       render: (applicant: Applicant) => {
//         const actionStyles: Record<string, string> = {
//           View: "text-[#00B6CE]",
//           Assign: "text-[#00B6CE]",
//           Resolve: "text-[#00B6CE]",
//         };

//         return (
//           <button
//             type="button"
//             className={`font-semibold ${
//               actionStyles[applicant.action] ?? "text-[#00B6CE]"
//             }`}
//           >
//             {applicant.action}
//           </button>
//         );
//       },
//     },
//   ];

//   /*
//    * Filter options
//    */
//   const programmeOptions = [
//     "All programmes",
//     "Product Design",
//     "Software Eng.",
//     "Data Analytics",
//     "Project Mgmt.",
//   ];

//   const cohortOptions = [
//     "All cohorts",
//     "Cohort 2",
//     "Cohort 3",
//     "Cohort 4",
//     "Cohort 6",
//   ];

//   const stageOptions = [
//     "All stages",
//     "Applied",
//     "Review",
//     "Interviewing",
//     "Matched",
//     "Onboarding",
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8F8F8] px-5 py-8 lg:px-9">
//       <div className="mx-auto w-full max-w-[1440px]">
//         {/* Header */}
//         <div className="mb-6 flex items-center justify-between">
//           <h1 className="text-[28px] font-bold leading-[36px] text-[#1F1F25] lg:text-[30px]">
//             Applicants
//           </h1>

//           <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1F1F25] text-[12px] font-semibold text-white">
//             CN
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="mb-5">
//           <AdminFilters
//             searchPlaceholder="Search applicants"
//             filters={[
//               {
//                 label: "All programmes",
//                 value: filters.programme,
//                 options: programmeOptions,
//                 onChange: (value: string) =>
//                   setFilters((prev) => ({
//                     ...prev,
//                     programme: value,
//                   })),
//               },
//               {
//                 label: "All cohorts",
//                 value: filters.cohort,
//                 options: cohortOptions,
//                 onChange: (value: string) =>
//                   setFilters((prev) => ({
//                     ...prev,
//                     cohort: value,
//                   })),
//               },
//               {
//                 label: "All stages",
//                 value: filters.stage,
//                 options: stageOptions,
//                 onChange: (value: string) =>
//                   setFilters((prev) => ({
//                     ...prev,
//                     stage: value,
//                   })),
//               },
//             ]}
//             searchValue={filters.search}
//             onSearchChange={(value: string) =>
//               setFilters((prev) => ({
//                 ...prev,
//                 search: value,
//               }))
//             }
//             showBulkActions
//             showExport
//             exportLabel="Export CSV"
//           />
//         </div>

//         {/* Stats */}
//         <div className="mb-5">
//           <StatCards stats={stats} />
//         </div>

//         {/* Applicants Table */}
//         <DataTable<Applicant>
//           columns={columns}
//           data={filteredApplicants}
//           rowKey="id"
//           pageSize={10}
//           selectable
//           onSelectionChange={(selectedRows) => {
//             console.log("Selected applicants:", selectedRows);
//           }}
//           className="w-full"
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { useMemo, useState } from "react";

// import AdminFilters from "@/src/components/portal/admin/AdminFilters";
// import DataTable from "@/src/components/portal/admin/DataTable";
// import StatCards from "@/src/components/portal/admin/AdminPage/AdminStatCard";

// import { applicants } from "./applicants-data";
import { Applicant, ApplicantFilters } from "./applicants.types";
import { applicants } from "./applicant-data";
import { AdminFilters } from "../AdminPage";
import StatCards from "../(dashboard)/StatCards";
import { DataTable } from "../DataTable";

export default function Applicants() {
  /*
   * Filters
   */
  const [filters, setFilters] = useState<ApplicantFilters>({
    search: "",
    programme: "All programmes",
    cohort: "All cohorts",
    stage: "All stages",
  });

  /*
   * Filter applicants based on search + filters
   */
  const filteredApplicants = useMemo(() => {
    const search = filters.search.trim().toLowerCase();

    return applicants.filter((applicant) => {
      /*
       * Search
       */
      const matchesSearch =
        search === "" ||
        applicant.name.toLowerCase().includes(search) ||
        applicant.programme.toLowerCase().includes(search) ||
        applicant.cohort.toLowerCase().includes(search) ||
        applicant.mentor.toLowerCase().includes(search);

      /*
       * Programme
       */
      const matchesProgramme =
        filters.programme === "All programmes" ||
        applicant.programme === filters.programme;

      /*
       * Cohort
       */
      const matchesCohort =
        filters.cohort === "All cohorts" || applicant.cohort === filters.cohort;

      /*
       * Stage
       */
      const matchesStage =
        filters.stage === "All stages" || applicant.stage === filters.stage;

      return matchesSearch && matchesProgramme && matchesCohort && matchesStage;
    });
  }, [filters]);

  /*
   * Statistics
   */
  const stats = [
    {
      label: "Total applicants",
      value: "1,842",
      helper: "↑ 12% this month",
    },
    {
      label: "Awaiting review",
      value: "126",
      helper: "18 overdue",
    },
    {
      label: "Unassigned",
      value: "34",
      helper: "Needs attention",
    },
    {
      label: "High-risk applicants",
      value: "18",
      helper: "Review today",
    },
  ];

  /*
   * Table columns
   */
  const columns = [
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

      render: (applicant: Applicant) => {
        const styles: Record<string, string> = {
          Applied: "text-[#00B6CE]",
          Review: "text-[#F59E0B]",
          Interviewing: "text-[#00B6CE]",
          Matched: "text-[#008F5A]",
          Onboarding: "text-[#008F5A]",
        };

        return (
          <span
            className={`font-semibold ${
              styles[applicant.stage] ?? "text-[#303035]"
            }`}
          >
            {applicant.stage}
          </span>
        );
      },
    },

    {
      key: "payment",
      header: "Payment",

      render: (applicant: Applicant) => {
        const styles: Record<string, string> = {
          Paid: "text-[#008F5A]",
          Pending: "text-[#F59E0B]",
          Failed: "text-[#DC2727]",
        };

        return (
          <span
            className={`font-semibold ${
              styles[applicant.payment] ?? "text-[#303035]"
            }`}
          >
            {applicant.payment}
          </span>
        );
      },
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

      render: (applicant: Applicant) => {
        const styles: Record<string, string> = {
          Low: "text-[#008F5A]",
          Medium: "text-[#F59E0B]",
          High: "text-[#DC2727]",
        };

        return (
          <span
            className={`font-semibold ${
              styles[applicant.risk] ?? "text-[#303035]"
            }`}
          >
            {applicant.risk}
          </span>
        );
      },
    },

    {
      key: "action",
      header: "Action",

      render: (applicant: Applicant) => (
        <button
          type="button"
          className="font-semibold text-[#00B6CE] hover:text-[#009CB2]"
          onClick={() => {
            console.log(`Action "${applicant.action}" for ${applicant.name}`);
          }}
        >
          {applicant.action}
        </button>
      ),
    },
  ];

  /*
   * Filter options
   */
  const programmeOptions = [
    "All programmes",
    "Product Design",
    "Software Eng.",
    "Data Analytics",
    "Project Mgmt.",
  ];

  const cohortOptions = ["All cohorts", "Cohort 4", "Cohort 5", "Cohort 6"];

  const stageOptions = [
    "All stages",
    "Applied",
    "Review",
    "Interviewing",
    "Matched",
    "Onboarding",
  ];

  return (
    <main className="min-h-screen bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Filters */}
        <div className="mb-5">
          <AdminFilters
            searchPlaceholder="Search applicants"
            searchValue={filters.search}
            onSearchChange={(value) => {
              setFilters((previous) => ({
                ...previous,
                search: value,
              }));
            }}
            filters={[
              {
                label: filters.programme,
                options: programmeOptions,
                onChange: (value: string) => {
                  setFilters((previous) => ({
                    ...previous,
                    programme: value,
                  }));
                },
              },
              {
                label: filters.cohort,
                options: cohortOptions,
                onChange: (value: string) => {
                  setFilters((previous) => ({
                    ...previous,
                    cohort: value,
                  }));
                },
              },
              {
                label: filters.stage,
                options: stageOptions,
                onChange: (value: string) => {
                  setFilters((previous) => ({
                    ...previous,
                    stage: value,
                  }));
                },
              },
            ]}
            showBulkActions
            showExport
            exportLabel="Export CSV"
          />
        </div>

        {/* Stats */}
        <div className="mb-5">
          <StatCards stats={stats} />
        </div>

        {/* Table */}
        <DataTable<Applicant>
          columns={columns}
          data={filteredApplicants}
          rowKey="id"
          pageSize={10}
          selectable
          onSelectionChange={(selectedRows) => {
            console.log("Selected applicants:", selectedRows);
          }}
        />
      </div>
    </main>
  );
}
