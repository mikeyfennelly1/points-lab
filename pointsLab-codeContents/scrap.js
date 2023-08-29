const GLIDER_ACTIVE_CLASSNAME = "gliderActive"
const GLIDER_INACTIVE_CLASSNAME = "gliderInactive"
const CAROUSEL_ACTIVE_CLASSNAME = "carouselInactive"
const CAROUSEL_INACTIVE_CLASSNAME = "carouselInactive"

const gliderCarouselPairs = []

class GliderCarouselPair {
    constructor(gliderId, carouselId) {
        this.gliderId = gliderId;
        this.carouselId = carouselId;
        this.gliderElement = document.getElementById(gliderId); // obtians all glider elements
        this.carouselElement = document.getElementById(carouselId); // obtains carousel elements
        this.gliderElement.addEventListener('click', (e)=>{
            gliderCarouselPairs.forEach((gliderCarouselPair) => {
                gliderCarouselPair.deactivate()
            })
            this.activate()

        })
    }

    activate() {
        this.gliderElement.classList.add(GLIDER_ACTIVE_CLASSNAME);
        this.gliderElement.classList.remove(GLIDER_INACTIVE_CLASSNAME);
        this.carouselElement.classList.add(CAROUSEL_ACTIVE_CLASSNAME);
        this.carouselElement.classList.remove(CAROUSEL_INACTIVE_CLASSNAME);
    }

    deactivate() {
        this.gliderElement.classList.remove(GLIDER_ACTIVE_CLASSNAME);
        this.gliderElement.classList.add(GLIDER_INACTIVE_CLASSNAME);
        this.carouselElement.classList.remove(CAROUSEL_ACTIVE_CLASSNAME);
        this.carouselElement.classList.add(CAROUSEL_INACTIVE_CLASSNAME);
    }
}

const gliderSwitcher = (gliderId, carouselId) => {
    const gliderCarouselPair = new GliderCarouselPair(gliderId, carouselId)
    gliderCarouselPairs.push(gliderCarouselPair)
}

gliderSwitcher("glider1", "carousel1");
gliderSwitcher("glider2", "carousel2");
gliderSwitcher("glider3", "carousel3");

