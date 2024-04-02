const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-newsteller"> 
          <p>
            Want to know what we&apos;re up to? Sign up for the newsteller and join our tribe.
          </p>
          <div>
            <input type="email" name="email" placeholder="Email Address" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-links">
          <div className="company">
            <h2>Company</h2>
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
