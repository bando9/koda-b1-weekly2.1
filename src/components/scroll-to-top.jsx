import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Komponen utilitas untuk mengatur layar secara otomatis ke posisi paling atas
 * setiap kali user berpindah halaman.
 *
 * Komponen ini fokus untuk menangani efek samping navigasi dan biasanya
 * diletakkan tingkat teratas router aplikasi.
 *
 * @returns {null} Komponen tidak merender komponen apapun.
 */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
