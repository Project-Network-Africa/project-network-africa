export default function EmployerVisual() {
  return (
    <div
      className="relative h-[260px] w-full overflow-hidden rounded-[20px] bg-cover bg-center bg-no-repeat sm:h-[300px] lg:h-[340px] lg:max-w-[520px]"
      style={{ backgroundImage: "url('/images/community/community.jpg')" }}
    >
      {/* Candidate Match */}
      <div className="absolute left-0 top-0 w-[150px] rounded-xl bg-white md:p-3    shadow-xl md:w-[180px] py-5  px-2 md:left-0 md:top-0 lg:w-[200px]">
        <p className="mb-3 text-xs font-semibold text-[#1F1F25] sm:text-sm">
          Community Network
        </p>

        <div className="flex items-center gap-2">
          <div className="md:h-5 md:w-5 w-3 h-3  rounded-full bg-[#00B6CE] " />

          <span className="md:text-lg text-md font-bold text-[#1F1F25] sm:text-xl">
            Across Africa
          </span>
        </div>
      </div>

      {/* Employer Partners */}
      <div className="absolute bottom-0 right-0 rounded-xl bg-white px-4 py-3 shadow-xl sm:px-5 sm:py-4 md:bottom-0 md:right-0 lg:px-6 lg:py-5">
        <p className="text-13px font-bold text-[#1F1F25] ">2,400+ Members</p>

        {/* <p className="text-xs font-semibold text-[#5D5D61] sm:text-sm">
          Partners
        </p> */}
      </div>
    </div>
  );
}
