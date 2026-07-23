"use client";

import { useEffect, useRef, useState } from "react";

const videos = [1, 3, 5, 8].map(number => `/provas-sociais/video-feedback-${String(number).padStart(2, "0")}.mp4#t=0.5`);
const feedbacks = [
  "resultado-roas-954.jpeg", "resultado-roas-952.jpeg", "resultado-roas-1260.jpeg",
  "whats-dani-motos.jpeg", "whats-fiesta-vendido.jpeg", "whats-dois-carros.jpeg",
  "whats-simone.jpeg", "whats-comunidade.jpeg", "feedback-escrito-1.png",
  "coment-yasmin.jpeg", "coment-alan.jpeg", "coment-vivi.jpeg", "coment-mileine.jpeg",
  "coment-juliano.jpeg", "coment-reels.jpeg", "coment-anthony.jpeg", "feed2.png",
];

export function FeedbackShowcase() {
  const [selected, setSelected] = useState<string | null>(null);
  const videoTrack = useRef<HTMLDivElement>(null);

  const moveVideos = (direction: number) => {
    const track = videoTrack.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".feedback-video");
    track.scrollBy({ left: direction * ((card?.offsetWidth ?? 220) + 14), behavior: "smooth" });
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      const track = videoTrack.current;
      if (!track || Array.from(track.querySelectorAll("video")).some(video => !video.paused)) return;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + 234, behavior: "smooth" });
    }, 4000);
    return () => window.clearInterval(timer);
  }, []);

  return <>
    <div className="feedback-video-carousel">
      <button type="button" className="feedback-video-arrow prev" aria-label="Ver depoimento anterior" onClick={() => moveVideos(-1)}>‹</button>
      <div className="feedback-videos" ref={videoTrack} aria-label="Vídeos de clientes da Avante">
        {videos.map((video, index) => <article className="feedback-video" key={video}><video src={video} controls playsInline preload="metadata" aria-label={`Depoimento em vídeo ${index + 1}`} /><span>Depoimento {String(index + 1).padStart(2, "0")}</span></article>)}
      </div>
      <button type="button" className="feedback-video-arrow next" aria-label="Ver próximo depoimento" onClick={() => moveVideos(1)}>›</button>
    </div>
    <p className="feedback-hint">Feedbacks reais · clique em uma imagem para ampliar</p>
    <div className="feedback-marquee" aria-label="Feedbacks e resultados de clientes">
      <div className="feedback-track">
        {[...feedbacks, ...feedbacks].map((image, index) => <button type="button" className="feedback-image" key={`${image}-${index}`} aria-hidden={index >= feedbacks.length} tabIndex={index >= feedbacks.length ? -1 : 0} onClick={() => setSelected(image)}><img src={`/provas-sociais/${image}`} alt={index < feedbacks.length ? "Ampliar feedback ou resultado real de cliente da Avante" : ""} loading="lazy" /></button>)}
      </div>
    </div>
    {selected && <div className="feedback-lightbox" role="dialog" aria-modal="true" aria-label="Feedback ampliado" onClick={() => setSelected(null)}><button type="button" className="lightbox-close" aria-label="Fechar imagem" onClick={() => setSelected(null)}>×</button><img src={`/provas-sociais/${selected}`} alt="Feedback de cliente ampliado" onClick={event => event.stopPropagation()} /></div>}
  </>;
}
