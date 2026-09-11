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
  errors?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    country?: string;
    agreedToTerms?: string;
  };
  onChange: (
    field: "firstName" | "lastName" | "email" | "phone" | "country",
    value: string,
  ) => void;
  onTermsChange: (checked: boolean) => void;
}

const countries = [
  // Africa
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cameroon",
  "Central African Republic",
  "Chad",
  "Comoros",
  "Democratic Republic of the Congo",
  "Republic of the Congo",
  "Côte d'Ivoire",
  "Djibouti",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Eswatini",
  "Ethiopia",
  "Gabon",
  "The Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "São Tomé and Príncipe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe",

  // Other countries
  "Australia",
  "Canada",
  "France",
  "United Kingdom",
  "United States",
];

export default function PersonalInformation({
  firstName,
  lastName,
  email,
  phone,
  country,
  errors,
  agreedToTerms,
  onChange,
  onTermsChange,
}: PersonalInformationProps) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="lg:text-[26px] md:text-[24px] lg:font-body lg:font-bold text-[22px] font-heading font-semibold leading-none text-[#1F1F25]">
          Personal Information
        </h1>

        <p className="mt-5 text-[14px] leading-none font-body font-normal text-[#5D5D61]">
          Tell us a bit about yourself so we can personalize your application.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormInput
          label="First Name"
          placeholder="Enter first name"
          value={firstName}
          error={errors?.firstName}
          onChange={(value) => onChange("firstName", value)}
          disabled
        />

        <FormInput
          label="Last Name"
          placeholder="Enter last name"
          value={lastName}
          error={errors?.lastName}
          onChange={(value) => onChange("lastName", value)}
          disabled
        />

        <FormInput
          label="Email Address"
          placeholder="you@example.com"
          type="email"
          value={email}
          error={errors?.email}
          onChange={(value) => onChange("email", value)}
          disabled
        />

        <FormInput
          label="Phone Number"
          placeholder="+234 000 000 0000"
          type="tel"
          value={phone}
          error={errors?.phone}
          onChange={(value) => onChange("phone", value)}
        />
      </div>

      <FormSelect
        label="Country"
        placeholder="Select your country"
        error={errors?.country}
        value={country}
        options={countries}
        onChange={(value) => onChange("country", value)}
      />

      <FormCheckbox
        checked={agreedToTerms}
        onChange={onTermsChange}
        error={errors?.agreedToTerms}
      />
    </div>
  );
}
