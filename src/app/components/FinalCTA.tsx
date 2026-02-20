import { motion } from 'motion/react';
import { Calendar, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0B1C3F] via-[#1E3A8A] to-[#2563EB] text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzZoLTJ6bS0yIDBoLTJ2Mmgydi0yem0tMiAwdi0yaC0ydjJoMnptMC0yaDJ2LTJoLTJ2MnptMiAwdjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-500/20 blur-2xl"
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold">Pronto para Transformar Seu Time?</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-['Poppins'] font-semibold mb-6 leading-tight">
            Transforme Seu Time ou Contrate Talentos Prontos para IA
          </h2>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
            Descubra como a Nexture pode reduzir custos, acelerar entregas e construir uma cultura de inovação com IA na sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <motion.a
              href="https://wa.me/5511910965038?text=Olá!%20Gostaria%20de%20agendar%20uma%20reunião%20estratégica%20sobre%20a%20Nexture."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-[#0B1C3F] rounded-xl font-bold font-['Inter'] text-lg hover:bg-blue-50 transition-all shadow-2xl"
            >
              <Calendar className="w-6 h-6" />
              Agendar Reunião Estratégica
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="https://wa.me/5511910965038?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Nexture."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold font-['Inter'] text-lg hover:bg-white/20 transition-all"
            >
              <MessageSquare className="w-6 h-6" />
              Falar com Especialista
            </motion.a>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-8 text-blue-100"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm">✓ Sem compromisso inicial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm">✓ Diagnóstico gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-sm">✓ Resposta em 24h</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional info cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold font-['Poppins'] mb-2">24h</div>
            <div className="text-sm text-blue-100">Tempo médio de resposta</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold font-['Poppins'] mb-2">100%</div>
            <div className="text-sm text-blue-100">Empresas satisfeitas renovam</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold font-['Poppins'] mb-2">Flexível</div>
            <div className="text-sm text-blue-100">Modelos adaptados ao seu contexto</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}