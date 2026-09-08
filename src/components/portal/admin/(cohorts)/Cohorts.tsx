// "use client";

// import { useMemo, useState } from "react";

// import { cohortFilters, cohorts, cohortStats } from "./cohorts-data";

// import { Cohort } from "./cohorts.types";
// import { AdminFilters } from "../AdminPage";
// import StatCards from "../(dashboard)/StatCards";
// import { DataTable } from "../DataTable";
// import { Button } from "@/src/components/ui";
// import { useRouter } from "next/navigation";
// export default function Cohorts() {
//   const router = useRouter();
//   const [search, setSearch] = useState("");

//   /*
//    * Search
//    */
//   const filteredCohorts = useMemo(() => {
//     const searchValue = search.trim().toLowerCase();

//     if (!searchValue) {
//       return cohorts;
//     }

//     return cohorts.filter((cohort) => {
//       return (
//         cohort.cohort.toLowerCase().includes(searchValue) ||
//         cohort.programme.toLowerCase().includes(searchValue) ||
//         cohort.start.toLowerCase().includes(searchValue) ||
//         cohort.end.toLowerCase().includes(searchValue) ||
//         cohort.status.toLowerCase().includes(searchValue)
//       );
//     });
//   }, [search]);

//   /*
//    * Table columns
//    */
//   const columns = [
//     {
//       key: "cohort",
//       header: "Cohort",

//       render: (cohort: Cohort) => (
//         <span className="font-medium text-[#303035]">{cohort.cohort}</span>
//       ),
//     },

//     {
//       key: "programme",
//       header: "Programme",
//     },

//     {
//       key: "start",
//       header: "Start",
//     },

//     {
//       key: "end",
//       header: "End",
//     },

//     {
//       key: "deadline",
//       header: "Deadline",
//     },

//     {
//       key: "capacity",
//       header: "Capacity",
//     },

//     {
//       key: "enrolled",
//       header: "Enrolled",
//     },

//     {
//       key: "completion",
//       header: "Completion",

//       render: (cohort: Cohort) => (
//         <span className="font-semibold text-[#00B6CE]">
//           {cohort.completion}
//         </span>
//       ),
//     },

//     {
//       key: "status",
//       header: "Status",

//       render: (cohort: Cohort) => {
//         const isDraft = cohort.status === "Draft";

//         return (
//           <span
//             className={
//               isDraft
//                 ? "font-semibold text-[#FF6B00]"
//                 : "font-semibold text-[#008F58]"
//             }
//           >
//             {cohort.status}
//           </span>
//         );
//       },
//     },

//     {
//       key: "action",
//       header: "Action",

//       render: (cohort: Cohort) => (
//         <Button
//           href={`/admin/cohorts/${cohort.id}`}
//           variant="link"
//           className="p-0 text-[12px] font-semibold text-[#00B6CE]"
//         >
//           {cohort.action}
//         </Button>
//       ),
//     },
//   ];

//   return (
//     <main className="min-h-screen w-full bg-[#F8F8F8] font-body ">
//       <div className="mx-auto w-full max-w-[1280px]">
//         {/* Filters */}
//         <div className="">
//           <AdminFilters
//             searchPlaceholder="Search cohorts"
//             filters={cohortFilters}
//             showExport
//             exportLabel="Export"
//             secondaryAction="Create cohort"
//             searchValue={search}
//             onSearchChange={setSearch}
//             onSecondaryAction={() => router.push("/admin/cohorts/create")}
//           />
//         </div>

//         {/* Stats */}
//         <section className="mt-5">
//           <StatCards stats={cohortStats} columns={4} />
//         </section>

//         {/* Table */}
//         <section className="mt-4">
//           <DataTable<Cohort>
//             columns={columns}
//             data={filteredCohorts}
//             rowKey="id"
//             pageSize={5}
//             totalRecords={filteredCohorts.length}
//           />
//         </section>
//       </div>
//     </main>
//   );
// }
"use client";

import { useEffect, useMemo, useState } from "react";

import { cohortFilters } from "./cohorts-data";

import { Cohort } from "./cohorts.types";

import { AdminFilters } from "../AdminPage";

import StatCards from "../(dashboard)/StatCards";

import { DataTable } from "../DataTable";

import { Button } from "@/src/components/ui";

import { getCohorts } from "@/src/services/cohorts";

