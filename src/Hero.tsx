const TAGLINE = "Building AI solutions — one tool, one workflow, one automation at a time";

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#12351d] text-[#f4f0df]">
      <div className="absolute left-4 top-5 z-10 text-[10px] font-light uppercase tracking-[0.28em] text-[#d9dfc7]/70 sm:left-8 sm:top-8">
        Tushar
      </div>

      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 px-6 py-10 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-16">
        <div className="relative min-h-[360px] lg:min-h-screen">
          <div className="absolute bottom-12 left-0 w-[min(72vw,18rem)] border border-[#e7dfc8]/20 bg-[#e9e1cf] p-3 shadow-2xl shadow-black/35 sm:bottom-16 sm:left-4 lg:bottom-20 lg:left-0">
            <div className="aspect-[4/5] overflow-hidden bg-[#cfc6b3]">
              <div className="relative h-full w-full bg-[radial-gradient(circle_at_48%_30%,#d8c3ad_0_12%,transparent_13%),radial-gradient(circle_at_50%_43%,#221914_0_10%,transparent_11%),linear-gradient(145deg,#8f765f,#ded2bd_52%,#7f8a6e)]">
                <div className="absolute bottom-0 left-1/2 h-[48%] w-[58%] -translate-x-1/2 rounded-t-full bg-[#24301d]" />
                <div className="absolute left-[30%] top-[24%] h-[30%] w-[42%] rounded-[50%_50%_44%_44%] bg-[#1d1714]" />
                <div className="absolute left-[43%] top-[36%] h-[20%] w-[18%] rounded-full bg-[#d4aa8a]" />
                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-start justify-end pt-4 sm:pt-10 lg:pt-[7.5rem]">
          <div className="max-w-[34rem] lg:max-w-[30rem]">
            <p className="mb-5 font-serif text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.82] tracking-[-0.06em] text-[#fbf5df]">
              Tushar
            </p>

            <h1 className="font-serif text-[clamp(2rem,4vw,4.35rem)] font-normal leading-[0.98] tracking-[-0.055em] text-[#f4f0df]">
              {TAGLINE}
            </h1>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#f4f0df] bg-[#f4f0df] px-7 text-sm font-medium tracking-[0.02em] text-[#12351d] transition hover:-translate-y-0.5 hover:bg-transparent hover:text-[#f4f0df] focus:outline-none focus:ring-2 focus:ring-[#f4f0df] focus:ring-offset-2 focus:ring-offset-[#12351d]"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#f4f0df]/65 px-7 text-sm font-medium tracking-[0.02em] text-[#f4f0df] transition hover:-translate-y-0.5 hover:border-[#f4f0df] hover:bg-[#f4f0df]/10 focus:outline-none focus:ring-2 focus:ring-[#f4f0df] focus:ring-offset-2 focus:ring-offset-[#12351d]"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 right-8 h-40 w-40 opacity-20 sm:h-56 sm:w-56">
        <div className="absolute bottom-0 left-1/2 h-full w-px -translate-x-1/2 bg-[#0b2413]" />
        <div className="absolute bottom-12 left-1/2 h-24 w-14 -translate-x-full rotate-[-34deg] rounded-full bg-[#0b2413]" />
        <div className="absolute bottom-20 left-1/2 h-28 w-16 rotate-[32deg] rounded-full bg-[#0b2413]" />
        <div className="absolute bottom-2 left-1/2 h-20 w-12 -translate-x-full rotate-[-18deg] rounded-full bg-[#0b2413]" />
      </div>
    </section>
  );
}
