export default function EmployerVisual() {
  return (
    <div
      className="relative h-[260px] w-full overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat sm:h-[300px] lg:h-[340px] lg:max-w-[520px]"
      style={{ backgroundImage: "url('/images/community/community.jpg')" }}
    >
      {/* Candidate Match */}
      <div className="absolute left-4 top-4 w-[150px] rounded-xl bg-white p-3 shadow-xl sm:left-6 sm:top-6 sm:w-[180px] sm:p-4 lg:left-0 lg:top-0 lg:w-[200px]">
        <p className="mb-3 text-xs font-semibold text-[#1F1F25] sm:text-sm">
          Community Network
        </p>

        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-full bg-[#00B6CE] sm:h-8 sm:w-8" />

          <span className="text-lg font-bold text-[#1F1F25] sm:text-xl">
            Across Africa
          </span>
        </div>
      </div>

      {/* Employer Partners */}
      <div className="absolute bottom-5 right-5 rounded-xl bg-white px-4 py-3 shadow-xl sm:px-5 sm:py-4 lg:bottom-0 lg:right-0 lg:px-6 lg:py-5">
        <p className="text-13px font-bold text-[#1F1F25] ">2,400+ Members</p>

        {/* <p className="text-xs font-semibold text-[#5D5D61] sm:text-sm">
          Partners
        </p> */}
      </div>
    </div>
  );
}
