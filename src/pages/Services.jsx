import { useMemo, useState } from 'react';

const heroImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/View_from_the_west_bank_to_the_Nile,_islands,_and_Aswan.jpg';
const gallery1 = 'https://commons.wikimedia.org/wiki/Special:FilePath/Corniche_of_Alexandria.jpg';
const gallery2 = 'https://commons.wikimedia.org/wiki/Special:FilePath/LuxorTempleFromSE.jpg';
const gallery3 = 'https://commons.wikimedia.org/wiki/Special:FilePath/AswanHighDam_Egypt.jpg';
const luxorBalloon1 = 'https://commons.wikimedia.org/wiki/Special:FilePath/Balloon_over_Luxor_-_Egypt.jpg';
const luxorBalloon2 = 'https://commons.wikimedia.org/wiki/Special:FilePath/Luxor_hot_air_balloon_E.jpg';

export default function Services() {
  const serviceCards = [
    { title: 'Private Tour', desc: 'Tailored journeys with dedicated attention.', price: 'Contact for quote', icon: '👤' },
    { title: 'Group Tour', desc: 'Shared experiences with new friends.', price: '$79 / person', icon: '👥' },
    { title: 'Heritage Walk', desc: 'Deep dives into timeless stories.', price: '$120 package', icon: '🏛️' },
    { title: 'Adventure Day', desc: 'Energetic outdoor excursions.', price: '$210 package', icon: '⛰️' },
    { title: 'Cultural Night', desc: 'Evening immersion in local arts.', price: '$95 / person', icon: '🎭' },
    { title: 'Custom Trip', desc: 'Build-your-own experience.', price: 'Let’s discuss', icon: '✨' },
  ];

  const gallery = [
    { id: 1, title: 'Temple Tour', image: gallery1, category: 'History' },
    { id: 2, title: 'Market Experience', image: gallery2, category: 'Culture' },
    { id: 3, title: 'City Walk', image: gallery3, category: 'Adventure' },
    { id: 4, title: 'River Cruise', image: gallery1, category: 'Culture' },
    { id: 5, title: 'Desert Trek', image: gallery3, category: 'Adventure' },
    { id: 6, title: 'Museum Day', image: gallery2, category: 'History' },
    { id: 7, title: 'Luxor Balloon Sunrise', image: luxorBalloon1, category: 'Adventure' },
    { id: 8, title: 'Luxor Balloon Ride', image: luxorBalloon2, category: 'Adventure' },
  ];

  const categoryOptions = useMemo(() => {
    const unique = Array.from(new Set(gallery.map((item) => item.category)));
    return ['All', ...unique];
  }, [gallery]);

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredGallery = useMemo(() => {
    if (activeCategory === 'All') {
      return gallery;
    }
    return gallery.filter((item) => item.category === activeCategory);
  }, [activeCategory, gallery]);

  return (
    <div className="bg-gray-50 pt-20">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-accent-900/80 z-10" />
        <div className="relative z-20 text-center text-white px-4 space-y-3">
          <p className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">Services • Visual Only</p>
          <h1 className="text-5xl md:text-6xl font-bold">Explore Services</h1>
          <p className="text-lg text-slate-100">Static layout with curated cards, gallery, and videos.</p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 space-y-2">
            <p className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold">What I Offer</p>
            <h2 className="text-4xl font-bold">Service Cards</h2>
            <p className="text-slate-600">Static set of cards mirroring the live layout.</p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <div key={service.title} className="card">
                <p className="text-5xl mb-3">{service.icon}</p>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.desc}</p>
                <ul className="space-y-2 mb-4 text-slate-700">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Sample benefit one</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Sample benefit two</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Sample benefit three</li>
                </ul>
                <p className="text-primary-600 font-bold">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold">Gallery</p>
            <h2 className="text-4xl font-bold mb-3">Past Moments</h2>
            <p className="text-slate-600">Pick a category to filter the gallery.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categoryOptions.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-lg font-semibold shadow transition-colors ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-slate-700 hover:bg-primary-50'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredGallery.map((item) => (
              <div key={item.id} className="relative overflow-hidden rounded-xl shadow-lg">
                <img src={item.image} alt={item.title} className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-white/80">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold">Videos</p>
            <h2 className="text-3xl font-bold mb-2">Tour Videos</h2>
            <p className="text-slate-600">High-quality video embeds.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: 'Egypt 8K',
                url: 'https://www.youtube.com/embed/a-Wy0RHFJrE?rel=0&modestbranding=1',
                link: 'https://www.youtube.com/watch?v=a-Wy0RHFJrE',
              },
              {
                title: 'Luxor 8K',
                url: 'https://www.youtube.com/embed/LfFVk_OwZ-0?rel=0&modestbranding=1',
                link: 'https://www.youtube.com/watch?v=LfFVk_OwZ-0',
              },
              {
                title: 'Alexandria 8K',
                url: 'https://www.youtube.com/embed/C2LutvE6YEo?rel=0&modestbranding=1',
                link: 'https://www.youtube.com/watch?v=C2LutvE6YEo',
              },
              {
                title: 'Aswan 8K',
                url: 'https://www.youtube.com/embed/73Tc-O_BWfw?rel=0&modestbranding=1',
                link: 'https://www.youtube.com/watch?v=73Tc-O_BWfw',
              },
            ].map((video) => (
              <div key={video.title} className="rounded-xl overflow-hidden shadow-lg bg-slate-900">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 bg-white">
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-lg text-slate-900 hover:text-primary-600 transition-colors"
                  >
                    {video.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-4 px-4">
          <h2 className="text-4xl font-bold">Book Your Experience</h2>
          <p className="text-lg">CTA is decorative. Visit the contact page mock for a static form.</p>
          <a href="/contact" className="btn-secondary bg-white text-primary-700 hover:bg-gray-100">Go to Contact</a>
        </div>
      </section>
    </div>
  );
}
