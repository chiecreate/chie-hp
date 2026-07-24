"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const works = [
  {
    category: "飲食店",
    title: "行ってみたい・食べてみたいを伝える",
    description:
      "調理シーンや魅力が伝わるよう、テンポ感とシズル感を意識して制作。",
    video: "/videos/salon.mov",
  },
  {
    category: "サロンや店舗",
    title: "サービスの魅力を伝える",
    description:
      "サロンの魅力や施術の流れが伝わるよう、ストーリー性を意識して制作。",
    video: "/videos/ramen.mov",
  },
  {
    category: "家族向け施設",
    title: "楽しむ時間を伝える",
    description:
      "楽しさや施設の魅力が自然と伝わるよう、情報を整理して構成・編集。",
    video: "/videos/family.mov",
  },
  {
    category: "カフェ",
    title: "居心地のよさを伝える",
    description:
      "空間や料理の魅力がしっかり伝わるよう、テンポや色味も工夫して制作。",
    video: "/videos/cafe.mov",
  },
  {
    category: "地域PR",
    title: "まちの魅力を伝える",
    description:
      "まちや人の温かさが伝わるような制作。",
    video: "/videos/local.mov",
  },
  {
    category: "ストーリーリール",
    title: "伝えたい想い",
    description:
      "伝えたい想いを世界観や人柄とマッチさせる制作。",
    video: "/videos/story.mov",
  },
];

export default function Works() {
  

  return (
    <section
      id="works"
      className="relative overflow-hidden bg-[#FCFAFF] py-28"
    >
      {/* Background */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#EFE2FB] opacity-60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#F5EDFC] opacity-70 blur-3xl" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-[700px] text-center">
          <p className="text-[15px] font-medium uppercase tracking-[0.35em] text-[#9B7AC5]">
            WORKS
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            制作実績
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-24 rounded-full bg-[#C7A8F2]" />

          <p className="mt-8 text-[18px] leading-9 text-gray-600">
            想いや魅力が伝わるショート動画を、
            <br className="hidden sm:block" />
            一つひとつ丁寧に制作しています。
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-8"

        >
          {works.map((work) => (
            <SwiperSlide key={work.title}>
              <article className="group overflow-hidden rounded-[32px] border border-[#EFE7FA] bg-white shadow-[0_18px_45px_rgba(155,122,197,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(155,122,197,0.15)]">

                <div className="relative overflow-hidden">
                  <video
                    src={work.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                <div className="p-8">

                  <span className="inline-flex rounded-full bg-[#F3EBFD] px-4 py-2 text-sm font-medium text-[#9B7AC5]">
                    {work.category}
                  </span>

                  <h3 className="mt-6 text-[30px] font-bold leading-tight text-gray-900">
                    {work.title}
                  </h3>

                  <p className="mt-5 text-[17px] leading-8 text-gray-600">
                    {work.description}
                  </p>

                  <div className="mt-8 h-[3px] w-16 rounded-full bg-[#C7A8F2] transition-all duration-300 group-hover:w-24" />

                </div>

              </article>
            </SwiperSlide>
          ))}
        </Swiper>

       <div className="mt-12 flex justify-center">
  <div className="swiper-pagination !relative !bottom-0 !w-auto"></div>
</div>

      </div>

      {/* Bottom Decoration */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-[#F8F2FF] to-transparent" />
      <style jsx global>{`
        /* Swiperのデフォルト矢印は非表示 */
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }

        /* ページネーション */
        .swiper-pagination {
          position: relative !important;
          margin-top: 28px; /* お好きな高さに調整 */
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          margin: 0 !important;
          background: #d8c2f3;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 9999px;

          background: #9b7ac5;
        }
      `}</style>

      {/* Accent */}
      <div className="absolute left-[10%] top-[18%] h-3 w-3 rounded-full bg-[#C7A8F2]" />
      <div className="absolute right-[12%] top-[22%] h-2 w-2 rounded-full bg-[#D8C2F3]" />
      <div className="absolute left-[18%] bottom-[14%] h-4 w-4 rounded-full bg-[#E7D8FA]" />
    </section>
  );
}