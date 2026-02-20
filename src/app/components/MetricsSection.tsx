import { motion } from 'motion/react';
import { TrendingUp, DollarSign, Rocket, Users, BarChart3, Clock } from 'lucide-react';

export function MetricsSection() {
  const metrics = [
    {
      icon: Clock,
      value: '3-6 meses',
      label: 'Time to Productivity',
      description: 'Juniores produzindo como plenos',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      value: '60-70%',
      label: 'Redução de Custo',
      description: 'vs. contratação de seniores',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Rocket,
      value: '300%',
      label: 'Aumento de Produtividade',
      description: 'Com uso efetivo de IA',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      value: '85%',
      label: 'Taxa de Retenção',
      description: 'Talentos permanecem na empresa',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BarChart3,
      value: '10+',
      label: 'Projetos Entregues',
      description: 'Durante o período de formação',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: TrendingUp,
      value: '4x',
      label: 'ROI Médio',
      description: 'Retorno sobre investimento em 12 meses',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0B1C3F] via-[#1E3A8A] to-[#2563EB] text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Resultados Comprovados</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-['Poppins'] font-semibold mb-4">
            Métricas que Importam para o Negócio
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            KPIs reais de empresas que transformaram seus times com a Nexture
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="mb-2">
                  <div className="text-4xl font-bold font-['Poppins'] mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-blue-100 uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
                
                <p className="text-sm text-blue-100">
                  {metric.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold font-['Poppins'] mb-2">500+</div>
              <div className="text-sm text-blue-100">Desenvolvedores Formados</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-['Poppins'] mb-2">50+</div>
              <div className="text-sm text-blue-100">Empresas Parceiras</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-['Poppins'] mb-2">200+</div>
              <div className="text-sm text-blue-100">Projetos Entregues</div>
            </div>
            <div>
              <div className="text-3xl font-bold font-['Poppins'] mb-2">95%</div>
              <div className="text-sm text-blue-100">Satisfação dos Clientes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
