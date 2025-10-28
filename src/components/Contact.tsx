import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#1a1f3a] mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">Call us for immediate assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#1a1f3a] mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a href="mailto:malobuilds@gmail.com" className="text-gray-600 hover:text-[#1a1f3a] transition-colors">malobuilds@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#1a1f3a] mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">2297 Ayers Dr</p>
                  <p className="text-gray-600">Reynoldsburg, OH 43068</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#1a1f3a] mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Service Area</h4>
                  <p className="text-gray-600">Serving all 50 states</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1f3a] focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1f3a] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a1f3a] focus:border-transparent"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#1a1f3a] hover:bg-[#252b47] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
