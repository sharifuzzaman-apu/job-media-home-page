import HeroSearch from './HeroSearch';
import HeroStats from './HeroStats';

export default function HeroSection() {
  return (
    <section className="relative min-h-[550px] flex items-center justify-center bg-gray-100">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-100 to-slate-200" />

      <div className="relative z-10 container mx-auto px-[5.22vw] py-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-7">
            <h1 className="leading-tight font-bold text-gray-900 text-3xl md:text-5xl lg:text-6xl">
              Find Your <span className="text-[#f54c52]">Dream Job</span> Today
            </h1>
            <HeroSearch />
          </div>

          <div className="lg:pl-8">
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  );
}
