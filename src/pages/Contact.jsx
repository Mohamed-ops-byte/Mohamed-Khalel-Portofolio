const heroImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Cairo_panorama.jpg';
const mapImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Corniche_of_Alexandria.jpg';

export default function Contact() {
  return (
    <div className="bg-gray-50 pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-accent-900/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 text-center text-white px-4 space-y-3">
          <p className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">Contact • Static Form</p>
          <h1 className="text-5xl md:text-6xl font-bold">Get in Touch</h1>
          <p className="text-lg text-slate-100 max-w-2xl mx-auto">This form is non-functional and only demonstrates the layout.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 px-4">
          <div>
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <p className="text-slate-600 mb-8">Fields are static; nothing is submitted. Use this page to review spacing, labels, and CTA styling.</p>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone</label>
                <input type="tel" placeholder="+1 (555) 123-4567" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Tour Type *</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Select a tour type</option>
                  <option>Private Tour</option>
                  <option>Group Tour</option>
                  <option>Historical Tour</option>
                  <option>Adventure Tour</option>
                  <option>Cultural Tour</option>
                  <option>Custom Trip</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message *</label>
                <textarea rows="5" placeholder="Share your travel plans..." className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500" />
              </div>
              <button type="button" className="w-full btn-primary text-center">Send Message (Mock)</button>
            </form>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
              <p className="text-slate-600 mb-6">Cards below are for visual reference only.</p>
              <div className="space-y-4">
                <div className="card flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Phone</p>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="card flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-slate-600">guide@touristexpert.com</p>
                  </div>
                </div>

                <div className="card flex items-center space-x-4 bg-green-50">
                  <div className="w-14 h-14 rounded-lg bg-green-500 text-white flex items-center justify-center">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">WhatsApp</p>
                    <p className="text-slate-600">Message me directly</p>
                  </div>
                </div>

                <div className="card flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Location</p>
                    <p className="text-slate-600">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow</h3>
              <div className="flex space-x-4 mb-8">
                {['Fb', 'Ig', 'Tw', 'Ln'].map((item) => (
                  <span key={item} className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">{item}</span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3">Map Preview</h3>
              <div className="rounded-xl overflow-hidden shadow-lg bg-slate-200 h-64">
                <img src={mapImage} alt="Map preview" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
