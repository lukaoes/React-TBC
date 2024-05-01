import { getI18n } from '../../locales/server';

async function Footer() {
  const t = await getI18n()

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-newsteller"> 
          <p>{t('footer.paragraph')}</p>
          <div>
            <input type="email" name="email" placeholder="Email Address" />
            <button>{t('footer.subscribe')}</button>
          </div>
        </div>
        <div className="footer-links">
          <div className="company">
            <h2>{t('footer.company')}</h2>
            <a href="/">{t('footer.terms')}</a>
            <a href="/">{t('footer.privacy')}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
