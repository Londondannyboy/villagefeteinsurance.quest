import { Metadata } from 'next'
import Link from 'next/link'
import { QuoteCalculator } from '@/components/QuoteCalculator'

export const metadata: Metadata = {
  title: 'Village Fete Insurance London 2025 | Community Event Cover from £66',
  description: 'Village fete insurance for London events. Public liability cover for church fetes, community festivals, and charity fundraisers across Greater London. From £66.',
  alternates: {
    canonical: 'https://villagefeteinsurance.quest/village-fete-insurance-london',
  },
  openGraph: {
    title: 'Village Fete Insurance London 2025 | Community Event Cover from £66',
    description: 'Village fete insurance for London events. Public liability cover for church fetes, community festivals, and charity fundraisers.',
    url: 'https://villagefeteinsurance.quest/village-fete-insurance-london',
    siteName: 'Village Fete Insurance UK',
    type: 'article',
    locale: 'en_GB',
  },
}

export default function LondonPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-6">
            LONDON SPECIALIST INSURANCE
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Village Fete Insurance London
          </h1>
          <p className="text-xl text-slate-300 mb-4">
            Specialist event insurance for community fetes and festivals across Greater London
          </p>
          <p className="text-lg text-slate-400">
            Public liability cover from £66 • Same-day certificates • Accepted by London venues
          </p>
        </div>
      </section>

      {/* London-Specific Context */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">London Village Fete Insurance: What You Need to Know</h2>
          <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">
            <p className="text-slate-300 mb-4 leading-relaxed">
              Organizing a community event in London comes with unique considerations. Whether you're planning a church fete in Islington, a community festival in Wandsworth, or a charity fundraiser in Greenwich, London venues have specific insurance requirements that reflect the capital's higher footfall and public liability risks.
            </p>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Most London borough councils, church halls, and community centers require a minimum of <strong className="text-green-400">£5 million public liability insurance</strong>, with many requesting £10 million for larger events. Our recommended providers understand London's unique landscape and can accommodate these requirements at competitive rates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-400 mb-3">London Borough Requirements</h3>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>Public liability: £5-10M typically required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>Certificate must name the venue/council</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>Proof required 7-14 days before event</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 flex-shrink-0">✓</span>
                    <span>Alcohol liability if bar/beer tent present</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-400 mb-3">Popular London Venues</h3>
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
                    <span>London parks (council permits required)</span>
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
          <h2 className="text-2xl font-bold text-white text-center mb-4">Get Your London Event Quote</h2>
          <p className="text-slate-400 text-center">Instant pricing based on London venue requirements</p>
        </div>
        <QuoteCalculator />
      </section>

      {/* London-Specific Pricing */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Typical Insurance Costs for London Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="text-green-400 font-black text-3xl mb-2">£66-£95</div>
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
              <div className="text-blue-400 font-black text-3xl mb-2">£132-£198</div>
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
                  <span>£10M public liability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">•</span>
                  <span>Food vendors and entertainment</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <div className="text-purple-400 font-black text-3xl mb-2">£264-£396</div>
              <h3 className="text-lg font-bold text-white mb-3">Large Park Events</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>500+ attendees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>London parks (council permit)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>£10M public liability required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">•</span>
                  <span>Bouncy castles, alcohol sales</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-sm text-slate-400 mt-6 text-center">
            London pricing reflects higher venue requirements and footfall. Add 20-30% for events with alcohol sales or bouncy castles.
          </p>
        </div>
      </section>

      {/* London Borough-Specific Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Insurance for London Boroughs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-green-400 mb-3">Central London</h3>
              <p className="text-slate-300 text-sm mb-4">Westminster, Camden, Islington, Kensington & Chelsea</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Higher footfall = £10M liability often required</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Church fetes common in parish grounds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Strict council permitting for public spaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>Certificate required 14 days advance</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-blue-400 mb-3">South London</h3>
              <p className="text-slate-300 text-sm mb-4">Wandsworth, Lambeth, Southwark, Greenwich, Lewisham</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Mix of community centers and parks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>£5M typically sufficient for smaller events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Growing community festival scene</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Borough-specific insurance forms</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-orange-400 mb-3">North London</h3>
              <p className="text-slate-300 text-sm mb-4">Haringey, Barnet, Enfield, Hackney, Islington</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Active church and community event scene</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Hampstead Heath and park events popular</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Schools and PTAs hold regular fetes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>£5-10M depending on venue size</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-purple-400 mb-3">West & East London</h3>
              <p className="text-slate-300 text-sm mb-4">Ealing, Brent, Hounslow, Tower Hamlets, Newham</p>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Diverse community celebrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Multi-cultural festival requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Community cohesion events supported</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Standard £5M for most venues</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Recommendations */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Best Providers for London Events</h2>
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 rounded-xl p-8 border border-green-500/30">
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our <Link href="/best-village-fete-insurance-providers" className="text-green-400 hover:text-green-300 underline font-semibold">recommended insurance providers</Link> all serve London events effectively, but here's what works best for the capital:
            </p>

            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">ProtectGroup - Best for Church Fetes</h3>
                <p className="text-slate-300 text-sm">Fast online quotes, same-day certificates, understood by London church venues. £66-95 typical for small church fetes in Greater London.</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">Simply Business - Best for Council Events</h3>
                <p className="text-slate-300 text-sm">Recognized brand name that London borough councils trust. Multiple underwriters ensure competitive pricing for park and community center events.</p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                <h3 className="text-lg font-bold text-white mb-2">Hiscox - Best for Large Festivals</h3>
                <p className="text-slate-300 text-sm">£10M public liability standard, ideal for 500+ attendee events in London parks. Premium service matches London's requirements.</p>
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
          <h2 className="text-2xl font-bold text-white mb-8">London Village Fete Insurance FAQs</h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do London borough councils require higher insurance coverage?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, London councils typically require £5-10 million public liability insurance, with larger events (500+ attendees) or events in prominent parks often requiring £10 million. This reflects London's higher footfall and public liability risks. Central London boroughs (Westminster, Camden, Kensington) are more likely to mandate £10M coverage. Always check your specific venue's requirements when booking.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Can I get same-day insurance for a London event?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, ProtectGroup and Simply Business both offer same-day certificates for London events. However, most London venues require insurance certificates 7-14 days before your event date for their records. While you can technically get covered last-minute, plan ahead to meet venue deadlines. Some London borough councils require 21 days notice for park events.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Is insurance more expensive for London events?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                London insurance costs are typically 15-25% higher than other UK regions, reflecting higher footfall, venue hire costs, and liability risks in the capital. However, the difference is modest: a church fete costing £66 elsewhere might be £75-85 in central London. The main cost driver is the required coverage level (£10M vs £5M), not just the location. Our calculator accounts for London-specific pricing.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do I need special insurance for London park events?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                London park events require standard public liability insurance (typically £10M for parks) but you should add weather cancellation insurance if your event is outdoors. Many London parks also require you to name the specific borough council as an "interested party" on the certificate. Our recommended providers can accommodate this at no extra cost - just mention it when getting your quote. Royal Parks (Hyde Park, Regent's Park) have additional requirements.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-900/40 to-emerald-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Protect Your London Community Event
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Get instant quotes tailored to London venue requirements. From £66 per event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#calculator"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-colors"
            >
              Get London Quote
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
