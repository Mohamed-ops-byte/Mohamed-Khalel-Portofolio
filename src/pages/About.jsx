import profileImage from '../assets/1.webp';

const heroImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/Luxor_Temple_R04.jpg';

export default function About() {
  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Conversational' },
    { name: 'Spanish', level: 'Basic' },
  ];

  const certifications = [
    { title: 'Licensed Tourist Guide', meta: 'Ministry of Tourism • 2014' },
    { title: 'Cultural Heritage Specialist', meta: 'UNESCO • 2019' },
    { title: 'Adventure Tourism Guide', meta: 'International Board • 2020' },
    { title: 'First Aid & CPR', meta: 'Red Cross • 2023' },
  ];

  const highlights = [
    { title: 'Certified', desc: 'Visual card emphasizing credentials.' },
    { title: 'Flexible', desc: 'Card layout showing timing flexibility.' },
    { title: 'Small Groups', desc: 'Demonstrates grid spacing for feature cards.' },
    { title: 'Value', desc: 'Static depiction of pricing emphasis.' },
    { title: 'Local Insight', desc: 'Card used to show local knowledge pitch.' },
    { title: 'Trusted', desc: 'Represents satisfaction messaging.' },
  ];

  return (
    <div className="bg-gray-50 pt-20">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-accent-900/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-10 text-center text-white px-4 space-y-3">
          <p className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">About • Visual Only</p>
          <h1 className="text-5xl md:text-6xl font-bold">About Mohamed</h1>
          <p className="text-lg text-slate-100">Static hero inspired by the original page.</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-2 items-center px-4">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src={profileImage}
                alt="Guide portrait"
                className="w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-4xl font-bold">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Mohamed Khalel</h2>
            <p className="text-lg text-slate-600">This bio block mirrors the production layout with fixed copy for design review.</p>
            <p className="text-lg text-slate-600">All statistics and facts are placeholders; adjust as needed when wiring real data.</p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <p className="text-3xl font-bold text-primary-600">500+</p>
                <p className="text-sm text-slate-600">Tours</p>
              </div>
              <div className="text-center p-4 bg-accent-50 rounded-lg">
                <p className="text-3xl font-bold text-accent-600">1200+</p>
                <p className="text-sm text-slate-600">Clients</p>
              </div>
              <div className="text-center p-4 bg-primary-50 rounded-lg">
                <p className="text-3xl font-bold text-primary-600">4.9★</p>
                <p className="text-sm text-slate-600">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Languages</h2>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4">
            {languages.map((lang) => (
              <div key={lang.name} className="card text-center">
                <div className="text-3xl mb-2">🌐</div>
                <p className="font-bold">{lang.name}</p>
                <p className="text-primary-600">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.title} className="card flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">{cert.title}</p>
                  <p className="text-slate-600 text-sm">{cert.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="inline-block px-4 py-2 rounded-full bg-white text-primary-700 font-semibold border border-primary-100">Why Choose Me</p>
            <h2 className="text-4xl font-bold">Highlights</h2>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="card text-center hover:-translate-y-1 transition-transform">
                <div className="text-primary-600 flex justify-center mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <p className="font-bold text-xl mb-2">{item.title}</p>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
