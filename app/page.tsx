"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";

export default function VideoPage() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Referensi untuk section download agar bisa di-scroll otomatis
  const downloadSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsUnlocked(true);
    }
  }, [timeLeft]);

  // Fungsi untuk scroll halus ke section timer
  const handlePlayClick = () => {
    downloadSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleDownload = () => {
    if (isUnlocked) {
      // Menggunakan Direct Link Adsterra Anda
      window.open("https://www.effectivegatecpm.com/rwkfbze90?key=140bc90506fdc8a6a42a559d4aefbd1d", "_blank");
    }
  };

  return (
    <div className="relative flex flex-col w-full overflow-x-hidden min-h-screen bg-background-light dark:bg-background-dark">
      {/* --- IKLAN 1: Social Bar / Pop-under (Script Pertama) --- */}
      <Script src="https://pl28889469.effectivegatecpm.com/a3/5e/51/a35e5183e7e062a3987a753667e66df3.js" strategy="afterInteractive" />

      <div className="layout-container flex h-full grow flex-col">
        {/* Navigation */}
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-primary/20 px-4 md:px-10 py-4 bg-background-light dark:bg-background-dark sticky top-0 z-50">
          <div className="flex items-center gap-4 text-primary">
            <span className="material-symbols-outlined text-3xl">movie_filter</span>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">StreamX</h2>
          </div>

          <div className="flex flex-1 justify-end gap-4 md:gap-8">
            <div className="hidden md:flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-slate-400 flex border-none bg-slate-200 dark:bg-primary/10 items-center justify-center pl-4 rounded-l-lg">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input
                  className="flex w-full min-w-0 flex-1 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-0 focus:ring-1 focus:ring-primary border-none bg-slate-200 dark:bg-primary/10 h-full placeholder:text-slate-500 px-4 rounded-l-none pl-2 text-base"
                  placeholder="Cari video..."
                />
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-primary/20 text-slate-700 dark:text-primary transition-colors">
                <span className="material-symbols-outlined">share</span>
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-200 dark:bg-primary/20 text-slate-700 dark:text-primary">
                <span className="material-symbols-outlined">more_vert</span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center">
          <div className="w-full max-w-5xl px-0 md:px-4 py-4 md:py-8 space-y-8">
            {/* Video Player Section */}
            <div onClick={handlePlayClick} className="relative group aspect-video w-full rounded-none md:rounded-xl overflow-hidden bg-slate-900 shadow-2xl shadow-primary/10 cursor-pointer">
              <div onClick={handlePlayClick} className="relative group aspect-video w-full rounded-none md:rounded-xl overflow-hidden bg-slate-900 shadow-2xl cursor-pointer">
                {/* 1. LAYER BACKGROUND (KHUSUS BURAM) */}
                <div className="absolute inset-0 bg-cover bg-center blur-xl scale-125" style={{ backgroundImage: "url('/thumbnail.jpg')" }}></div>

                {/* 2. LAYER OVERLAY GELAP (OPSIONAL) */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>

                {/* 3. LAYER KONTEN (TIDAK BURAM) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="relative flex shrink-0 items-center justify-center rounded-full w-20 h-20 bg-primary/90 text-white shadow-lg group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </button>
                </div>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-linear-to-t from-black/80 to-transparent">
                <div className="flex h-1.5 w-full items-center mb-3">
                  <div className="h-full w-1/3 rounded-full bg-primary relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-primary"></div>
                  </div>
                  <div className="h-full flex-1 rounded-full bg-slate-400/30"></div>
                </div>
                <div className="flex items-center justify-between text-white/90">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined">play_arrow</span>
                    <span className="material-symbols-outlined">volume_up</span>
                    <p className="text-xs font-medium tracking-wider">00:00 / 12:45</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="material-symbols-outlined">fullscreen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- ADS SECTION: 3 Iklan Berbeda --- */}
            <div className="px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                {/* IKLAN 2: Banner Native (Invoke Script) */}
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/20 min-h-[150px]">
                  <span className="text-[10px] font-bold text-primary uppercase mb-2">Recommended</span>
                  <div id="container-8f676b56a362c68c2c8c2fbda3497bce" className="w-full">
                    {/* Script Banner akan otomatis mengisi container ini */}
                    <Script src="https://pl28889487.effectivegatecpm.com/8f676b56a362c68c2c8c2fbda3497bce/invoke.js" strategy="lazyOnload" />
                  </div>
                </div>

                {/* IKLAN 3: Direct Link (Iklan Kedua Anda) */}
                <a
                  href="https://www.effectivegatecpm.com/u8dwrgdqn?key=db4989986213c83ff807ff443efadc45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/20 hover:border-primary transition-colors cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-lg bg-primary/20 shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">ads_click</span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Sponsored</span>
                    <h4 className="text-slate-900 dark:text-slate-100 font-bold text-sm truncate">Premium Access</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs truncate">Klik untuk konten eksklusif</p>
                  </div>
                </a>

                {/* IKLAN VARIASI: Direct Link (Iklan Kedua Anda - Duplikasi untuk Visual) */}
                <a
                  href="https://www.effectivegatecpm.com/u8dwrgdqn?key=db4989986213c83ff807ff443efadc45"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-primary/5 border border-slate-200 dark:border-primary/20 hover:border-primary transition-colors cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded-lg bg-slate-300 dark:bg-slate-700 shrink-0 flex items-center justify-center">
                    <span className="material-symbols-outlined">download</span>
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Sponsored</span>
                    <h4 className="text-slate-900 dark:text-slate-100 font-bold text-sm truncate">Fast Download</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs truncate">Server kecepatan tinggi</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Locked Link Section */}
            <div ref={downloadSectionRef} className="px-4 pb-12 transition-all duration-500">
              <div className="relative w-full p-8 md:p-12 rounded-2xl bg-slate-200 dark:bg-primary/10 border-2 border-dashed border-slate-300 dark:border-primary/30 flex flex-col items-center justify-center text-center overflow-hidden">
                <div className="absolute -top-12 -right-12 size-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-12 -left-12 size-40 bg-primary/10 rounded-full blur-3xl"></div>

                <div className="relative z-10 space-y-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <span className={`material-symbols-outlined text-primary text-3xl ${!isUnlocked && "animate-pulse"}`}>{isUnlocked ? "lock_open" : "lock_clock"}</span>
                    </div>
                    <h3 className="text-slate-900 dark:text-slate-100 text-2xl font-bold leading-tight">{isUnlocked ? "Link Sudah Siap!" : "Link Video Terkunci"}</h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 max-w-sm">
                      {isUnlocked ? "Silahkan klik tombol di bawah untuk menonton atau mendownload." : "Mohon tunggu sebentar, sistem sedang memverifikasi koneksi Anda."}
                    </p>
                  </div>

                  {!isUnlocked && (
                    <div className="flex items-center justify-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white dark:bg-background-dark border border-slate-200 dark:border-primary/40 flex items-center justify-center shadow-lg">
                          <span className="text-3xl md:text-4xl font-black text-primary">{timeLeft}</span>
                        </div>
                        <span className="text-[10px] mt-2 font-bold uppercase tracking-widest text-slate-500">Detik</span>
                      </div>
                    </div>
                  )}

                  {!isUnlocked && (
                    <div className="w-full max-w-xs h-2 bg-slate-300 dark:bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-primary transition-all duration-1000 ease-linear" style={{ width: `${(timeLeft / 60) * 100}%` }}></div>
                    </div>
                  )}

                  <button
                    onClick={handleDownload}
                    disabled={!isUnlocked}
                    className={`flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-xl transition-all w-full md:w-auto
                      ${isUnlocked ? "bg-primary text-white hover:scale-105 shadow-xl shadow-primary/20 cursor-pointer" : "bg-slate-400 dark:bg-slate-700 text-white opacity-80 cursor-not-allowed"}`}
                  >
                    <span className="material-symbols-outlined text-xl">{isUnlocked ? "download" : "lock"}</span>
                    {isUnlocked ? "Klik untuk Menonton Sekarang" : `Tunggu ${timeLeft} detik untuk link video...`}
                  </button>

                  <p className="text-xs text-slate-400 dark:text-slate-500 italic">Harap jangan menutup halaman ini agar proses verifikasi berjalan lancar.</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="mt-auto py-8 border-t border-slate-200 dark:border-primary/10 text-center text-slate-500 dark:text-slate-400">
          <p className="text-sm">© 2026 StreamX Entertainment. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
