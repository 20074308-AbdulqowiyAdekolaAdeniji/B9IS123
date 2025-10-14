customElements.define('custom-card',
  class extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById('custom-card');
      const templateContent = template.content.cloneNode(true);

      // Attach Shadow DOM
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(templateContent);

      // Allow dynamic attributes
      const title = this.getAttribute('title');
      const content = this.getAttribute('content');

      if (title) {
        shadowRoot.getElementById('title').textContent = title;
      }
      if (content) {
        shadowRoot.getElementById('content').textContent = content;
      }
    }
  }
);