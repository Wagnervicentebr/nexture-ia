import { motion } from 'motion/react';
import { Search, FileCheck, Rocket, Users, BarChart3 } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Diagnóstico da Empresa',
      description: 'Entendemos seus desafios técnicos, maturidade do time e objetivos de negócio.',
      details: ['Análise do backlog atual', 'Avaliação do time técnico', 'Identificação de gargalos']
    },
    {
      number: '02',
      icon: FileCheck,
      title: 'Definição do Modelo',
      description: 'Recomendamos o modelo mais adequado: capacitação interna ou contratação de talentos.',
      details: ['Modelo personalizado', 'Cronograma ajustado', 'Investimento estimado']
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Plano de Execução',
      description: 'Estruturamos o programa com metas, KPIs e metodologia de acompanhamento.',
      details: ['Roadmap detalhado', 'Definição de métricas', 'Milestones claros']
    },
    {
      number: '04',
      icon: Users,
      title: 'Treinamento / Portal de Profissionais',
      description: 'Iniciamos a formação do time interno ou apresentamos candidatos pré-qualificados para sua contratação',
      details: ['Início imediato', 'Mentoria ativa', 'Projetos práticos']
    },
    {
      number: '05',
      icon: BarChart3,
      title: 'Monitoramento de Performance',
      description: 'Acompanhamos evolução técnica, entregas e impacto nos resultados da empresa.',
      details: ['Reports semanais', 'Ajustes contínuos', 'Feedback em tempo real']
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <Rocket className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Processo</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-['Poppins'] font-semibold text-[#0B1C3F] mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma jornada estruturada em 5 etapas para transformar seu time técnico
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] to-[#7C3AED] transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                  <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="text-6xl font-['Poppins'] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#2563EB] to-[#7C3AED]">
                      {step.number}
                    </div>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white shadow-xl ${
                      index % 2 === 0 ? 'lg:order-first' : ''
                    }`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-['Poppins'] font-semibold text-[#0B1C3F] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'lg:items-end lg:flex lg:flex-col' : ''}`}>
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual/Card */}
                <div className={`${index % 2 === 0 ? 'lg:pl-16' : 'lg:col-start-1 lg:row-start-1 lg:pr-16'}`}>
                  <div className="bg-gradient-to-br from-[#F5F7FB] to-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Etapa {step.number}</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                          {index === 0 ? '1-2 semanas' : index === 1 ? '1 semana' : index === 2 ? '1 semana' : index === 3 ? '3-6 meses' : 'Contínuo'}
                        </span>
                      </div>
                      
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED]"
                        />
                      </div>
                      
                      <p className="text-sm text-gray-600 italic">
                        {index === 0 && 'Mapeamos seus desafios e oportunidades'}
                        {index === 1 && 'Escolha a melhor estratégia para seu contexto'}
                        {index === 2 && 'Planejamento detalhado e alinhado aos objetivos'}
                        {index === 3 && 'Transformação em ação com resultados tangíveis'}
                        {index === 4 && 'Contínuo durante a formação'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center dot for timeline - desktop */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] border-4 border-white shadow-lg z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}