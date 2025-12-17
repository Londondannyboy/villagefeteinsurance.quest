import { Metadata } from 'next'
import Link from 'next/link'
import { QuoteCalculator } from '@/components/QuoteCalculator'

export const metadata: Metadata = {
  title: 'Village Fete Insurance Manchester 2025 | Community Event Cover from £66',
  description: 'Village fete insurance for Manchester and Greater Manchester events. Public liability cover for church fetes, community festivals, and charity fundraisers. From £66.',
  alternates: {
    canonical: 'https://villagefeteinsurance.quest/village-fete-insurance-manchester',
  },
  openGraph: {
    title: 'Village Fete Insurance Manchester 2025 | Community Event Cover from £66',
    description: 'Village fete insurance for Manchester and Greater Manchester events. Public liability cover for church fetes and community festivals.',
    url: 'https://villagefeteinsurance.quest/village-fete-insurance-manchester',
    siteName: 'Village Fete Insurance UK',
    type: 'article',
    locale: 'en_GB',
  },
}

export default function ManchesterPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-6">
            MANCHESTER & GREATER MANCHESTER
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Village Fete Insurance Manchester
          </h1>
          <p className="text-xl text-slate-300 mb-4">
            Specialist event insurance for community fetes across Manchester and Greater Manchester
          </p>
          <p className="text-lg text-slate-400">
            Public liability cover from £66 • Accepted by Manchester venues • Same-day certificates
          </p>
        </div>
      </section>

      {/* Manchester-Specific Context */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Manchester Village Fete Insurance: Local Requirements</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
            <p className="text-slate-300 mb-4 leading-relaxed">
              Manchester and Greater Manchester have a vibrant community event scene, from church fetes in Salford to charity fundraisers in Stockport, and community festivals in Trafford. The region's strong community spirit means regular village fetes, school fairs, and parish celebrations throughout the year.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Manchester City Council and the ten Greater Manchester boroughs typically require <strong className="text-green-400">£5 million public liability insurance</strong> for community events, with some larger venues requesting £10 million. Our recommended providers understand North West requirements and offer competitive rates for Manchester events.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-400 mb-3">Greater Manchester Council Requirements</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>£5M public liability standard across GM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>Certificate naming council/venue required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>14-day advance notice typical</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>Event safety assessment may be required</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-3">Popular Manchester Venues</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    <span>Church halls and parish grounds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    <span>Community centers and town halls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    <span>Parks (Heaton Park, Platt Fields)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    <span>School grounds for PTA events</span>
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
          <h2 className="text-2xl font-bold text-white text-center mb-4">Get Your Manchester Event Quote</h2>
          <p className="text-slate-400 text-center">Instant pricing for Greater Manchester venues</p>
        </div>
        <QuoteCalculator />
      </section>

      {/* Manchester-Specific Pricing */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Typical Insurance Costs for Manchester Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="text-green-400 font-black text-3xl mb-2">£66-£88</div>
              <h3 className="text-lg font-bold text-white mb-3">Small Church Fetes</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Under 100 attendees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">•</span>
                  <span>Church hall or parish grounds</span>
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
              <div className="text-blue-400 font-black text-3xl mb-2">£132-£176</div>
              <h3 className="text-lg font-bold text-white mb-3">Community Festivals</h3>
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
                  <span>Food vendors and entertainment</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="text-purple-400 font-black text-3xl mb-2">£264-£352</div>
              <h3 className="text-lg font-bold text-white mb-3">Large Park Events</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>500+ attendees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Major parks (Heaton, Platt Fields)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>£10M public liability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Bouncy castles, alcohol, rides</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-slate-400 mt-6 text-center">
            Manchester pricing is competitive compared to London. Weather insurance recommended for outdoor events (£35 extra).
          </p>
        </div>
      </section>

      {/* Greater Manchester Borough Coverage */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Insurance for Greater Manchester Boroughs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-green-400 mb-3">Manchester City</h3>
              <p className="text-slate-300 text-sm mb-4">City center, Northern Quarter, Ancoats, Didsbury</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Active community fete scene</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>£5M standard for most venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>City center events may require £10M</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>14-day certificate submission typical</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Salford, Trafford & Stretford</h3>
              <p className="text-slate-300 text-sm mb-4">Salford Quays, Old Trafford, Sale, Altrincham</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Strong church community events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>£5M public liability sufficient</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Local parks popular for summer fetes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Venue-specific insurance forms</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-orange-400 mb-3">Stockport, Tameside & Oldham</h3>
              <p className="text-slate-300 text-sm mb-4">Stockport town, Ashton-under-Lyne, Oldham</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Traditional village fete communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Competitive pricing for smaller events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>School and church events frequent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>£5M standard requirement</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Bolton, Bury & Rochdale</h3>
              <p className="text-slate-300 text-sm mb-4">Bolton town, Bury, Rochdale, Middleton</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Active charity fundraising scene</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Community cohesion events supported</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Rural village fetes common</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Standard £5M coverage works</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Recommendations */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Best Providers for Manchester Events</h2>
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 rounded-xl p-8 border border-green-500/30">
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our <Link href="/best-village-fete-insurance-providers" className="text-green-400 hover:text-green-300 underline font-semibold">recommended insurance providers</Link> all serve Greater Manchester effectively. Here's what works best for the region:
            </p>

            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">ProtectGroup - Best for Quick Quotes</h3>
                <p className="text-slate-300 text-sm">Fast online quotes perfect for Manchester's community events. £66-88 typical for small church fetes across Greater Manchester. Same-day certificates available.</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">Simply Business - Best for Annual Policies</h3>
                <p className="text-slate-300 text-sm">Ideal if you run regular events across the year. Multiple underwriters ensure competitive pricing for Manchester venues. Recognized by all GM councils.</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">One Sure - Best for Unusual Activities</h3>
                <p className="text-slate-300 text-sm">Perfect for traditional Northern fetes with activities like dog shows, vintage displays, or livestock. Flexible underwriters understand regional events.</p>
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
          <h2 className="text-2xl font-bold text-white mb-8">Manchester Village Fete Insurance FAQs</h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do I need different insurance for each Greater Manchester borough?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                No, one insurance policy covers events across all Greater Manchester boroughs. However, each council may have different certificate submission requirements. For example, Manchester City Council may want 14 days notice while Stockport might accept 7 days. The insurance itself doesn't change - just ensure your certificate names the specific venue or council as requested.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Is insurance cheaper in Manchester than London?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, Manchester insurance is typically 10-15% cheaper than London for similar events. A small church fete costing £85 in central London might be £66-75 in Manchester. This reflects lower footfall and venue hire costs in the North West. However, the difference isn't huge - the main cost drivers are event size and coverage level, not just location. Our calculator accounts for regional pricing differences.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do Manchester parks require higher insurance coverage?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Major parks like Heaton Park or Platt Fields Park typically require £10 million public liability for larger events (500+ attendees). Smaller neighborhood parks may accept £5 million for community fetes under 200 people. Always check with the parks team when applying for your event permit - they'll specify the exact requirement. Add weather cancellation insurance for outdoor events (typically £35 extra).
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Can I get insurance for a fete happening tomorrow in Manchester?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, ProtectGroup and Simply Business offer same-day insurance certificates for Manchester events. You can get covered within an hour of applying online. However, most Manchester venues require you to submit your certificate 7-14 days in advance for their records and safety assessments. While emergency cover is available, plan ahead to meet venue deadlines. Some Greater Manchester councils have strict 21-day advance notice rules for park events.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-900/40 to-emerald-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Protect Your Manchester Community Event
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Get instant quotes for Greater Manchester venues. From £66 per event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#calculator"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-colors"
            >
              Get Manchester Quote
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
