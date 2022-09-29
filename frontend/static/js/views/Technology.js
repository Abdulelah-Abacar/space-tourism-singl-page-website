import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Frontend Mentor | Space tourism website | Technology");
    }

    async getHtml() {
        return `
          <div class="technology-content">
            <div class="info">
              <p class="intro"><span>03</span>Space launch 101</p>
              <div class="more-info">
                <ul class="dots">
                  <li data-index="1" class="active">1</li>
                  <li data-index="2">2</li>
                  <li data-index="3">3</li>
                </ul>
                <div class="text">
                  <p class="role">The terminology...</p>
                  <h1 class="name">Launch vehicle</h1>
                  <p class="description">
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                    it's quite an awe-inspiring sight on the launch pad!
                  </p>
                </div>
              </div>
            </div>
            <ul class="imgs">
              <li class="img active"><img src="static/assets/technology/image-launch-vehicle-portrait.jpg" alt=""></li>
              <li class="img"><img src="static/assets/technology/image-space-capsule-portrait.jpg" alt=""></li>
              <li class="img"><img src="static/assets/technology/image-spaceport-portrait.jpg" alt=""></li>
            </ul>
          </div>
        `;
    }
}