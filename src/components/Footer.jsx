import { Phone, MapPin, Mail, Clock, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Visit Butter & Beer</h3>
            <p className="mt-2 max-w-prose text-sm text-neutral-300">
              We’re proud to call Nova Scotia home. Swing by for dinner, weekend brunch, game nights, or a round with friends.
            </p>

            <div className="mt-6 space-y-3 text-sm text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-rose-400" />
                <p>
                  123 Waterfront Ave, Nova Scotia, Canada
                  <br />
                  (Sample address for demo)
                </p>
              </div>
              <a href="tel:+10000000000" className="flex items-center gap-3 hover:text-white">
                <Phone className="h-4 w-4 text-emerald-400" /> +1 (000) 000-0000
              </a>
              <a href="mailto:hello@butterandbeer.ca" className="flex items-center gap-3 hover:text-white">
                <Mail className="h-4 w-4 text-sky-400" /> hello@butterandbeer.ca
              </a>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 text-amber-400" />
                <p>
                  Mon–Thu: 12pm–10pm • Fri–Sat: 12pm–12am • Sun: 11am–9pm
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-neutral-300">
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 hover:bg-white/5">
                <Instagram className="h-4 w-4" /> Instagram
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 hover:bg-white/5">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h4 className="font-medium">Reservations & Events</h4>
            <p className="mt-2 text-sm text-neutral-300">
              Planning a family dinner, corporate mixer, or birthday? We offer group menus, a dedicated bar setup, and can accommodate dietary preferences.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm placeholder-neutral-500 outline-none focus:ring-2 focus:ring-amber-500/40"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm placeholder-neutral-500 outline-none focus:ring-2 focus:ring-amber-500/40"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm placeholder-neutral-500 outline-none focus:ring-2 focus:ring-amber-500/40 sm:col-span-2"
              />
              <textarea
                name="message"
                placeholder="Date, time, guests, and any requests"
                rows={4}
                className="w-full rounded-md border border-white/10 bg-neutral-900 px-3 py-2 text-sm placeholder-neutral-500 outline-none focus:ring-2 focus:ring-amber-500/40 sm:col-span-2"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-amber-500 to-rose-500 px-4 py-2 text-sm font-semibold text-neutral-900 shadow hover:opacity-95 sm:col-span-2"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-neutral-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Butter & Beer Restaurant • Nova Scotia, Canada</p>
          <p>Designed with love by a Mallu family • Eat well, drink better</p>
        </div>
      </div>
    </footer>
  );
}
