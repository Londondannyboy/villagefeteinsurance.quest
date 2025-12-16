import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Village Fete Insurance Articles & Guides | Expert UK Advice 2025',
  description: 'Expert guides on village fete insurance, community event cover, costs, and UK legal requirements. Learn everything about protecting your community event.',
  alternates: {
    canonical: 'https://villagefeteinsurance.quest/articles',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Village Fete Insurance Articles & Guides
          </h1>
          <p className="text-xl text-slate-300">
            Expert advice on village fete insurance, community event coverage, costs, and UK legal requirements.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pillar Article */}
          <Link
            href="/articles/ultimate-guide-village-fete-insurance-uk"
            className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-2xl p-8 border border-green-500/50 hover:border-green-400 transition-all group"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                Featured Guide
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
              Ultimate Guide to Village Fete Insurance in the UK
            </h2>
            <p className="text-slate-300 mb-4">
              Complete 3,500-word guide covering everything from public liability requirements to cost breakdowns, legal considerations, and real-world case studies.
            </p>
            <div className="text-green-400 font-semibold flex items-center gap-2">
              Read Full Guide
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>

          {/* Article 2 */}
          <Link
            href="/articles/do-i-need-insurance-village-fete"
            className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all group"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-xs font-semibold rounded-full">
                Legal Requirements
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
              Do I Need Insurance for a Village Fete?
            </h2>
            <p className="text-slate-300 mb-4">
              UK legal requirements explained. Why 95% of venues require £5-10 million public liability coverage and the risks of going uninsured.
            </p>
            <div className="text-green-400 font-semibold flex items-center gap-2">
              Read Article
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>

          {/* Article 3 */}
          <Link
            href="/articles/how-much-does-village-fete-insurance-cost"
            className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 hover:border-green-500/50 transition-all group"
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-xs font-semibold rounded-full">
                Pricing Guide
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
              How Much Does Village Fete Insurance Cost?
            </h2>
            <p className="text-slate-300 mb-4">
              Complete 2025 UK price breakdown. Small events from £66, medium fetes from £132. Compare public liability, event cancellation, and comprehensive coverage costs.
            </p>
            <div className="text-green-400 font-semibold flex items-center gap-2">
              Read Article
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Coming Soon Section */}
        <section className="mt-16 pt-12 border-t border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-6">More Articles Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-slate-800/20 rounded-xl p-6 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-slate-400 mb-2">Church Fete Insurance Guide</h3>
              <p className="text-slate-500 text-sm">Coming soon</p>
            </div>
            <div className="bg-slate-800/20 rounded-xl p-6 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-slate-400 mb-2">School Fete Insurance Requirements</h3>
              <p className="text-slate-500 text-sm">Coming soon</p>
            </div>
            <div className="bg-slate-800/20 rounded-xl p-6 border border-slate-700/30">
              <h3 className="text-lg font-semibold text-slate-400 mb-2">Summer Fete Insurance Planning</h3>
              <p className="text-slate-500 text-sm">Coming soon</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-green-900/30 to-emerald-900/20 rounded-2xl p-8 border border-green-500/30">
          <h2 className="text-2xl font-bold text-white mb-4">Need Insurance for Your Village Fete?</h2>
          <p className="text-slate-300 mb-6">
            Get instant quotes from specialist UK providers. Compare prices and coverage options in minutes.
          </p>
          <Link href="/#calculator" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
            Get Free Quote
          </Link>
        </section>
      </div>
    </div>
  )
}
