import { ClientCarousel } from "./ClientCarousel";
import { FeedbackShowcase } from "./FeedbackShowcase";

const whatsapp = "/agendar";
const directWhatsapp = "https://wa.me/555192272566?text=Ol%C3%A1!%20Quero%20entender%20como%20a%20Assessoria%20360%C2%B0%20pode%20estruturar%20o%20marketing%20da%20minha%20empresa.";

const fronts = [
  ["01", "Meta Ads", "Campanhas orientadas por dados para gerar demanda, oportunidades e vendas."],
  ["02", "Google Ads", "Sua empresa presente no momento exato em que o cliente procura pela solução."],
  ["03", "Social Media", "Conteúdo estratégico para posicionar a marca, educar e criar relacionamento."],
  ["04", "Edição", "Criativos e vídeos que transformam sua mensagem em comunicação de alta performance."],
  ["05", "CRM e vendas", "Processo comercial estruturado para acompanhar cada lead até o fechamento."],
  ["06", "Site", "Páginas pensadas para apresentar sua empresa com clareza e converter visitantes."],
];

const serviceIcons = ["∞", "G", "◎", "▶", "↗", "</>"];

const journey = [
  ["Semana 1", "Diagnóstico e direção", "Onboarding, coleta de acessos e análise completa dos gargalos e oportunidades da operação."],
  ["Semana 2", "Planejamento estratégico", "Definição de prioridades, canais, indicadores e do plano que vai orientar os próximos meses."],
  ["Semana 3", "Estruturação técnica", "Organização dos ambientes digitais, implantação do CRM e preparação do processo comercial."],
  ["Semana 4", "Produção e lançamento", "Conteúdo, criativos, páginas e campanhas entram em operação com acompanhamento próximo."],
  ["Contínuo", "Otimização e evolução", "Monitoramento diário, reuniões semanais e decisões baseadas nos dados reais da operação."],
];

const faqs = [
  ["A Assessoria 360° substitui uma equipe interna?", "Ela pode complementar a estrutura atual ou assumir a operação de marketing. O formato ideal é definido no diagnóstico, considerando equipe, momento e metas da empresa."],
  ["Em quanto tempo a operação começa a rodar?", "O primeiro mês é dedicado à implantação: diagnóstico, estratégia, estrutura técnica, CRM, conteúdo e lançamento das campanhas. Depois disso, entramos no ciclo contínuo de otimização."],
  ["Vou conseguir acompanhar o que está sendo feito?", "Sim. Você participa das decisões, acompanha os indicadores e tem reuniões semanais para entender avanços, prioridades e próximos passos."],
  ["A Avante atende qualquer tipo de empresa?", "A conversa inicial serve justamente para avaliar aderência. A Assessoria 360° funciona melhor para empresas que querem profissionalizar marketing e vendas com participação ativa da liderança."],
  ["Como funciona o primeiro contato?", "Você chama a Avante pelo WhatsApp, responde algumas perguntas sobre o negócio e agenda uma conversa para avaliarmos cenário, objetivos e fit."],
];

