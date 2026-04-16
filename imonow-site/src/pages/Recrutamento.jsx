import './Recrutamento.css'

const steps = [
  { n:'01', t:'Partilha com a tua rede',        d:'Fazes publicações nas redes sociais sobre os serviços da IMÓ NOW. Ao teu ritmo, sem obrigatoriedade.' },
  { n:'02', t:'Um cliente chega através de ti',  d:'Quando um cliente chega via a tua partilha, fica registado como o teu contacto.' },
  { n:'03', t:'Negócio concretizado',            d:'Se a venda se concretizar, são acertadas as contas com todos os elementos da equipa participantes.' },
]
const profiles = ['Dificuldades motoras','Pessoas invisuais','Utilizadores de cadeira de rodas','Surdos e com baixa audição','Cuidadores informais','Outros perfis condicionados']

export default function Recrutamento() {
  return (
    <main>
      <section className="rec-hero">
        <div className="w">
          <span className="chip chip-inv" style={{ marginBottom: 22 }}>IMÓ NOW Recrutamento</span>
          <h1 className="t-d1 t-d1-inv">
            O teu talento<br />
            não tem limites.<br />
            <span style={{ color:'var(--t-inv-soft)' }}>Nós sabemos disso.</span>
          </h1>
          <p className="t-body t-body-inv">Oportunidades reais para pessoas reais. Sem pressões. Com propósito.</p>
          <a href="mailto:recrutamento@imonow.org" className="btn btn-w btn-lg" style={{ marginTop: 36 }}>
            Quero juntar-me à equipa
          </a>
        </div>
      </section>

      <section className="sec">
        <div className="w rec-oque">
          <div>
            <span className="eyebrow">O que somos</span>
            <h2 className="t-h2">Uma plataforma digital de serviços imobiliários</h2>
            <p className="t-body">A IMÓ NOW liga proprietários de imóveis a investidores e imobiliárias associadas. A nossa vertente de recrutamento nasceu do mesmo propósito — criar ligações com valor real.</p>
          </div>
          <div>
            <span className="eyebrow">O que fazemos</span>
            <h2 className="t-h2">Criamos oportunidades com propósito</h2>
            <p className="t-body">Os nossos colaboradores fazem <strong>publicações nas redes sociais</strong> sobre os nossos serviços. Apenas uns momentos do dia, conforme a disponibilidade de cada um, <strong>sem qualquer pressão de tempo ou obrigatoriedade</strong>.</p>
          </div>
        </div>
      </section>

      <div className="w"><div className="rule" /></div>

      <section className="sec bg-light">
        <div className="w">
          <span className="eyebrow">Como funciona</span>
          <h2 className="t-h1" style={{ marginBottom: 56 }}>Três passos simples</h2>
          <div className="rec-steps">
            {steps.map((s, i) => (
              <div key={s.n} className="rec-step">
                <div className="rss-l">
                  <span className="rss-n">{s.n}</span>
                  {i < steps.length - 1 && <div className="rss-line" />}
                </div>
                <div className="rss-r">
                  <h3 className="t-h3">{s.t}</h3>
                  <p className="t-body-sm">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="w"><div className="rule" /></div>

      <section className="sec">
        <div className="w pq-grid">
          <div>
            <span className="eyebrow">Para quem</span>
            <h2 className="t-h1">Este projeto é para ti</h2>
            <p className="t-body">Este projeto é pensado especialmente para <strong>todas as pessoas condicionadas por alguma limitação física</strong>, assim como para os <strong>cuidadores informais</strong> dos mesmos.</p>
            <div className="pq-profiles">
              {profiles.map(p => (
                <div key={p} className="pq-item">
                  <div className="pq-dot" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="porque-block">
            <span className="eyebrow">Porquê</span>
            <div className="porque-texts">
              <p>Porque somos muito tristes por saber que existem dificuldades diárias na vida de muitas pessoas.</p>
              <p>Porque temos conhecimento de alguns casos próximos e queremos muito ajudar — criar mais soluções.</p>
              <p>Porque são muito injustas muitas situações de vidas que têm dificuldades e não têm o direito de sofrer ainda mais sem nunca sentirem uma solução, um apoio, um carinho, uma perspectiva um pouco melhor.</p>
              <p className="porque-final">Porque queremos, seja lá o que isso for e o que signifique para cada um, ser acima de tudo algo de bom e positivo — fazendo isso acontecer na realidade, na prática.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec bg-dark">
        <div className="w convite">
          <div className="conv-l">
            <span className="eyebrow eyebrow-inv">Junta-te a nós</span>
            <h2 className="t-h1 t-h1-inv">Vamos?<br /><span style={{ color:'var(--t-inv-soft)' }}>Seguimos juntos?</span></h2>
            <p className="t-body t-body-inv">Uma grande equipa de amigos(as) e colaboradores(as), rumo ao sucesso de todos.</p>
            <a href="mailto:geral@imonow.org" className="btn btn-w btn-lg" style={{ marginTop: 36 }}>
              Sim — quero fazer parte
            </a>
            <small>ou escreve para <a href="mailto:geral@imonow.org">geral@imonow.org</a></small>
          </div>
          <div className="conv-cards">
            <div className="cc cc-d">
              <p className="cc-n">01</p>
              <h3 className="t-h3 t-h3-inv" style={{ color:'var(--t-inv-strong)' }}>O teu talento</h3>
              <p className="t-body-sm t-body-sm-inv">Não precisas de nada especial. A tua vontade de fazer parte é o que importa.</p>
            </div>
            <div className="cc cc-l">
              <p className="cc-n">02</p>
              <h3 className="t-h3">Equipa unida</h3>
              <p className="t-body-sm">Somos amigos(as) antes de sermos colegas. Crescemos juntos.</p>
            </div>
            <div className="cc cc-d cc-wide">
              <p className="cc-n">03</p>
              <h3 className="t-h3" style={{ color:'var(--t-inv-strong)' }}>Sem obrigações</h3>
              <p className="t-body-sm t-body-sm-inv">Ao teu ritmo, quando quiseres, como puderes. Sem pressões, sem horários fixos.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
