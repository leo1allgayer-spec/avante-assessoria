import { LeadForm } from "../LeadForm";

export default function AgendarPage() {
  return <main className="form-page">
    <header className="form-nav shell"><a className="brand" href="/" aria-label="Voltar para o site da Avante"><img src="/logo-avante.jpeg" alt="Avante Digital"/><span>avante.digital</span></a><a className="form-back" href="/">← Voltar ao site</a></header>
    <section className="lead-section form-page-section"><div className="shell lead-box"><div className="lead-copy"><div className="eyebrow"><i/> ÚLTIMO PASSO</div><h1>Faltam poucos segundos<br/>para sua empresa <em>avançar.</em></h1><div className="lead-step"><b>1</b><div><h3>Complete o formulário</h3><p>Conte um pouco sobre sua empresa e o momento atual do seu marketing.</p></div></div><div className="lead-step"><b>2</b><div><h3>Receba um atendimento personalizado</h3><p>Um especialista da Avante receberá suas respostas e seguirá com o agendamento da reunião.</p></div></div></div><LeadForm /></div></section>
  </main>;
}