const clients = [
  { name: "Diva em Movimento", logo: "/clientes-perfis/diva-em-movimento.png" },
  { name: "Atacado Moda Sul", logo: "/clientes-perfis/atacado-moda-sul.png" },
  { name: "Lança Look", logo: "/clientes-perfis/lanca-look.png" },
  { name: "Blessed Outlet", logo: "/clientes-perfis/blessed-outlet.png" },
  { name: "Luana Maquiadora", logo: "/clientes-perfis/luana-maquiadora.png" },
  { name: "Megas Perini", logo: "/clientes-perfis/megas-perini.png" },
  { name: "Nova Era Cosméticos", logo: "/clientes-perfis/nova-era.png" },
  { name: "Perfumaria Novo Vício", logo: "/clientes-perfis/novo-vicio.png" },
  { name: "Dra. Quéli Lenz", logo: "/clientes-perfis/dra-queli.png" },
  { name: "Instituto Ponto de Equilíbrio", logo: "/clientes-perfis/ponto-de-equilibrio.png" },
  { name: "Wish Burguer", logo: "/clientes-perfis/wish-burguer.png" },
  { name: "Funny Feelings", logo: "/clientes-perfis/funny-feelings.png" },
  { name: "Bodegas Burger", logo: "/clientes-perfis/bodegas.png" },
  { name: "Ideal Madeiras", logo: "/clientes-perfis/ideal-madeiras.png" },
  { name: "Madeireira Adrianna", logo: "/clientes-perfis/madeireira-adrianna.png" },
  { name: "Império Apple", logo: "/clientes-perfis/imperio-apple.png" },
  { name: "iPhones Novo Hamburgo", logo: "/clientes-perfis/iphones-novo-hamburgo.png" },
  { name: "Grupo Rodeio", logo: "/clientes-perfis/grupo-rodeio.png" },
  { name: "Super Banda Choppão", logo: "/clientes-perfis/banda-choppao.png" },
  { name: "Grupo Manotaço", logo: "/clientes-perfis/grupo-manotaco.png" },
  { name: "New Vision Multimarcas", logo: "/clientes-perfis/new-vision.png" },
  { name: "Premium Multimarcas", logo: "/clientes-perfis/premium-multimarcas.png" },
  { name: "T Motors", logo: "/clientes-perfis/t-motors.png" },
  { name: "Pix Carrão", logo: "/clientes-perfis/pix-carrao.png" },
  { name: "Exclusive Motors", logo: "/clientes-perfis/exclusive-motors.png" },
  { name: "Cardoso Motos", logo: "/clientes-perfis/cardoso-motos.png" },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Avante Digital - início">
          <img src="/logo-avante.jpeg" alt="Avante Digital" />
          <span>avante.digital</span>
        </a>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Falar com um especialista <span>↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><i /> ASSESSORIA DE MARKETING 360°</div>
            <h1>Estruture seu marketing para <em>crescer com previsibilidade.</em></h1>
            <p className="hero-lead">Planejamento, tráfego pago, conteúdo, CRM, vendas e site trabalhando juntos para transformar investimento em crescimento.</p>
            <div className="hero-actions"><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Agendar reunião estratégica <span>→</span></a><a className="text-link" href="#como-funciona">Entender como funciona ↓</a></div>
            <small>Reunião inicial gratuita · Atendimento direto com um especialista</small>
          </div>
          <div className="meeting-card">
            <div className="meeting-badge"><i/> DIAGNÓSTICO INICIAL GRATUITO</div>
            <h2>Descubra o que está travando o crescimento do seu marketing.</h2>
            <p>Em uma conversa estratégica, nosso time analisa o cenário da sua empresa e apresenta os próximos passos mais importantes.</p>
            <ul><li>Diagnóstico dos principais gargalos</li><li>Visão das oportunidades prioritárias</li><li>Orientação para marketing e vendas</li></ul>
            <a className="button light-card" href={whatsapp} target="_blank" rel="noreferrer">Quero agendar uma reunião <span>↗</span></a>
            <small>Leva menos de 2 minutos para agendar.</small>
          </div>
        </div>
        <div className="shell trust-strip"><span>Estratégia</span><i/> <span>Implementação</span><i/> <span>Acompanhamento</span><i/> <span>Performance</span></div>
      </section>

      <section className="problem section-pad">
        <div className="shell split">
          <div><div className="eyebrow dark"><i/> O CUSTO DA DESORGANIZAÇÃO</div><h2>Marketing sem direção<br/>vira apenas <em>mais uma despesa.</em></h2></div>
          <div className="problem-copy"><p>Campanhas isoladas, conteúdo sem objetivo, leads sem acompanhamento e decisões no escuro. O problema nem sempre é falta de investimento — é falta de uma operação conectada.</p><p className="callout">A Avante integra estratégia, execução e vendas em um único plano de crescimento.</p></div>
        </div>
        <div className="shell inline-cta"><div><b>Quer identificar os gargalos da sua operação?</b><span>Converse com um especialista da Avante.</span></div><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Agendar reunião <span>→</span></a></div>
      </section>

      <section className="proof section-pad">
        <div className="shell proof-head"><div><div className="eyebrow"><i/> RESULTADOS REAIS</div><h2>Não é promessa.<br/><em>É o que nossos clientes dizem.</em></h2></div><p>Feedbacks, números e depoimentos de quem já aplicou estratégias da Avante para gerar oportunidades e vendas.</p></div>
        <FeedbackShowcase />
        <div className="shell proof-cta"><div><strong>12,6x</strong><span>ROAS registrado</span></div><div><strong>5 em 5</strong><span>motos vendidas em cinco dias</span></div><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Quero construir meu resultado <b>→</b></a></div>
      </section>

      <section className="clients section-pad">
        <div className="shell">
          <div className="clients-head"><div><div className="eyebrow dark"><i/> EXPERIÊNCIA COMPROVADA</div><h2>Clientes que já<br/><em>confiaram na Avante.</em></h2></div><p>Marcas de diferentes segmentos que escolheram a Avante para profissionalizar sua presença digital, sua operação de marketing ou suas vendas.</p></div>
          <ClientCarousel clients={clients} />
          <div className="clients-note"><span>Negócios reais que já fizeram parte da nossa trajetória.</span><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Quero ser o próximo case <b>→</b></a></div>
        </div>
      </section>

      <section className="fronts section-pad">
        <div className="shell">
          <div className="section-head"><div><div className="eyebrow"><i/> UMA OPERAÇÃO COMPLETA</div><h2>Seis frentes.<br/><em>Uma única direção.</em></h2></div><p>As áreas que fazem o marketing acontecer trabalhando juntas, com prioridades claras e foco no resultado do negócio.</p></div>
          <div className="front-grid">{fronts.map(([n,t,d],i)=><article key={t}><span>{n}</span><div className={`service-icon service-icon-${i}`} aria-hidden="true"><b>{serviceIcons[i]}</b></div><h3>{t}</h3><p>{d}</p></article>)}</div>
          <div className="section-cta"><p>Não sabe quais frentes sua empresa precisa priorizar?</p><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Falar com um especialista <span>→</span></a></div>
        </div>
      </section>

      <section className="journey section-pad" id="como-funciona">
        <div className="shell">
          <div className="section-head journey-head"><div><div className="eyebrow dark"><i/> DA ESTRATÉGIA À EXECUÇÃO</div><h2>Uma implantação clara.<br/><em>Sem improviso.</em></h2></div><p>Você sabe o que será feito, por que será feito e como cada etapa prepara sua empresa para crescer.</p></div>
          <div className="timeline">{journey.map(([when,title,desc],i)=><article key={title}><div className="timeline-marker"><b>{String(i+1).padStart(2,"0")}</b><i/></div><div><span>{when}</span><h3>{title}</h3><p>{desc}</p></div></article>)}</div>
          <div className="section-cta dark-text"><p>Pronto para colocar esse plano em prática?</p><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">Agendar minha reunião <span>→</span></a></div>
        </div>
      </section>

      <section className="difference section-pad">
        <div className="shell difference-grid">
          <div className="difference-card"><span className="quote">“</span><h2>Mais que uma agência:<br/><em>parceiros da sua empresa.</em></h2><p>Não entregamos apenas peças e relatórios. Construímos uma operação estruturada para gerar impacto real no negócio.</p></div>
          <div className="pillars"><article><b>01</b><div><h3>Foco no resultado</h3><p>Cada ação está ligada a um objetivo concreto da empresa.</p></div></article><article><b>02</b><div><h3>Decisões com clareza</h3><p>Dados, prioridades e investimentos transparentes.</p></div></article><article><b>03</b><div><h3>Conhecimento compartilhado</h3><p>Sua equipe entende o processo e evolui junto com a operação.</p></div></article><a className="button primary pillar-cta" href={whatsapp} target="_blank" rel="noreferrer">Conversar sobre minha empresa <span>→</span></a></div>
        </div>
      </section>

      <section className="fit section-pad">
        <div className="shell fit-grid"><div><div className="eyebrow"><i/> PARA QUEM É</div><h2>Para empresas prontas<br/>para dar o <em>próximo passo.</em></h2></div><ul><li>Querem sair das ações isoladas e construir uma estratégia consistente.</li><li>Precisam integrar marketing, atendimento e processo comercial.</li><li>Buscam acompanhamento próximo e decisões orientadas por dados.</li><li>Entendem que crescimento sustentável exige método e execução.</li></ul></div>
      </section>

      <section className="faq section-pad"><div className="shell faq-grid"><div><div className="eyebrow dark"><i/> DÚVIDAS FREQUENTES</div><h2>Antes de começar,<br/><em>vale entender.</em></h2><p>Se sua dúvida não estiver aqui, fale diretamente com nosso time.</p><a className="button primary faq-cta" href={whatsapp} target="_blank" rel="noreferrer">Tirar dúvidas com a Avante <span>→</span></a></div><div>{faqs.map(([q,a],i)=><details key={q}><summary><span>{String(i+1).padStart(2,"0")}</span>{q}<b>+</b></summary><p>{a}</p></details>)}</div></div></section>

      <section className="final-cta"><div className="cta-glow"/><div className="shell"><div className="eyebrow"><i/> VAMOS AVANÇAR?</div><h2>Profissionalize seu marketing.<br/><em>Construa uma operação de verdade.</em></h2><p>Converse com a Avante e descubra se a Assessoria 360° é o próximo passo para sua empresa.</p><a className="button light" href={whatsapp} target="_blank" rel="noreferrer">Agendar reunião estratégica <span>→</span></a><small className="cta-note">Reunião inicial gratuita e sem compromisso.</small></div></section>

      <footer><div className="shell footer-grid"><div className="brand"><img src="/logo-avante.jpeg" alt="Avante Digital"/><span>avante.digital</span></div><p>Estratégia, tecnologia e performance<br/>para empresas que querem avançar.</p><div><a href="https://www.instagram.com/avante.digital_/?hl=pt" target="_blank" rel="noreferrer">Instagram ↗</a><a href={directWhatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div><div className="shell copyright"><span>© 2026 Avante Digital. Todos os direitos reservados.</span><a href="#top">Voltar ao topo ↑</a></div></footer>
      <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar no WhatsApp">✆</a>
    </main>
  );
}
