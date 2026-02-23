import React, { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Quote, Star, Building2 } from 'lucide-react';

const NOVIGO_LOGO = 'https://novigo-it.com/wp-content/uploads/2024/09/logo-novigoit.svg';

type Testimonial = {
  company: string;
  logo: string;
  logoUrl?: string;
  logoSvg?: ReactNode;
  content: string;
  rating: number;
};

export function SocialProofSection() {
  const testimonials: Testimonial[] = [
    {
      company: 'Novigo',
      logo: 'N',
      logoUrl: NOVIGO_LOGO,
      content: 'A Nexture transformou nosso time júnior em desenvolvedores altamente produtivos. Em 4 meses, eles já entregavam features complexas com autonomia.',
      rating: 5
    },
    {
      company: 'Nexa Digital',
      logo: 'ND',
      logoSvg: (
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="url(#nexaDigitalGrad)" />
          <path d="M14 16h6l4 8 4-8h6v16h-5V24l-3 6-3-6v8h-5V16z" fill="white" />
          <defs><linearGradient id="nexaDigitalGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse"><stop stopColor="#0ea5e9" /><stop offset="1" stopColor="#6366f1" /></linearGradient></defs>
        </svg>
      ),
      content: 'Contratamos 3 desenvolvedores formados pela Nexture. Chegaram sabendo usar IA, com mentalidade de produto e velocidade impressionante.',
      rating: 5
    },
    {
      company: 'FlowTech',
      logo: 'FT',
      logoSvg: (
        <svg viewBox="0 0 48 48" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="10" fill="url(#flowTechGrad)" />
          <path d="M12 26h8v-6l6 10h-8v6l-6-10zM26 16h10l-4 16h-4l4-16z" fill="white" />
          <defs><linearGradient id="flowTechGrad" x1="0" y1="48" x2="48" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#059669" /><stop offset="1" stopColor="#0d9488" /></linearGradient></defs>
        </svg>
      ),
      content: 'Reduzimos nosso backlog de forma significativa após implementar o programa de capacitação da Nexture. O retorno foi evidente já no terceiro mês.',
      rating: 5
    }
  ];

  const partnerLogos = [
    { name: 'Novigo', abbr: 'N' },
    { name: 'Nexa Digital', abbr: 'ND' },
    { name: 'FlowTech', abbr: 'FT' },
    { name: 'CloudSystems', abbr: 'CS' },
    { name: 'DataFlow', abbr: 'DF' },
    { name: 'AgileWorks', abbr: 'AW' },
    { name: 'CodeBase', abbr: 'CB' },
    { name: 'DevHub', abbr: 'DH' }
  ];

  const caseStudies = [
    {
      company: 'E-commerce Platform',
      metric: '2x',
      description: 'Aumento na velocidade de entrega',
      icon: '🚀'
    },
    {
      company: 'Fintech Startup',
      metric: '55%',
      description: 'Redução de custo com desenvolvimento',
      icon: '💰'
    },
    {
      company: 'SaaS Company',
      metric: '10',
      description: 'Projetos entregues em 6 meses',
      icon: '📊'
    }
  ];

  return (
    <section className="py-20 bg-[#F5F7FB]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 mb-6">
            <Building2 className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-600">Casos de Sucesso</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-['Poppins'] font-semibold text-[#0B1C3F] mb-4">
            Empresas que Transformaram Seus Times
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos parceiros têm a dizer sobre a parceria com a Nexture
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-20 h-20 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shadow-md shrink-0 p-2">
                  {testimonial.logoUrl ? (
                    <img src={testimonial.logoUrl} alt={testimonial.company} className="w-full h-full object-contain" />
                  ) : testimonial.logoSvg ? (
                    <span className="w-14 h-14 block">{testimonial.logoSvg}</span>
                  ) : (
                    <span className="text-2xl text-[#2563EB] font-bold">{testimonial.logo}</span>
                  )}
                </div>
                <Quote className="w-8 h-8 text-gray-200 shrink-0" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed flex-1">
                "{testimonial.content}"
              </p>
              
              <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0 p-1.5">
                  {testimonial.logoUrl ? (
                    <img src={testimonial.logoUrl} alt="" className="w-full h-full object-contain" />
                  ) : testimonial.logoSvg ? (
                    <span className="w-8 h-8 block">{testimonial.logoSvg}</span>
                  ) : (
                    <span className="text-[#2563EB] font-bold text-sm">{testimonial.logo}</span>
                  )}
                </div>
                <span className="font-semibold text-[#0B1C3F] text-sm">{testimonial.company}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-['Poppins'] font-semibold text-[#0B1C3F] text-center mb-8">
            Resultados Reais
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#0B1C3F] to-[#2563EB] rounded-2xl p-8 text-white shadow-xl"
              >
                <div className="text-5xl mb-4">{study.icon}</div>
                <div className="text-4xl font-['Poppins'] font-bold mb-2">{study.metric}</div>
                <div className="text-blue-100 mb-3">{study.description}</div>
                <div className="text-sm text-blue-200 font-semibold">{study.company}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}