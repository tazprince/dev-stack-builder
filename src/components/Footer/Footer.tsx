import footerLogo from "../../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className="mt-15">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:px-8">
        {/* Top content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          {/*Dev Stack + Description + Social Links */}
          <div className="lg:col-span-2">
            <img src={footerLogo} alt="logo-footer" />
            <p className="mt-4 max-w-md text-sm leading-5 text-slate-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-5 flex items-center gap-5">
              <a
                href="#"
                className="text-sm text-slate-600 transition hover:text-[#EC4899]"
              >
                GitHub
              </a>

              <a
                href="#"
                className="text-sm text-slate-600 transition hover:text-[#EC4899]"
              >
                Twitter
              </a>

              <a
                href="#"
                className="text-sm text-slate-600 transition hover:text-[#EC4899]"
              >
                LinkedIn
              </a>
            </div>
          </div>
          {/* Product */}
          <div>
            <h3 className="text-xs font-bold uppercase text-gray-900">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href=""
                  className="text-sm text-slate-500 hover:text-[#EC4899]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-sm text-slate-500 hover:text-[#EC4899]"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-sm text-slate-500 hover:text-[#EC4899]"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          {/* company */}
          <div>
            <h3 className="text-xs font-bold uppercase text-gray-900">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href=""
                  className="text-sm text-slate-500 hover:text-[#EC4899]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-sm text-slate-500 hover:text-[#EC4899]"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-sm text-slate-500 hover:text-[#EC4899]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* legal */}
          <div>
            <h3 className="text-xs font-bold uppercase text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href=""
                  className="text-sm text-slate-500 hover:text-[#EC4899]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-sm text-slate-500 hover:text-[#EC4899]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom content */}
        <div className="mt-10 border-t border-gray-200 pt-7">
          <div className="flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="" className="hover:text-[#EC4899]">
                Privacy
              </a>
              <a href="" className="hover:text-[#EC4899]">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
