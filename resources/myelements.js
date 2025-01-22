// Create Elements
class UsefulFoot extents HTMLElement {
  static observedAttributes = ["footerClass"];
  
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    
    const footer = document.createElement("footer");
    footer.className = 'py-3 my-4 mt-auto';

    const list = document.createElement("ul");
    list.className = 'nav justify-content-center border-bottom pb-3 mb-3';

    const listElements = [
      { href '#!', iconClass: 'bi bi-facebook' },
      { href '#!', iconClass: 'bi bi-twitter' },
      { href '#!', iconClass: 'bi bi-instagram' },
      { href '#!', iconClass: 'bi bi-linkedin' },
      { href '#!', iconClass: 'bi bi-github' },
    ];

    listElements.forEach(link => {
      const li = document.createElement('li');
      li.className = 'nav-item';

      const a = document.createElement('a');
      a.className = 'btn btn-outline-light btn-floating m-1 socialbutton';
      a.href = link.href;
      a.role = 'button';

      const icon = document.createElement("i");
      icon.className = link.iconClass;

      a.appendChild(icon);
      li.appendChild(a);
      list.appendChild(li);
    });

    footer.appendChild(list);
    document.body.appendChild(footer);
  }

  connectedCallback() {}
  disconnectedCallback() {}
  adoptedCallback() {}
  attributeChangedCallback() {}

  
}

customElements.define("useful-foot", UsefulFoot);
