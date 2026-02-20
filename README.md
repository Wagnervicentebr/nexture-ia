# NEXTURE - B2B Landing Page

Landing page corporativa para a NEXTURE - Escola de Desenvolvimento com IA, focada em empresas (B2B).

## 🎯 Objetivo

Apresentar a Nexture como parceira estratégica para empresas que desejam:
1. Treinar colaboradores juniores internos para construir software com IA
2. Contratar desenvolvedores juniores pré-treinados em IA

## 🎨 Identidade Visual

### Paleta de Cores
- **Primary**: #0B1C3F (Dark Navy Blue)
- **Secondary**: #1E3A8A
- **Accent**: #2563EB
- **Background**: #FFFFFF e #F5F7FB
- **Text**: #111827 e #6B7280

### Tipografia
- **Headings**: Poppins SemiBold
- **Body**: Inter Regular

## 📐 Estrutura da Página

### 1. Navbar (Navegação Fixa)
- Logo da Nexture
- Links de navegação (Soluções, Diferenciais, Como Funciona, Casos)
- CTA "Falar com Especialista"
- Menu mobile responsivo

### 2. Hero Section
- Headline principal: "Forme Desenvolvedores com IA ou Contrate Talentos Prontos"
- Subheadline explicativa
- Dois CTAs: "Agendar Conversa Estratégica" e "Baixar Deck Institucional"
- Imagem de desenvolvedores com IA
- Card flutuante com métrica de produtividade

### 3. Problem Section
- Título: "O Custo Oculto dos Gargalos Técnicos"
- 6 pain points corporativos principais
- Imagem de equipe bloqueada em planejamento

### 4. Solution Section (Dois Modelos)
**Modelo 1 - Capacitação Interna com IA:**
- Aulas ao vivo semanais
- Treinamento em desenvolvimento com IA
- Projetos reais da empresa
- Mentoria técnica

**Modelo 2 - Contratação de Desenvolvedores:**
- Desenvolvedores pré-treinados
- Mentalidade de produtividade com IA
- Prontos para stacks modernas
- Mentoria pós-contratação opcional

### 5. Differentiation Section
- 4 diferenciais principais
- Tabela de comparação: Nexture vs Cursos Tradicionais vs Bootcamps
- Destaque para uso prático de IA

### 6. Metrics Section
- KPIs corporativos:
  - Time to Productivity: 3-6 meses
  - Redução de Custo: 60-70%
  - Aumento de Produtividade: 300%
  - Taxa de Retenção: 85%
  - Projetos Entregues: 10+
  - ROI Médio: 4x

### 7. How It Works Section
Timeline de 5 etapas:
1. Diagnóstico da Empresa
2. Definição do Modelo
3. Plano de Execução
4. Treinamento / Alocação
5. Monitoramento de Performance

### 8. Social Proof Section
- 3 depoimentos de empresas parceiras
- Logos de 8 empresas parceiras
- 3 case studies com resultados reais

### 9. Final CTA
- Headline motivacional
- Dois CTAs principais
- Trust badges (sem compromisso, diagnóstico gratuito, resposta 24h)
- Cards com informações adicionais

### 10. Footer
- Informações da empresa
- Links organizados por categoria (Empresa, Soluções, Recursos)
- Contatos (email, telefone, localização)
- Redes sociais
- Termos de uso e política de privacidade

## 🧩 Componentes

Todos os componentes estão em `/src/app/components/`:

- `Navbar.tsx` - Navegação fixa com menu mobile
- `Hero.tsx` - Seção hero com CTAs
- `ProblemSection.tsx` - Apresentação dos problemas
- `SolutionSection.tsx` - Dois modelos de negócio
- `DifferentiationSection.tsx` - Diferenciais e comparação
- `MetricsSection.tsx` - KPIs e resultados
- `HowItWorksSection.tsx` - Processo em 5 etapas
- `SocialProofSection.tsx` - Depoimentos e casos de sucesso
- `FinalCTA.tsx` - Call-to-action final
- `Footer.tsx` - Rodapé completo

## ✨ Recursos Técnicos

- **Framework**: React
- **Animações**: Motion (Framer Motion)
- **Ícones**: Lucide React
- **Estilização**: Tailwind CSS v4
- **Responsividade**: Desktop-first com breakpoints mobile
- **Navegação**: Scroll suave com offset para navbar fixa
- **Imagens**: Unsplash API + ImageWithFallback component

## 🎯 Público-Alvo

**B2B - Empresas de tecnologia que:**
- Precisam expandir times técnicos com orçamento limitado
- Querem reduzir dependência de desenvolvedores seniores caros
- Buscam adotar IA nos processos de desenvolvimento
- Necessitam aumentar velocidade de entrega de projetos
- Querem construir cultura técnica internamente

## 🚀 Diferenciais da Abordagem

1. **Foco Corporativo**: Linguagem B2B, não educacional
2. **Valor de Negócio**: Métricas e ROI em destaque
3. **Flexibilidade**: Dois modelos claros (treinar vs contratar)
4. **Prova Social**: Cases reais e depoimentos de empresas
5. **IA como Core**: IA integrada diariamente, não como módulo adicional
