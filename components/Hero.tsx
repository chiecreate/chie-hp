export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FCFAFF]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-between gap-4 px-6 py-24 lg:flex-row lg:px-12">

        {/* Left */}
        <div className="max-w-xl text-center lg:text-left">

          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-[#9B7AC5] uppercase">
            Chie Creative
          </p>

          <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
            伝えたいを、
            <br />
            <span className="text-[#9B7AC5]">伝わるに。</span>
          </h1>

          <p className="mt-8 text-base leading-6 text-gray-600">
            「何を伝えたらいいんだろう。」<br />
            そんなところからでも大丈夫
            <br />
            あなたの想いやこだわりを一緒に見つけて
            <br />
            心を動かすショート動画を制作いたします
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            
            <a
              href="#works"
              className="rounded-full bg-[#9B7AC5] px-8 py-4 text-white transition hover:bg-[#8763B5]"
            >
              制作実績を見る
            </a>
          </div>

        </div>

        {/* Right */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Watercolor Background */}
          <div className="absolute top-6 h-[430px] w-[430px] rounded-full bg-[#F4ECFD] blur-3xl opacity-80 lg:h-[500px] lg:w-[500px]" />

          {/* Photo */}
          <div className="relative z-10 w-full max-w-[560px] lg:max-w-[620px] overflow-hidden rounded-[42px] shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
            <img
              src="/images/hero1.jpeg"
              alt="chie"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Memo */}
          <div className="absolute left-6 top-6 z-20 w-[160px] rotate-[-5deg] rounded-[20px] bg-[#FFFDFB] p-4 shadow-[0_15px_35px_rgba(0,0,0,0.12)] lg:left-10 lg:bottom-10 lg:top-auto">

            {/* Masking Tape */}
            <div className="absolute -top-4 left-1/2 h-7 w-20 -translate-x-1/2 rotate-[-8deg] rounded-sm bg-[#DCCB8A]/80" />

            <p className="text-[13px] leading-8 text-gray-700">
              心を動かす動画で
              <br />
              あなたの想いを
              <br />
              届けます。
            </p>

            <div className="mt-5 h-[2px] w-14 rounded-full bg-[#C7A7EE]" />

          </div>
          

          {/* Dots */}
          <div className="absolute -left-4 bottom-32 grid grid-cols-3 gap-2 opacity-50">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full bg-[#D8C2F3]"
              />
            ))}
          </div>

          {/* Outline Circle */}
          <div className="absolute -right-6 top-8 h-20 w-20 rounded-full border border-[#D8C2F3]" />

          {/* Accent Blur */}
          <div className="absolute -left-10 top-4 h-36 w-36 rounded-full bg-[#F8F2FF] blur-3xl" />
        </div>
      </div>
    </section>
  );
}