export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FCFAFF] py-28"
    >
      {/* Background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#EFE2FB] opacity-60 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#F5EDFC] opacity-70 blur-3xl" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-20 px-6 lg:flex-row lg:px-8">

        {/* Left */}
        <div className="relative flex-1">

          {/* Decoration */}
          <div className="absolute -top-8 -left-8 h-24 w-24 rounded-full border border-[#D8C2F3]" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-[36px] shadow-xl">
           <video
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-auto object-contain"
>
  <source src="/videos/about1.mov" type="video/quicktime" />
</video>
          </div>

          
        </div>

        {/* Right */}
        <div className="max-w-[520px]">
          <p className="mb-4 text-[14px] font-medium uppercase tracking-[0.35em] text-[#9B7AC5]">
            ABOUT
          </p>

          <h2 className="text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            娘の成長記録から始まった
            <br />
            動画編集
          </h2>

          <div className="mt-6 h-[3px] w-24 rounded-full bg-[#C7A8F2]" />

          <div className="mt-8 space-y-6 text-[16px] leading-9 text-gray-600">
            <p>
              3年前から始めた娘の成長記録で動画編集を始めて
              地元・茨木の魅力を伝える動画編集のお仕事との
              出会いをきっかけに、
              「伝えること」の面白さに惹かれました。
            </p>

            <p>
              ただ動画を編集するだけではなく、
              想いや魅力を言葉にして
              伝わる形へと設計することを
              大切にしています。
            </p>

            <p>
              「何を伝えればいいかわからない。」
            </p>

            <p>
              そんな状態からでも、
              一緒に考えながら
              あなたらしい伝え方を
              形にしていきます。
            </p>
          </div>

         

          {/* Decorative Dots */}
          <div className="mt-10 flex gap-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-[#D8C2F3]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#F8F2FF] to-transparent" />

      {/* Accent Circles */}
      <div className="absolute left-[10%] top-[18%] h-3 w-3 rounded-full bg-[#C7A8F2]" />
      <div className="absolute right-[14%] top-[26%] h-2 w-2 rounded-full bg-[#D8C2F3]" />
      <div className="absolute right-[8%] bottom-[14%] h-4 w-4 rounded-full bg-[#E7D8FA]" />
    </section>
  );
}