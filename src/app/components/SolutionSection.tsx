import { motion } from 'motion/react';
import { GraduationCap, Users, CheckCircle2, BookOpen, Target, Briefcase, Rocket, Shield, ArrowRight } from 'lucide-react';

export function SolutionSection() {
  const model1Features = [
    { icon: BookOpen, text: 'Aulas ao vivo semanais' },
    { icon: Rocket, text: 'Treinamento em desenvolvimento com IA' },
    { icon: Target, text: 'Projetos reais da empresa usados no treinamento' },
    { icon: Users, text: 'Mentoria e acompanhamento técnico' },
    { icon: CheckCircle2, text: 'Formação orientada à produtividade' }
  ];

  const model1Benefits = [
    'Reduza dependência de contratações seniores',
    'Ative projetos parados',
    'Construa cultura de IA internamente',
    'Tudo isso com custo muito baixo'
  ];

  const model2Features = [
    { icon: GraduationCap, text: 'Desenvolvedores juniores pré-treinados' },
    { icon: Rocket, text: 'Mentalidade de produtividade com IA' },
    { icon: Shield, text: 'Prontos para stacks modernas' },
    { icon: Users, text: 'Mentoria pós-contratação opcional' }
  ];

  const model2Benefits = [
    'Contratação mais rápida',
    'Custo menor que seniores',
    'Pipeline contínuo de talentos',
    'Pessoas prontas e produtivas'
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">A Solução</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-['Poppins'] font-semibold text-[#0B1C3F] mb-4">
            Dois Modelos de Negócio para Sua Empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o modelo que melhor se adequa à estratégia da sua empresa
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Model 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-[#2563EB] transition-all h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white shadow-lg">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#2563EB] uppercase tracking-wide mb-1">Modelo 1</div>
                  <h3 className="text-2xl font-['Poppins'] font-semibold text-[#0B1C3F]">
                    Capacitação Interna com IA
                  </h3>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-[#0B1C3F] mb-4 font-['Inter']">O que inclui:</h4>
                <div className="space-y-3">
                  {model1Features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <p className="text-gray-700 pt-2">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="font-semibold text-[#0B1C3F] mb-4 font-['Inter']">Benefícios:</h4>
                <ul className="space-y-2">
                  {model1Benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white rounded-lg font-semibold font-['Inter'] hover:shadow-lg transition-all group">
                Saiba Mais
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Model 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C3F] to-[#1E3A8A] rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-[#0B1C3F] transition-all h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0B1C3F] to-[#1E3A8A] flex items-center justify-center text-white shadow-lg">
                  <Briefcase className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#0B1C3F] uppercase tracking-wide mb-1">Modelo 2</div>
                  <h3 className="text-2xl font-['Poppins'] font-semibold text-[#0B1C3F]">
                    Contrate Desenvolvedores com IA
                  </h3>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-[#0B1C3F] mb-4 font-['Inter']">O que inclui:</h4>
                <div className="space-y-3">
                  {model2Features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#F5F7FB] flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-[#0B1C3F]" />
                      </div>
                      <p className="text-gray-700 pt-2">{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="font-semibold text-[#0B1C3F] mb-4 font-['Inter']">Benefícios:</h4>
                <ul className="space-y-2">
                  {model2Benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0B1C3F] text-white rounded-lg font-semibold font-['Inter'] hover:bg-[#1E3A8A] hover:shadow-lg transition-all group">
                Saiba Mais
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
