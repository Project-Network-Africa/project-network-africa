import Button from "../../../ui/Button";

export default function BlogSubscribe() {
  return (
    <section className="w-full bg-[#F8F8F8] px-5 pb-10 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-5 rounded-[14px] bg-[#1F1F25] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">
              Enjoyed this article?
            </h3>

            <p className="mt-1 text-[11px] text-[#9999A6]">
              Get new posts on career tips and alumni stories straight to your
              inbox.
            </p>
          </div>

          <Button
            href="#"
            className="rounded-[8px] bg-[#00B6CE] px-5 py-3 text-xs font-semibold text-white hover:bg-[#009CB2]"
          >
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}
