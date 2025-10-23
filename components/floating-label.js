class FloatingLabel extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        
        const label = this.getAttribute('label') || '';
        const type = this.getAttribute('type') || 'text';
        const name = this.getAttribute('name') || '';
        const required = this.hasAttribute('required');
        
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: relative;
                    margin-bottom: 1.5rem;
                }
                .input-container {
                    position: relative;
                }
                input {
                    width: 100%;
                    padding: 1rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.375rem;
                    background-color: transparent;
                    transition: all 0.2s;
                }
                input:focus {
                    outline: none;
                    border-color: #8B5CF6;
                    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.2);
                }
                label {
                    position: absolute;
                    left: 1rem;
                    top: 1rem;
                    color: #6b7280;
                    transition: all 0.2s;
                    pointer-events: none;
                }
                input:focus + label,
                input:not(:placeholder-shown) + label {
                    transform: translateY(-1.5rem) scale(0.85);
                    color: #8B5CF6;
                    background-color: white;
                    padding: 0 0.25rem;
                    left: 0.75rem;
                }
                .icon {
                    position: absolute;
                    right: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #9ca3af;
                }
            </style>
            <div class="input-container">
                <input 
                    type="${type}" 
                    name="${name}"
                    id="${name}"
                    placeholder=" "
                    ${required ? 'required' : ''}>
                <label for="${name}">${label}</label>
                <i data-feather="${this.getAttribute('icon') || 'user'}" class="icon"></i>
            </div>
        `;
        
        // Feather icons will be replaced when the main script runs
    }
}

customElements.define('floating-label', FloatingLabel);
