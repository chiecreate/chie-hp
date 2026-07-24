import Link from "next/link";

const navItems = [
  { label: "ホーム", href: "#home" },
  { label: "サービス", href: "#service" },
  { label: "制作実績", href: "#works" },
  { label: "私について", href: "#about" },
  { label: "制作の流れ", href: "#flow" },
  { label: "よくある質問", href: "#faq" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/30">
      <div className="mx-auto flex h-28 max-w-[1200px] items-center justify-between px-8">
        {/* ロゴ */}
        <Link href="/" className="flex flex-col">
          <span className="font-sans text-[52px] font-bold leading-none tracking-[-0.04em] text-[#9B7AC5]">
            chie
          </span>
          <span className="mt-1 text-[11px] tracking-[0.28em] text-gray-600">
            ショート動画クリエイター
          </span>
        </Link>

        {/* ナビゲーション */}
        <nav className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium text-gray-700 transition-all duration-200 hover:text-[#9B7AC5]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* お問い合わせボタン */}
        <Link
          href="#contact"
          className="hidden lg:inline-flex items-center rounded-full bg-[#9B7AC5] px-8 py-3 text-[14px] font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8A68B6] hover:shadow-md"
        >
          まずは相談してみる
        </Link>
      </div>
    </header>
  );
}
