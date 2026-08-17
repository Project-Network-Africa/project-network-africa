type TeamMessage = {
  sender: string;
  message: string;
};

type TeamChatProps = {
  messages: TeamMessage[];
};

export default function TeamChat({ messages }: TeamChatProps) {
  return (
    <section className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Team Chat
      </p>

      <div className="flex flex-col gap-4">
        {messages.map((message, index) => (
          <div
            key={`${message.sender}-${index}`}
            className="flex flex-col gap-[2px]"
          >
            <p className="text-[12px] font-semibold text-[#1F1F25]">
              {message.sender}
            </p>

            <p className="text-[11px] leading-4 text-[#5D5D61]">
              {message.message}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
