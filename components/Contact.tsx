"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setResult("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResult("お問い合わせを送信しました☺︎");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setResult(data.message || "送信に失敗しました。");
      }
    } catch {
      setResult("通信エラーが発生しました。");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FCFAFF] py-32"
    >
      {/* Background */}
      <div className="absolute -left-32 top-0 h-[320px] w-[320px] rounded-full bg-[#EADCF8] opacity-70 blur-[90px]" />

      <div className="absolute -right-20 bottom-0 h-[260px] w-[260px] rounded-full bg-[#F2E8FD] opacity-80 blur-[80px]" />

      <div className="relative mx-auto flex flex-col lg:flex-row max-w-[1180px] items-center gap-16 px-6">
        {/* Left */}
        <div className="w-full max-w-[420px]">

          <p className="text-sm tracking-[0.35em] text-[#9B7AC5]">
            CONTACT
          </p>

          <h2 className="mt-5 text-4xl lg:text-[52px] font-light leading-[1.3]">
            まずはお気軽に
            <br />
            ご相談ください
          </h2>

          <div className="mt-5 h-[4px] w-36 rounded-full bg-[#B793E8]" />

          <p className="mt-10 leading-9 text-gray-600">
            「何をお願いしたらいいか分からない」
            <br />
            そんな状態からでも大歓迎です！
            <br />
            <br />
          </p>
        </div>
        {/* Right */}
        <div className="w-full max-w-[600px]">
          <form
            onSubmit={handleSubmit}
            className="rounded-[36px] bg-white p-10 shadow-[0_20px_60px_rgba(155,122,197,0.12)]"
          >
            <div className="space-y-7">

              {/* Name */}
              <div>
                <label className="mb-3 block text-sm font-medium tracking-[0.15em] text-[#7E62A8]">
                  お名前
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="お名前"
                  className="w-full rounded-2xl border border-[#E7DDF7] bg-[#FCFBFE] px-6 py-4 outline-none transition focus:border-[#9B7AC5] focus:ring-4 focus:ring-[#EFE5FB]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-3 block text-sm font-medium tracking-[0.15em] text-[#7E62A8]">
                  メールアドレス
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="example@gmail.com"
                  className="w-full rounded-2xl border border-[#E7DDF7] bg-[#FCFBFE] px-6 py-4 outline-none transition focus:border-[#9B7AC5] focus:ring-4 focus:ring-[#EFE5FB]"
                />
              </div>
              {/* Message */}
              <div>
                <label className="mb-3 block text-sm font-medium tracking-[0.15em] text-[#7E62A8]">
                  ご相談内容
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  placeholder="ご相談内容をご入力ください。"
                  className="w-full resize-none rounded-2xl border border-[#E7DDF7] bg-[#FCFBFE] px-6 py-4 outline-none transition focus:border-[#9B7AC5] focus:ring-4 focus:ring-[#EFE5FB]"
                />
              </div>

              {/* Result Message */}
              {result && (
                <p className="text-center text-sm text-[#7E62A8]">
                  {result}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-[#9B7AC5] px-8 py-5 text-lg font-semibold text-white shadow-lg transition hover:bg-[#8B69BE] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "送信中..." : "✉ 送信する"}
              </button>

            </div>
          </form>
        </div>

      </div>
      {/* Background Glow */}
      <div className="absolute left-[10%] bottom-[18%] h-40 w-40 rounded-full bg-[#F3EBFD] opacity-80 blur-[70px]" />

      <div className="absolute right-[12%] top-[20%] h-28 w-28 rounded-full bg-[#F8F2FF] opacity-90 blur-[60px]" />
    </section>
  );
}