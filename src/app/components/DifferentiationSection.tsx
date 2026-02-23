import { motion } from 'motion/react';
import { Sparkles, Target, Rocket, Trophy, X, Check } from 'lucide-react';

export function DifferentiationSection() {
  const differentiators = [
    {
      icon: Sparkles,
      title: 'IA usada diariamente, não como módulo',
      description: 'Nossos alunos trabalham com IA em cada projeto, desenvolvendo fluência real nas ferramentas.'
    },
    {
      icon: Target,
      title: 'Treinamento focado em entregas reais',
      description: 'Projetos práticos com resultados mensuráveis, não apenas teoria e exercícios isolados.'
    },
    {
      icon: Rocket,
      title: 'Desenvolvedores treinados para produzir',
      description: 'Formação com mentalidade de produto e impacto no negócio, não apenas código.'
    },
    {
      icon: Trophy,
      title: 'Formação orientada ao mercado',
      description: 'Currículo alinhado com as reais demandas das empresas de tecnologia.'
    }
  ];

  const comparison = [
    {
      feature: 'Uso prático de IA',
      nexture: true,
      traditional: false,
      bootcamp: false
    },
    {
      feature: 'Projetos reais de empresas',
      nexture: true,
      traditional: false,
      bootcamp: false
    },
    {
      feature: 'Mentoria individualizada',
      nexture: true,
      traditional: false,
      bootcamp: true
    },
    {
      feature: 'Foco em produtividade',
      nexture: true,
      traditional: false,
      bootcamp: false
    },
    {
      feature: 'Metodologia própria e comprovada',
      nexture: true,
      traditional: false,
      bootcamp: true
    },
    {
      feature: 'Cultura de entrega',
      nexture: true,
      traditional: false,
      bootcamp: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 mb-6">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-600">Nosso Diferencial</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-['Poppins'] font-semibold text-[#0B1C3F] mb-4">
            Por que a Nexture é diferente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma abordagem única que combina IA, prática real e mentalidade de produto.
          </p>
        </motion.div>

        {/* Key Differentiators */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-[#F5F7FB] to-white p-6 rounded-xl border border-gray-200 hover:border-[#2563EB] hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white mb-4 shadow-lg">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-[#0B1C3F] mb-2 font-['Inter']">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#0B1C3F] to-[#2563EB] px-8 py-6">
            <h3 className="text-2xl font-['Poppins'] font-semibold text-white">
              Nexture vs. Outras formações
            </h3>
            <p className="text-blue-100 mt-2">
              Compare nossa metodologia com cursos tradicionais e bootcamps
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-8 py-4 text-left text-sm font-semibold text-gray-700">Recurso</th>
                  <th className="px-8 py-4 text-center text-sm font-semibold text-[#2563EB]">Nexture</th>
                  <th className="px-8 py-4 text-center text-sm font-semibold text-gray-500">Cursos Tradicionais</th>
                  <th className="px-8 py-4 text-center text-sm font-semibold text-gray-500">Bootcamps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {comparison.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-8 py-4 text-gray-700 font-medium">{row.feature}</td>
                    <td className="px-8 py-4 text-center">
                      {row.nexture ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-8 py-4 text-center">
                      {row.traditional ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-8 py-4 text-center">
                      {row.bootcamp ? (
                        <Check className="w-6 h-6 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
