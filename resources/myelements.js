const styles = {
};
const bannerFiles = ["banner1.jpg", "banner2.jpg", "banner3.jpg", "banner4.jpg"]

const pages = [ "projects", "about" ]

// Create Elements
class UsefulFoot extends HTMLElement {
  static observedAttributes = ["footerClass"];
  
  constructor() {
    super();
    //const shadow = this.attachShadow({ mode: "open" });
    
    const footer = document.createElement("footer");
    footer.className = 'py-3 my-4 mt-auto';

    const list = document.createElement("ul");
    list.className = 'nav justify-content-center border-bottom pb-3 mb-3';

    const listElements = [
      { href: '#!', iconClass: 'bi bi-facebook' },
      { href: '#!', iconClass: 'bi bi-twitter' },
      { href: '#!', iconClass: 'bi bi-instagram' },
      { href: '#!', iconClass: 'bi bi-linkedin' },
      { href: '#!', iconClass: 'bi bi-github' },
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

    const copyright = document.createElement("p");
    copyright.textContent = "© 2024 Kara Wilson"
    copyright.className = 'text-center text-body-secondary';

    document.body.appendChild(footer);
    footer.appendChild(list);
    footer.appendChild(copyright);
  }

  connectedCallback() {}
  disconnectedCallback() {}
  adoptedCallback() {}
  attributeChangedCallback() {}
}

class CoolHeader extends HTMLElement {
  static observedAttributes = ['title', 'active']

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const container = document.createElement('div');
    container.className = 'pageHead';

    const randomIndex = Math.floor(Math.random() * bannerFiles.length);
    if (container)
        container.style.backgroundImage = `url('images/${bannerFiles[randomIndex]}')`;

    const navbar = document.createElement('nav');
    navbar.className = 'navbar navbar-expand-sm';

    const navbarContainer = document.createElement('div');
    navbarContainer.className = 'container-fluid';

    const navbarBrand = document.createElement('a');
    navbarBrand.className = 'navbar-brand';
    navbarBrand.href = '#';

    const brandDiv = document.createElement('div');
    const brandImg = document.createElement('img');
    brandImg.id = 'git-user-id';
    const brandText = document.createTextNode(' JushPush');

    brandDiv.appendChild(brandImg);
    brandDiv.appendChild(brandText);
    navbarBrand.appendChild(brandDiv);

    const toggleButton = document.createElement('button');
    toggleButton.className = 'navbar-toggler';
    toggleButton.type = 'button';
    toggleButton.setAttribute('data-bs-toggle', 'collapse');
    toggleButton.setAttribute('data-bs-target', '#navbarSupportedContent');
    toggleButton.setAttribute('aria-controls', 'navbarSupportedContent');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Toggle navigation');

    const toggleIcon = document.createElement('span');
    toggleIcon.className = 'navbar-toggler-icon';
    toggleButton.appendChild(toggleIcon);

    const collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse navbar-collapse';
    collapseDiv.id = 'navbarSupportedContent';

    const navList = document.createElement('ul');
    navList.className = 'navbar-nav me-auto mb-2 mb-lg-0';

    const navItems = [
      { text: 'Home', href: '/', active: false },
      { text: 'Projects', href: '/projects', active: false },
      { text: 'About', href: '/about', active: false },
    ];

    switch (this.getAttribute('active')) {
      case 0: navItems[0].active = true; break;
      case 1: navItems[1].active = true; break;
      case 2: navItems[2].active = true; break;
      default: break;
    }

    navItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.className = `nav-item${item.active ? ' active' : ''}`;

      const link = document.createElement('a');
      link.className = 'nav-link';
      link.href = item.href;
      link.textContent = item.text;

      listItem.appendChild(link);
      navList.appendChild(listItem);
    });

    collapseDiv.appendChild(navList);

    navbarContainer.appendChild(navbarBrand);
    navbarContainer.appendChild(toggleButton);
    navbarContainer.appendChild(collapseDiv);
    navbar.appendChild(navbarContainer);

    const headerContainer = document.createElement('div');
    headerContainer.className = 'container-fluid header';

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = this.getAttribute('title');
    headerTitle.id = 'headerTitle';
    headerContainer.appendChild(headerTitle);

    container.appendChild(navbar);
    container.appendChild(headerContainer);

    const style = document.createElement('style');
    style.textContent = `
      .pageHead {
        font-family: Arial, sans-serif;
      }
      .navbar {
        background-color: #f8f9fa;
      }
      .navbar-brand div {
        display: flex;
        align-items: center;
      }
      .navbar-brand img {
        width: 30px;
        height: 30px;
        margin-right: 8px;
      }
      .header {
        text-align: center;
        margin-top: 20px;
      }
    `;

    //this.shadowRoot.innerHTML = '';
    //this.shadowRoot.appendChild(style);
    //this.shadowRoot.appendChild(container);
    //document.body.appendChild(style);
    //this.shadowRoot.appendChild(container);
    document.body.innerHTML = '';
    document.body.appendChild(container);
  }

  static get observedAttributes() {
    return ['title', 'active'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.connectedCallback();
  }
}

customElements.define("useful-foot", UsefulFoot);
customElements.define("cool-header", CoolHeader);
