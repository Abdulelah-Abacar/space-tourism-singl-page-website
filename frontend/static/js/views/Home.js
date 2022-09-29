import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Frontend Mentor | Space tourism website | Home");
    }

    async getHtml() {
        return `
          <div class="home-content">
            <div class="info">
              <p class="intro">So, you want to travel to</p>
              <h1 class="subject">Space</h1>
              <p class="information">
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
              </p>
            </div>
            <div class="explore">
              <button class="btn"><a href="/destination" class="nav__link" data-link>Explore</a></button>
            </div>
          </div>
        `;
    }
}