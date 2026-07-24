const services = [
  {
    title: "ショート動画編集",
    description:
      "Instagram・TikTok・YouTube Shortsなど、最後まで見たくなる動画を制作します。",
  },
  {
    title: "店舗PR動画",
    description:
      "お店の魅力が伝わる動画を企画・編集。来店につながる発信をサポートします。",
  },
  {
    title: "企画・構成サポート",
    description:
      "何を発信したらいいか分からない方へ。伝わる構成から一緒に考えます。",
  },
];

export default function Service() {
  return (
    <section
      id="service"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background */}
      <div className="absolute -left-28 top-16 h-72 w-72 rounded-full bg-[#F3EBFD] opacity-70 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[#F8F2FF] opacity-80 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-[700px] text-center">

          <p className="text-[15px] font-medium uppercase tracking-[0.35em] text-[#9B7AC5]">
            SERVICE
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            できること
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-[#C7A8F2]" />

          <p className="mt-8 text-[18px] leading-9 text-gray-600">
            あなたの想いや目的に合わせて
            伝わる発信を一緒につくります
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-[32px] border border-[#EFE7FA] bg-white p-8 shadow-[0_18px_40px_rgba(155,122,197,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_55px_rgba(155,122,197,0.16)]"
            >

              {/* Number */}
              <span className="absolute right-6 top-3 text-6xl font-bold text-[#F3ECFC]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F6F0FD] text-2xl">
               {index === 0 && "🎬"}
                {index === 1 && "📍"}
                {index === 2 && "💡"}

              </div>

              <h3 className="mt-8 text-[28px] font-bold leading-tight text-gray-900">
                {service.title}
              </h3>

              <div className="mt-6 h-[3px] w-16 rounded-full bg-[#C7A8F2] transition-all duration-300 group-hover:w-24" />

              <p className="mt-6 text-[17px] leading-8 text-gray-600">
                {service.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-10 flex items-center justify-between">

                <span className="text-sm font-medium tracking-[0.25em] text-[#9B7AC5]">
                  CREATIVE
                </span>

                <div className="flex items-center gap-2 text-[#9B7AC5] transition-transform duration-300 group-hover:translate-x-1">
                  <span>→</span>
                </div>

              </div>

              {/* Hover Background */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FFFFFF] via-[#FCFAFF] to-[#F7F1FE] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#F8F2FF] to-transparent" />

      {/* Accent Dots */}
      <div className="absolute left-[8%] top-[18%] h-3 w-3 rounded-full bg-[#C7A8F2]" />
      <div className="absolute right-[12%] top-[22%] h-2 w-2 rounded-full bg-[#D8C2F3]" />
      <div className="absolute left-[16%] bottom-[14%] h-4 w-4 rounded-full bg-[#E8D8FA]" />

    </section>
  );
}