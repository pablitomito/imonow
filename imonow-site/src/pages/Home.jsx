import { Link } from 'react-router-dom'
import './Home.css'

const steps = [
  { n:'01', t:'Envie-nos o seu imóvel',    d:'Preencha o formulário com os dados básicos. Gratuito, sem compromisso.' },
  { n:'02', t:'Apresentamos à rede',        d:'O seu imóvel chega a todos os investidores e imobiliárias associadas em simultâneo.' },
  { n:'03', t:'Propostas em 48 horas',      d:'Em 48 horas recebe por email todas as propostas concretas para o seu imóvel.' },
  { n:'04', t:'Escritura tratada por nós',  d:'Chegando a acordo, toda a burocracia fica connosco. Só assina na escritura.' },
]

const adv = [
  { t:'Proposta em 48 horas',   d:'Não espera meses. Em dois dias tem propostas reais no email.' },
  { t:'Rede de investidores',   d:'O seu imóvel chega a dezenas de compradores ao mesmo tempo.' },
  { t:'Zero comissões',         d:'O serviço é completamente gratuito para o vendedor.' },
  { t:'Burocracia por nossa conta', d:'Documentação, negociação, escritura — tudo tratado por nós.' },
]

const cmp = [
  { l:'Proposta em 48 horas',             a:true,  b:false },
  { l:'Sem comissões para o vendedor',    a:true,  b:false },
  { l:'Rede de compradores simultânea',   a:true,  b:false },
  { l:'Processo fechado em dias',         a:true,  b:false },
  { l:'Toda a burocracia tratada',        a:true,  b:false },
  { l:'Acompanhamento do início ao fim',  a:true,  b:false },
]

export default function Home() {
  return (
    <main>

      <section className="hero">
        <div className="w hero-inner">
          <div>
            <span className="chip chip-inv" style={{ marginBottom: 28 }}>Plataforma imobiliária digital · Lisboa</span>
            <h1 className="hero-title">
              Venda a sua casa.<br />
              <span className="hero-title-dim">Rápido.</span>
            </h1>
            <p className="hero-body">
              Ligamos o seu imóvel a uma rede de investidores e imobiliárias associadas.
              Propostas reais em 48 horas. Sem comissões. Sem burocracia.
            </p>
            <div className="hero-actions">
              <Link to="/contacto" className="btn btn-w btn-lg">Quero vender a minha casa</Link>
              <Link to="/sobre"    className="btn btn-ow btn-lg">Como funciona</Link>
            </div>
            <div className="hero-metrics">
              <div className="hm"><span className="hm-val">48h</span><span className="hm-lbl">Para ter propostas</span></div>
              <div className="hm-sep" />
              <div className="hm"><span className="hm-val">0%</span><span className="hm-lbl">Comissões</span></div>
              <div className="hm-sep" />
              <div className="hm"><span className="hm-val">100%</span><span className="hm-lbl">Gratuito</span></div>
            </div>
          </div>
          <div className="hero-cards">
            <div className="hc hc-full">
              <p className="hc-eyebrow">O que somos</p>
              <p className="hc-body">Uma Plataforma Digital de Serviços Imobiliários</p>
            </div>
            <div className="hc hc-num">
              <p className="hc-big">48<small>h</small></p>
              <p className="hc-sub">Propostas no email</p>
            </div>
            <div className="hc hc-txt">
              <p className="hc-eyebrow">O que fazemos</p>
              <p className="hc-body">Ligamos proprietários a investidores e imobiliárias associadas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="w how-grid">
          <div>
            <span className="eyebrow">O que fazemos</span>
            <h2 className="t-h1">Ligamos proprietários à rede certa</h2>
            <p className="t-body">
              Ao recebermos o contacto de um proprietário, apresentamos o negócio a <strong>todos os nossos investidores</strong> e a <strong>todas as imobiliárias associadas</strong> em simultâneo.
            </p>
            <p className="t-body" style={{ marginTop: 12 }}>
              Em <strong>48 horas</strong> enviamos por email todas as propostas recebidas — claras, concretas, sem surpresas.
            </p>
          </div>
          <div>
            <span className="eyebrow">Como se concretiza</span>
            <h2 className="t-h1">Da proposta à escritura</h2>
            <p className="t-body">
              Após receber as propostas, entramos numa fase de <strong>negociação final</strong>. Chegando a acordo, tratamos de toda a documentação e questões burocráticas.
            </p>
            <p className="t-body" style={{ marginTop: 12 }}>
              O proprietário só precisa de <strong>aparecer na escritura</strong>.
            </p>
            <Link to="/contacto" className="btn btn-o" style={{ marginTop: 28 }}>Começar agora</Link>
          </div>
        </div>
      </section>

      <div className="w"><div className="rule" /></div>

      <section className="sec bg-light">
        <div className="w">
          <div className="sec-intro">
            <span className="eyebrow">O processo</span>
            <h2 className="t-h1">Como funciona</h2>
            <p className="t-body">Da primeira mensagem à escritura — quatro passos.</p>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div key={s.n} className="step">
                <div className="step-head">
                  <span className="step-n">{s.n}</span>
                  {i < steps.length - 1 && <div className="step-line" />}
                </div>
                <h3 className="t-h3">{s.t}</h3>
                <p className="t-body-sm">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w"><div className="rule" /></div>

      <section className="sec">
        <div className="w">
          <div className="sec-intro">
            <span className="eyebrow">Porquê a IMÓ NOW</span>
            <h2 className="t-h1">Simples, rápido, sem custos.</h2>
          </div>
          <div className="adv-grid">
            {adv.map(a => (
              <div key={a.t} className="adv-card">
                <div className="adv-marker" />
                <h3 className="t-h3">{a.t}</h3>
                <p className="t-body-sm">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="cta-strip bg-dark">
        <div className="w cta-inner">
          <div>
            <h2 className="t-h1 t-h1-inv">Pronto para vender<br />a sua casa?</h2>
            <p className="t-body" style={{ marginTop: 10, color: 'var(--t-inv-medium)' }}>Gratuito. Sem compromisso. Proposta em 48 horas.</p>
          </div>
          <Link to="/contacto" className="btn btn-w btn-lg">Contactar agora</Link>
        </div>
      </section>

      <section className="rec-band-sec">
        <div className="w rec-band">
          <div>
            <span className="chip" style={{ marginBottom: 20 }}>IMÓ NOW Recrutamento</span>
            <h2 className="t-h1">O teu talento<br />não tem limites.</h2>
            <p className="t-body" style={{ marginTop: 16 }}>
              Um projeto pensado para pessoas com limitações físicas e cuidadores informais.
              Oportunidades reais. Sem pressões. Com propósito.
            </p>
            <Link to="/recrutamento" className="btn btn-p" style={{ marginTop: 28 }}>Conhecer o projeto</Link>
          </div>
          <div className="rb-quote">
            <blockquote>
              "Porque são muito injustas muitas situações de vidas que têm dificuldades
              e não têm o direito de sofrer ainda mais sem nunca sentirem uma solução,
              um apoio, um carinho, uma perspectiva um pouco melhor."
            </blockquote>
            <cite>— Fundador, IMÓ NOW Recrutamento</cite>
          </div>
        </div>
      </section>

    </main>
  )
}
