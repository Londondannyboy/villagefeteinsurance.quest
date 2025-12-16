import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Village Fete Insurance UK</h3>
            <p className="text-slate-400 text-sm">
              Compare <strong>village fete insurance</strong> quotes from specialist UK providers.
              Get public liability & event cancellation cover for community events.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Event Types</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#event-types" className="hover:text-white transition-colors">Church Fetes</a></li>
              <li><a href="#event-types" className="hover:text-white transition-colors">Community Events</a></li>
              <li><a href="#event-types" className="hover:text-white transition-colors">Charity Fundraisers</a></li>
              <li><a href="#event-types" className="hover:text-white transition-colors">School Fetes</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Coverage</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#coverage" className="hover:text-white transition-colors">Public Liability</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Event Cancellation</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Equipment Cover</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">Weather Insurance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#calculator" className="hover:text-white transition-colors">Get Quote</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Village Fete Insurance UK. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Compare <strong>village fete insurance</strong> quotes from UK specialist providers.
            We help you find public liability & event cancellation cover for community events.
          </p>
        </div>
      </div>
    </footer>
  )
}
