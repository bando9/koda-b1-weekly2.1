import { Link } from "react-router";

/**
 * Komponen untuk menampilkan halaman not found (404) ketika URL yang diakses tidak terdaftar pada Router.
 * Komponen digunakan sebagai rute penangkap di konfigurasi React Router.
 *
 * @returns {JSX.Element} NotFound
 */

function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center font-sans">
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Page Not Found
        </h2>
        <p className="text-sm text-slate-500 max-w-md mx-auto">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-[#111111] hover:bg-black text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
