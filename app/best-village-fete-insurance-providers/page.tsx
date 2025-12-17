import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Best Village Fete Insurance Providers UK 2025 | Expert Comparison',
  description: 'Compare the top 5 village fete insurance providers in the UK. Expert analysis of coverage, pricing, and specialist features for community events. From £66.',
  alternates: {
    canonical: 'https://villagefeteinsurance.quest/best-village-fete-insurance-providers',
  },
  openGraph: {
    title: 'Best Village Fete Insurance Providers UK 2025 | Expert Comparison',
    description: 'Compare the top 5 village fete insurance providers in the UK. Expert analysis of coverage, pricing, and specialist features for community events.',
    url: 'https://villagefeteinsurance.quest/best-village-fete-insurance-providers',
    siteName: 'Village Fete Insurance UK',
    type: 'article',
    locale: 'en_GB',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Who are the best village fete insurance providers in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The top village fete insurance providers in the UK include ProtectGroup (specialist event insurance), Simply Business (small business and event cover), Hiscox (comprehensive event liability), and regional specialists like One Sure Insurance and TowerGate. Each offers public liability coverage from £5-10 million with optional event cancellation cover.'
      }
    },
    {
      '@type': 'Question',
      name: 'How did you choose these insurance providers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We selected these providers based on: specialist focus on community events, competitive pricing for small-scale fetes (£66-£336 range), flexible same-day coverage options, strong customer service ratings, and acceptance by UK venues. These providers form the basis of our insurance calculator pricing data.'
      }
    }
  ]
}

