

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>woodland</h2>
          <p>
            Creating modern, responsive, and user-friendly web experiences.
          </p>
        </div>

        <div className="footer-links">
          <h3> Links</h3>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/Woods">Woods</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: abc@example.com</p>
          <p>Phone: +919876543210</p>
          <p>India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} MyWebsite. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;