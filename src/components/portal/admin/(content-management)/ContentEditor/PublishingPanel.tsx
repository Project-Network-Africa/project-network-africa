// "use client";

// import { PublishingPanelProps } from "./content-editor.types";

// export default function PublishingPanel({
//   status,
//   visibility,
//   publishDate,
//   readOnly = false,
//   onStatusChange,
//   onVisibilityChange,
//   onPublishDateChange,
// }: PublishingPanelProps) {
//   return (
//     <section className="rounded-xl border border-[#DDE1E5] bg-white p-5">
//       <div className="flex items-center justify-between">
//         <h2 className="text-[17px] font-bold text-[#1F1F25]">Publishing</h2>

//         <span className="rounded-full bg-[#E1F3EC] px-3 py-1 text-[11px] font-semibold text-[#008F58]">
//           ● Live
//         </span>
//       </div>

//       <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
//         {/* STATUS */}

//         <div>
//           <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
//             Status
//           </label>

//           <select
//             value={status}
//             disabled={readOnly}
//             onChange={(event) => onStatusChange?.(event.target.value)}
//             className="h-10 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] outline-none disabled:bg-[#F8F8F8]"
//           >
//             <option>Published</option>
//             <option>Draft</option>
//             <option>Scheduled</option>
//             <option>Needs review</option>
//           </select>
//         </div>

//         {/* VISIBILITY */}

//         <div>
//           <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
//             Visibility
//           </label>

//           <select
//             value={visibility}
//             disabled={readOnly}
//             onChange={(event) => onVisibilityChange?.(event.target.value)}
//             className="h-10 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] outline-none disabled:bg-[#F8F8F8]"
//           >
//             <option>Public</option>
//             <option>Private</option>
//             <option>Members only</option>
//           </select>
//         </div>

//         {/* DATE */}

//         <div className="sm:col-span-2">
//           <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
//             Publish date
//           </label>

//           <input
//             value={publishDate}
//             readOnly={readOnly}
//             onChange={(event) => onPublishDateChange?.(event.target.value)}
//             className="h-10 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] outline-none focus:border-[#00B6CE] read-only:bg-[#F8F8F8]"
//           />
//         </div>
//       </div>

//       {!readOnly && (
//         <button
//           type="button"
//           className="mt-4 h-10 w-full rounded-lg bg-[#00B6CE] px-4 text-[12px] font-semibold text-white"
//         >
//           {status === "Published"
//             ? "Update published content"
//             : "Publish content"}
//         </button>
//       )}
//     </section>
//   );
// }
"use client";

import { ContentStatus } from "../content.types";
import { PublishingPanelProps } from "./content-editor.types";

export default function PublishingPanel({
  status,
  visibility,
  publishDate,
  readOnly = false,
  onStatusChange,
  onVisibilityChange,
  onPublishDateChange,
}: PublishingPanelProps) {
  return (
    <section className="rounded-xl border border-[#DDE1E5] bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-[17px] font-bold text-[#1F1F25]">Publishing</h2>

        <span className="rounded-full bg-[#E1F3EC] px-3 py-1 text-[11px] font-semibold text-[#008F58]">
          ● Live
        </span>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* STATUS */}
        <div>
          <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
            Status
          </label>

          <select
            value={status}
            disabled={readOnly}
            onChange={(event) =>
              onStatusChange?.(event.target.value as ContentStatus)
            }
            className="h-10 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] outline-none disabled:bg-[#F8F8F8]"
          >
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Needs review">Needs review</option>
          </select>
        </div>

        {/* VISIBILITY */}
        <div>
          <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
            Visibility
          </label>

          <select
            value={visibility}
            disabled={readOnly}
            onChange={(event) => onVisibilityChange?.(event.target.value)}
            className="h-10 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] outline-none disabled:bg-[#F8F8F8]"
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
            <option value="Members only">Members only</option>
          </select>
        </div>

        {/* DATE */}
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-[12px] font-medium text-[#5D5D61]">
            Publish date
          </label>

          <input
            value={publishDate}
            readOnly={readOnly}
            onChange={(event) => onPublishDateChange?.(event.target.value)}
            className="h-10 w-full rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] outline-none focus:border-[#00B6CE] read-only:bg-[#F8F8F8]"
          />
        </div>
      </div>

      {!readOnly && (
        <button
          type="button"
          className="mt-4 h-10 w-full rounded-lg bg-[#00B6CE] px-4 text-[12px] font-semibold text-white"
        >
          {status === "Published"
            ? "Update published content"
            : "Publish content"}
        </button>
      )}
    </section>
  );
}