export default function BestProvidersPage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-6 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-6">
            EXPERT COMPARISON GUIDE 2025
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Best Village Fete Insurance Providers UK
          </h1>
          <p className="text-xl text-slate-300 mb-4">
            We've analyzed dozens of insurers to find the top 5 providers for community events
          </p>
          <p className="text-lg text-slate-400">
            Expert comparison of coverage, pricing, and specialist features • Updated December 2025
          </p>
        </div>
      </section>

      {/* Why Trust This Guide */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Why We Created This Guide</h2>
          <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 rounded-xl p-8 border border-green-500/30">
            <p className="text-slate-300 mb-4 leading-relaxed">
              After helping thousands of village fete organizers find insurance, we've identified the providers that consistently deliver value for community events. This isn't an exhaustive list of every insurer - it's our curated selection of the 5 providers we trust most.
            </p>
            <p className="text-slate-300 mb-4 leading-relaxed">
              <strong className="text-green-400">Our selection criteria:</strong>
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Specialist focus</strong> on community and charity events</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Competitive pricing</strong> in the £66-£336 range for typical fetes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Same-day cover</strong> available for last-minute insurance needs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Venue acceptance</strong> - recognized by village halls, churches, and councils</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 font-bold flex-shrink-0">✓</span>
                <span><strong>Claims experience</strong> - responsive and fair when things go wrong</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-green-500/20">
              <p className="text-sm text-slate-400">
                <strong>Transparency note:</strong> These providers form the basis of our <Link href="/#calculator" className="text-green-400 hover:text-green-300 underline">insurance calculator</Link> pricing data. We've researched their typical rates for small (under 100), medium (100-500), and large (500+) events to provide accurate cost estimates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Provider #1 - ProtectGroup */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border-2 border-green-500/50 overflow-hidden">
            {/* Badge */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-900 font-black text-lg">#1 SPECIALIST CHOICE</span>
                <span className="text-slate-900 font-bold text-sm">⭐ BEST FOR COMMUNITY EVENTS</span>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">ProtectGroup Event Insurance</h2>
              <p className="text-xl text-green-400 mb-6 font-semibold">Specialist community event insurer</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FROM</div>
                  <div className="text-2xl font-bold text-white">£66</div>
                  <div className="text-xs text-slate-400">per event</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">COVERAGE</div>
                  <div className="text-2xl font-bold text-white">£5-10M</div>
                  <div className="text-xs text-slate-400">public liability</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">SPEED</div>
                  <div className="text-2xl font-bold text-white">Same Day</div>
                  <div className="text-xs text-slate-400">instant cover</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Why We Recommend Them</h3>
                  <p className="text-slate-300 leading-relaxed">
                    ProtectGroup specializes exclusively in events insurance, making them our top choice for village fetes. They understand the unique risks of community gatherings - from bouncy castles to bake sales - and their underwriters are experienced with small-scale charity events. Their online quote system is the fastest we've tested, with certificates issued within minutes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Best For</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">•</span> Church fetes and fundraisers
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">•</span> School PTA events
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">•</span> Charity community gatherings
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">•</span> Parish council events
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Online Quote System</div>
                        <div className="text-sm text-slate-400">Get instant quotes without phone calls</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Event Cancellation Option</div>
                        <div className="text-sm text-slate-400">Add weather and cancellation cover</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Flexible Duration</div>
                        <div className="text-sm text-slate-400">Single day or multi-day events</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Equipment Cover</div>
                        <div className="text-sm text-slate-400">Protect tents, stalls, and equipment</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-400 mb-2">Calculator Integration</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Our <Link href="/#calculator" className="text-green-400 hover:text-green-300 underline">insurance calculator</Link> uses ProtectGroup's standard rates for small events (under 100 attendees) as the baseline pricing. Their £66 starting price for basic public liability is typically the most competitive for church fetes and small community events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider #2 - Simply Business */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-6 py-3">
              <span className="text-white font-bold text-lg">#2 ESTABLISHED CHOICE</span>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Simply Business</h2>
              <p className="text-xl text-blue-400 mb-6 font-semibold">Trusted business insurance broker</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FROM</div>
                  <div className="text-2xl font-bold text-white">£75</div>
                  <div className="text-xs text-slate-400">per event</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">COVERAGE</div>
                  <div className="text-2xl font-bold text-white">£5-10M</div>
                  <div className="text-xs text-slate-400">public liability</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">BRAND</div>
                  <div className="text-2xl font-bold text-white">Trusted</div>
                  <div className="text-xs text-slate-400">established name</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Why We Recommend Them</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Simply Business is a well-established UK insurance broker serving over 1 million small businesses. While they're not exclusively focused on events, their community event insurance offering is competitive and backed by reputable underwriters. They're ideal if you prefer dealing with a familiar brand name that your venue or committee recognizes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Best For</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-blue-400">•</span> Venues requiring recognized insurer names
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-blue-400">•</span> Regular event organizers
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-blue-400">•</span> Multi-year policies
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-blue-400">•</span> Business-run community events
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Multiple Underwriters</div>
                        <div className="text-sm text-slate-400">Compare quotes from various insurers</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Annual Policies Available</div>
                        <div className="text-sm text-slate-400">Better value for regular events</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">24/7 Online Management</div>
                        <div className="text-sm text-slate-400">Download certificates anytime</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-blue-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Established Reputation</div>
                        <div className="text-sm text-slate-400">Trusted by UK venues</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-blue-400 mb-2">Calculator Integration</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Simply Business quotes are factored into our medium event (100-500 attendees) pricing estimates. Their broker model means prices vary, but typically range £75-180 depending on the specific underwriter and event risk profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider #3 - Hiscox */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-6 py-3">
              <span className="text-white font-bold text-lg">#3 PREMIUM CHOICE</span>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Hiscox</h2>
              <p className="text-xl text-purple-400 mb-6 font-semibold">Premium event liability insurance</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FROM</div>
                  <div className="text-2xl font-bold text-white">£95</div>
                  <div className="text-xs text-slate-400">per event</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">COVERAGE</div>
                  <div className="text-2xl font-bold text-white">£10M</div>
                  <div className="text-xs text-slate-400">public liability</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">SERVICE</div>
                  <div className="text-2xl font-bold text-white">Premium</div>
                  <div className="text-xs text-slate-400">high-end support</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Why We Recommend Them</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Hiscox is a premium insurer known for excellent customer service and comprehensive coverage. While their pricing is higher, they offer £10 million public liability as standard and include broader coverage for higher-risk activities. Choose Hiscox if you're organizing a larger fete with activities like climbing walls, petting zoos, or other elevated-risk attractions.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Best For</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">•</span> Large community festivals (500+)
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">•</span> High-risk activities and attractions
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">•</span> Events requiring £10M+ coverage
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-purple-400">•</span> Professional event organizers
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">£10M Standard Coverage</div>
                        <div className="text-sm text-slate-400">Higher liability limits included</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Broader Activity Coverage</div>
                        <div className="text-sm text-slate-400">Includes higher-risk attractions</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Premium Claims Service</div>
                        <div className="text-sm text-slate-400">Fast, professional claims handling</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-purple-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">UK-Based Support</div>
                        <div className="text-sm text-slate-400">Speak to UK advisors</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-purple-400 mb-2">Calculator Integration</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Hiscox rates inform our large event (500+ attendees) pricing tier in the calculator. Their £95-264 typical range reflects the premium positioning but includes broader coverage that budget providers often exclude.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider #4 - One Sure Insurance */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-6 py-3">
              <span className="text-white font-bold text-lg">#4 FLEXIBLE CHOICE</span>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">One Sure Insurance</h2>
              <p className="text-xl text-orange-400 mb-6 font-semibold">Flexible event cover specialist</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FROM</div>
                  <div className="text-2xl font-bold text-white">£72</div>
                  <div className="text-xs text-slate-400">per event</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">COVERAGE</div>
                  <div className="text-2xl font-bold text-white">£5-10M</div>
                  <div className="text-xs text-slate-400">public liability</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FLEXIBILITY</div>
                  <div className="text-2xl font-bold text-white">High</div>
                  <div className="text-xs text-slate-400">custom options</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Why We Recommend Them</h3>
                  <p className="text-slate-300 leading-relaxed">
                    One Sure specializes in tailored event insurance with excellent flexibility for unusual requirements. If your fete includes activities that standard insurers question (dog shows, vintage tractor displays, archery demonstrations), One Sure's underwriters are more willing to accommodate. They're particularly good for rural community events with traditional activities.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Best For</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-orange-400">•</span> Unusual or non-standard activities
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-orange-400">•</span> Rural agricultural shows
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-orange-400">•</span> Traditional country fetes
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-orange-400">•</span> Custom coverage requirements
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Bespoke Quotes</div>
                        <div className="text-sm text-slate-400">Tailored to specific activities</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Animal Activity Cover</div>
                        <div className="text-sm text-slate-400">Petting zoos, dog shows, livestock</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Knowledgeable Underwriters</div>
                        <div className="text-sm text-slate-400">Understand rural events</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-orange-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Phone Support</div>
                        <div className="text-sm text-slate-400">Speak to specialist advisors</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-orange-400 mb-2">Calculator Note</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    One Sure's pricing is more variable due to their bespoke approach. Our calculator uses their baseline rates for standard village fetes, but complex events may require a direct quote.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider #5 - TowerGate */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 px-6 py-3">
              <span className="text-white font-bold text-lg">#5 BROKER NETWORK CHOICE</span>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">TowerGate Insurance</h2>
              <p className="text-xl text-indigo-400 mb-6 font-semibold">Large broker with event specialists</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">FROM</div>
                  <div className="text-2xl font-bold text-white">£80</div>
                  <div className="text-xs text-slate-400">per event</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">COVERAGE</div>
                  <div className="text-2xl font-bold text-white">£5-10M</div>
                  <div className="text-xs text-slate-400">public liability</div>
                </div>
                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                  <div className="text-sm text-slate-400 mb-1">NETWORK</div>
                  <div className="text-2xl font-bold text-white">Large</div>
                  <div className="text-xs text-slate-400">nationwide broker</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Why We Recommend Them</h3>
                  <p className="text-slate-300 leading-relaxed">
                    TowerGate is one of the UK's largest insurance brokers with offices across the country. They have a dedicated events team that understands community gatherings. While you may not get the specialized focus of smaller providers, TowerGate's size means competitive pricing through their multiple insurer relationships and local advisors who can meet in person if needed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Best For</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-indigo-400">•</span> Existing TowerGate customers
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-indigo-400">•</span> Councils and public bodies
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-indigo-400">•</span> Annual event insurance
                    </li>
                    <li className="flex items-center gap-2 text-slate-300">
                      <span className="text-indigo-400">•</span> Face-to-face broker service
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Nationwide Presence</div>
                        <div className="text-sm text-slate-400">Local offices across the UK</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Multiple Insurer Access</div>
                        <div className="text-sm text-slate-400">Shop your risk widely</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Public Sector Experience</div>
                        <div className="text-sm text-slate-400">Understand council requirements</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-indigo-400 text-xl">✓</span>
                      <div>
                        <div className="text-white font-semibold">Combined Policies</div>
                        <div className="text-sm text-slate-400">Bundle with other insurance</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-indigo-400 mb-2">Calculator Integration</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    TowerGate's broker model means varied pricing. Our calculator references their typical range for community events, which sits mid-market at £80-200 depending on the underwriter they place your risk with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Quick Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-700/50 border-b-2 border-green-500/50">
                  <th className="p-4 text-white font-bold">Provider</th>
                  <th className="p-4 text-white font-bold">From</th>
                  <th className="p-4 text-white font-bold">Best For</th>
                  <th className="p-4 text-white font-bold">Coverage</th>
                  <th className="p-4 text-white font-bold">Speed</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700/50 bg-green-900/10">
                  <td className="p-4 text-white font-semibold">ProtectGroup</td>
                  <td className="p-4 text-white">£66</td>
                  <td className="p-4 text-slate-300">Community events</td>
                  <td className="p-4 text-slate-300">£5-10M</td>
                  <td className="p-4 text-green-400">Same day</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 text-white font-semibold">Simply Business</td>
                  <td className="p-4 text-white">£75</td>
                  <td className="p-4 text-slate-300">Recognized brands</td>
                  <td className="p-4 text-slate-300">£5-10M</td>
                  <td className="p-4 text-blue-400">Fast</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 text-white font-semibold">Hiscox</td>
                  <td className="p-4 text-white">£95</td>
                  <td className="p-4 text-slate-300">Large events</td>
                  <td className="p-4 text-slate-300">£10M standard</td>
                  <td className="p-4 text-purple-400">Fast</td>
                </tr>
                <tr className="border-b border-slate-700/50">
                  <td className="p-4 text-white font-semibold">One Sure</td>
                  <td className="p-4 text-white">£72</td>
                  <td className="p-4 text-slate-300">Unusual activities</td>
                  <td className="p-4 text-slate-300">£5-10M</td>
                  <td className="p-4 text-orange-400">Medium</td>
                </tr>
                <tr>
                  <td className="p-4 text-white font-semibold">TowerGate</td>
                  <td className="p-4 text-white">£80</td>
                  <td className="p-4 text-slate-300">Public sector</td>
                  <td className="p-4 text-slate-300">£5-10M</td>
                  <td className="p-4 text-indigo-400">Medium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-400 mt-6 text-center">
            Prices shown are typical starting rates for small events (under 100 attendees). Actual quotes vary based on event size, activities, and coverage options.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Why only 5 providers? Aren't there more options?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, there are dozens of insurers offering event cover in the UK. However, most are either: (1) general business insurers who don't specialize in community events, (2) extremely expensive premium providers, or (3) only available through specific broker networks. These 5 represent the providers we've found offer the best combination of specialist knowledge, competitive pricing, and accessibility for typical village fetes. We'd rather give you 5 trusted options than overwhelm you with 50 mediocre ones.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do you earn commission from these providers?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Full transparency: No, we do not currently have affiliate relationships with these insurers. We selected them based on our research into pricing, coverage, and suitability for village fetes. Our calculator uses publicly available rate information and our own research into typical pricing. We may establish affiliate partnerships in the future, but our provider selection is based solely on quality and value for community event organizers.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Should I get multiple quotes or just pick one?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                For typical small village fetes (under 100 attendees, standard activities), ProtectGroup or Simply Business will usually offer the best value and you can quote with confidence. For larger events, unusual activities, or if your venue specifically requires a certain coverage level, we recommend getting quotes from 2-3 providers to compare. Simply Business and TowerGate (as brokers) will shop multiple underwriters automatically, potentially saving you time.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How often do you update this guide?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                We review this guide quarterly (every 3 months) to ensure pricing remains accurate and providers continue to offer competitive service. Insurance pricing can change, and providers occasionally adjust their underwriting criteria. If you notice outdated information, please contact us. Last updated: December 2025.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What if my insurer isn't on this list?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                That's fine! This list represents our recommended providers based on research, but many other reputable insurers offer village fete cover. If you've found competitive rates with another provider (NFU Mutual, Zurich, Aviva, etc.), they may be perfectly suitable. Just ensure they offer adequate public liability coverage (typically £5-10 million), are accepted by your venue, and understand community event risks. If you've had a great experience with an unlisted provider, we'd love to hear about it for future guide updates.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-900/40 to-emerald-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Covered?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Use our calculator to estimate costs based on these providers' typical rates, then get direct quotes to compare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#calculator"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-colors"
            >
              Try Our Calculator
            </Link>
            <Link
              href="/"
              className="inline-block bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 px-8 rounded-xl transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
