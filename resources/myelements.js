// Create Elements
class UsefulFoot extends HTMLElement {
  static observedAttributes = ["footerClass"];
  
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    
    const footer = document.createElement("footer");
    footer.class = 'py-3 my-4 mt-auto';

    const list = document.createElement("ul");
    list.class = 'nav justify-content-center border-bottom pb-3 mb-3';

    const listElements = [
      { href: '#!', iconClass: 'bi bi-facebook' },
      { href: '#!', iconClass: 'bi bi-twitter' },
      { href: '#!', iconClass: 'bi bi-instagram' },
      { href: '#!', iconClass: 'bi bi-linkedin' },
      { href: '#!', iconClass: 'bi bi-github' },
    ];

    listElements.forEach(link => {
      const li = document.createElement('li');
      li.class = 'nav-item';

      const a = document.createElement('a');
      a.class = 'btn btn-outline-light btn-floating m-1 socialbutton';
      a.href = link.href;
      a.role = 'button';

      const icon = document.createElement("i");
      icon.class = link.iconClass;

      a.appendChild(icon);
      li.appendChild(a);
      list.appendChild(li);
    });

    const copyright = document.createElement("small");
    copyright.textContent = "© 2024 Kara Wilson"
    copyright.class = 'text-center text-body-secondary';

    shadow.appendChild(footer);
    footer.appendChild(list);
    footer.appendChild(copyright);
  }

  connectedCallback() {console.log("heyyy");}
  disconnectedCallback() {}
  adoptedCallback() {}
  attributeChangedCallback() {}

  
}

customElements.define("useful-foot", UsefulFoot);
