import { motion } from 'motion/react';
import { Quote, Star, Building2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SocialProofSection() {
  const testimonials = [
    {
      company: 'TechCorp Brasil',
      logo: 'TC',
      author: 'Carlos Mendes',
      role: 'CTO',
      content: 'A Nexture transformou nosso time júnior em desenvolvedores altamente produtivos. Em 4 meses, eles já entregavam features complexas com autonomia.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzcxNDYzNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      company: 'Startup Labs',
      logo: 'SL',
      author: 'Ana Paula Silva',
      role: 'Head of Engineering',
      content: 'Contratamos 3 desenvolvedores formados pela Nexture. Chegaram sabendo usar IA, com mentalidade de produto e velocidade impressionante.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29yayUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzcxNDIzNDMwfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      company: 'InnovateTech',
      logo: 'IT',
      author: 'Roberto Almeida',
      role: 'VP de Produto',
      content: 'Reduzimos nosso backlog em 60% após implementar o programa de capacitação da Nexture. O ROI foi evidente já no terceiro mês.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3MTUzMDI2Nnww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  const partnerLogos = [
    { name: 'TechCorp', abbr: 'TC' },
    { name: 'StartupLabs', abbr: 'SL' },
    { name: 'InnovateTech', abbr: 'IT' },
    { name: 'CloudSystems', abbr: 'CS' },
    { name: 'DataFlow', abbr: 'DF' },
    { name: 'AgileWorks', abbr: 'AW' },
    { name: 'CodeBase', abbr: 'CB' },
    { name: 'DevHub', abbr: 'DH' }
  ];

  const caseStudies = [
    {
      company: 'E-commerce Platform',
      metric: '5x',
      description: 'Aumento na velocidade de entrega',
      icon: '🚀'
    },
    {
      company: 'Fintech Startup',
      metric: '70%',
      description: 'Redução de custo com desenvolvimento',
      icon: '💰'
    },
    {
      company: 'SaaS Company',
      metric: '12',
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
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white font-bold shadow-lg">
                  {testimonial.logo}
                </div>
                <Quote className="w-8 h-8 text-gray-200" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400" />
                <div>
                  <div className="font-semibold text-[#0B1C3F] text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-500">{testimonial.role} • {testimonial.company}</div>
                </div>
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