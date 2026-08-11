import FormCheckbox from "../fields/FormCheckbox";
import FormInput from "../fields/FormInput";
import FormSelect from "../fields/FormSelect";

interface PersonalInformationProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  agreedToTerms: boolean;

  onChange: (
    field: "firstName" | "lastName" | "email" | "phone" | "country",
    value: string,
  ) => void;

  onTermsChange: (checked: boolean) => void;
}

const countries = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "South Africa",
  "United Kingdom",
  "United States",
  "Canada",
];

export default function PersonalInformation({
  firstName,
  lastName,
  email,
  phone,
  country,
  agreedToTerms,
  onChange,
  onTermsChange,
}: PersonalInformationProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-[26px] font-bold leading-none text-[#1F1F25]">
          Personal Information
        </h1>

        <p className="mt-5 text-[14px] leading-none text-[#5D5D61]">
          Tell us a bit about yourself so we can personalize your application.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormInput
          label="First Name"
          placeholder="Enter first name"
          value={firstName}
          onChange={(value) => onChange("firstName", value)}
        />

        <FormInput
          label="Last Name"
          placeholder="Enter last name"
          value={lastName}
          onChange={(value) => onChange("lastName", value)}
        />

        <FormInput
          label="Email Address"
          placeholder="you@example.com"
          type="email"
          value={email}
          onChange={(value) => onChange("email", value)}
        />

        <FormInput
          label="Phone Number"
          placeholder="+234 000 000 0000"
          type="tel"
          value={phone}
          onChange={(value) => onChange("phone", value)}
        />
      </div>

      <FormSelect
        label="Country"
        placeholder="Select your country"
        value={country}
        options={countries}
        onChange={(value) => onChange("country", value)}
      />

      <FormCheckbox checked={agreedToTerms} onChange={onTermsChange} />
    </div>
  );
}
