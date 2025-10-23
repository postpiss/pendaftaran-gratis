class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 50;
        }
        .logo { 
          color: #7c3aed;
          font-weight: bold; 
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        ul { 
          display: flex; 
          gap: 1.5rem; 
          list-style: none; 
          margin: 0; 
          padding: 0; 
        }
        a { 
          color: #4b5563;
          text-decoration: none; 
          transition: color 0.2s;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        a:hover { 
          color: #7c3aed;
        }
        @media (max-width: 640px) {
          nav {
            padding: 1rem;
          }
          ul {
            gap: 1rem;
          }
        }
      </style>
</nav>
    `;
    feather.replace();
  }
}
customElements.define('custom-navbar', CustomNavbar);
