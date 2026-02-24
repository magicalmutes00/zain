import React, {useState} from 'react'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const handle = (e)=> setForm({...form, [e.target.name]: e.target.value})
  const submit = (e) => {
    e.preventDefault()
    alert('This demo sends nothing — wire a backend or email service. Form payload: ' + JSON.stringify(form))
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input name="name" onChange={handle} value={form.name} className="w-full p-3 rounded-md border border-white/8 bg-white/5" placeholder="Your name" />
      <input name="email" onChange={handle} value={form.email} className="w-full p-3 rounded-md border border-white/8 bg-white/5" placeholder="Your email" />
      <textarea name="message" onChange={handle} value={form.message} rows="6" className="w-full p-3 rounded-md border border-white/8 bg-white/5" placeholder="Message"></textarea>
      <button type="submit" className="px-5 py-2 bg-[var(--primary)] text-white rounded-md">Send message</button>
    </form>
  )
}