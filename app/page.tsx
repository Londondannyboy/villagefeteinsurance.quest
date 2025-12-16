import { Metadata } from 'next'
import { QuoteCalculator } from '@/components/QuoteCalculator'

export const metadata: Metadata = {
  title: 'Village Fete Insurance UK 2025 | Community Event Insurance from £66',
  description: 'Village fete insurance UK - get instant quotes for community events, church fetes, charity fundraisers & school events. Public liability insurance from specialist UK providers. Cover from £66 per event.',
  alternates: {
    canonical: 'https://villagefeteinsurance.quest',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need insurance for a village fete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, village fete insurance is highly recommended and often required by venues. Public liability insurance protects against claims from attendees for injury or property damage. Most village halls, churches, and council venues require proof of insurance before allowing events.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does village fete insurance cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Village fete insurance typically includes Public Liability Insurance covering injury to attendees or property damage, Event Cancellation Insurance covering financial losses if the event must be cancelled, and optional extras like equipment cover, weather insurance, and alcohol liability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does village fete insurance cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Village fete insurance typically costs between £66-£336 per event depending on event size and coverage type. Small events (under 100 people) start from £66, medium events (100-500 people) from £132, and large events (500+ people) from £264. Additional coverage like equipment, weather, or alcohol liability adds £25-£40 each.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get same-day insurance for a village fete?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many specialist providers offer instant online quotes and same-day coverage for village fetes and community events. You can get covered within minutes of applying online, making it perfect for last-minute insurance needs.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section with Community Background */}
      <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=1080&crop=entropy"
            alt="village fete community event outdoor festival celebration"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/85 to-slate-900/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Protect Your Community Event
            <span className="block bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent mt-2">with Confidence</span>
          </h1>
          <p className="text-xl text-slate-100 mb-4 font-light">
            Comprehensive village fete insurance from specialist UK providers
          </p>
          <p className="text-lg text-slate-200 mb-8">
            Get <strong>public liability & event cancellation insurance</strong> for church fetes, community events, charity fundraisers & school events.
          </p>
          <p className="text-sm text-slate-300 mb-6">
            <strong>Village fete insurance from £66 per event</strong> • Instant quotes • Same-day cover available
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-200">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Public Liability</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Event Cancellation</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Church Fetes</span>
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">Community Events</span>
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section id="calculator" className="py-8 px-4">
        <QuoteCalculator />
      </section>

      {/* Why Insurance Section */}
      <section id="coverage" className="relative py-16 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1478147427282-58a87a120781?w=1920&h=1080&fit=crop&q=80"
            alt="community event outdoor celebration festival gathering"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/92 to-slate-900/95"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Why Do You Need Village Fete Insurance?
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            <strong>Village fete insurance</strong> protects your community event from liability claims and unexpected cancellations. Essential coverage for organizers, volunteers, and communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Public Liability</h3>
              <p className="text-sm text-slate-400">
                Public liability insurance covers injury to attendees or damage to property during your event. Essential for all community gatherings and required by most venues.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Event Cancellation</h3>
              <p className="text-sm text-slate-400">
                Event cancellation insurance covers financial losses if your fete must be cancelled due to bad weather, illness, or unforeseen circumstances. Protects your fundraising investment.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Venue Requirements</h3>
              <p className="text-sm text-slate-400">
                Most village halls, churches, and council venues require proof of public liability insurance before allowing events. Our insurance meets all standard venue requirements.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Equipment Cover</h3>
              <p className="text-sm text-slate-400">
                Optional equipment cover protects tents, stalls, sound systems, and other event equipment against theft, damage, or loss during your village fete.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Peace of Mind</h3>
              <p className="text-sm text-slate-400">
                Focus on running a successful community event knowing you're protected. Insurance covers legal fees, compensation claims, and unexpected costs.
              </p>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Affordable Rates</h3>
              <p className="text-sm text-slate-400">
                Village fete insurance is reasonably priced. Specialist insurers offer competitive rates from as little as £66 per event for comprehensive public liability coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types Covered Section */}
      <section id="event-types" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Community Events We Cover
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
            Specialist <strong>village fete insurance</strong> for all types of community events, charity fundraisers, and local gatherings across the UK.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">Church Fetes</h3>
              <p className="text-slate-400 text-sm mb-4">
                Public liability insurance for church fundraising events, summer fetes, and parish gatherings. Required by most church venues.
              </p>
              <p className="text-sm text-slate-500">Public Liability + Cancellation</p>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">Community Events</h3>
              <p className="text-slate-400 text-sm mb-4">
                Insurance for village festivals, community celebrations, and local gatherings organized by residents and community groups.
              </p>
              <p className="text-sm text-slate-500">Comprehensive Coverage</p>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">Charity Fundraisers</h3>
              <p className="text-slate-400 text-sm mb-4">
                Specialist coverage for charity events, fundraising fetes, and non-profit community activities. Protect your fundraising efforts.
              </p>
              <p className="text-sm text-slate-500">Fundraiser Protection</p>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">School Fetes</h3>
              <p className="text-slate-400 text-sm mb-4">
                Public liability insurance for school fundraising events, PTAs, and educational institution community gatherings.
              </p>
              <p className="text-sm text-slate-500">School Event Cover</p>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">Parish Council Events</h3>
              <p className="text-slate-400 text-sm mb-4">
                Coverage for parish council organized events, local authority gatherings, and council-run community activities.
              </p>
              <p className="text-sm text-slate-500">Council Event Insurance</p>
            </div>

            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 text-center">
              <h3 className="text-xl font-bold text-green-400 mb-2">Village Hall Events</h3>
              <p className="text-slate-400 text-sm mb-4">
                Public liability for events held in village halls, community centers, and local meeting spaces across the UK.
              </p>
              <p className="text-sm text-slate-500">Hall Event Coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Get Village Fete Insurance in 3 Easy Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-2xl p-6 border border-green-500/30 relative">
              <div className="absolute -top-4 left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-white text-lg">1</div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">Share Event Details</h3>
                <p className="text-slate-400 text-sm">
                  Tell us about your village fete - event type, expected attendance, and date. Get instant quotes from specialist community event insurers.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-2xl p-6 border border-green-500/30 relative">
              <div className="absolute -top-4 left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-white text-lg">2</div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">Choose Your Coverage</h3>
                <p className="text-slate-400 text-sm">
                  Select public liability, event cancellation, or combined cover. Add optional extras like equipment cover, weather insurance, or alcohol liability.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-2xl p-6 border border-green-500/30 relative">
              <div className="absolute -top-4 left-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-white text-lg">3</div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">Get Instant Cover</h3>
                <p className="text-slate-400 text-sm">
                  Complete your policy online and receive your certificate immediately. Same-day cover available for last-minute insurance needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Why Choose Village Fete Insurance UK
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-green-400 mb-3">⚡ Instant Quotes</h3>
              <p className="text-slate-400">
                Get personalized insurance quotes in minutes. Our calculator analyzes your event details to provide accurate pricing instantly.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-green-400 mb-3">🏆 Specialist Providers</h3>
              <p className="text-slate-400">
                We work exclusively with UK insurers specializing in community events, understanding the unique needs of village fetes and local gatherings.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-green-400 mb-3">📊 Transparent Pricing</h3>
              <p className="text-slate-400">
                No hidden fees or surprises. See exactly what you're paying with clear breakdowns of public liability, cancellation, and optional extras.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-green-400 mb-3">✓ Same-Day Cover</h3>
              <p className="text-slate-400">
                Need insurance urgently? Get same-day coverage with instant online certificates. Perfect for last-minute event insurance requirements.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-green-400 mb-3">🎯 Flexible Options</h3>
              <p className="text-slate-400">
                Choose from public liability, event cancellation, or combined cover. Add equipment protection, weather insurance, or alcohol liability as needed.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="text-lg font-bold text-green-400 mb-3">🚀 Expert Support</h3>
              <p className="text-slate-400">
                Our guides help you understand village fete insurance requirements, making informed decisions about protecting your community event.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-12">
            Village Fete Insurance FAQs
          </h2>

          <div className="space-y-6">
            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Do I need insurance for a village fete?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, village fete insurance is highly recommended and often required by venues. Public liability insurance protects against claims from attendees for injury or property damage. Most village halls, churches, and council venues require proof of insurance before allowing events. Even if not required, it&apos;s essential protection for organizers and volunteers.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What does village fete insurance cover?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Village fete insurance typically includes Public Liability Insurance covering injury to attendees or property damage, Event Cancellation Insurance covering financial losses if the event must be cancelled, and optional extras like equipment cover (tents, stalls), weather insurance, and alcohol liability. Combined policies offer comprehensive protection for community events.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                How much does village fete insurance cost?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Village fete insurance typically costs between £66-£336 per event depending on event size and coverage type. Small events (under 100 people) start from £66, medium events (100-500 people) from £132, and large events (500+ people) from £264. Additional coverage like equipment protection (£25), weather insurance (£35), or alcohol liability (£40) can be added. Use our calculator for a personalized quote.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Can I get same-day insurance for a village fete?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Yes, many specialist providers offer instant online quotes and same-day coverage for village fetes and community events. You can get covered within minutes of applying online, receive your certificate immediately, and start your event with full protection. Perfect for last-minute insurance needs or forgotten policies.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What is the difference between public liability and event cancellation insurance?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Public Liability Insurance covers claims from attendees for injury or property damage during your event (e.g., someone trips over a stall). Event Cancellation Insurance covers your financial losses if the event must be cancelled due to weather, illness, or unforeseen circumstances. Most village fetes need both types of coverage for complete protection. Combined policies offer both at a discounted rate.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Does village fete insurance cover alcohol sales?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Standard village fete insurance may not automatically cover alcohol sales. If your event includes a bar, beer tent, or alcohol sales, you&apos;ll need to add Alcohol Liability coverage (typically £40 extra). This protects against claims related to alcohol service. Always declare alcohol sales when getting quotes to ensure proper coverage.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                What level of public liability cover do I need?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Most venues require £5 million or £10 million public liability coverage for village fetes. Small community events typically need £5 million, while larger events or those with higher-risk activities may require £10 million. Check your venue requirements before purchasing. Our specialist providers offer both coverage levels at competitive rates.
              </p>
            </details>

            <details className="bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 group">
              <summary className="text-lg font-semibold text-white cursor-pointer list-none flex justify-between items-center">
                Does weather insurance cover rain at outdoor events?
                <svg className="w-5 h-5 text-green-400 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </summary>
              <p className="mt-4 text-slate-400">
                Weather insurance (also called pluvius insurance) covers financial losses if your event is cancelled or disrupted due to adverse weather conditions including rain, wind, or extreme temperatures. Coverage terms vary by provider - some require specific rainfall amounts measured at local weather stations. Weather insurance is recommended for outdoor village fetes held during unpredictable seasons.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-900/40 to-emerald-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Protect Your Community Event Today
          </h2>
          <p className="text-slate-300 text-lg mb-6">
            Get instant quotes for village fete insurance from specialist UK providers. Coverage from £66 per event.
          </p>
          <p className="text-slate-300 mb-8">
            Public liability insurance, event cancellation cover, and optional extras for complete protection.
          </p>
          <a
            href="#calculator"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}
