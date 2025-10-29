import { Mail, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { departments } from '../data/departmentData';


export default function Contact() {
  const [openSections, setOpenSections] = useState<number[]>([0]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20 md:py-32 overflow-hidden">
        <img
          src="/contact.jpg"
          alt="TSL Kontakt"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-gray-800/40" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">Kontakt</h1>
          <p className="text-base md:text-xl text-gray-300 text-center md:text-left">
            Wir freuen uns auf Ihre Nachricht
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800">Unsere Ansprechpartner</h2>
            
            <div className="space-y-8">
              {departments.map((department, deptIndex) => (
                <div key={deptIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <button
                    onClick={() => toggleSection(deptIndex)}
                    className="w-full bg-gray-700 px-6 py-4 flex items-center justify-between hover:bg-gray-600 transition-colors"
                  >
                    <h3 className="text-lg md:text-2xl font-bold text-white">{department.title}</h3>
                    <ChevronDown 
                      size={28} 
                      className={`text-white transition-transform duration-300 ${
                        openSections.includes(deptIndex) ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openSections.includes(deptIndex) && (
                    <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {department.people.map((person, personIndex) => (
                        <div key={personIndex} className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                          <h4 className="font-bold text-gray-800 text-lg mb-1">{person.name}</h4>
                          {person.role && (
                            <p className="text-sm text-gray-600 mb-3 italic">{person.role}</p>
                          )}
                          <div className="space-y-2">
                            {person.phone && (
                              <div className="flex items-center text-gray-700">
                                <Phone size={16} className="mr-2 text-gray-600 flex-shrink-0" />
                                <a href={`tel:${person.phone}`} className="text-sm hover:text-gray-900">
                                  {person.phone}
                                </a>
                              </div>
                            )}
                            {person.email && (
                              <div className="flex items-center text-gray-700">
                                <Mail size={16} className="mr-2 text-gray-600 flex-shrink-0" />
                                <a href={`mailto:${person.email}`} className="text-sm hover:text-gray-900 break-all">
                                  {person.email}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
