export default function GrowthForgeLandingPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(124,58,237,0.22),_transparent_35%),radial-gradient(circle_at_left,_rgba(167,139,250,0.16),_transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
                AI-Powered SEO Systems for Modern Brands
              </div>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Turn Your Website Into a <span className="text-violet-400">Traffic Machine</span> with AI
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                GrowthForge AI helps businesses grow through intelligent SEO audits, keyword strategy, optimized content, and automated internal linking systems that turn organic search into consistent revenue.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="rounded-2xl bg-violet-600 px-6 py-3 text-base font-semibold shadow-lg shadow-violet-900/30 transition hover:bg-violet-500">
                  Get Free SEO Audit
                </button>
                <button className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
                  See Demo
                </button>
              </div>
              <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/60">
                <span>SEO Audits</span>
                <span>Keyword Intelligence</span>
                <span>AI Content</span>
                <span>Internal Linking</span>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <div className="rounded-[24px] border border-violet-400/20 bg-[#151526] p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-violet-300">Growth Snapshot</p>
                      <h3 className="mt-1 text-2xl font-semibold">Organic Performance</h3>
                    </div>
                    <div className="rounded-xl bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-300">
                      +128% Demo Growth
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/60">Keywords Tracked</p>
                      <p className="mt-2 text-3xl font-bold">312</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/60">SEO Gaps Found</p>
                      <p className="mt-2 text-3xl font-bold">47</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-white/60">Pages Optimized</p>
                      <p className="mt-2 text-3xl font-bold">26</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-transparent p-5">
                    <div className="mb-3 flex items-center justify-between text-sm text-white/60">
                      <span>Traffic Potential</span>
                      <span>90-Day Projection</span>
                    </div>
                    <div className="h-40 rounded-xl bg-[#0F0F1A] p-4">
                      <div className="flex h-full items-end gap-3">
                        <div className="h-[24%] w-full rounded-t-lg bg-white/15" />
                        <div className="h-[38%] w-full rounded-t-lg bg-white/20" />
                        <div className="h-[52%] w-full rounded-t-lg bg-violet-300/50" />
                        <div className="h-[71%] w-full rounded-t-lg bg-violet-400/60" />
                        <div className="h-[90%] w-full rounded-t-lg bg-violet-500/80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">The Problem</p>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Most websites publish content, but very few build a search growth system.</h2>
          <p className="mt-5 text-lg text-white/65">
            Businesses often miss rankings because their content lacks keyword direction, pages are poorly linked, and technical SEO issues remain hidden. GrowthForge AI fixes that with a repeatable, AI-assisted optimization engine.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Low Visibility',
              desc: 'Your ideal customers search for solutions every day, but your pages never appear high enough to get clicks.',
            },
            {
              title: 'Wasted Content',
              desc: 'Businesses publish blogs and web copy without a ranking strategy, leading to effort with little return.',
            },
            {
              title: 'No SEO System',
              desc: 'Without audits, linking structure, and performance tracking, SEO becomes guesswork instead of growth.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">The Solution</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">An AI SEO workflow built for measurable organic growth</h2>
              <p className="mt-5 text-lg text-white/65">
                We combine AI tooling with strategic SEO execution to identify high-value opportunities, produce optimized content faster, and improve the structure of your site for stronger rankings.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'AI-powered SEO audits',
                'Keyword gap analysis',
                'Content generation workflows',
                'Internal linking optimization',
                'Competitor visibility review',
                'Monthly growth reporting',
              ].map((feature) => (
                <div key={feature} className="rounded-2xl border border-violet-400/15 bg-violet-500/10 p-5 text-white/85">
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Pricing</p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Choose the growth plan that fits your stage</h2>
          </div>
          <p className="max-w-xl text-white/65">
            Start with an audit or move into a fully managed SEO content system. Each plan is productized for clarity, speed, and measurable outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              name: 'Starter',
              price: '₹15K/mo',
              points: ['SEO audit report', 'Keyword opportunity list', '4 optimized blogs/month', 'Basic recommendations'],
            },
            {
              name: 'Growth',
              price: '₹45K/mo',
              featured: true,
              points: ['Everything in Starter', '8–12 optimized blogs', 'Internal linking strategy', 'Monthly analytics dashboard'],
            },
            {
              name: 'Premium',
              price: '₹85K+/mo',
              points: ['Full SEO growth system', 'Competitor monitoring', 'Conversion-focused content', 'Custom reporting & execution'],
            },
          ].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-7 shadow-xl ${
                plan.featured
                  ? 'border-violet-400/40 bg-gradient-to-b from-violet-500/15 to-white/5 shadow-violet-900/20'
                  : 'border-white/10 bg-white/5 shadow-black/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">{plan.name}</h3>
                {plan.featured && (
                  <span className="rounded-full bg-violet-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="mt-4 text-4xl font-bold">{plan.price}</p>
              <div className="mt-6 space-y-3 text-white/70">
                {plan.points.map((point) => (
                  <div key={point} className="rounded-xl border border-white/10 bg-black/10 px-4 py-3">
                    {point}
                  </div>
                ))}
              </div>
              <button className="mt-8 w-full rounded-2xl bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#121222]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Why GrowthForge AI</p>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Built like an agency. Delivered like a system.</h2>
              <p className="mt-5 text-lg text-white/65">
                Instead of offering random SEO tasks, GrowthForge AI turns strategy, content, and site optimization into a unified workflow that saves time and improves execution quality.
              </p>
            </div>
            <div className="grid gap-5">
              {[
                { metric: '30–50%', label: 'Potential traffic lift from focused optimization workflows' },
                { metric: '2x Faster', label: 'Content production using AI-assisted research and drafting' },
                { metric: 'Clear ROI', label: 'Structured reporting and actionable monthly recommendations' },
              ].map((item) => (
                <div key={item.metric} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="text-3xl font-bold text-violet-300">{item.metric}</div>
                  <div className="mt-2 text-white/65">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Call to Action</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-5xl">Get Your Free AI SEO Audit Today</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/65">
          We’ll review your website, identify ranking gaps, and show you where AI-driven SEO can unlock your next wave of growth.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-2xl bg-violet-600 px-7 py-4 text-base font-semibold shadow-lg shadow-violet-900/30 transition hover:bg-violet-500">
            Book Free Audit
          </button>
          <button className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            View Services
          </button>
        </div>
      </section>
    </div>
  );
}

