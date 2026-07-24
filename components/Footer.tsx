export default function Footer() {
  return (
    <footer className="bg-[#F7F3FC] py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-8 text-center">
        <h3 className="text-2xl font-bold text-[#9B7AC5]">
          chie
        </h3>

        <p className="mt-3 text-sm text-gray-500">
          伝えたいを、伝わるに。
        </p>

        <div className="mt-8 flex gap-8 text-sm text-gray-600">
          <a href="#about" className="transition hover:text-[#9B7AC5]">
            About
          </a>

          <a href="#service" className="transition hover:text-[#9B7AC5]">
            Service
          </a>

          <a href="#works" className="transition hover:text-[#9B7AC5]">
            Works
          </a>

          <a href="#contact" className="transition hover:text-[#9B7AC5]">
            Contact
          </a>
        </div>

        <p className="mt-10 text-xs text-gray-400">
          © 2026 chie. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
