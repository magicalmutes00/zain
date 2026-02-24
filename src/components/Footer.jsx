import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-12 border-t border-white/10 bg-[linear-gradient(90deg,#ffffff02,#00000002)]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between gap-6 items-start">
        <div>
          <h4 className="text-xl font-bold neon" style={{color:'var(--secondary)'}}>ZAIN TECHNICAL</h4>
          <p className="text-sm text-gray-600 max-w-sm mt-2">
            Engineering, contracting & integrated services specializing in fire detection, protection, CCTV, electrical & plumbing systems.
          </p>
        </div>

        <div className="text-sm text-gray-600">
          <p><span className="font-semibold">Email:</span> info@zaintechoman.com</p>
          <p className="mt-1"><span className="font-semibold">Phone:</span> +968 - 92144367</p>
          <p className="mt-1"><span className="font-semibold">Address:</span> Barka, Sumuhan, South Al Batinah, Oman</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} ZAIN TECHNICAL & INTEGRATED SERVICES LLC</div>
    </footer>
  )
}