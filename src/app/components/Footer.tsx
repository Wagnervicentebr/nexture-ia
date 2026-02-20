import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    empresa: [
      { label: 'Sobre a Nexture', href: '#' },
      { label: 'Nossa Metodologia', href: '#' },
      { label: 'Equipe', href: '#' },
      { label: 'Carreiras', href: '#' }
    ],
    solucoes: [
      { label: 'Capacitação Interna', href: '#' },
      { label: 'Contratação de Talentos', href: '#' },
      { label: 'Consultoria em IA', href: '#' },
      { label: 'Casos de Sucesso', href: '#' }
    ],
    recursos: [
      { label: 'Blog', href: '#' },
      { label: 'Webinars', href: '#' },
      { label: 'E-books', href: '#' },
      { label: 'FAQ', href: '#' }
    ]
  };

  return (
    <footer className="bg-[#0B1C3F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-['Poppins'] font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                NEXTURE
              </h3>
              <p className="text-blue-200 mb-6 leading-relaxed">
                Formamos desenvolvedores com IA e conectamos empresas aos melhores talentos tech do mercado.
              </p>
              
              <div className="space-y-3">
                <a href="mailto:contato@nexture.com.br" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  contato@nexture.com.br
                </a>
                <a href="tel:+551910965038" className="flex items-center gap-3 text-blue-200 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  (19) 1096-5038
                </a>
                <div className="flex items-start gap-3 text-blue-200">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span>São Paulo, SP<br />Brasil</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Soluções</h4>
            <ul className="space-y-3">
              {footerLinks.solucoes.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-['Poppins'] font-semibold text-lg mb-4">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-200">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <span>•</span>
              <span>© 2026 Nexture. Todos os direitos reservados.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}