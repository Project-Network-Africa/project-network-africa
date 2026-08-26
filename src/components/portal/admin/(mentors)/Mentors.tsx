// import {
//   AdminFilters,
//   AdminPageHeader,
//   AdminStats,
// } from "../components/AdminPage";

// import { DataTable } from "../components/DataTable";

import { mentorStats, mentors } from "./mentors-data";

import { mentorColumns } from "./mentors-columns";
import { AdminFilters, AdminStats } from "../AdminPage";
import { DataTable } from "../DataTable";

export default function Mentors() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] font-body ">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Filters */}
        <div className="">
          <AdminFilters
            searchPlaceholder="Search mentors"
            filters={[
              { label: "All expertise" },
              { label: "Availability" },
              { label: "Verification" },
            ]}
            showExport
            showBulkActions={false}
            exportLabel="Export"
            secondaryAction="Invite mentor"
          />
        </div>

        {/* Stats */}
        <div className="mt-5">
          <AdminStats stats={mentorStats} />
        </div>

        {/* Table */}
        <div className="mt-4">
          {/* <DataTable columns={mentorColumns} data={mentors} rowKey="id" /> */}
          {/* <DataTable
            columns={mentorColumns}
            data={filteredMentors}
            rowKey="id"
            pageSize={10}
            selectable
            onSelectionChange={setSelectedMentors}
          /> */}
        </div>
      </div>
    </main>
  );
}
