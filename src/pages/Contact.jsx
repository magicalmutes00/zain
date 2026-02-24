import React from 'react'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      <div className="p-6 rounded-2xl glass border border-white/6">
        <h2 className="text-2xl font-bold neon" style={{color:'var(--secondary)'}}>Get in touch</h2>
        <p className="mt-3 text-gray-600">For enquiries and service requests, you can email or call us.</p>

        <div className="mt-6 space-y-3 text-sm text-gray-700">
          <p><strong>Email:</strong> info@zaintechoman.com</p>
          <p><strong>Alternate emails:</strong> zainprojectsoman@gmail.com, zaintechnicaloman@gmail.com</p>
          <p><strong>Phone:</strong> +968 - 92144367, +968 - 93232111</p>
          <p><strong>Address:</strong> Barka, Sumuhan, South Al Batinah, Sultanate of Oman (near ROP Barka). PO Box : 124</p>
        </div>
      </div>

      <div className="p-6 rounded-2xl glass border border-white/6">
        <ContactForm />
      </div>
    </section>
  )
}