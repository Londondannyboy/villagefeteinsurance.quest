import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Ultimate Guide to Village Fete Insurance UK 2025 | Complete Coverage Guide',
  description: 'Complete guide to village fete insurance in the UK. Learn about public liability coverage, costs, legal requirements, and how to protect your community event from £66.',
  keywords: ['village fete insurance', 'fete insurance', 'summer fete insurance', 'village event insurance', 'community fete insurance'],
  alternates: {
    canonical: 'https://villagefeteinsurance.quest/articles/ultimate-guide-village-fete-insurance-uk',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Ultimate Guide to Village Fete Insurance in the UK',
  description: 'Comprehensive guide covering everything you need to know about insuring your village fete, summer fair, or community event in the UK.',
  author: {
    '@type': 'Organization',
    name: 'Village Fete Insurance UK'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Village Fete Insurance UK',
    logo: {
      '@type': 'ImageObject',
      url: 'https://villagefeteinsurance.quest/logo.png'
    }
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15'
}

export default function Page() {
  return (
    <div className="min-h-screen py-16 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-green-400 hover:text-green-300 text-sm">
            ← Back to Home
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ultimate Guide to Village Fete Insurance in the UK
          </h1>
          <p className="text-xl text-slate-300">
            Everything you need to know about protecting your community event, from public liability requirements to cost breakdowns and coverage options.
          </p>
          <div className="flex gap-4 mt-6 text-sm text-slate-400">
            <span>Updated January 2025</span>
            <span>•</span>
            <span>15 min read</span>
          </div>
        </header>

        {/* Quick Answer Box */}
        <div className="bg-green-900/20 border-l-4 border-green-500 p-6 mb-12 rounded-r-xl">
          <h2 className="text-xl font-bold text-white mb-3">Quick Answer</h2>
          <p className="text-slate-300">
            <strong>Village fete insurance</strong> protects community events from financial losses due to accidents, injuries, or cancellations. Most venues require £5-10 million public liability coverage, with policies starting from <strong>£66 per event</strong>. Same-day cover is available for last-minute needs.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="bg-slate-800/50 rounded-2xl p-6 mb-12 border border-slate-700/50">
          <h2 className="text-xl font-bold text-white mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-slate-300">
            <li><a href="#what-is" className="hover:text-green-400 transition-colors">1. What is Village Fete Insurance?</a></li>
            <li><a href="#types" className="hover:text-green-400 transition-colors">2. Types of Coverage Needed</a></li>
            <li><a href="#legal" className="hover:text-green-400 transition-colors">3. Legal Requirements in the UK</a></li>
            <li><a href="#cost" className="hover:text-green-400 transition-colors">4. Cost Breakdown and Pricing</a></li>
            <li><a href="#how-to-get" className="hover:text-green-400 transition-colors">5. How to Get Insured</a></li>
            <li><a href="#claims" className="hover:text-green-400 transition-colors">6. Common Claims and Scenarios</a></li>
            <li><a href="#parish" className="hover:text-green-400 transition-colors">7. Parish Council Requirements</a></li>
            <li><a href="#case-studies" className="hover:text-green-400 transition-colors">8. Real-World Case Studies</a></li>
          </ul>
        </nav>

        {/* Main Content */}
        <div className="prose prose-invert prose-green max-w-none">

          <section id="what-is" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">What is Village Fete Insurance?</h2>

            <p className="text-slate-300 mb-4">
              <strong>Village fete insurance</strong> is specialized event coverage designed to protect community gatherings, summer fairs, and local celebrations across the UK. Whether you&apos;re organizing a church fete, school fundraiser, or community festival, this insurance provides essential financial protection against unexpected incidents.
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">What Village Fete Insurance Covers:</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Public Liability:</strong> Injury to attendees, volunteers, or damage to property</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Event Cancellation:</strong> Financial losses if weather, illness, or circumstances force cancellation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Equipment Protection:</strong> Tents, stalls, sound systems, and rental equipment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Employer&apos;s Liability:</strong> If you have paid staff working at the event</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-300 mb-4">
              Village fetes have been a cornerstone of British community life for generations. From traditional summer fetes with tea tents and tombolas to modern community festivals with live music and food stalls, these events bring neighbors together and raise vital funds for local causes. However, organizing a fete comes with responsibilities - and potential risks.
            </p>
          </section>

          <section id="types" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Types of Coverage Needed for Your Village Fete</h2>

            <h3 className="text-2xl font-semibold text-white mb-4">1. Public Liability Insurance (Essential)</h3>
            <p className="text-slate-300 mb-4">
              Public liability insurance is the foundation of village fete coverage. It protects you if someone is injured at your event or their property is damaged. This is typically the only insurance venues require before allowing your event.
            </p>

            <div className="bg-slate-800/30 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-green-400 mb-3">Common Public Liability Claims:</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Attendee trips over tent guy rope and breaks wrist</li>
                <li>• Child burns hand on hot food stall equipment</li>
                <li>• Bouncy castle deflates causing injuries to children</li>
                <li>• Stall collapses damaging visitor&apos;s belongings</li>
                <li>• Food poisoning from refreshment tent</li>
              </ul>
            </div>

            <p className="text-slate-300 mb-6">
              <strong>Coverage limits:</strong> Most village halls and church venues require £5 million coverage. Larger events or those with higher-risk activities may need £10 million.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-4">2. Event Cancellation Insurance (Recommended)</h3>
            <p className="text-slate-300 mb-4">
              British weather is notoriously unpredictable. Event cancellation insurance (also called abandonment insurance) reimburses your costs if you must cancel or postpone your village fete due to:
            </p>

            <ul className="list-disc list-inside text-slate-300 mb-6 space-y-2">
              <li>Adverse weather conditions (heavy rain, storms, extreme temperatures)</li>
              <li>Venue becoming unavailable (fire, flood, structural damage)</li>
              <li>Key organizer illness</li>
              <li>National mourning or local emergency</li>
              <li>Failure of essential services (power, water)</li>
            </ul>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-slate-300">
                <strong>Pro Tip:</strong> Event cancellation insurance typically costs 10-15% of your total event budget. For a fete with £2,000 in costs, expect to pay £200-£300 for cancellation cover.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">3. Equipment Cover (Optional but Valuable)</h3>
            <p className="text-slate-300 mb-6">
              Protect hired or owned equipment including gazebos, PA systems, generators, tables, chairs, and specialist items like bouncy castles or fairground rides. Add £25-£50 to your premium.
            </p>

            <h3 className="text-2xl font-semibold text-white mb-4">4. Weather Insurance (For Outdoor Fetes)</h3>
            <p className="text-slate-300 mb-6">
              Also known as pluvius insurance, this covers financial losses if specific weather conditions occur. Some policies trigger if rainfall exceeds a certain measurement at a nearby weather station on your event day.
            </p>
          </section>

          <section id="legal" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Legal Requirements for Village Fetes in the UK</h2>

            <p className="text-slate-300 mb-4">
              While there&apos;s no UK law requiring village fetes to have insurance, <strong>most venues will not allow your event without proof of public liability cover</strong>. Here&apos;s what you need to know:
            </p>

            <div className="bg-slate-800/50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Venue Requirements:</h3>
              <ul className="space-y-3 text-slate-300">
                <li><strong>Village Halls:</strong> Typically require £5 million public liability, proof needed 2-4 weeks before event</li>
                <li><strong>Church Grounds:</strong> Usually £5-10 million, some churches may accept inclusion under parish insurance</li>
                <li><strong>Council Land/Parks:</strong> Almost always require £10 million coverage, strict documentation requirements</li>
                <li><strong>Private Land:</strong> Requirements vary, but landowner liability concerns mean insurance is always recommended</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">Additional Legal Considerations:</h3>

            <h4 className="text-lg font-semibold text-green-400 mb-3">Risk Assessments</h4>
            <p className="text-slate-300 mb-4">
              UK health and safety law requires you to assess and manage risks at your event. While not legally connected to insurance, insurers appreciate evidence of proper risk management.
            </p>

            <h4 className="text-lg font-semibold text-green-400 mb-3">Food Hygiene</h4>
            <p className="text-slate-300 mb-4">
              If serving food, you must register with your local authority (at least 28 days before) and follow food hygiene regulations. Your insurance should cover food safety claims.
            </p>

            <h4 className="text-lg font-semibold text-green-400 mb-3">Alcohol Licensing</h4>
            <p className="text-slate-300 mb-4">
              Selling alcohol requires a Temporary Event Notice (TEN) from your local council. Standard village fete insurance often excludes alcohol sales - you&apos;ll need to add alcohol liability cover (typically £40 extra).
            </p>

            <h4 className="text-lg font-semibold text-green-400 mb-3">Music Licensing</h4>
            <p className="text-slate-300 mb-6">
              Live or recorded music requires PRS and PPL licenses. Some venues have these; otherwise, you&apos;re responsible. This doesn&apos;t affect insurance but is a legal requirement.
            </p>
          </section>

          <section id="cost" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Village Fete Insurance Cost Breakdown</h2>

            <p className="text-slate-300 mb-6">
              Understanding insurance costs helps you budget effectively for your village fete. Prices vary based on event size, activities, and coverage level.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full bg-slate-800/50 rounded-xl overflow-hidden">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-4 text-white">Event Size</th>
                    <th className="text-left p-4 text-white">Attendance</th>
                    <th className="text-left p-4 text-white">Public Liability Only</th>
                    <th className="text-left p-4 text-white">With Cancellation</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700/50">
                    <td className="p-4">Small Village Fete</td>
                    <td className="p-4">Under 100</td>
                    <td className="p-4 text-green-400 font-semibold">£66-£85</td>
                    <td className="p-4">£95-£120</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="p-4">Medium Community Event</td>
                    <td className="p-4">100-500</td>
                    <td className="p-4 text-green-400 font-semibold">£132-£165</td>
                    <td className="p-4">£190-£240</td>
                  </tr>
                  <tr>
                    <td className="p-4">Large Summer Fete</td>
                    <td className="p-4">500+</td>
                    <td className="p-4 text-green-400 font-semibold">£264-£336</td>
                    <td className="p-4">£380-£475</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">Additional Coverage Costs:</h3>
            <ul className="space-y-2 text-slate-300 mb-6">
              <li>• <strong>Equipment Cover:</strong> +£25-£50 depending on equipment value</li>
              <li>• <strong>Weather Insurance:</strong> +£35-£75 (usually 10-15% of event costs)</li>
              <li>• <strong>Alcohol Liability:</strong> +£40-£60 if selling alcohol</li>
              <li>• <strong>Employer&apos;s Liability:</strong> +£30-£50 if you have paid staff</li>
            </ul>

            <div className="bg-green-900/20 border-l-4 border-green-500 p-4 mb-6">
              <p className="text-slate-300">
                <strong>Money-Saving Tip:</strong> Annual policies covering multiple events throughout the year often work out cheaper than per-event insurance if you organize more than 2-3 fetes annually.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">Factors Affecting Your Quote:</h3>
            <ul className="space-y-2 text-slate-300 mb-6">
              <li>1. <strong>Event size and duration</strong> - larger, longer events cost more</li>
              <li>2. <strong>Activities included</strong> - higher-risk activities (bouncy castles, fairground rides) increase premiums</li>
              <li>3. <strong>Venue type</strong> - indoor events are typically cheaper than outdoor</li>
              <li>4. <strong>Claims history</strong> - first-time organizers pay standard rates; previous claims may increase costs</li>
              <li>5. <strong>Location</strong> - urban events may cost slightly more than rural</li>
              <li>6. <strong>Season</strong> - summer fetes during peak season may have higher premiums</li>
            </ul>
          </section>

          <section id="how-to-get" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">How to Get Village Fete Insurance (Step-by-Step)</h2>

            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-white">1</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Gather Event Information</h3>
                    <p className="text-slate-300 mb-3">Before requesting quotes, prepare:</p>
                    <ul className="space-y-1 text-slate-300">
                      <li>• Event date and time (including setup/breakdown)</li>
                      <li>• Expected attendance numbers</li>
                      <li>• Venue details and address</li>
                      <li>• List of activities and stalls planned</li>
                      <li>• Whether alcohol will be served/sold</li>
                      <li>• Total event budget (for cancellation insurance)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-white">2</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Choose Your Coverage Level</h3>
                    <p className="text-slate-300">Decide what you need:</p>
                    <ul className="space-y-1 text-slate-300 mt-3">
                      <li>• <strong>Minimum:</strong> Public liability only (venue requirement)</li>
                      <li>• <strong>Standard:</strong> Public liability + event cancellation</li>
                      <li>• <strong>Comprehensive:</strong> All covers including equipment and weather</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-white">3</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Get Instant Quotes Online</h3>
                    <p className="text-slate-300">Use our quote calculator to compare prices from specialist UK providers. Most quotes are instant, and you can purchase immediately.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-white">4</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Review Policy Documents</h3>
                    <p className="text-slate-300 mb-3">Check your policy covers:</p>
                    <ul className="space-y-1 text-slate-300">
                      <li>• Correct event date and location</li>
                      <li>• Adequate liability limits for your venue</li>
                      <li>• All planned activities are listed</li>
                      <li>• Any exclusions that might affect you</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold text-white">5</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Receive Your Certificate</h3>
                    <p className="text-slate-300">You&apos;ll get your insurance certificate immediately by email. Print copies for your venue, committee members, and keep one on-site during the event.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-slate-300">
                <strong>Last-Minute Insurance:</strong> Many providers offer same-day cover for village fetes. However, event cancellation insurance often requires 7-14 days&apos; notice, so don&apos;t leave it too late.
              </p>
            </div>
          </section>

          <section id="claims" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Common Village Fete Insurance Claims</h2>

            <p className="text-slate-300 mb-6">
              Understanding common claims helps you take preventative measures and appreciate why insurance is essential:
            </p>

            <div className="space-y-6">
              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">1. Slip, Trip, and Fall Injuries</h3>
                <p className="text-slate-300 mb-2"><strong>Example:</strong> Elderly visitor trips over marquee guy rope, fractures hip, requires hospital treatment.</p>
                <p className="text-slate-300 mb-2"><strong>Typical Cost:</strong> £15,000-£45,000 (medical costs + compensation)</p>
                <p className="text-slate-400 text-sm"><strong>Prevention:</strong> Mark guy ropes with bright tape, maintain clear walkways, warning signs for hazards.</p>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">2. Food Poisoning Incidents</h3>
                <p className="text-slate-300 mb-2"><strong>Example:</strong> Multiple attendees fall ill after consuming food from a stall, traced to poor food hygiene practices.</p>
                <p className="text-slate-300 mb-2"><strong>Typical Cost:</strong> £5,000-£20,000 per claimant</p>
                <p className="text-slate-400 text-sm"><strong>Prevention:</strong> Ensure all food handlers have basic hygiene training, maintain proper food storage temperatures.</p>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">3. Weather-Related Cancellations</h3>
                <p className="text-slate-300 mb-2"><strong>Example:</strong> Heavy storms forecast for event day, fete cancelled with 48 hours&apos; notice. Deposits paid for entertainment, marquee hire, and advertising already spent.</p>
                <p className="text-slate-300 mb-2"><strong>Typical Cost:</strong> £1,500-£5,000 in unrecoverable costs</p>
                <p className="text-slate-400 text-sm"><strong>Prevention:</strong> Event cancellation insurance, weather contingency plans, indoor backup venue.</p>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">4. Bouncy Castle Accidents</h3>
                <p className="text-slate-300 mb-2"><strong>Example:</strong> Child falls from poorly secured bouncy castle, sustains head injury requiring medical treatment and follow-up care.</p>
                <p className="text-slate-300 mb-2"><strong>Typical Cost:</strong> £8,000-£25,000</p>
                <p className="text-slate-400 text-sm"><strong>Prevention:</strong> Use PIPA/RPII registered operators only, ensure proper anchoring, adult supervision, age/height restrictions.</p>
              </div>

              <div className="bg-slate-800/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-green-400 mb-3">5. Property Damage Claims</h3>
                <p className="text-slate-300 mb-2"><strong>Example:</strong> Gazebo collapses in wind, damaging parked cars or venue property.</p>
                <p className="text-slate-300 mb-2"><strong>Typical Cost:</strong> £2,000-£10,000 depending on damage extent</p>
                <p className="text-slate-400 text-sm"><strong>Prevention:</strong> Proper structure securing, weight on gazebo legs, weather monitoring, clear parking zones.</p>
              </div>
            </div>
          </section>

          <section id="parish" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Parish Council Insurance Requirements</h2>

            <p className="text-slate-300 mb-4">
              If your village fete is organized by or associated with a parish council, there are specific considerations:
            </p>

            <h3 className="text-xl font-semibold text-white mb-4">Parish Council Public Liability</h3>
            <p className="text-slate-300 mb-4">
              Many parish councils have existing public liability insurance that MAY extend to community events they organize. However:
            </p>

            <ul className="space-y-2 text-slate-300 mb-6">
              <li>• Check your council&apos;s policy wording carefully - events are often excluded or have limited cover</li>
              <li>• Council insurance typically covers official council functions, not community group events</li>
              <li>• If the council is merely providing land use, their insurance won&apos;t cover your event</li>
              <li>• Annual council policies may have per-event attendance limits</li>
            </ul>

            <div className="bg-green-900/20 border-l-4 border-green-500 p-4 mb-6">
              <p className="text-slate-300">
                <strong>Best Practice:</strong> Even if your parish council has insurance, obtain a separate event policy in the organizing committee&apos;s name. This ensures clear coverage and protects individual volunteers from personal liability.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">Documentation Requirements</h3>
            <p className="text-slate-300 mb-4">
              Parish councils organizing or hosting village fetes should:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-slate-300 mb-6">
              <li>Obtain written confirmation insurance covers the specific event</li>
              <li>Ensure liability limits meet venue owner requirements (usually £10 million for council land)</li>
              <li>Keep records of risk assessments and insurance documents for at least 6 years</li>
              <li>Name the parish council and organizing committee as insured parties</li>
              <li>Provide insurance certificate to venue/landowner at least 2 weeks before event</li>
            </ol>
          </section>

          <section id="case-studies" className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Real-World Case Studies</h2>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-xl p-6 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold text-white mb-3">Case Study 1: The Yorkshire Summer Fete</h3>
                <p className="text-slate-300 mb-3">
                  A 150-year-old village in Yorkshire held its annual summer fete on the village green. During setup, a volunteer&apos;s ladder slipped while hanging bunting, causing them to fall and break their ankle. The volunteer made a personal injury claim against the organizing committee.
                </p>
                <p className="text-green-400 font-semibold mb-2">Outcome:</p>
                <p className="text-slate-300 mb-3">
                  The committee&apos;s £5 million public liability insurance covered the £12,000 claim (medical costs + compensation). Without insurance, the committee members would have been personally liable.
                </p>
                <p className="text-slate-400 text-sm"><strong>Lesson:</strong> Public liability covers volunteers and helpers, not just attendees.</p>
              </div>

              <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-white mb-3">Case Study 2: The Cancelled Church Fete</h3>
                <p className="text-slate-300 mb-3">
                  A Cotswolds church planned a major fundraising fete with hired entertainment, food vendors, and equipment costing £3,500. Three days before the event, severe weather warnings forced cancellation. Most deposits were non-refundable.
                </p>
                <p className="text-green-400 font-semibold mb-2">Outcome:</p>
                <p className="text-slate-300 mb-3">
                  Event cancellation insurance reimbursed £2,800 of unrecoverable costs. The £280 insurance premium proved excellent value, saving the church from significant financial loss.
                </p>
                <p className="text-slate-400 text-sm"><strong>Lesson:</strong> Weather insurance is essential for outdoor events in unpredictable British climate.</p>
              </div>

              <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 rounded-xl p-6 border-l-4 border-yellow-500">
                <h3 className="text-xl font-semibold text-white mb-3">Case Study 3: The School Fete Food Incident</h3>
                <p className="text-slate-300 mb-3">
                  A PTA-organized school fete served homemade cakes. Several families reported gastric illness after the event, which was traced to a batch of cream-filled cakes that hadn&apos;t been properly refrigerated.
                </p>
                <p className="text-green-400 font-semibold mb-2">Outcome:</p>
                <p className="text-slate-300 mb-3">
                  Public liability insurance covered the claims totaling £18,500 across multiple claimants, plus £4,200 in legal defense costs. The PTA&apos;s insurance premium was £145 for the event.
                </p>
                <p className="text-slate-400 text-sm"><strong>Lesson:</strong> Food hygiene breaches can result in multiple claims; proper insurance is crucial when serving food.</p>
              </div>
            </div>
          </section>

          {/* Quick Action Section */}
          <section className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 rounded-2xl p-8 mb-12 border border-green-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Protect Your Village Fete?</h2>
            <p className="text-slate-300 mb-6">
              Get instant quotes from specialist UK providers. Compare public liability, event cancellation, and comprehensive coverage options tailored to your community event.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/#calculator" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Get Free Quote
              </Link>
              <Link href="/contact" className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Speak to Specialist
              </Link>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="bg-slate-800/50 rounded-2xl p-8 mb-12 border border-slate-700/50">
            <h2 className="text-2xl font-bold text-white mb-6">Key Takeaways</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span><strong>Village fete insurance</strong> typically costs £66-£336 depending on event size</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Most venues require £5-10 million public liability coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Event cancellation insurance costs 10-15% of event budget but protects against weather risks</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Same-day cover available, but apply at least 2 weeks before for best rates</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Common claims include slip/trip injuries (£15k-£45k) and food poisoning (£5k-£20k per claimant)</span>
              </li>
            </ul>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/articles/do-i-need-insurance-village-fete" className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">Do I Need Insurance for a Village Fete?</h3>
                <p className="text-slate-400 text-sm">Legal requirements and venue expectations explained</p>
              </Link>
              <Link href="/articles/how-much-does-village-fete-insurance-cost" className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">How Much Does Village Fete Insurance Cost?</h3>
                <p className="text-slate-400 text-sm">Detailed price breakdown and budgeting guide</p>
              </Link>
            </div>
          </section>

        </div>
      </article>
    </div>
  )
}
