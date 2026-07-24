export default function Flow() {
  return (
    <section
      id="flow"
      className="bg-[#FCFAFF] py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#9B7AC5]">
            FLOW
          </p>

          <h2 className="text-5xl font-bold text-gray-900">
            制作の流れ
          </h2>

          <p className="mt-6 text-[17px] leading-8 text-gray-600">
            はじめての方でも安心してご依頼いただけるよう、
            <br />
            制作の流れをご紹介します。
          </p>
        </div>

        {/* Flow Image */}
        <img
          src="/images/flowcanva.png"
          alt="制作の流れ"
          className="mx-auto w-full max-w-6xl mx-w-6xl rounded-3xl shadow-xl"
        />

      </div>
    </section>
  );
}