import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How Much Does Village Fete Insurance Cost? 2025 UK Price Guide',
  description: 'Complete price breakdown for village fete insurance UK. Small events from £66, medium fetes from £132. Compare costs for public liability, event cancellation, and comprehensive cover.',
  keywords: ['village fete insurance cost', 'how much village fete insurance', 'fete insurance prices uk', 'event insurance cost'],
  alternates: {
    canonical: 'https://villagefeteinsurance.quest/articles/how-much-does-village-fete-insurance-cost',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <article className="max-w-4xl mx-auto">
        <Link href="/" className="text-green-400 hover:text-green-300 text-sm mb-8 inline-block">
          ← Back to Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How Much Does Village Fete Insurance Cost?
          </h1>
          <p className="text-xl text-slate-300">
            Complete 2025 UK price guide including public liability, event cancellation, and comprehensive coverage costs for small, medium, and large community events.
          </p>
        </header>

        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 mb-12 rounded-r-xl">
          <h2 className="text-xl font-bold text-white mb-3">Quick Price Guide</h2>
          <ul className="space-y-2 text-slate-300">
            <li><strong>Small Village Fete (under 100 people):</strong> £66-£85 public liability only, £95-£120 with cancellation</li>
            <li><strong>Medium Community Event (100-500 people):</strong> £132-£165 public liability only, £190-£240 with cancellation</li>
            <li><strong>Large Summer Fete (500+ people):</strong> £264-£336 public liability only, £380-£475 with cancellation</li>
          </ul>
        </div>

        <div className="prose prose-invert prose-green max-w-none">
          <h2 className="text-3xl font-bold text-white mb-6">Detailed Price Breakdown</h2>

          <p className="text-slate-300 mb-6">
            Village fete insurance costs depend on several factors: event size, activities included, coverage level, and optional extras. Here&apos;s what you can expect to pay in 2025.
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full bg-slate-800/50 rounded-xl overflow-hidden">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-4 text-white">Event Size</th>
                  <th className="text-left p-4 text-white">Attendance</th>
                  <th className="text-left p-4 text-white">Public Liability</th>
                  <th className="text-left p-4 text-white">+ Cancellation</th>
                  <th className="text-left p-4 text-white">Comprehensive</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 font-semibold">Small</td>
                  <td className="p-4">Under 100</td>
                  <td className="p-4 text-green-400 font-semibold">£66-£85</td>
                  <td className="p-4">£95-£120</td>
                  <td className="p-4">£145-£180</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 font-semibold">Medium</td>
                  <td className="p-4">100-500</td>
                  <td className="p-4 text-green-400 font-semibold">£132-£165</td>
                  <td className="p-4">£190-£240</td>
                  <td className="p-4">£280-£350</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Large</td>
                  <td className="p-4">500+</td>
                  <td className="p-4 text-green-400 font-semibold">£264-£336</td>
                  <td className="p-4">£380-£475</td>
                  <td className="p-4">£520-£650</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-400 text-sm mb-8">
            <em>Prices correct as of January 2025. Comprehensive includes: Public Liability + Event Cancellation + Equipment Cover + Weather Insurance.</em>
          </p>

          <h2 className="text-3xl font-bold text-white mb-6">Optional Extras & Add-Ons</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-800/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Equipment Cover</h3>
              <p className="text-slate-300 mb-2"><strong>Cost:</strong> +£25-£50</p>
              <p className="text-slate-400 text-sm">
                Protects hired or owned equipment (gazebos, PA systems, generators, tables, chairs). Worth it if equipment value exceeds £1,000.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Weather Insurance</h3>
              <p className="text-slate-300 mb-2"><strong>Cost:</strong> +£35-£75</p>
              <p className="text-slate-400 text-sm">
                Pluvius insurance triggered by specific rainfall measurements. Essential for outdoor fetes during unpredictable months.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Alcohol Liability</h3>
              <p className="text-slate-300 mb-2"><strong>Cost:</strong> +£40-£60</p>
              <p className="text-slate-400 text-sm">
                Required if serving or selling alcohol. Covers claims related to alcohol consumption at your event.
              </p>
            </div>

            <div className="bg-slate-800/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-3">Employer&apos;s Liability</h3>
              <p className="text-slate-300 mb-2"><strong>Cost:</strong> +£30-£50</p>
              <p className="text-slate-400 text-sm">
                Legally required if you have ANY paid staff (even one person). Covers work-related injuries or illness.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">What Affects Your Premium?</h2>

          <div className="space-y-6 mb-8">
            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">1. Event Size & Duration</h3>
              <p className="text-slate-300 mb-3">
                <strong>Impact: HIGH</strong> - Larger events with more attendees mean higher risk, thus higher premiums. A 1,000-person festival costs significantly more than a 50-person church fete.
              </p>
              <p className="text-green-400 text-sm"><strong>Pro Tip:</strong> One-day events cost less than multi-day festivals. Setup/breakdown time usually isn&apos;t counted in event duration.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">2. Activities & Attractions</h3>
              <p className="text-slate-300 mb-3">
                <strong>Impact: HIGH</strong> - Higher-risk activities increase premiums:
              </p>
              <ul className="list-disc list-inside text-slate-300 space-y-1 mb-3">
                <li>Low risk: Tea tent, craft stalls, tombola (+£0-£20)</li>
                <li>Medium risk: Food stalls, live music, petting zoo (+£20-£50)</li>
                <li>High risk: Bouncy castles, fairground rides, alcohol sales (+£50-£100)</li>
              </ul>
              <p className="text-green-400 text-sm"><strong>Pro Tip:</strong> If using professional suppliers with their own insurance, ensure they&apos;re PIPA/RPII registered to potentially reduce your premium.</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">3. Coverage Limits</h3>
              <p className="text-slate-300 mb-3">
                <strong>Impact: MEDIUM</strong> - Standard £5 million public liability vs. £10 million typically adds £15-£30. Most village fetes need £5 million unless venue requires higher.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">4. Location & Venue Type</h3>
              <p className="text-slate-300 mb-3">
                <strong>Impact: LOW-MEDIUM</strong> - Indoor venues (village halls) are slightly cheaper than outdoor locations due to weather risks. Urban vs. rural makes minimal difference.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">5. Claims History</h3>
              <p className="text-slate-300 mb-3">
                <strong>Impact: MEDIUM</strong> - First-time organizers pay standard rates. Previous claims can increase premiums by 20-50% depending on severity. No-claims discounts aren&apos;t common for one-off events.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">6. When You Buy</h3>
              <p className="text-slate-300 mb-3">
                <strong>Impact: LOW</strong> - Last-minute insurance (same-day/next-day) typically doesn&apos;t cost more for public liability. However, <strong>event cancellation insurance usually requires 7-14 days notice</strong>.
              </p>
              <p className="text-green-400 text-sm"><strong>Pro Tip:</strong> Buy as soon as event date is confirmed to access all coverage options.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Annual vs. Per-Event Policies</h2>

          <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">When to Choose Annual Insurance</h3>
            <p className="text-slate-300 mb-4">
              If you organize <strong>3 or more events per year</strong>, annual event insurance usually works out cheaper:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Per-Event</h4>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• 3 events @ £132 each = <strong>£396/year</strong></li>
                  <li>• Flexibility to skip events</li>
                  <li>• Each event needs separate quote</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Annual Policy</h4>
                <ul className="text-slate-300 space-y-1 text-sm">
                  <li>• Unlimited events = <strong>£280-£350/year</strong></li>
                  <li>• Cover all events automatically</li>
                  <li>• Saves £50-£150 for active groups</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-6">Money-Saving Tips</h2>

          <ol className="space-y-4 mb-8">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-white text-sm">1</span>
              <div>
                <h4 className="font-semibold text-white mb-1">Compare Multiple Quotes</h4>
                <p className="text-slate-300 text-sm">Prices vary by £30-£80 between providers for identical cover. Use comparison tools to find best value.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-white text-sm">2</span>
              <div>
                <h4 className="font-semibold text-white mb-1">Use Professional Suppliers with Insurance</h4>
                <p className="text-slate-300 text-sm">Bouncy castle or catering suppliers with £5m+ liability insurance reduce your risk profile, potentially lowering premiums.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-white text-sm">3</span>
              <div>
                <h4 className="font-semibold text-white mb-1">Consider Annual Cover for Multiple Events</h4>
                <p className="text-slate-300 text-sm">Break-even point is usually 3 events per year. Saves admin time too.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-white text-sm">4</span>
              <div>
                <h4 className="font-semibold text-white mb-1">Complete Risk Assessments</h4>
                <p className="text-slate-300 text-sm">Some insurers offer 5-10% discount if you provide completed risk assessment documentation.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center font-bold text-white text-sm">5</span>
              <div>
                <h4 className="font-semibold text-white mb-1">Don&apos;t Over-Insure</h4>
                <p className="text-slate-300 text-sm">If venue requires £5m liability, don&apos;t pay extra for £10m unless you have high-risk activities. Match cover to actual need.</p>
              </div>
            </li>
          </ol>

          <h2 className="text-3xl font-bold text-white mb-6">Is Village Fete Insurance Worth the Cost?</h2>

          <div className="bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-slate-300 mb-4">
              <strong>The Numbers:</strong>
            </p>
            <ul className="text-slate-300 space-y-2">
              <li>• Average village fete insurance: <strong>£132</strong></li>
              <li>• Average personal injury claim: <strong>£18,500</strong></li>
              <li>• Average property damage claim: <strong>£3,200</strong></li>
              <li>• Legal defense costs (even if claim fails): <strong>£5,000-£15,000</strong></li>
            </ul>
            <p className="text-green-400 font-semibold mt-4">
              Verdict: Insurance costs 0.7-2% of typical event budget but protects against financial ruin. Absolutely worth it.
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 rounded-2xl p-8 border border-green-500/30 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Get Your Instant Quote</h2>
            <p className="text-slate-300 mb-6">
              See exactly what your village fete insurance will cost. Our calculator provides instant quotes from specialist UK providers with no obligation.
            </p>
            <Link href="/#calculator" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
              Calculate Your Price - From £66
            </Link>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Takeaways</h3>
            <ul className="space-y-2 text-slate-300">
              <li>• Small village fetes (under 100 people): <strong>£66-£85</strong> for public liability</li>
              <li>• Medium events (100-500): <strong>£132-£165</strong></li>
              <li>• Large fetes (500+): <strong>£264-£336</strong></li>
              <li>• Event cancellation adds 30-50% to premium but protects against weather/cancellation losses</li>
              <li>• Optional extras (equipment, weather, alcohol) add £25-£75 each</li>
              <li>• Annual policies save money if you run 3+ events per year</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/articles/ultimate-guide-village-fete-insurance-uk" className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-colors">
                <h4 className="text-lg font-semibold text-white mb-2">Ultimate Guide to Village Fete Insurance</h4>
                <p className="text-slate-400 text-sm">Complete coverage guide and requirements</p>
              </Link>
              <Link href="/articles/do-i-need-insurance-village-fete" className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-colors">
                <h4 className="text-lg font-semibold text-white mb-2">Do I Need Insurance for a Village Fete?</h4>
                <p className="text-slate-400 text-sm">Legal requirements explained</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
