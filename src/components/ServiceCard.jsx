import React from 'react'

export default function ServiceCard({title, desc, icon}){
  return (
    <div className="p-6 rounded-2xl glass border border-white/6 shadow-lg transform hover:-translate-y-2 transition">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{background:'linear-gradient(135deg,var(--primary),var(--secondary))'}}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-secondary">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>
    </div>
  )
}