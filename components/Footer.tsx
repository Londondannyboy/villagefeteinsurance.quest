import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">
              <Link href="/" className="hover:text-green-400 transition-colors">
                Village Fete Insurance UK
              </Link>
            </h3>
            <p className="text-slate-400 text-sm">
              Compare <Link href="/" className="text-green-400 hover:text-green-300 font-semibold">village fete insurance</Link> quotes from specialist UK providers.
              Get public liability & event cancellation cover for community events.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Event Types</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/articles/church-fete-insurance" className="hover:text-white transition-colors">Church Fetes</Link></li>
              <li><Link href="/" className="hover:text-white transition-colors">Community Events</Link></li>
              <li><a href="#event-types" className="hover:text-white transition-colors">Charity Fundraisers</a></li>
              <li><Link href="/articles/school-fete-insurance" className="hover:text-white transition-colors">School Fetes</Link></li>
              <li><Link href="/articles/summer-fete-insurance" className="hover:text-white transition-colors">Summer Fetes</Link></li>
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
              <li><a href="/#calculator" className="hover:text-white transition-colors">Get Quote</a></li>
              <li><Link href="/articles" className="hover:text-white transition-colors">Articles</Link></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 mt-8 pt-6">
          <div className="bg-slate-800/30 rounded-lg p-4 mb-6">
            <p className="text-xs text-slate-400 text-center">
              <strong className="text-slate-300">Beta Service Notice:</strong> Village Fete Insurance UK is a comparison service in beta.
              We help you compare <Link href="/" className="text-green-400 hover:text-green-300">village fete insurance</Link> quotes from specialist providers but do not provide financial advice.
              Always read policy documents carefully and ensure coverage meets your specific needs.
              We may receive commission from providers featured on this site.
            </p>
          </div>

          <div className="text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Village Fete Insurance UK. All rights reserved.</p>
            <p className="mt-2 text-xs">
              Compare <Link href="/" className="text-green-400 hover:text-green-300 font-semibold">village fete insurance</Link> quotes from UK specialist providers.
              We help you find public liability & event cancellation cover for community events.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
