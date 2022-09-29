import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Frontend Mentor | Space tourism website | Destination");
    }

    async getHtml() {
        return `
          <div class="destination-content">
            <div class="info">
              <p class="intro"><span>01</span> Pick your destination</p>
              <div class="img">
                <img src="static/assets/destination/image-moon.png" alt="moon">
              </div>
            </div>
            <div class="information">
              <ul class="links">
                <li class="active">Moon</li>
                <li>Mars</li>
                <li>Europa</li>
                <li>Titan</li>
              </ul>
              <div class="more-info">
                <h1 class="plante-name">Moon</h1>
                <p class="plante-info">
                  See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                  regain perspective and come back refreshed. While you’re there, take in some history 
                  by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
              </div>
              <div class="math">
                <div class="mil">
                  <span>Avg. distance</span>
                  <p>384,400 km</p>
                </div>
                <div class="mon">
                  <span>Est. travel time</span>
                  <p>3 days</p>
                </div>
              </div>
            </div>
          </div>
        `;
    }
}