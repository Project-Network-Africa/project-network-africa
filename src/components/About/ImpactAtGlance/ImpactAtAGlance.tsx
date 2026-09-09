interface ImpactItem {
  value: string;
  label: string;
  highlight?: boolean;
}

interface ImpactAtAGlanceProps {
  title?: string;
  description: string;
  items: ImpactItem[];
  backgroundClassName?: string;
}

const defaultItems: ImpactItem[] = [
  {
    value: "APR 1",
    label: "Official start • 2026",
  },
  {
    value: "JUL 3",
    label: "WhatsApp launch • 2026",
  },
  {
    value: "PROOF",
    label: "Real team-based work",
    highlight: true,
  },
];

export default function ImpactAtAGlance({
  title = "IMPACT AT A GLANCE",
  description,
  items = defaultItems,
  backgroundClassName = "bg-[#F8F8F8]",
}: ImpactAtAGlanceProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-4 py-8 sm:px-8 lg:flex-row lg:items-center lg:gap-16 lg:px-20 lg:py-[32px]">
        <div className="w-full lg:w-2/5 lg:shrink lg:pr-8 xl:w-[520px] xl:shrink-0 xl:pr-0">
          <p className="font-body text-[12px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[13px]">
            {title}
          </p>
          <p className="mt-5 max-w-[380px] font-body text-[18px] font-semibold leading-[130%] text-[#1F1F25] lg:mt-3 lg:text-[18px] lg:leading-[130%]">
            {description}
          </p>
        </div>

        {/* Impact Items */}
        <div className="grid w-full grid-cols-3 gap-2 lg:flex lg:flex-1 lg:items-center lg:justify-between lg:gap-6 xl:gap-12">
          {items.map((item) => (
            <div
              key={item.value}
              className={`flex min-h-[112px] flex-col justify-between rounded-[12px] border border-[#D9DDE5] p-[10px] lg:min-h-0 lg:w-auto lg:min-w-0 lg:flex-1 lg:rounded-none lg:border-0 lg:p-0 xl:w-[180px] xl:flex-none ${
                item.highlight
                  ? "border-[#00B6CE] bg-[#E8FAFC] lg:bg-transparent"
                  : "bg-white lg:bg-transparent"
              }`}
            >
              <p
                className={`font-body text-[20px] font-bold leading-[100%] ${item.highlight ? "text-[#00B6CE]" : "text-[#1F1F25]"} lg:text-[34px]`}
              >
                {item.value}
              </p>
              <p className="max-w-[120px] font-body text-[12px] font-normal leading-[130%] text-[#5D5D61] lg:max-w-none lg:text-[14px] lg:leading-[140%]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
