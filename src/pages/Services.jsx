import React from 'react'
import ServiceCard from '../components/ServiceCard'

export default function Services(){
  return (
    <section className="max-w-6xl mx-auto space-y-8">
      <div className="p-6 rounded-2xl glass border border-white/6">
        <h2 className="text-3xl font-bold neon" style={{color:'var(--secondary)'}}>Our Services</h2>
        <p className="mt-3 text-gray-600">We offer design, supply, installation, testing, commissioning, renovation and maintenance across a wide range of systems tailored for commercial, industrial and residential clients.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <ServiceCard title="Fire Detection & Protection" desc="Addressable & conventional systems, panels, suppression, pumps & maintenance." icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l1.5 4.8L18 8l-3 2.1L14 15l-2-1.2L10 15l-.9-4.9L6 8l4.5-1.2L12 2z" /></svg>} />
        <ServiceCard title="Electrical" desc="Commercial installations, industrial plant support, maintenance & upgrades." icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} />
        <ServiceCard title="CCTV / IT Solutions" desc="CCTV, structured cabling, fiber optical cable, monitoring & access control." icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" /></svg>} />
        <ServiceCard title="Plumbing" desc="24-hour services, geyser repairs, leak detection & renovations." icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v6m0 4v12m-4-4h8" /></svg>} />
        <ServiceCard title="Fire Suppression" desc="Wet chemical, foam, deluge, sprinkler & hydrant systems and extinguishers." icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V7a2 2 0 00-2-2h-4" /></svg>} />
        <ServiceCard title="LPG Systems" desc="Installation & maintenance for LPG systems." icon={<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2v6m0 4v12m-4-4h8" /></svg>} />
      </div>
    </section>
  )
}