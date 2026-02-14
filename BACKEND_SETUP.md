# إصلاح مشكلة الاتصال بالـ Backend

## المشكلة
الخطأ: `The route api/services could not be found`

الـ Backend يعمل بشكل صحيح لكن الـ route `/api/services` غير موجود.

---

## الحل - خطوات إنشاء الـ API

### 1️⃣ إنشاء Controller للاختبار

في مجلد الـ Backend:
```bash
php artisan make:controller Api/ServiceController
```

### 2️⃣ تعديل ملف `app/Http/Controllers/Api/ServiceController.php`

```php
<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * عرض قائمة الخدمات (للاختبار)
     */
    public function index()
    {
        // بيانات تجريبية للاختبار
        $services = [
            [
                'id' => 1,
                'title' => 'Group Tours',
                'description' => 'Friendly adventures to explore iconic sights together.',
                'price' => 50,
                'duration' => '3 hours',
                'icon' => 'group'
            ],
            [
                'id' => 2,
                'title' => 'Private Tours',
                'description' => 'Tailored experiences with one-on-one attention.',
                'price' => 150,
                'duration' => '4 hours',
                'icon' => 'private'
            ],
            [
                'id' => 3,
                'title' => 'Historical Trails',
                'description' => 'Story-rich walks through timeless landmarks.',
                'price' => 40,
                'duration' => '2 hours',
                'icon' => 'history'
            ],
            [
                'id' => 4,
                'title' => 'Adventure Tours',
                'description' => 'Energetic outings for thrill seekers.',
                'price' => 100,
                'duration' => '5 hours',
                'icon' => 'adventure'
            ]
        ];

        return response()->json([
            'success' => true,
            'message' => 'تم جلب الخدمات بنجاح',
            'data' => $services,
            'count' => count($services)
        ], 200);
    }

    /**
     * عرض خدمة محددة
     */
    public function show($id)
    {
        return response()->json([
            'success' => true,
            'message' => 'تم جلب الخدمة بنجاح',
            'data' => [
                'id' => $id,
                'title' => 'Sample Service',
                'description' => 'This is a test service',
                'price' => 50
            ]
        ], 200);
    }
}
```

### 3️⃣ تعديل ملف `routes/api.php`

أضف هذه الأسطر:

```php
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ServiceController;

// Route للاختبار البسيط
Route::get('/test', function () {
    return response()->json([
        'success' => true,
        'message' => 'Backend is working! 🚀',
        'timestamp' => now(),
        'version' => '1.0'
    ]);
});

// Routes للخدمات
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{id}', [ServiceController::class, 'show']);

// يمكنك استخدام Resource Route لجميع العمليات
// Route::apiResource('services', ServiceController::class);
```

### 4️⃣ التأكد من إعدادات CORS

تأكد من أن ملف `config/cors.php` يحتوي على:

```php
<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    
    'allowed_methods' => ['*'],
    
    'allowed_origins' => ['*'], // أو حدد frontend URL: ['http://localhost:5173']
    
    'allowed_origins_patterns' => [],
    
    'allowed_headers' => ['*'],
    
    'exposed_headers' => [],
    
    'max_age' => 0,
    
    'supports_credentials' => false,
];
```

### 5️⃣ تشغيل الـ Backend

```bash
php artisan serve
```

---

## اختبار الـ API

### باستخدام المتصفح:
- افتح: `http://127.0.0.1:8000/api/test`
- افتح: `http://127.0.0.1:8000/api/services`

### باستخدام cURL:
```bash
curl http://127.0.0.1:8000/api/services
```

### باستخدام Frontend:
1. شغل الـ Frontend: `npm run dev`
2. افتح صفحة Home
3. اضغط على زر "اختبار الاتصال"

---

## Routes إضافية (اختياري)

### للحصول على جميع الـ routes المتاحة:
```bash
php artisan route:list --path=api
```

### إنشاء Model و Migration (للمستقبل):
```bash
php artisan make:model Service -m
```

---

## استكشاف الأخطاء

### ✅ تحقق من تشغيل الـ Backend:
```bash
php artisan serve
```

### ✅ تحقق من الـ routes:
```bash
php artisan route:list
```

### ✅ امسح الـ cache:
```bash
php artisan cache:clear
php artisan config:clear
php artisan route:clear
```

### ✅ تأكد من أن الـ .env يحتوي على:
```env
APP_URL=http://127.0.0.1:8000
```

---

## ملاحظات مهمة

1. **التأكد من المسار**: الـ route يجب أن يكون في `routes/api.php` وليس `routes/web.php`
2. **Prefix تلقائي**: Laravel تضيف `/api` تلقائياً لجميع routes في `api.php`
3. **CORS**: تأكد من تفعيل CORS للسماح للـ Frontend بالاتصال

---

## الخطوة التالية

بعد إنشاء الـ routes، ارجع للـ Frontend واضغط على زر "اختبار الاتصال" مرة أخرى! 🚀
