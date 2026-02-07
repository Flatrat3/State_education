Dövlət Qulluğu Hazırlıq Tətbiqi

Bu layihə dövlət qulluğu imtahanına hazırlaşanlar üçün hazırlanmış interaktiv tədris tətbiqidir. Tətbiq React əsasında qurulmuş web app-dir və həm brauzerdə, həm də Android cihazlarda mobil tətbiq kimi işləyə bilir.

Layihənin əsas məqsədi qanunvericilik mövzularını daha rahat öyrənmək, sual-cavab və izah formatında istifadəçiyə təqdim etməkdir.

Texnologiyalar (Tech Stack)

Layihədə aşağıdakı texnologiyalardan istifadə olunub:

Frontend

React — istifadəçi interfeysinin qurulması

React Router — səhifələr arası keçid (routing)

JavaScript — əsas proqramlaşdırma dili

CSS — dizayn və stil üçün

Build və Development

Vite — sürətli development server və build sistemi

Vite React plugin — React dəstəyi üçün

Mobile (Android)

Capacitor — web tətbiqin Android mobil tətbiqə çevrilməsi

Capacitor Android platforması

Capacitor Network plugin — internet bağlantısı statusunu izləmək üçün

PWA (Progressive Web App)

vite-plugin-pwa — tətbiqin PWA kimi işləməsi üçün

offline açılma

install edilə bilən web app

cache və service worker dəstəyi

Code Quality

ESLint — kod standartlarına nəzarət

React hooks lint qaydaları — hook-ların düzgün istifadəsi üçün

Layihə Strukturu

Layihə Vite + React standart strukturu ilə qurulub:

src/ — əsas React komponentləri və səhifələr

public/ — statik fayllar

android/ — Capacitor tərəfindən yaradılmış Android layihəsi

vite.config.js — Vite konfiqurasiyası

capacitor.config.json — Capacitor konfiqurasiyası

İşə Salma (Development)

Layihəni lokalda işə salmaq üçün:

npm install
npm run dev


Daha sonra brauzerdə göstərilən local URL ilə tətbiqi açmaq olar.

Production Build

Production build yaratmaq üçün:

npm run build
npm run preview


Build olunmuş fayllar dist qovluğunda yaradılır.

Android Tətbiq Kimi Açmaq

Bu layihə Capacitor vasitəsilə Android tətbiqə çevrilə bilir.

Android platform əlavə etmək:
npx cap add android

Dəyişiklikləri sync etmək:
npx cap sync android

Android Studio-da açmaq:
npx cap open android


Android Studio üzərindən:

APK build etmək

AAB bundle yaratmaq

Telefonda test etmək mümkündür.

Əsas Xüsusiyyətlər

Mövzu əsaslı öyrənmə strukturu

Sual-cavab formatlı məzmun

Sadə və sürətli interfeys

Routing ilə səhifələmə

Offline açılma imkanı (PWA)

Android cihazda işləmə

Internet bağlantısı statusunun izlənməsi

Məqsəd

Bu layihə həm öyrənmə məqsədli, həm də praktik React + Vite + Capacitor + PWA stack-i ilə real tətbiq hazırlamaq üçün yaradılıb. Web tətbiqin mobil platformaya daşınması prosesi də layihənin əsas hissəsidir.

İstəsən indi bunun daha qısa GitHub versiyasını və ya daha texniki CV-lik versiyasını da ayrıca hazırlaya bilərəm.

Readme.md oxuması rahat olması üçün smaylik və s əlavə et

Aşağıdakı README mətnini birbaşa README.md faylına qoy. Oxunması rahat olsun deyə başlıqlar, işarələr və uyğun emoji-lər əlavə etdim — amma yenə də ciddi və GitHub üçün uyğundur.

📘 Dövlət Qulluğu Hazırlıq Tətbiqi

Bu layihə dövlət qulluğu imtahanına hazırlaşanlar üçün hazırlanmış interaktiv tədris tətbiqidir.
Tətbiq React əsasında qurulmuş web app-dir və həm brauzerdə 🌐, həm də Android cihazlarda 📱 mobil tətbiq kimi işləyə bilir.

Layihənin məqsədi qanunvericilik mövzularını daha rahat öyrənmək, sual-cavab və izah formatında istifadəçiyə təqdim etməkdir.

🚀 Texnologiyalar (Tech Stack)

Layihədə istifadə olunan əsas texnologiyalar:

🧱 Frontend

⚛️ React — istifadəçi interfeysinin qurulması

🧭 React Router — səhifələr arası keçid (routing)

🟨 JavaScript — əsas proqramlaşdırma dili

🎨 CSS — dizayn və stil

⚡ Build & Development

⚡ Vite — sürətli development server və build sistemi

🔌 Vite React plugin — React dəstəyi üçün

📱 Mobile (Android)

🔗 Capacitor — web tətbiqin mobil tətbiqə çevrilməsi

🤖 Capacitor Android platforması

🌐 Capacitor Network plugin — internet bağlantısı statusunu izləmək üçün

🌍 PWA (Progressive Web App)

📦 vite-plugin-pwa — tətbiqin PWA kimi işləməsi üçün

📡 offline açılma

⬇️ install edilə bilən web app

🧠 cache və service worker dəstəyi

🧹 Code Quality

✅ ESLint — kod standartlarına nəzarət

🪝 React Hooks lint qaydaları — hook-ların düzgün istifadəsi

🗂 Layihə Strukturu

Layihə Vite + React standart strukturu ilə qurulub:

src/        → React komponentləri və səhifələr
public/     → statik fayllar
android/    → Android platform qovluğu (Capacitor)


Əsas konfiqurasiya faylları:

⚙️ vite.config.js

⚙️ capacitor.config.json

📦 package.json

▶️ Development rejimində işə salma

Layihəni lokalda başlatmaq üçün:

npm install
npm run dev


Sonra brauzerdə göstərilən local link ilə tətbiqi aç.

🏗 Production Build

Production build yaratmaq üçün:

npm run build
npm run preview


Build olunmuş fayllar dist/ qovluğunda yaradılır.

📱 Android Tətbiq Kimi Açmaq

Bu layihə Capacitor vasitəsilə Android tətbiqə çevrilə bilir.

➕ Android platform əlavə etmək
npx cap add android

🔄 Dəyişiklikləri sync etmək
npx cap sync android

🧭 Android Studio-da açmaq
npx cap open android


Android Studio üzərindən:

📦 APK build

🏷 AAB bundle

📲 Telefonda test etmək mümkündür.

✨ Əsas Xüsusiyyətlər

📚 Mövzu əsaslı öyrənmə

❓ Sual-cavab formatı

⚡ Sürətli və sadə interfeys

🧭 Routing ilə səhifələmə

🌐 Offline açılma imkanı (PWA)

📱 Android cihaz dəstəyi

📡 Network status izləmə

🎯 Layihənin Məqsədi

Bu layihə:

⚛️ React + Vite stack-i ilə real tətbiq qurmaq

🌍 Web → 📱 Mobile keçidi (Capacitor)

🧩 PWA imkanlarını tətbiq etmək

🧪 Praktiki öyrənmə və tətbiq məqsədi ilə hazırlanıb.