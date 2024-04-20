import { getDictionary } from "@/app/[lang]/dictionaries"

async function Footer(params) {
  const {lang} = params
  const dict = await getDictionary(lang)

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-newsteller"> 
          <p>{dict.footer.paragraph}</p>
          <div>
            <input type="email" name="email" placeholder={dict.footer.email} />
            <button>{dict.footer.subscribe}</button>
          </div>
        </div>
        <div className="footer-links">
          <div className="company">
            <h2>{dict.footer.company}</h2>
            <a href="/">{dict.footer.terms}</a>
            <a href="/">{dict.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
