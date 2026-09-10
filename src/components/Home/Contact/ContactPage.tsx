import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactPage() {
  return (
    <main className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-[56px] sm:px-8 md:px-12 lg:px-0">
        <h1 className="text-[30px] font-bold leading-[100%] tracking-[-0.02em] text-[#1F1F25] lg:text-[32px]">
          Get in Touch
        </h1>

        <div className="mt-[50px] grid grid-cols-1 gap-[48px] lg:grid-cols-[minmax(0,797px)_300px] lg:gap-[143px]">
          <ContactForm />

          <ContactInfo />
        </div>
      </div>
    </main>
  );
}
