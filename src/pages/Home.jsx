import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllServices } from '../Redux/Actions/servicesAction.jsx';
import { getAllGalaries } from '../Redux/Actions/galeriesAction.jsx';
const heroImage = 'https://commons.wikimedia.org/wiki/Special:FilePath/All_pyramids_of_Giza_panorama_2.jpg';

export default function Home() {
  // const [services, setServices] = useState([]);
  // const [loading, setLoading] = useState(true);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllServices());
    dispatch(getAllGalaries());
  }, []);

  const services = useSelector((state) => state.allservices.services);
  const servicesloading = useSelector((state) => state.allservices.loading);



const gallery = useSelector((state) => state.allgalaries.galaries);
const galariesloading = useSelector((state) => state.allgalaries.loading);
  const galleryItems = Array.isArray(gallery) ? gallery : [];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'USA',
      text: 'A delightful mock testimonial showcasing the layout.',
    },
    {
      name: 'Michael Chen',
      location: 'Singapore',
      text: 'Static content to demonstrate the spacing of cards.',
    },
    {
      name: 'Emma Rodriguez',
      location: 'Spain',
      text: 'Use this card to assess shadows, padding, and palette.',
    },
  ];

  return (
    <div className="bg-gray-50">
     {/* top section */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 to-accent-900/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl space-y-6">
          <p className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">Design Mock • No Logic</p>
          <h1 className="text-5xl md:text-7xl font-bold">Mohamed Khalel</h1>
          <p className="text-xl md:text-2xl text-slate-100">
            Your Local Expert for Unforgettable Tours — static React version.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg">Book a Tour</Link>
            <Link to="/services" className="btn-outline text-lg">View Services</Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-6 px-4">
          <h2 className="text-4xl font-bold">Welcome to Your Next Adventure</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Static React page showing the same layout and palette as the live app. All content is fixed for design review.
          </p>
        </div>
      </section>
    {/* services section */}

      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 space-y-2">
            <p className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold">Services</p>
            <h2 className="text-4xl font-bold">Tailored Experiences</h2>
            <p className="text-lg text-slate-600">
              {servicesloading ? 'Loading...' : `${services.length} services from database`}
            </p>
          </div>
          {servicesloading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
            </div>
          ) : services.length > 0 ? (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.id} className="card hover:-translate-y-1 transition-transform">
                  {service.image && (
                    <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  )}
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-3">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 font-bold">${service.price}</span>
                    <span className="text-sm text-slate-500">⏱️ {service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-600">No services available</p>
            </div>
          )}
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">Explore All Services</Link>
          </div>
        </div>
      </section>
    {/* gallery section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold">Featured Tours</p>
            <h2 className="text-4xl font-bold mb-3">Gallery Preview</h2>
            <p className="text-slate-600">Static collage to visualize the gallery layout.</p>
          </div>
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {galleryItems.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                to={`/gallery/${item.id}`}
                className="relative overflow-hidden rounded-xl shadow-lg group"
                aria-label={`Open ${item.title} gallery`}
              >
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    {/* testimonials section */}

      <section className="section-padding bg-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="inline-block px-4 py-2 rounded-full bg-white text-primary-700 font-semibold border border-primary-100">Testimonials</p>
            <h2 className="text-4xl font-bold mb-3">Traveler Voices</h2>
            <p className="text-slate-600">Cards presented purely for styling.</p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="card">
                <div className="flex text-amber-400 mb-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-slate-700 italic mb-4">“{item.text}”</p>
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-slate-500">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-4 px-4">
          <h2 className="text-4xl font-bold">Ready to Start?</h2>
          <p className="text-lg">This call-to-action is decorative only. Navigate to other static pages to see the rest of the design.</p>
          <Link to="/contact" className="btn-secondary bg-white text-primary-700 hover:bg-gray-100">Contact Me</Link>
        </div>
      </section>
    </div>
  );
}
