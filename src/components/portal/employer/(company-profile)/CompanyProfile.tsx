import CompanyHeader from "./CompanyHeader";
import CompanyDescription from "./CompanyDescription";
import CurrentOpenings from "./CurrentOpenings";

export default function CompanyProfile() {
  return (
    <div className="flex w-full flex-col gap-5">
      <CompanyHeader />

      <CompanyDescription />

      <CurrentOpenings />
    </div>
  );
}