// interface CohortApiResponse {
//   _id: string;
//   name: string;
//   program: string;
//   description?: string;
//   capacity: number;
//   fee: number;
//   mentors: string[];
//   applicants: {
//     _id: string;
//   }[];
//   startDate: string;
//   endDate: string;
//   isOpen: boolean;
//   status: string;
//   createdBy: string;
//   createdAt: string;
//   updatedAt: string;
// }
export default function Cohorts() {
  const [search, setSearch] = useState("");
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCohorts = async () => {
      try {
        const response = await getCohorts();

        const formattedCohorts: Cohort[] = response.cohorts.map((cohort) => ({
          id: cohort._id,
          cohort: cohort.name,
          programme: cohort.program,
          start: new Date(cohort.startDate).toLocaleDateString(),
          end: new Date(cohort.endDate).toLocaleDateString(),
          deadline: "-",
          capacity: cohort.capacity,
          enrolled: cohort.applicants?.length || 0,
          completion: "-",
          status: cohort.status,
          action: "View",
        }));

        setCohorts(formattedCohorts);
      } catch (error) {
        console.error("FAILED TO GET COHORTS:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCohorts();
  }, []);

  const filteredCohorts = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return cohorts;
    }

    return cohorts.filter((cohort) => {
      return (
        cohort.cohort.toLowerCase().includes(searchValue) ||
        cohort.programme.toLowerCase().includes(searchValue) ||
        cohort.start.toLowerCase().includes(searchValue) ||
        cohort.end.toLowerCase().includes(searchValue) ||
        cohort.status.toLowerCase().includes(searchValue)
      );
    });
  }, [search, cohorts]);

  const cohortStats = [
    {
      label: "Total cohorts",
      value: String(cohorts.length),
    },
    {
      label: "Upcoming",
      value: String(
        cohorts.filter((cohort) => cohort.status === "Upcoming").length,
      ),
    },
    {
      label: "Active",
      value: String(
        cohorts.filter((cohort) => cohort.status === "Active").length,
      ),
    },
    {
      label: "Total enrolled",
      value: String(
        cohorts.reduce(
          (total, cohort) => total + Number(cohort.enrolled || 0),
          0,
        ),
      ),
    },
  ];
  const columns = [
    {
      key: "cohort",
      header: "Cohort",
      render: (cohort: Cohort) => (
        <span className="font-medium text-[#303035]">{cohort.cohort}</span>
      ),
    },
    {
      key: "programme",
      header: "Programme",
    },
    {
      key: "start",
      header: "Start",
    },
    {
      key: "end",
      header: "End",
    },
    {
      key: "deadline",
      header: "Deadline",
    },
    {
      key: "capacity",
      header: "Capacity",
    },
    {
      key: "enrolled",
      header: "Enrolled",
    },
    {
      key: "completion",
      header: "Completion",
      render: (cohort: Cohort) => (
        <span className="font-semibold text-[#00B6CE]">
          {cohort.completion}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (cohort: Cohort) => {
        const isDraft = cohort.status === "Draft";

        return (
          <span
            className={
              isDraft
                ? "font-semibold text-[#FF6B00]"
                : "font-semibold text-[#008F58]"
            }
          >
            {cohort.status}
          </span>
        );
      },
    },
    {
      key: "action",
      header: "Action",
      render: (cohort: Cohort) => (
        <Button
          href={`/admin/cohorts/${cohort.id}`}
          variant="link"
          className="p-0 text-[12px] font-semibold text-[#00B6CE]"
        >
          {cohort.action}
        </Button>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        <AdminFilters
          searchPlaceholder="Search cohorts"
          filters={cohortFilters}
          showExport
          exportLabel="Export"
          secondaryAction="Create cohort"
          searchValue={search}
          onSearchChange={setSearch}
        />

        <section className="mt-5">
          <StatCards stats={cohortStats} columns={4} />
        </section>

        <section className="mt-4">
          {loading ? (
            <div className="rounded-lg bg-white p-8 text-center text-[13px] text-[#687178]">
              Loading cohorts...
            </div>
          ) : filteredCohorts.length === 0 ? (
            <div className="rounded-lg bg-white p-8 text-center text-[13px] text-[#687178]">
              No cohorts found.
            </div>
          ) : (
            <DataTable<Cohort>
              columns={columns}
              data={filteredCohorts}
              rowKey="id"
              pageSize={5}
              totalRecords={filteredCohorts.length}
            />
          )}
        </section>
      </div>
    </main>
  );
}
