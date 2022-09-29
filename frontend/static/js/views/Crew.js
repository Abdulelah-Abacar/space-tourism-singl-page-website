import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Frontend Mentor | Space tourism website | Crew");
    }

    async getHtml() {
        return `
          <div class="crew-content">
            <div class="info">
              <p class="intro"><span>02</span>Meet your crew</p>
              <div class="more-info">
                <p class="role">Flight Engineer</p>
                <h1 class="name">Anousheh Ansari</h1>
                <p class="bio">
                  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                  Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                  fly to the ISS, and the first Iranian in space.
                </p>
              </div>
              <ul class="dots">
                <li class="active" data-index="1"></li>
                <li data-index="2"></li>
                <li data-index="3"></li>
                <li data-index="4"></li>
              </ul>
            </div>
            <ul class="imgs">
              <li class="img active"><img src="static/assets/crew/image-anousheh-ansari.png" alt=""></li>
              <li class="img"><img src="static/assets/crew/image-douglas-hurley.png" alt=""></li>
              <li class="img"><img src="static/assets/crew/image-mark-shuttleworth.png" alt=""></li>
              <li class="img"><img src="static/assets/crew/image-victor-glover.png" alt=""></li>
            </ul>
          </div>
        `;
    }
}