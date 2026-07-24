const faqs = [
  {
    question: "対応している動画のジャンルは？",
    answer:
      "店舗紹介・Instagramリール・TikTok・YouTube Shortsなどのショート動画制作に対応しています。",
  },
  {
    question: "企画や構成から相談できますか？",
    answer:
      "もちろんです。伝えたい内容やターゲットに合わせて、構成からご提案します。",
  },
  {
    question: "修正は何回までできますか？",
    answer:
      "ご契約内容に応じて対応しています。事前に修正回数をご案内しますのでご安心ください。",
  },
  {
    question: "納期の目安を教えてください。",
    answer:
      "内容によりますが、通常は３〜５日程度で初稿をご提出しています。",
  },
];
export default function FAQ() {
  return (
    <section id="faq" className="bg-[#FCFAFF] py-28">
      <div className="mx-auto max-w-[900px] px-8">
        <p className="text-center text-[16px] tracking-[0.3em] text-[#9B7AC5]">
          FAQ
        </p>

        <h2 className="mt-4 text-center text-[42px] font-bold">
          よくある質問
        </h2>

        <div className="mt-20 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[24px] border border-[#EFE7F8] bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-[#9B7AC5]">
                Q. {faq.question}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                A. {faq.answer}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
