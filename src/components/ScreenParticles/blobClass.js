import anime from "animejs/lib/anime.es";
export default class Blob {
  constructor(el, options) {
    this.DOM = {};
    this.DOM.el = el;
    this.options = {};
    Object.assign(this.options, options);
    this.init();
  }
  init() {
    console.log("gets here too");
    this.rect = this.DOM.el.getBoundingClientRect();
    this.descriptions = [];
    this.layers = Array.from(this.DOM.el.querySelectorAll("path"), (t) => {
      t.style.transformOrigin = `${this.rect.left + this.rect.width / 2}px ${
        this.rect.top + this.rect.height / 2
      }px`;
      t.style.opacity = 0;
      this.descriptions.push(t.getAttribute("d"));
      return t;
    });
  }
  // intro blob animation
  intro() {
    console.log("gets here");
    anime.remove(this.layers);
    console.log(this.layers);
    anime({
      targets: this.layers,
      duration: 1800,
      delay: (t, i) => i * 120,
      //   easing: ["0.2", "1", "0.1", "1"],
      scale: [0.2, 1],
      opacity: {
        value: [0, 1],
        duration: 800,
        delay: (t, i) => i * 120,
        easing: "steps(5)",
      },
    });
  }
  // show blob animation
  static show() {
    setTimeout(() => this.intro(), 400);
  }
}
