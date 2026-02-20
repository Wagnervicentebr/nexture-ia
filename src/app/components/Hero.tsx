import { motion } from 'motion/react';
import { ArrowRight, Calendar, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1C3F] via-[#1E3A8A] to-[#2563EB] text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bS0yIDBoLTJ2Mmgydi0yem0tMiAwdi0yaC0ydjJoMnptMC0yaDJ2LTJoLTJ2MnptMiAwdjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 mt-8 md:mt-0">
              <span className="text-sm font-medium">🚀 Solução B2B para Empresas</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-['Poppins'] font-semibold leading-tight mb-6">Forme Desenvolvedores com IA ou Contrate Talentos Prontos Reduza Custos e Acelere Entregas</h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              A Nexture ajuda empresas a treinar talentos juniores com IA ou contratar desenvolvedores já formados em nossa metodologia prática.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/5511910965038?text=Olá!%20Gostaria%20de%20agendar%20uma%20conversa%20estratégica%20sobre%20a%20Nexture."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0B1C3F] rounded-lg font-semibold font-['Inter'] hover:bg-blue-50 transition-all hover:scale-105 shadow-xl"
              >
                <Calendar className="w-5 h-5" />
                Agendar Conversa Estratégica
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1637073849667-91120a924221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjBjb2RpbmclMjB3b3JrcGxhY2V8ZW58MXx8fHwxNzcxNTMwMjY5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Desenvolvedores trabalhando com IA"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3F]/60 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center text-white font-bold text-xl">
                  IA
                </div>
                <div>
                  <p className="text-sm text-gray-600">Produtividade com IA</p>
                  <p className="text-2xl font-bold text-[#0B1C3F]">+300%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 46.7C840 53.3 960 66.7 1080 73.3C1200 80 1320 80 1380 80H1440V80H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}