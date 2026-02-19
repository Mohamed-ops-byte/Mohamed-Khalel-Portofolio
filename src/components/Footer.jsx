import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center font-bold">
              TG
            </div>
            <span className="text-lg font-bold">Tourist Guide</span>
          </div>
          <p className="text-slate-400 max-w-md">
            Static design-only footer mirroring the main layout and palette.
          </p>
          <div className="flex space-x-4 text-slate-400">
            <span className="hover:text-white transition-colors">Fb</span>
            <span className="hover:text-white transition-colors">Ig</span>
            <span className="hover:text-white transition-colors">Tw</span>
            <span className="hover:text-white transition-colors">Ln</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-400">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-2 text-slate-400">
            <li>+1 (555) 123-4567</li>
            <li>guide@touristexpert.com</li>
            <li>Cairo, Egypt</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 text-center text-slate-500 py-4 text-sm">
        © {year} Design-only demo. No live logic.
      </div>
    </footer>
  );
}
