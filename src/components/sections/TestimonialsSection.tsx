"use client";



export default function TestimonialsSection() {
  return (
    <section id="quotes" className="relative min-h-screen flex items-center justify-start bg-black text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/bg image 6.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0  z-0" />

      {/* Content */}
    </section>
  );
}
