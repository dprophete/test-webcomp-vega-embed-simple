import vegaEmbed from "vega-embed";

class VegaEmbedSimple extends HTMLElement {
    static observedAttributes = ["config", "rmx-uid"];

    connectedCallback() {
        this.uid = this.getAttribute("rmx-uid") || "view";
        // console.log(this.uid);
        // should we use shadow-dom?
        this.innerHTML = `<div id='${this.uid}'></div>`;
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // console.log(`[vega-embed-simple] Attribute ${name} has changed.`);
        // we must have a uid before rendering
        if (this.uid && name === "config" && oldValue !== newValue) {
            this.render();
        }
    }

    render() {
        const tmp = this.getAttribute("config");
        if (tmp) {
            const config = JSON.parse(tmp);
            // console.log(config);
            const result = vegaEmbed(`#${this.uid}`, config);
        }
    }
}

customElements.define("vega-embed-simple", VegaEmbedSimple);
