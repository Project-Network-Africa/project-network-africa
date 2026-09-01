"use client";

import { useMemo, useState } from "react";

import { Button } from "@/src/components/ui";

import DataTable from "../DataTable/DataTable";

import { userFilters, users, userStats } from "./users-data";

import { User } from "./users.types";
import { AdminFilters } from "../AdminPage";
import StatCards from "../(dashboard)/StatCards";
import Link from "next/link";

export default function Users() {
  const [search, setSearch] = useState("");

  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  // Search users

  const filteredUsers = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return users;
    }

    return users.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue) ||
        user.role.toLowerCase().includes(searchValue) ||
        user.status.toLowerCase().includes(searchValue)
      );
    });
  }, [search]);

  // Table columns

  const columns = [
    {
      key: "name",
      header: "Name",
    },

    {
      key: "email",
      header: "Email",
    },

    {
      key: "role",
      header: "Role",

      render: (user: User) => (
        <span className="font-medium text-[#00B6CE]">{user.role}</span>
      ),
    },

    {
      key: "status",
      header: "Status",

      render: (user: User) => (
        <span
          className={
            user.status === "Active"
              ? "font-medium text-[#008F58]"
              : "font-medium text-[#DC2727]"
          }
        >
          {user.status}
        </span>
      ),
    },

    {
      key: "joined",
      header: "Joined",
    },

    {
      key: "lastLogin",
      header: "Last Login",
    },

    {
      key: "permissions",
      header: "Permissions",
    },

    {
      key: "action",
      header: "Action",

      render: (user: User) => (
        // <button
        //   type="button"
        //   className="font-semibold text-[#00B6CE] transition hover:text-[#009CB2]"
        //   onClick={() => {
        //     console.log(`${user.action}:`, user.name);
        //   }}
        // >
        //   {user.action}
        // </button>
        <Link
          href={`/admin/users/${user.id}`}
          className="font-semibold text-[#00B6CE] transition hover:text-[#009CB2]"
        >
          {user.action}
        </Link>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* FILTERS */}

        <div className="">
          <AdminFilters
            searchPlaceholder="Search users or email"
            filters={userFilters}
            showBulkActions
            secondaryAction="Add user"
            searchValue={search}
            onSearchChange={setSearch}
          />
        </div>

        {/* STAT CARDS */}

        <section className="mt-5">
          <StatCards stats={userStats} columns={4} />
        </section>

        {/* DATA TABLE */}

        <section className="mt-4">
          <DataTable<User>
            columns={columns}
            data={filteredUsers}
            rowKey="id"
            pageSize={5}
            selectable
            totalRecords={filteredUsers.length}
            onSelectionChange={setSelectedUsers}
          />
        </section>

        {/* SELECTED USERS */}

        {selectedUsers.length > 0 && (
          <div className="mt-3 flex items-center justify-between rounded-lg border border-[#DDE1E5] bg-white px-4 py-3">
            <p className="text-[12px] text-[#5D5D61]">
              {selectedUsers.length} user
              {selectedUsers.length > 1 ? "s" : ""} selected
            </p>

            <Button
              variant="light"
              className="h-9 rounded-lg px-4 text-[12px] font-semibold"
              onClick={() => {
                console.log("Selected users:", selectedUsers);
              }}
            >
              Bulk actions
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
