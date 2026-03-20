import { motion } from "motion/react";
import { ArrowLeft, Brain, Briefcase, Clock3, Rocket, Sparkles, Target } from "lucide-react";
import React from "react";

const logoNexture = new URL("../../assets/logo-nexture.png", import.meta.url).href;

const mindsetItems = [
  "Forte senso de responsabilidade pelo próprio aprendizado",
  "Capacidade de executar mesmo sem ter 100% de clareza",
  "Confortável com erro, feedback e iteração rápida",
  "Proatividade (não espera instruções o tempo todo)",
  "Interesse genuíno por tecnologia e IA",
];

const cognitionItems = [
  "Curiosidade + pensamento crítico",
  "Raciocínio lógico básico (não precisa saber programar ainda)",
  "Capacidade de resolver problemas de forma estruturada",
  "Facilidade em aprender ferramentas novas rapidamente",
];

const nonFitItems = [
  "Pessoas buscando apenas conteúdo passivo",
  "Quem não tem tempo para se dedicar",
  "Quem desiste fácil diante de dificuldade",
  "Quem espera receita pronta",
  "Quem não gosta de aprender na prática",
];

const outcomeItems = [
  "Ser capaz de construir aplicações com apoio de IA",
  "Entender como usar IA para acelerar desenvolvimento",
  "Ter projetos reais no portfólio",
  "Estar pronto para aplicar esse conhecimento no mercado",
];

const bulletVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.08 * index },
  }),
};

function SectionCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_70px_rgba(11,28,63,0.35)] backdrop-blur-xl md:p-8"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[color:var(--color-accent)]/20 blur-3xl" />
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl border border-white/15 bg-white/10 p-2.5">
          <Icon className="h-5 w-5 text-[color:var(--color-accent)]" />
        </div>
        <h2 className="font-['Poppins'] text-xl font-semibold text-white md:text-2xl">{title}</h2>
      </div>
      {children}
    </motion.article>
  );
}

function AnimatedBullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li
          key={item}
          custom={index}
          variants={bulletVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-3 text-sm text-blue-50/95 md:text-base"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--color-accent)]" />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

export function StudentProfilePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(80%_70%_at_50%_0%,#1E3A8A_0%,#0B1C3F_50%,#08112A_100%)] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 80, -40, 0], y: [0, -40, 20, 0] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -left-24 -top-20 h-72 w-72 rounded-full bg-[#2563EB]/35 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -90, 60, 0], y: [0, 50, -20, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-[#1E3A8A]/45 blur-3xl"
        />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 32, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute left-1/2 top-[20%] h-[620px] w-[620px] -translate-x-1/2 rounded-full border border-white/10"
        />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-24 md:px-8">
        <motion.header
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md md:px-5"
        >
           <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-xs font-medium text-blue-50/90 transition-colors hover:bg-white/15 md:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </a>
          <a href="/" className="flex items-center">
            <img src={logoNexture} alt="Nexture IA" className="h-8 w-auto object-contain md:h-9" />
          </a>
         
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Job Description - AI Software Builder (Aluno Nexture)
          </div>
          <h1 className="max-w-4xl font-['Poppins'] text-3xl font-semibold leading-tight text-white md:text-5xl">
            Aqui você não vem assistir aula. <br className="hidden md:block" />
            Você vem construir.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-blue-100/95 md:text-xl">
            Estamos buscando pessoas que queiram aprender a construir software com IA de forma
            prática e acelerada, aplicando o conhecimento em projetos reais desde o início.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <SectionCard title="Objetivo da vaga" icon={Target}>
            <p className="text-sm leading-relaxed text-blue-50/95 md:text-base">
              A formação é intensiva, orientada à execução e focada em preparar o aluno para
              construir soluções reais com IA e desenvolvimento moderno.
            </p>
          </SectionCard>

          <SectionCard title="Sobre o programa" icon={Rocket}>
            <p className="text-sm leading-relaxed text-blue-50/95 md:text-base">
              A formação combina desenvolvimento de software com uso de IA para acelerar entregas,
              com foco em prática e resolução de problemas reais, um modelo cada vez mais presente
              no mercado atual.
            </p>
          </SectionCard>

          <SectionCard title="Mentalidade (o mais importante)" icon={Sparkles}>
            <AnimatedBullets items={mindsetItems} />
            <p className="mt-5 rounded-xl border border-white/15 bg-black/20 p-4 text-sm font-medium text-blue-100">
              O programa favorece pessoas proativas, que buscam evoluir de forma independente.
            </p>
          </SectionCard>

          <SectionCard title="Capacidade cognitiva" icon={Brain}>
            <AnimatedBullets items={cognitionItems} />
            <p className="mt-5 text-sm text-blue-100/90">
              Cursos modernos de IA focam exatamente nisso: autonomia, lógica e resolução prática.
            </p>
          </SectionCard>

          <SectionCard title="Background e comprometimento" icon={Clock3}>
            <ul className="space-y-3 text-sm text-blue-50/95 md:text-base">
              <li>Já teve contato com tecnologia (mesmo que básico)</li>
              <li>Já tentou aprender programação ou ferramentas digitais</li>
              <li>Já usou IA (ChatGPT, etc.) no dia a dia</li>
              <li>Disponibilidade de 1 hora semanal para aulas ao vivo</li>
              <li>Capacidade de manter consistência por semanas/meses</li>
              <li>Participação ativa nas aulas e projetos</li>
            </ul>
            <p className="mt-5 rounded-xl border border-white/15 bg-black/20 p-4 text-sm text-blue-100">
              A maioria das pessoas não falha por dificuldade técnica, mas por falta de
              consistência.
            </p>
          </SectionCard>

          <SectionCard title="O que o aluno vai fazer" icon={Briefcase}>
            <ul className="space-y-3 text-sm text-blue-50/95 md:text-base">
              <li>Construir projetos reais com IA desde as primeiras semanas</li>
              <li>Aprender ferramentas modernas de desenvolvimento acelerado</li>
              <li>Resolver problemas práticos (não exercícios fictícios)</li>
              <li>Trabalhar com prompts, automações e integrações</li>
              <li>Criar um portfólio aplicável ao mercado</li>
            </ul>
          </SectionCard>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <SectionCard title="Quem NÃO é fit" icon={Target}>
            <AnimatedBullets items={nonFitItems} />
            <p className="mt-5 rounded-xl border border-red-300/20 bg-red-500/10 p-4 text-sm text-red-100">
              Isso é crítico no job description. Sem esse filtro, o curso quebra.
            </p>
          </SectionCard>

          <SectionCard title="Resultado esperado" icon={Rocket}>
            <AnimatedBullets items={outcomeItems} />
          </SectionCard>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mt-10 rounded-3xl border border-white/15 bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-7 shadow-2xl backdrop-blur-xl"
        >
          <h3 className="font-['Poppins'] text-2xl font-semibold md:text-3xl">
            Diferenciais (nice to have)
          </h3>
          <div className="mt-4 flex flex-wrap gap-3 text-sm md:text-base">
            {[
              "Disciplina para estudar mesmo sem pressão externa",
              "Consistência em rotinas (mesmo sem motivação)",
              "Perfil executor (prioriza fazer em vez de apenas consumir conteúdo)",
              "Interesse em construir coisas reais (não só aprender teoria)",
              "Mentalidade de longo prazo (entende que resultado vem de repetição, não de hacks)"
            ].map((item) => (
              <motion.span
                key={item}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-blue-50"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}
