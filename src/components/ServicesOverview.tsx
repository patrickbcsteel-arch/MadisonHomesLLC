import { Building, Home, Briefcase, Shield, ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const services = [
    {
      icon: Building,
      title: 'Metal Buildings',
      description: 'PEMB, prefab, red iron, cold-formed steel',
    },
    {
      icon: Home,
      title: 'Metal Roofing Installation',
      description: 'Durable and weather-resistant roofing solutions',
    },
    {
      icon: Briefcase,
      title: 'Residential & Commercial',
      description: 'Expert contracting for all project types',
    },
    {
      icon: Shield,
      title: 'Government Projects',
      description: 'Government & non-government project expertise',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Our Core Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-[#1a1f3a] mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 bg-[#1a1f3a] hover:bg-[#252b47] text-white font-semibold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
