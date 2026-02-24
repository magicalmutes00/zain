import React from "react";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto space-y-24 py-12">
      {/* HERO SECTION */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-primary to-secondary transform rotate-1 animate-pulse">
            Trusted Engineering Solutions
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-secondary leading-tight tracking-tight">
            Future-Ready <span className="text-primary">Fire & Safety</span> Engineering
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-2xl">
            We design, supply, install and maintain fire protection, electrical,
            CCTV and plumbing systems for commercial, industrial and residential
            projects across the UAE.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-medium"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-white transition-all duration-300 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/images/hero-engineering.jpg" 
              alt="Engineering Team" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* CORE EXPERTISE SECTION */}
      <div className="glass rounded-3xl p-8 border border-white/20 shadow-2xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Core Expertise
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive engineering solutions for all your safety and infrastructure needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Fire Detection & Protection"
            desc="Complete system design, installation & maintenance."
            icon="🔥"
          />
          <ServiceCard
            title="Electrical Solutions"
            desc="Commercial & industrial electrical installations."
            icon="⚡"
          />
          <ServiceCard
            title="CCTV & Security"
            desc="Monitoring, access control & surveillance systems."
            icon="📹"
          />
          <ServiceCard
            title="Plumbing Services"
            desc="24/7 plumbing & maintenance solutions."
            icon="🔧"
          />
        </div>
      </div>

      {/* COMPANY OVERVIEW SECTION */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Company Overview
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Zain Technical & Integrated Services LLC is a professional engineering
            and contracting company established to deliver reliable fire protection,
            safety systems, and technical solutions. Since its founding, the company
            has built a reputation for quality workmanship, compliance with safety
            standards, and customer-focused service delivery.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We specialize in fire detection and suppression systems, CCTV and
            security solutions, electrical installations, plumbing works, and LPG
            system services. Our team ensures every project meets international
            safety regulations while maintaining efficiency and reliability.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Through continuous improvement, skilled workforce training, and
            commitment to safety, we aim to provide future-ready engineering
            solutions tailored to each client's needs.
          </p>
          
          <div className="pt-4">
            <Link 
              to="/about" 
              className="inline-flex items-center text-primary font-semibold group"
            >
              Learn more about our journey
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* WHY CLIENTS TRUST US */}
        <div className="rounded-3xl p-8 bg-gradient-to-br from-futuristic to-secondary/10 border border-white/20 shadow-2xl">
          <h3 className="text-2xl font-bold text-secondary mb-8">
            Why Clients Trust Us
          </h3>
          <ul className="space-y-6">
            {[
              "Compliance with international safety standards",
              "Skilled & certified technical workforce",
              "Reliable maintenance & emergency response",
              "Tailored engineering solutions",
              "Quality assurance & safety-first approach",
              "On-time project delivery guarantee"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-4xl">⭐⭐⭐⭐⭐</div>
              <div className="ml-4">
                <p className="font-bold text-secondary">Client Rating</p>
                <p className="text-gray-600">Based on 127 reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-12 text-center">
        <h3 className="text-3xl font-bold text-white mb-4">
          Ready to Secure Your Property?
        </h3>
        <p className="text-primary-100 max-w-2xl mx-auto mb-8">
          Get a free consultation and quote for your fire & safety engineering needs
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/contact" 
            className="px-8 py-4 bg-white text-secondary rounded-lg font-bold shadow-lg hover:scale-105 transition"
          >
            Schedule Consultation
          </Link>
          <Link 
            to="/projects" 
            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition"
          >
            View Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
}