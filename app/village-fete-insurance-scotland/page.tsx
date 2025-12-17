import { Metadata } from 'next'
import Link from 'next/link'
import { QuoteCalculator } from '@/components/QuoteCalculator'

export const metadata: Metadata = {
  title: 'Village Fete Insurance Scotland 2025 | Community Event Cover from £66',
  description: 'Village fete insurance for Scotland. Public liability cover for church fetes, gala days, and community festivals across Scotland. From £66.',
  alternates: {
    canonical: 'https://villagefeteinsurance.quest/village-fete-insurance-scotland',
  },
  openGraph: {
    title: 'Village Fete Insurance Scotland 2025 | Community Event Cover from £66',
    description: 'Village fete insurance for Scotland. Public liability cover for church fetes, gala days, and community festivals.',
    url: 'https://villagefeteinsurance.quest/village-fete-insurance-scotland',
    siteName: 'Village Fete Insurance UK',
    type: 'article',
    locale: 'en_GB',
  },
}

export default function ScotlandPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-6">
            SCOTLAND SPECIALIST INSURANCE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Village Fete Insurance Scotland
          </h1>
          <p className="text-xl text-slate-300 mb-4">
            Specialist event insurance for Scottish gala days, church fetes, and community festivals
          </p>
          <p className="text-lg text-slate-400">
            Public liability cover from £66 • Accepted by Scottish venues • Highland games coverage
          </p>
        </div>
      </section>

      {/* Scotland-Specific Context */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Scottish Village Fete Insurance: What's Different</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
            <p className="text-slate-300 mb-4 leading-relaxed">
              Scotland has a unique community event tradition, from Highland games and gala days to kirkin' services and Burns Night celebrations. Whether you're organizing a church fete in Edinburgh, a gala day in Dundee, or a Highland games in the Highlands, Scottish venues have specific insurance requirements that reflect local traditions and regulations.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Scottish councils typically require <strong className="text-green-400">£5 million public liability insurance</strong>, with larger events requiring £10 million. Some Highland games and outdoor festivals may need additional coverage for traditional activities like caber tossing, hammer throwing, or pipe band competitions. Our recommended providers understand Scottish event culture.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-400 mb-3">Scottish Council Requirements</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>£5M public liability standard across Scotland</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>Certificate must name venue/council</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>Highland games may require specialist cover</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>Alcohol licensing follows Scottish law</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-3">Scottish Event Types</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    <span>Church fetes and kirkin' services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    <span>Gala days and community festivals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    <span>Highland games (traditional sports)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    <span>Burns Night and Hogmanay events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section id="calculator" className="py-8 px-4">
        <div className="max-w-4xl mx-auto mb-6">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Get Your Scotland Event Quote</h2>
          <p className="text-slate-400 text-center">Instant pricing for Scottish venues and gala days</p>
        </div>
        <QuoteCalculator />
      </section>

      {/* Scotland-Specific Pricing */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Typical Insurance Costs for Scottish Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="text-green-400 font-black text-3xl mb-2">£66-£82</div>
              <h3 className="text-lg font-bold text-white mb-3">Small Church Fetes</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Under 100 attendees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Church hall or kirk grounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>£5M public liability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Standard activities (stalls, games)</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="text-blue-400 font-black text-3xl mb-2">£132-£165</div>
              <h3 className="text-lg font-bold text-white mb-3">Gala Days</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>100-500 attendees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Community centers or parks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>£5-10M public liability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Entertainment and food vendors</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="text-purple-400 font-black text-3xl mb-2">£264-£396</div>
              <h3 className="text-lg font-bold text-white mb-3">Highland Games</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>500+ attendees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Traditional sports (caber, hammer)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>£10M public liability required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Pipe bands, Highland dancing</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-slate-400 mt-6 text-center">
            Scotland pricing is competitive. Weather insurance strongly recommended for outdoor events (£35 extra).
          </p>
        </div>
      </section>

      {/* Scottish Regions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Insurance Across Scottish Regions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-green-400 mb-3">Central Belt</h3>
              <p className="text-slate-300 text-sm mb-4">Edinburgh, Glasgow, Falkirk, Stirling</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Active church fete scene year-round</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>£5M standard for community events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Edinburgh Festival period needs advance booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>City center events may require £10M</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Highlands & Islands</h3>
              <p className="text-slate-300 text-sm mb-4">Inverness, Fort William, Skye, Orkney, Shetland</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Highland games and traditional events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Specialist cover for traditional sports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Weather insurance essential</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Remote location = plan well ahead</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-orange-400 mb-3">North East Scotland</h3>
              <p className="text-slate-300 text-sm mb-4">Aberdeen, Aberdeenshire, Moray</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Oil industry community events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Royal Deeside traditional fetes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Agricultural shows common</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Standard £5M coverage sufficient</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-3">South Scotland</h3>
              <p className="text-slate-300 text-sm mb-4">Dumfries & Galloway, Scottish Borders</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Border villages hold traditional gala days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Common Ridings and riding festivals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Agricultural and farming events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Competitive pricing for rural events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Recommendations */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Best Providers for Scottish Events</h2>
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 rounded-xl p-8 border border-green-500/30">
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our <Link href="/best-village-fete-insurance-providers" className="text-green-400 hover:text-green-300 underline font-semibold">recommended insurance providers</Link> all serve Scotland effectively. Here's what works best for Scottish events:
            </p>

            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">ProtectGroup - Best for Church Fetes</h3>
                <p className="text-slate-300 text-sm">Fast online quotes perfect for Scottish kirk fetes and gala days. £66-82 typical for small community events. Understood by Scottish venues.</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">One Sure - Best for Highland Games</h3>
                <p className="text-slate-300 text-sm">Specialist underwriters who understand traditional Scottish sports. Can provide bespoke cover for caber tossing, hammer throwing, and other Highland activities.</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">Simply Business - Best for Annual Policies</h3>
                <p className="text-slate-300 text-sm">Ideal for communities running multiple events across the year. Recognized by all Scottish councils. Compare multiple underwriters for competitive pricing.</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-green-500/20">
              <Link href="/best-village-fete-insurance-providers" className="text-green-400 hover:text-green-300 font-semibold">
                View Full Provider Comparison →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Scottish Village Fete Insurance FAQs</h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Is insurance different in Scotland than England?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                The insurance itself is the same (public liability, event cancellation), but Scottish events have unique considerations. Highland games need specialist coverage for traditional sports. Alcohol licensing follows Scottish law (different from England). Weather insurance is more important given Scotland's climate. Our recommended providers understand these Scottish-specific requirements and can accommodate them at standard rates.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do I need special insurance for Highland games?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, Highland games with traditional sports (caber toss, hammer throw, stone put) require insurance that specifically covers these activities. Standard village fete insurance often excludes "heavy athletic events." One Sure and TowerGate specialize in this type of coverage. Expect to pay £264-396 for a Highland games event depending on size and activities. Pipe band competitions and Highland dancing are typically covered under standard public liability.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Is insurance cheaper in Scotland than England?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, Scottish insurance is typically 5-10% cheaper than central London but comparable to other UK regions. A small church fete costing £85 in London might be £66-75 in Scotland. The main cost drivers are event size and activities, not location. However, remote Highland locations may have slightly higher premiums due to travel distances for assessors. Our calculator accounts for Scottish regional pricing.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Should I add weather insurance for Scottish events?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Strongly recommended for outdoor Scottish events. Scotland's weather is unpredictable, especially in Highland regions and islands. Weather cancellation insurance (£35 extra) covers financial losses if your event is cancelled due to rain, wind, or extreme weather. This is particularly important for summer gala days and Highland games. Some policies trigger if rainfall exceeds specific amounts measured at nearby weather stations.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-900/40 to-emerald-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Protect Your Scottish Community Event
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Get instant quotes for Scottish venues and Highland games. From £66 per event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#calculator"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-colors"
            >
              Get Scotland Quote
            </Link>
            <Link
              href="/best-village-fete-insurance-providers"
              className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-8 rounded-xl transition-colors"
            >
              Compare Providers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
