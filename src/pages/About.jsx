import React from 'react'

export default function About(){
  return (
    <section className="max-w-5xl mx-auto space-y-8">
      <div className="p-8 rounded-2xl glass border border-white/6">
        <h2 className="text-3xl font-bold neon" style={{color:'var(--secondary)'}}>About ZAIN TECHNICAL</h2>
        <p className="mt-4 text-gray-600">
          Established in 2021, ZAIN TECHNICAL & INTEGRATED SERVICES LLC provides engineering, contracting and service solutions for fire detection & protection systems, CCTV, electrical and plumbing works. Our approach is compliance-driven and client-tailored — we emphasize inspection, training and system maintenance to reduce risk and ensure reliability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg bg-[var(--primary)]/6">
          <h3 className="font-semibold text-secondary">Our Ethos</h3>
          <ul className="mt-3 text-gray-700 list-disc list-inside">
            <li>Do it once, do it right — reworks cost money.</li>
            <li>Think efficiency and continual improvement.</li>
            <li>Keep sites and tools tidy — presentation matters.</li>
            <li>Help each other and stay accountable.</li>
            <li>Professionalism in office & site environments.</li>
          </ul>
        </div>

        <div className="p-6 rounded-lg bg-white/5">
          <h3 className="font-semibold text-secondary">Quality & Safety</h3>
          <p className="mt-2 text-gray-700">We follow strict quality checks on materials, equipment and services, conduct internal audits and always promote safety as a line management responsibility — defensive driving, health hazard prevention and monitoring policy effectiveness.</p>
        </div>
      </div>
    </section>
  )
}