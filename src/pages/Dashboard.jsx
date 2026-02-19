import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGalaries, updateGallery, deleteGallery } from '../Redux/Actions/galeriesAction.jsx';
import { getAllServices, updateService, deleteService } from '../Redux/Actions/servicesAction.jsx';
import { demoLogin, demoRegister, demoLogout, getDemoSession } from '../data/demoAuth';
import { resetDemoData } from '../data/demoStore';
const gallery1 = 'https://source.unsplash.com/1200x900/?karnak,temple';
const gallery2 = 'https://source.unsplash.com/1200x900/?philae,temple';
const gallery3 = 'https://source.unsplash.com/1200x900/?felucca,aswan';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { galaries = [], loading: galleriesLoading = true } = useSelector((state) => state.allgalaries || {});
  const { services = [], loading: servicesLoading = true } = useSelector((state) => state.allservices || {});

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [updateLoading, setUpdateLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');

  const [selectedGalleryId, setSelectedGalleryId] = useState(null);
  const [galleryForm, setGalleryForm] = useState({
    title: '',
    title_ar: '',
    description: '',
    description_ar: '',
    image: '',
  });

  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [serviceForm, setServiceForm] = useState({
    title: '',
    description: '',
    price: '',
    category_id: '',
  });
  const [showServiceEditModal, setShowServiceEditModal] = useState(false);
  
  // Login Form State
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Register Form State
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  // Restore demo session if available
  useEffect(() => {
    const session = getDemoSession();
    if (session) {
      setUser(session.user);
      setIsLoggedIn(true);
    }
  }, []);

  // Fetch galleries when authenticated
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getAllGalaries());
      dispatch(getAllServices());
    }
  }, [dispatch, isLoggedIn]);

  // Sync selected gallery form with fetched data
  useEffect(() => {
    if (galaries.length > 0) {
      const selected = galaries.find((g) => g.id === selectedGalleryId) || galaries[0];
      setSelectedGalleryId((prev) => prev ?? selected.id);
      setGalleryForm({
        title: selected.title || '',
        title_ar: selected.title_ar || '',
        description: selected.description || '',
        description_ar: selected.description_ar || '',
        image: selected.image || '',
      });
    }
  }, [galaries, selectedGalleryId]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { user } = await demoLogin(loginData);
      setUser(user);
      setIsLoggedIn(true);
      console.log('✅ تم تسجيل الدخول بنجاح:', user);
    } catch (err) {
      setError('فشل تسجيل الدخول (وضع ديمو)');
      console.error('❌ خطأ في تسجيل الدخول:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { user } = await demoRegister(registerData);
      setUser(user);
      setIsLoggedIn(true);
      console.log('✅ تم التسجيل بنجاح:', user);
    } catch (err) {
      setError('فشل التسجيل (وضع ديمو)');
      console.error('❌ خطأ في التسجيل:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await demoLogout();
      setUser(null);
      setIsLoggedIn(false);
      setLoginData({ email: '', password: '' });
      setRegisterData({ name: '', email: '', password: '', password_confirmation: '' });
      console.log('✅ تم تسجيل الخروج');
    } catch (err) {
      console.error('❌ خطأ في تسجيل الخروج:', err);
    }
  };

  const handleResetDemo = () => {
    if (!window.confirm('هل تريد تحديث الصور والبيانات وإرجاعها للوضع الافتراضي؟')) return;
    resetDemoData();
    dispatch(getAllGalaries());
    dispatch(getAllServices());
    setResetMessage('تم تحديث الصور والبيانات بنجاح.');
    window.setTimeout(() => setResetMessage(''), 2500);
  };

  const handleSelectGallery = (id) => {
    setSelectedGalleryId(id);
    const selected = galaries.find((g) => g.id === id);
    if (selected) {
      setGalleryForm({
        title: selected.title || '',
        title_ar: selected.title_ar || '',
        description: selected.description || '',
        description_ar: selected.description_ar || '',
        image: selected.image || '',
      });
    }
  };

  const handleUpdateGallery = async (e) => {
    e.preventDefault();
    if (!selectedGalleryId) return;
    setUpdateLoading(true);
    setError('');
    try {
      await dispatch(updateGallery(selectedGalleryId, galleryForm));
    } catch (err) {
      setError('فشل تحديث المعرض');
      console.error('❌ خطأ في تحديث المعرض:', err);
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleEditService = (service) => {
    setSelectedServiceId(service.id);
    setServiceForm({
      title: service.title || '',
      description: service.description || '',
      price: service.price || '',
      category_id: service.category_id || '',
    });
    setShowServiceEditModal(true);
  };

  const handleUpdateService = async (e) => {
    e.preventDefault();
    setUpdateLoading(true);
    setError('');
    try {
      await dispatch(updateService(selectedServiceId, serviceForm));
      setShowServiceEditModal(false);
    } catch (err) {
      setError('فشل تحديث الخدمة');
      console.error('❌ خطأ في تحديث الخدمة:', err);
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleDeleteService = async (id) => {
    if (!window.confirm('هل أنت متأكد من حذف هذه الخدمة؟')) return;
    try {
      await dispatch(deleteService(id));
    } catch (err) {
      setError('فشل حذف الخدمة');
      console.error('❌ خطأ في حذف الخدمة:', err);
    }
  };

  const kpis = [
    { label: 'Services', value: '06', status: 'updated' },
    { label: 'Gallery Items', value: '12', status: 'live' },
    { label: 'Categories', value: '04', status: 'managed' },
    { label: 'Videos', value: '03', status: 'published' },
  ];

  const mockServices = [
    { title: 'Private Tour', desc: 'Custom route', price: '$220' },
    { title: 'Group Tour', desc: 'City highlights', price: '$79' },
    { title: 'Adventure Day', desc: 'Outdoor fun', price: '$210' },
  ];

  const guestHighlights = [
    {
      title: 'لوحة تحكم ذكية',
      desc: 'تابع الطلبات والحجوزات لحظة بلحظة من مكان واحد.',
      badge: 'جديد',
    },
    {
      title: 'عروضك في الواجهة',
      desc: 'اعرض خدماتك بطريقة جذابة مع صور وأسعار واضحة.',
      badge: 'مميز',
    },
    {
      title: 'إدارة سريعة',
      desc: 'حدّث الخدمات والمعارض بسهولة بدون خطوات معقدة.',
      badge: 'سهل',
    },
  ];

  const guestPerks = [
    { label: 'تحكم كامل', value: '100%' },
    { label: 'تجربة مجانية', value: '7 أيام' },
    { label: 'دعم مباشر', value: '24/7' },
  ];

  const gallery = [
    { title: 'Pyramids', image: gallery1 },
    { title: 'Nile Cruise', image: gallery2 },
    { title: 'Desert Safari', image: gallery3 },
  ];

  const categories = ['History', 'Adventure', 'Culture'];
  const videos = ['Sunrise Over Cairo', 'Evening Felucca Ride'];

  return (
    <div className="bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Authentication Section */}

        <div className="card">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">
                  {showLoginForm ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
                </h2>
                <p className="text-slate-600">
                  {showLoginForm ? 'سجل دخولك للوصول إلى لوحة التحكم' : 'أنشئ حسابك للبدء'}
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {error}
                </div>
              )}

              {showLoginForm ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-sm">
                    بيانات الدخول للديمو: test@test.com / 12345
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="admin@tourguide.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">كلمة المرور</label>
                    <input
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'جاري التسجيل...' : 'تسجيل الدخول'}
                  </button>
                  <p className="text-center text-sm text-slate-600">
                    ليس لديك حساب؟{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setShowLoginForm(false);
                        setError('');
                      }}
                      className="text-primary-600 font-semibold hover:underline"
                    >
                      إنشاء حساب
                    </button>
                  </p>
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">الاسم</label>
                    <input
                      type="text"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="محمد أحمد"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="example@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">كلمة المرور</label>
                    <input
                      type="password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="••••••••"
                      required
                      minLength={8}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">تأكيد كلمة المرور</label>
                    <input
                      type="password"
                      value={registerData.password_confirmation}
                      onChange={(e) => setRegisterData({ ...registerData, password_confirmation: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="••••••••"
                      required
                      minLength={8}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'جاري التسجيل...' : 'إنشاء الحساب'}
                  </button>
                  <p className="text-center text-sm text-slate-600">
                    لديك حساب بالفعل؟{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setShowLoginForm(true);
                        setError('');
                      }}
                      className="text-primary-600 font-semibold hover:underline"
                    >
                      تسجيل الدخول
                    </button>
                  </p>
                </form>
              )}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold">مرحباً بك</p>
                <p className="text-slate-700 text-lg font-semibold">{user?.name}</p>
                <p className="text-sm text-slate-500">{user?.email}</p>
                {resetMessage && (
                  <p className="mt-2 text-sm text-emerald-600 font-semibold">{resetMessage}</p>
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleResetDemo}
                  className="px-6 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-colors"
                  title="تحديث الصور والبيانات"
                >
                  تحديث الصور
                </button>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  تسجيل الخروج
                </button>
              </div>
            </div>
          )}
        </div>

        {!isLoggedIn && (
          <section className="promo-shell">
            <div className="promo-glow-amber" />
            <div className="promo-glow-rose" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-amber-600 font-semibold">TourGuide Dashboard</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  خلي عروضك تلمع قدام عملاءك
                </h2>
                <p className="mt-4 text-slate-600 text-lg">
                  لو مش مسجل دخول، خلينا نوريك الشكل اللي هتظهر به خدماتك. واجهة أنيقة، إدارة سهلة،
                  وتجربة تدفع العميل ياخد القرار بسرعة.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowLoginForm(false);
                      setError('');
                    }}
                    className="btn-primary"
                  >
                    ابدأ التجربة المجانية
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowLoginForm(true);
                      setError('');
                    }}
                    className="btn-outline"
                  >
                    لدي حساب بالفعل
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {guestPerks.map((perk) => (
                  <div key={perk.label} className="promo-stat">
                    <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold">{perk.label}</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">{perk.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 grid gap-4 md:grid-cols-3">
              {guestHighlights.map((item) => (
                <div key={item.title} className="promo-feature">
                  <div className="flex items-center justify-between">
                    <p className="promo-badge">{item.badge}</p>
                    <span className="text-xs text-slate-400">Dashboard</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {isLoggedIn && (
          <>
            <section className="card">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold">Galleries</p>
                  <p className="text-slate-700">تعديل بيانات المعرض باستخدام Redux</p>
                </div>
                {galleriesLoading && <span className="text-sm text-slate-500">جاري التحميل...</span>}
              </div>

              {!galleriesLoading && galaries.length > 0 ? (
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold">اختر معرض للتعديل</label>
                    <select
                      value={selectedGalleryId || ''}
                      onChange={(e) => handleSelectGallery(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      {galaries.map((g) => (
                        <option key={g.id} value={g.id}>{g.title}</option>
                      ))}
                    </select>

                    <div className="grid gap-3">
                      <div>
                        <p className="text-xs text-slate-500">العنوان</p>
                        <p className="font-semibold">{galleryForm.title}</p>
                      </div>
                      <div className="rounded-lg overflow-hidden shadow">
                        <img src={galleryForm.image} alt={galleryForm.title} className="w-full h-48 object-cover" />
                      </div>
                    </div>
                  </div>

                  <form className="space-y-4" onSubmit={handleUpdateGallery}>
                    <div>
                      <label className="block text-sm font-semibold mb-1">العنوان (EN)</label>
                      <input
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={galleryForm.title}
                        onChange={(e) => setGalleryForm({ ...galleryForm, title: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">العنوان (AR)</label>
                      <input
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={galleryForm.title_ar}
                        onChange={(e) => setGalleryForm({ ...galleryForm, title_ar: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">الوصف</label>
                      <textarea
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        rows={3}
                        value={galleryForm.description}
                        onChange={(e) => setGalleryForm({ ...galleryForm, description: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">الوصف (AR)</label>
                      <textarea
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        rows={3}
                        value={galleryForm.description_ar}
                        onChange={(e) => setGalleryForm({ ...galleryForm, description_ar: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1">رابط الصورة</label>
                      <input
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        value={galleryForm.image}
                        onChange={(e) => setGalleryForm({ ...galleryForm, image: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={updateLoading}
                      className="btn-primary w-full disabled:opacity-60"
                    >
                      {updateLoading ? 'جاري الحفظ...' : 'حفظ التعديلات'}
                    </button>
                  </form>
                </div>
              ) : (
                <p className="text-slate-600">لا توجد بيانات معارض لعرضها</p>
              )}
            </section>

            <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {kpis.map((item) => (
            <div key={item.label} className="card text-center">
              <p className="text-sm text-slate-500">{item.label}</p>
              <p className="text-3xl font-bold">{item.value}</p>
              <p className="text-xs text-green-600">{item.status}</p>
            </div>
          ))}
        </div>

        <section className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold">Services</p>
              <p className="text-slate-700">إدارة الخدمات</p>
            </div>
            <button className="btn-primary">إضافة خدمة</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-slate-500">
                  <th className="py-3">العنوان</th>
                  <th className="py-3">الوصف</th>
                  <th className="py-3">السعر</th>
                  <th className="py-3">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {services.length > 0 ? (
                  services.map((service) => (
                    <tr key={service.id}>
                      <td className="py-3 font-semibold">{service.title}</td>
                      <td className="py-3 text-slate-600">{service.description?.substring(0, 50)}...</td>
                      <td className="py-3 text-primary-600">${service.price}</td>
                      <td className="py-3 text-primary-600">
                        <button
                          onClick={() => handleEditService(service)}
                          className="text-blue-600 hover:text-blue-800 mr-4"
                        >
                          ✏️ تعديل
                        </button>
                        <button
                          onClick={() => handleDeleteService(service.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          🗑️ حذف
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="py-4 text-center text-slate-500">لا توجد خدمات</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Service Edit Modal */}
        {showServiceEditModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-bold mb-4">تعديل الخدمة</h3>
              <form onSubmit={handleUpdateService} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-1">العنوان</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={serviceForm.title}
                    onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">الوصف</label>
                  <textarea
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    rows={3}
                    value={serviceForm.description}
                    onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1">السعر</label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={serviceForm.price}
                    onChange={(e) => setServiceForm({ ...serviceForm, price: e.target.value })}
                    step="0.01"
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={updateLoading}
                    className="flex-1 btn-primary disabled:opacity-60"
                  >
                    {updateLoading ? 'جاري الحفظ...' : 'حفظ'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowServiceEditModal(false)}
                    className="flex-1 btn-outline"
                  >
                    إلغاء
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <section className="card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold">Gallery</p>
              <p className="text-slate-700">Static card grid, no upload logic.</p>
            </div>
            <button className="btn-outline">Add image (mock)</button>
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.title} className="relative overflow-hidden rounded-xl shadow-lg">
                <img src={item.image} className="w-full h-48 object-cover" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-3 left-3 text-white font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card grid gap-6 lg:grid-cols-2">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold">Categories</p>
                <p className="text-slate-700">Static list only</p>
              </div>
              <button className="btn-outline">Add (mock)</button>
            </div>
            <div className="space-y-3">
              {categories.map((cat) => (
                <div key={cat} className="flex items-center justify-between p-3 rounded-lg bg-slate-50">
                  <p className="font-semibold">{cat}</p>
                  <span className="text-slate-500 text-sm">Edit • Delete</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm uppercase tracking-wide text-primary-600 font-semibold">Videos</p>
                <p className="text-slate-700">Static cards</p>
              </div>
              <button className="btn-outline">Add (mock)</button>
            </div>
            <div className="space-y-4">
              {videos.map((video) => (
                <div key={video} className="rounded-xl overflow-hidden shadow-lg bg-slate-900">
                  <div className="aspect-video bg-slate-800 flex items-center justify-center text-slate-400">Video placeholder</div>
                  <div className="p-4 bg-white">
                    <p className="font-bold">{video}</p>
                    <p className="text-slate-500 text-sm">Edit • Delete</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
          </>
        )}
      </div>
    </div>
  );
}
