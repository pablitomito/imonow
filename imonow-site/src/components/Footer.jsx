import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="w footer-body">
        <div>
          <div className="logo" style={{ marginBottom: 14 }}>
            <span className="logo-imo">IMÓ</span>
            <span className="logo-now-l">NOW</span>
          </div>
          <p className="fb-tagline">IMÓ NOW, sua plataforma digital de serviços imobiliários.</p>
          <div className="fb-links">
            <a href="https://instagram.com/imonow.pt" target="_blank" rel="noreferrer">Instagram Imobiliária</a>
            <a href="https://instagram.com/imonow.recrutamento" target="_blank" rel="noreferrer">Instagram Recrutamento</a>
            <a href="https://facebook.com/imonow" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
        <div className="fb-col">
          <p className="fb-col-title">Imobiliária</p>
          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre nós</Link>
          <Link to="/contacto">Vender a minha casa</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <div className="fb-col">
          <p className="fb-col-title">Recrutamento</p>
          <Link to="/recrutamento">O projeto</Link>
          <Link to="/recrutamento">Como funciona</Link>
          <Link to="/recrutamento">Para quem</Link>
          <a href="mailto:geral@imonow.org">Juntar-me à equipa</a>
        </div>
        <div className="fb-col">
          <p className="fb-col-title">Contacto</p>
          <a href="mailto:geral@imonow.org">geral@imonow.org</a>
          <span>Lisboa e arredores, Portugal</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="w" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap: 8 }}>
          <p>© {new Date().getFullYear()} IMÓ NOW. Todos os direitos reservados.</p>
          <p>Feito com propósito.</p>
        </div>
      </div>
    </footer>
  )
}
