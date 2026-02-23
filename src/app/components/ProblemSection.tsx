import { motion } from 'motion/react';
import { AlertTriangle, TrendingUp, Clock, Users, Zap, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProblemSection() {
  const problems = [
    {
      icon: TrendingUp,
      title: 'Alto custo de desenvolvedores seniores',
      description: 'Salários elevados impactam o orçamento e limitam contratações'
    },
    {
      icon: Clock,
      title: 'Crescimento do backlog',
      description: 'Projetos acumulam enquanto o time não consegue acompanhar a demanda'
    },
    {
      icon: AlertTriangle,
      title: 'Lançamentos atrasados',
      description: 'Produtos demoram para ir ao mercado, perdendo oportunidades'
    },
    {
      icon: Zap,
      title: 'Falta de adoção de IA',
      description: 'Time não domina ferramentas que multiplicam produtividade'
    },
    {
      icon: Users,
      title: 'Baixa produtividade de juniores',
      description: 'Desenvolvedores iniciantes levam tempo para gerar valor real'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-6">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-sm font-semibold text-red-600">O Problema</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-['Poppins'] font-semibold text-[#0B1C3F] mb-6 leading-tight">
              O Custo Oculto dos Gargalos Técnicos
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Empresas em crescimento enfrentam desafios críticos que impactam diretamente a capacidade de inovar e competir no mercado.
            </p>
            
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1720289024474-946b6feabfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwbGFubmluZyUyMGJsb2NrZWR8ZW58MXx8fHwxNzcxNTMwMjY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Equipe bloqueada em planejamento"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3F]/40 to-transparent" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-200"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-lg">
                  <problem.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1C3F] mb-1 font-['Inter']">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
