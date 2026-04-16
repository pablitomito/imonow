import { Link } from 'react-router-dom'
import './Sobre.css'

const values = [
  { t:'Confiança',     d:'O que dizemos é o que fazemos. Sem custos escondidos, sem surpresas.' },
  { t:'Transparência', d:'O processo é claro do início ao fim. Sabe sempre o que está a acontecer.' },
  { t:'Proximidade',   d:'Cada proprietário é tratado de forma individual. Estamos consigo em cada passo.' },
  { t:'Resultados',    d:'Não descansamos enquanto o negócio não estiver fechado com as condições certas.' },
]
const zones = ['Lisboa','Sintra','Cascais','Oeiras','Almada','Setúbal','Loures','Amadora','Odivelas','Montijo']

export default function Sobre() {
  return (
    <main>
      <section className="sobre-hero">
        <div className="w">
          <span className="eyebrow eyebrow-inv">Quem somos</span>
          <h1 className="t-d1 t-d1-inv">Sobre a <span style={{ color:'var(--yellow)' }}>IMÓ NOW</span></h1>
          <p className="t-body t-body-inv">Nascemos para tornar a venda de imóveis simples, rápida e transparente.</p>
        </div>
      </section>

      <section className="sec">
        <div className="w sobre-grid">
          <div>
            <span className="eyebrow">A nossa missão</span>
            <h2 className="t-h1">Um objetivo simples</h2>
            <p className="t-body">A IMÓ NOW nasceu com um objetivo claro: tornar a venda de imóveis uma experiência <strong>sem stress, sem surpresas e com resultados reais</strong>.</p>
            <p className="t-body" style={{ marginTop: 12 }}>Somos uma plataforma digital que faz a ligação entre proprietários e uma <strong>vasta rede de investidores</strong>, assim como um núcleo de <strong>imobiliárias associadas</strong>.</p>
            <p className="t-body" style={{ marginTop: 12 }}>Atuamos em Lisboa e arredores — da avaliação à escritura, tratamos de tudo.</p>
            <Link to="/contacto" className="btn btn-o" style={{ marginTop: 32 }}>Falar connosco</Link>
          </div>
          <div className="sobre-stats">
            <div className="ss ss-d"><p className="ss-val">48h</p><p className="ss-lbl">Para ter propostas no email</p></div>
            <div className="ss ss-l"><p className="ss-val">0€</p><p className="ss-lbl">Comissões ou custos</p></div>
            <div className="ss ss-w"><p className="ss-quote">"Da avaliação à escritura — tratamos de tudo por si."</p></div>
          </div>
        </div>
      </section>

      <div className="w"><div className="rule" /></div>

      <section className="sec bg-light">
        <div className="w">
          <span className="eyebrow">O que nos guia</span>
          <h2 className="t-h1" style={{ marginBottom: 48 }}>Os nossos valores</h2>
          <div className="vals-grid">
            {values.map(v => (
              <div key={v.t} className="val-card">
                <div className="val-mark" />
                <h3 className="t-h3">{v.t}</h3>
                <p className="t-body-sm">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w"><div className="rule" /></div>

      <section className="sec">
        <div className="w zones-grid">
          <div>
            <span className="eyebrow">Onde atuamos</span>
            <h2 className="t-h1">Lisboa e arredores</h2>
            <p className="t-body">Especializados no mercado imobiliário da Grande Lisboa. Conhecemos cada zona, cada bairro, cada oportunidade.</p>
            <div className="zones-pills">
              {zones.map(z => <span key={z} className="zpill">{z}</span>)}
            </div>
          </div>
          <div className="zones-cta">
            <h3 className="t-h2">A sua zona não está na lista?</h3>
            <p className="t-body">Fale connosco — avaliamos sempre o seu caso, independentemente da localização.</p>
            <Link to="/contacto" className="btn btn-w btn-lg">Contactar agora</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
