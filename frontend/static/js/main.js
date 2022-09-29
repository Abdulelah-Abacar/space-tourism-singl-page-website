// Nav Ul
let btn = document.querySelector(".open-close");
btn.onclick = () => {
  document.querySelector(".pages").style.display = "flex";
  btn.children[0].src = "static/assets/shared/icon-close.svg";
  btn.addEventListener("click", () => {
    if (btn.children[0].src == "https://enigmatic-meadow-74854.herokuapp.com/static/assets/shared/icon-close.svg") {
      document.querySelector(".pages").style.display = "none";
      btn.children[0].src = "static/assets/shared/icon-hamburger.svg";
    } else {
      document.querySelector(".pages").style.display = "flex";
      btn.children[0].src = "static/assets/shared/icon-close.svg";
    }
  })
  lis.forEach(li => {
    li.addEventListener("click", () => {
    })
  })
}
let lis = document.querySelectorAll(".pages li");
lis.forEach(li => {
  li.addEventListener("click", () => {
    lis.forEach(ele => ele.classList.remove("active"))
    li.classList.add("active");
    if (window.innerWidth <= 991) {
      document.querySelector(".pages").style.display = "none";
      btn.children[0].src = "static/assets/shared/icon-hamburger.svg";
    }
  })
})

setInterval(()=> {
  if (window.location.href == "https://enigmatic-meadow-74854.herokuapp.com/destination") {
  lis.forEach(li => {
      li.innerText == "01 Destination" ? li.classList.add("active"): li.classList.remove("active")
  })
} else if (window.location.href == "https://enigmatic-meadow-74854.herokuapp.com/crew") {
  lis.forEach(li => {
      li.innerText == "02 Crew" ? li.classList.add("active"): li.classList.remove("active")
  })
} else if (window.location.href == "https://enigmatic-meadow-74854.herokuapp.com/technology") {
  lis.forEach(li => {
      li.innerText == "03 Technology" ? li.classList.add("active"): li.classList.remove("active")
  })
} else if (window.location.href == "https://enigmatic-meadow-74854.herokuapp.com/") {
  lis.forEach(li => {
      li.innerText == "00 Home" ? li.classList.add("active"): li.classList.remove("active")
  })
}
}, 10)

let mutationObserver = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    if (mutation.target.children[0].classList.contains("destination-content")) {
      let links = document.querySelectorAll(".links li");
      let image = document.querySelector(".img img");
      let nameOfPlante = document.querySelector(".plante-name");
      let information = document.querySelector(".plante-info");
      let distance = document.querySelector(".math .mil p");
      let travel = document.querySelector(".math .mon p");
      if (links.length) {
        links.forEach(link => {
          link.addEventListener("click", () => {
            links.forEach(ele => ele.classList.remove("active"))
            link.classList.add("active");
            if (link.classList.contains("active")) {
              nameOfPlante.innerHTML = link.innerHTML;
            }
            fetch("https://enigmatic-meadow-74854.herokuapp.com/json").then(data => data.json()).then(info => {
              info['destinations'].forEach(inf => {
                if (inf["name"].toLowerCase() == nameOfPlante.innerHTML.toLowerCase()) {
                  image.src = inf.images.png;
                  image.alt = inf.name.toLowerCase();
                  information.innerHTML = inf.description;
                  distance.innerHTML = inf.distance;
                  travel.innerHTML = inf.travel;
                }
              })
            });
          })
        })
      }
    }
    if (mutation.target.children[0].classList.contains("crew-content")) {
      let dots = document.querySelectorAll(".crew-content .dots li");
      let imgs = document.querySelectorAll(".crew-content .imgs li");
      let images = document.querySelectorAll(".crew-content .imgs li img");
      let ulDots = document.querySelector(".crew-content .dots");
      let role = document.querySelector(".crew-content .role");
      let name = document.querySelector(".crew-content .name");
      let bio = document.querySelector(".crew-content .bio");
      if (dots.length) {
        dots.forEach(dot => {
          dot.addEventListener("click", () => {
            dots.forEach(ele => ele.classList.remove("active"))
            dot.classList.add("active");
          })
        })
        var currentSlide = 1;
        for (var i = 0; i < dots.length; i++) {
          dots[i].onclick = function () {
            currentSlide = parseInt(this.getAttribute('data-index'));
            theChecker();
          }
        }
        function theChecker() {
          imgs.forEach(img => img.classList.remove("active"))
          imgs[currentSlide - 1].classList.add('active');
          ulDots.children[currentSlide - 1].classList.add('active');
          fetch("https://enigmatic-meadow-74854.herokuapp.com/json").then(data => data.json()).then(info => {
            info['crew'].forEach(inf => {
              if (inf.images["png"].split("-").slice(1).join(" ").slice(0, -4) == images[currentSlide - 1].src.split("-").slice(1).join(" ").slice(0, -4)) {
                role.innerHTML = inf.role;
                name.innerHTML = inf.name;
                bio.innerHTML = inf.bio;
                imgs.forEach(img => {
                  if (img.classList.contains("active")) {
                    img.firstChild.alt = inf.name.toLowerCase()
                  }
                })
              }
            })
          });
        }
        theChecker();
      }
    }
    if (mutation.target.children[0].classList.contains("technology-content")) {
      let dots2 = document.querySelectorAll(".dots li");
      let imgs2 = document.querySelectorAll(".imgs li");
      let images2 = document.querySelectorAll(".imgs li img");
      let ulDots2 = document.querySelector(".dots");
      let name2 = document.querySelector(".name");
      let description = document.querySelector(".description");
      if (dots2.length) {
        dots2.forEach(dot => {
          dot.addEventListener("click", () => {
            dots2.forEach(ele => ele.classList.remove("active"))
            dot.classList.add("active");
          })
        })
        var currentSlide = 1;
        for (var i = 0; i < dots2.length; i++) {
          dots2[i].onclick = function () {
            currentSlide = parseInt(this.getAttribute('data-index'));
            theChecker();
          }
        }
        function theChecker() {
          imgs2.forEach(img => img.classList.remove("active"))
          imgs2[currentSlide - 1].classList.add('active');
          ulDots2.children[currentSlide - 1].classList.add('active');
          fetch("https://enigmatic-meadow-74854.herokuapp.com/json").then(data => data.json()).then(info => {
            info['technology'].forEach(inf => {
              if (inf.images["portrait"].split("-").slice(1).join(" ").slice(0, -4) == images2[currentSlide - 1].src.split("-").slice(1).join(" ").slice(0, -4)) {
                name2.innerHTML = inf.name;
                description.innerHTML = inf.description;
                imgs2.forEach(img => {
                  if (img.classList.contains("active")) {
                    img.firstChild.alt = inf.name.toLowerCase()
                    setInterval(() => {
                      if (window.innerWidth <= 991) {
                        img.firstChild.src = inf.images.landscape;
                      } else {
                        img.firstChild.src = inf.images.portrait;
                      }
                    }, 50);
                  }
                })
              }
            })
          });
        }
        theChecker();
      }
    }


  })
})
mutationObserver.observe(document.getElementById("main-content"), {
  childList: true,
})
