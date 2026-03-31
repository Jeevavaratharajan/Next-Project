import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="rounded-t-[36px] bg-[#05325c] px-6 py-12 text-gray-200 lg:px-20">
        <div className="section-wrap grid gap-8 md:grid-cols-3">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#ffd9ab]">Maple Rentals</p>
            <h3 className="mb-4 text-2xl font-semibold text-white">Homes that feel ready from day one</h3>
            <p className="text-sm leading-7 text-white/75">
              Clean property discovery, verified listings, and a warmer rental experience for students, families, and working professionals.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col gap-3 text-sm text-white/80">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/property">Properties</Link>
              <Link href="/admin">Admin</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3 text-sm text-white/80">
              <p>Nagercoil, Tamil Nadu</p>
              <p>+91 82208 95546</p>
              <p>admin@maplerentals.com</p>
            </div>
          </div>
        </div>

        <div className="section-wrap mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/65 md:flex-row">
          <p>Designed for a smoother rental workflow.</p>
          <p>&copy; Maple Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
