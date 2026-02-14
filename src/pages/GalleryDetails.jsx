import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGalaries } from '../Redux/Actions/galeriesAction.jsx';

export default function GalleryDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { galaries = [], loading = true } = useSelector((state) => state.allgalaries || {});

  useEffect(() => {
    dispatch(getAllGalaries());
  }, [dispatch]);

  const galleryItem = useMemo(
    () => galaries.find((item) => String(item.id) === String(id)),
    [galaries, id]
  );

  const images = galleryItem?.images?.length
    ? galleryItem.images
    : galleryItem?.image
      ? [galleryItem.image]
      : [];

  if (loading) {
    return (
      <div className="bg-gray-50 pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary-600 border-t-transparent"></div>
        </div>
      </div>
    );
  }

  if (!galleryItem) {
    return (
      <div className="bg-gray-50 pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-4">
          <h1 className="text-3xl font-bold">Gallery not found</h1>
          <p className="text-slate-600">The gallery item you selected does not exist.</p>
          <Link to="/" className="btn-primary inline-flex">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 pt-24 pb-16">
      <section className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img src={galleryItem.image} alt={galleryItem.title} className="w-full h-80 object-cover" />
            </div>
            <Link to="/" className="inline-flex items-center text-primary-700 font-semibold">
              ← Back to Home
            </Link>
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="inline-block px-4 py-2 rounded-full bg-primary-50 text-primary-700 font-semibold">Gallery</p>
            <h1 className="text-4xl font-bold">{galleryItem.title}</h1>
            <p className="text-slate-600 text-lg">{galleryItem.description}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Related Photos</h2>
          {images.length === 0 ? (
            <p className="text-slate-600">No images available for this gallery.</p>
          ) : (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {images.map((image, index) => (
                <div key={`${galleryItem.id}-${index}`} className="overflow-hidden rounded-xl shadow-lg">
                  <img src={image} alt={`${galleryItem.title} ${index + 1}`} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
