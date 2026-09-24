function FooterSection() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="system-status">
          <span />
          BARCHA BAZA TUGUNLARI
          ISHLAMOQDA
        </div>

        <div className="footer-links">
          <a href="#hero">
            Maxfiylik Siyosati
          </a>

          <a href="#hero">
            Foydalanish Shartlari
          </a>

          <a href="#hero">
            GitHub
          </a>

          <a href="#hero">
            Discord
          </a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()}{" "}
          AETHERIA QUANTUM INC.
          BARCHA HUQUQLAR HIMOYALANGAN.
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;