import { useState } from "react"
import RevealOnScroll from "../RevealOnScroll"

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus("Message received!");
        form.reset();
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("Failed to send. Please try again.");
    }
  };

  return (
    <section
    id="contact"
    className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>
    <div className="px-4 w-150">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Get In Touch</h2>
        {status && (
          <div className="mb-4 p-4 bg-blue-500/20 border border-blue-500/30 rounded text-center text-blue-400">
            {status}
          </div>
        )}
        <form action="https://formspree.io/f/mdakbygd" method="POST" onSubmit={handleSubmit} className="space-y-6" >
            <div className="relative">
                <input  type="text" id="name" name="name" required className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..." />
            </div>
            <div className="relative">
                <input  type="email" id="email" name="email" required  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com" />
            </div>
            <div className="relative">
                <input  id="message" name="message" rows={5} required  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your message.." />
            </div>       
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send</button>        
        </form>
    </div>
    </RevealOnScroll>
    </section>
  )
}

export default Contact
