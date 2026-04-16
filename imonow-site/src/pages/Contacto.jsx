import { useState } from 'react'
import './Contacto.css'

export default function Contacto() {
  const [form, setForm] = useState({ nome:'', email:'', telefone:'', tipo:'vender', mensagem:'' })
  const [sent, setSent] = useState(false)
  const set = e => setForm({ ...form, [e.target.name]: e.target.value })

  const ph = {
    vender: 'Descreva o seu imóvel — localização, tipologia, área, valor que tem em mente...',
    info: 'Escreva a sua dúvida ou pedido de informação...',
    recrutamento: 'Conte-nos um pouco sobre si e o que o motiva a juntar-se à equipa...',
  }

  return (
    <main>
      <section className="ct-hero">
        <div className="w">
          <span className="eyebrow eyebrow-inv">Fale connosco</span>
          <h1 className="t-d1 t-d1-inv">O primeiro passo<br />é gratuito.</h1>
          <p className="t-body t-body-inv">Sem compromisso. Respondemos em menos de 24 horas.</p>
        </div>
      </section>

      <section className="sec bg-light">
        <div className="w ct-grid">
          <div className="ct-info">
            <div className="ci-block">
              <p className="ci-label">Imobiliária</p>
              <a href="mailto:geral@imonow.org">geral@imonow.org</a>
            </div>
            <div className="ci-block">
              <p className="ci-label">Recrutamento</p>
              <a href="mailto:geral@imonow.org">geral@imonow.org</a>
            </div>
            <div className="ci-block">
              <p className="ci-label">Onde atuamos</p>
              <p>Lisboa e arredores, Portugal</p>
            </div>
            <div className="ci-block">
              <p className="ci-label">Redes sociais</p>
              <a href="https://instagram.com/imonow.pt" target="_blank" rel="noreferrer">@imonow.pt</a>
              <a href="https://instagram.com/imonow.recrutamento" target="_blank" rel="noreferrer">@imonow.recrutamento</a>
            </div>
            <div className="ci-tagline">
              <p>IMÓ NOW, sua plataforma digital de serviços imobiliários.</p>
            </div>
          </div>

          <div className="ct-form-card">
            {!sent ? (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
                <h2 className="t-h2 ct-form-title">Envie-nos uma mensagem</h2>
                <div className="ct-tipos">
                  {[
                    { v:'vender',       l:'Quero vender a minha casa' },
                    { v:'info',         l:'Tenho uma dúvida' },
                    { v:'recrutamento', l:'Quero juntar-me à equipa' },
                  ].map(t => (
                    <button key={t.v} type="button"
                      className={`ct-tipo ${form.tipo === t.v ? 'ct-tipo-on' : ''}`}
                      onClick={() => setForm({ ...form, tipo: t.v })}
                    >{t.l}</button>
                  ))}
                </div>
                <div className="cf-row">
                  <div className="cf-grp">
                    <label>Nome <span className="cf-req">*</span></label>
                    <input name="nome" value={form.nome} onChange={set} placeholder="O seu nome completo" required />
                  </div>
                  <div className="cf-grp">
                    <label>Email <span className="cf-req">*</span></label>
                    <input name="email" type="email" value={form.email} onChange={set} placeholder="email@exemplo.com" required />
                  </div>
                </div>
                <div className="cf-grp">
                  <label>Telefone <span className="cf-opt">(opcional)</span></label>
                  <input name="telefone" value={form.telefone} onChange={set} placeholder="+351 9XX XXX XXX" />
                </div>
                <div className="cf-grp">
                  <label>Mensagem <span className="cf-req">*</span></label>
                  <textarea name="mensagem" value={form.mensagem} onChange={set} rows={5} placeholder={ph[form.tipo]} required />
                </div>
                <button type="submit" className="btn btn-p btn-lg" style={{ width:'100%', justifyContent:'center' }}>
                  Enviar mensagem
                </button>
                <p className="cf-nota">Respondemos em menos de 24 horas. A avaliação é sempre gratuita e sem compromisso.</p>
              </form>
            ) : (
              <div className="cf-success">
                <div className="cfs-check">
                  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h2 className="t-h2">Mensagem enviada.</h2>
                <p className="t-body">Obrigado, <strong>{form.nome}</strong>. Entraremos em contacto para <strong>{form.email}</strong> em breve.</p>
                <button className="btn btn-o" style={{ marginTop: 28 }} onClick={() => setSent(false)}>Enviar outra mensagem</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
