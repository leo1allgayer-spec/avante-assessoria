"use client";
import { FormEvent } from "react";

export function LeadForm() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = ["Olá! Preenchi o formulário da Assessoria 360° e quero agendar uma reunião.", "", `Nome: ${data.get("nome")}`, `Telefone: ${data.get("telefone")}`, `Instagram: ${data.get("instagram")}`, `Cargo: ${data.get("cargo")}`, `Faturamento mensal: ${data.get("faturamento")}`, `Já fez ou faz tráfego pago: ${data.get("trafego")}`, `Investimento mensal em anúncios: ${data.get("investimento")}`].join("\n");
    window.open(`https://wa.me/555192272566?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return <form className="lead-form" onSubmit={submit}>
    <label><span>Seu nome</span><input name="nome" type="text" placeholder="Seu nome" autoComplete="name" required /></label>
    <label><span>Telefone com DDD</span><input name="telefone" type="tel" placeholder="Telefone (com DDD)" autoComplete="tel" required /></label>
    <label><span>Instagram</span><input name="instagram" type="text" placeholder="Instagram da empresa ou profissional" required /></label>
    <label><span>Qual é o seu cargo?</span><select name="cargo" defaultValue="" required><option value="" disabled>Qual é o seu cargo?</option><option>Sócio(a) / proprietário(a)</option><option>Diretor(a)</option><option>Gerente</option><option>Marketing</option><option>Comercial / vendas</option><option>Outro</option></select></label>
    <label><span>Quanto a empresa fatura por mês?</span><select name="faturamento" defaultValue="" required><option value="" disabled>Quanto a empresa fatura por mês?</option><option>Até R$ 30 mil</option><option>De R$ 30 mil a R$ 100 mil</option><option>De R$ 100 mil a R$ 300 mil</option><option>De R$ 300 mil a R$ 1 milhão</option><option>Acima de R$ 1 milhão</option></select></label>
    <label><span>Já fez ou faz tráfego pago?</span><select name="trafego" defaultValue="" required><option value="" disabled>Já fez ou faz tráfego pago?</option><option>Sim, faço atualmente</option><option>Já fiz, mas parei</option><option>Nunca fiz</option></select></label>
    <label><span>Qual o investimento mensal em anúncios?</span><select name="investimento" defaultValue="" required><option value="" disabled>Qual o investimento mensal em anúncios?</option><option>Ainda não invisto</option><option>Até R$ 1 mil</option><option>De R$ 1 mil a R$ 3 mil</option><option>De R$ 3 mil a R$ 10 mil</option><option>De R$ 10 mil a R$ 30 mil</option><option>Acima de R$ 30 mil</option></select></label>
    <button type="submit">AGENDAR REUNIÃO ESTRATÉGICA <b>→</b></button>
    <small>Ao enviar, seus dados serão encaminhados ao WhatsApp da Avante e usados somente para contato.</small>
  </form>;
}
