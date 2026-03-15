# Perbaikan Inertia + Ani UI (Tailwind v4 / Vite)

Dokumen ini merangkum perbaikan yang dilakukan agar:

- Halaman Inertia (React/TSX) benar-benar ke-mount (bukan terlihat seperti hanya Blade).
- Integrasi `@ani-ui/anis` jalan dan props/variant komponen (contoh: `Button`) kebaca.
- Error Vite/Tailwind berikut hilang:
  - `[plugin:@tailwindcss/vite:generate:serve] Can't resolve 'tw-animate-css' ...`

## Ringkasan Masalah

1. Inertia terlihat seperti masih Blade
   - Inertia memang memakai Blade sebagai shell (`resources/views/app.blade.php`) dan React akan ke-mount lewat JS.
   - Jika JS/Vite assets tidak ter-load dengan benar, yang terlihat hanya HTML shell Blade.

2. `@ani-ui/anis` memerlukan `tw-animate-css`
   - `@ani-ui/anis/styles.css` mengarah ke `node_modules/@ani-ui/anis/dist/styles.css`.
   - Di dalamnya ada `@import "tw-animate-css";`.
   - Karena `tw-animate-css` tidak tersedia, Vite/Tailwind gagal resolve.

3. Props/variant komponen tidak kebaca
   - Tailwind v4 pakai source scanning; kalau `resources/js` dan/atau file class dari library di `node_modules` tidak ikut discan, class bisa tidak tergenerate.

## Perubahan Yang Dilakukan

### 1) Route Inertia dan Page Contoh

- `/` -> `Home` (page React baru)
- `/welcome` -> page contoh bawaan

File:

- `routes/web.php`
- `resources/js/pages/Home.tsx`

### 2) Blade Shell Hanya Load Entry Utama

Mengubah `resources/views/app.blade.php` supaya hanya memanggil:

- `@vite(['resources/css/app.css', 'resources/js/app.tsx'])`

Tujuannya supaya tidak tergantung manifest entry per-page TSX.

File:

- `resources/views/app.blade.php`

### 3) Tambah Tailwind v4 `@source`

Menambah source scan untuk:

- `resources/js/**/*.ts` dan `resources/js/**/*.tsx`
- `node_modules/@ani-ui/anis/dist/**/*.js`

File:

- `resources/css/app.css`

### 4) Fallback Lokal untuk `tw-animate-css`

Karena `@ani-ui/anis/dist/styles.css` meng-import `tw-animate-css`, dibuat fallback:

- `resources/css/tw-animate-css.css`
- Alias di `vite.config.ts`:
  - `tw-animate-css` -> `resources/css/tw-animate-css.css`

File:

- `resources/css/tw-animate-css.css`
- `vite.config.ts`

## Cara Menjalankan (Dev)

```powershell
php artisan optimize:clear
npm.cmd run dev
php artisan serve
```

Buka:

- `/` -> harusnya tampil "Home (React + Inertia)"
- `/welcome` -> page welcome

## Opsional: Pakai `tw-animate-css` Asli

Kalau kamu ingin memakai package resminya:

```powershell
npm.cmd i tw-animate-css
```

Setelah itu kamu bisa hapus alias `tw-animate-css` di `vite.config.ts` dan hapus `resources/css/tw-animate-css.css`.

## File Yang Tersentuh

- `routes/web.php`
- `resources/js/pages/Home.tsx`
- `resources/views/app.blade.php`
- `resources/css/app.css`
- `vite.config.ts`
- `resources/css/tw-animate-css.css`
