import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logoNexture from '../../assets/logo-nexture.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Como Funciona', href: '#processo' },
    { label: 'Casos de Sucesso', href: '#casos' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#0B1C3F] via-[#1E3A8A] to-[#2563EB] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#" className="flex items-center">
              <img
                src={logoNexture}
                alt="Nexture IA"
                className="h-10 w-auto object-contain"
              />
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/90 hover:text-white font-medium font-['Inter'] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <a
              href="https://wa.me/5511910965038?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Nexture."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white rounded-lg font-semibold font-['Inter'] hover:shadow-lg transition-all"
            >
              Falar com Especialista
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-6 border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/90 hover:text-white font-medium font-['Inter'] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5511910965038?text=Olá!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20Nexture."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white rounded-lg font-semibold font-['Inter'] hover:shadow-lg transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Falar com Especialista
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}