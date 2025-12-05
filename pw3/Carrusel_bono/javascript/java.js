

document.addEventListener("DOMContentLoaded", ()=>{
    let carruselPrincial = new Carrusel(
        document.querySelector(".carrusel")
    );
    carruselPrincial.init();
});


class Carrusel {
    contendor = null;
    track = null;
    items = [];
    originalItems = [];
    slidesCount = 0;

    direction = 1;

    timeInSeconds = 3;
    timerId = null;

    currentItem = 1;

    rightButton = null;
    leftButton = null;

    constructor(contenedor){
        this.contendor = contenedor;
        this.track = this.contendor.querySelector(".carrusel-track");

        this.originalItems = [...this.track.querySelectorAll(".carrusel-item")];
        this.slidesCount = this.originalItems.length;


        if (this.slidesCount === 0) {
            this.items = [];
            return;
        }


        const firstClone = this.originalItems[0].cloneNode(true);
        const lastClone = this.originalItems[this.slidesCount - 1].cloneNode(true);
        firstClone.classList.add('clone');
        lastClone.classList.add('clone');

        this.track.appendChild(firstClone);
        this.track.insertBefore(lastClone, this.track.firstChild);

        this.items = [...this.track.querySelectorAll(".carrusel-item")];

        this.currentItem = 1;

        this.track.style.transform = `translateX(-${this.currentItem * 100}vw)`;

        this.track.addEventListener('transitionend', ()=>{
            const lastIndex = this.items.length - 1;
            if (!this.items.length) return;
            if (this.items[this.currentItem].classList.contains('clone')){

                const savedTransition = this.track.style.transition;
                this.track.style.transition = 'none';

                if (this.currentItem === 0) {

                    this.currentItem = this.slidesCount;
                } else if (this.currentItem === lastIndex) {

                    this.currentItem = 1;
                }

                this.track.style.transform = `translateX(-${this.currentItem * 100}vw)`;

                this.track.offsetWidth;

                setTimeout(()=>{
                    this.track.style.transition = savedTransition || 'transform 0.7s ease-in-out';
                }, 20);
            }
        });
    }

    init(){
        console.log("Carrusel Inicializado");
        console.log("items:", this.items);
        this.generateUX();
        this.tick();
    }

    generateUX(){
        this.rightButton = document.createElement("button");
        this.leftButton = document.createElement("button");
        this.rightButton.classList.add("carrusel_right");
        this.leftButton.classList.add("carrusel_left");
        this.rightButton.innerHTML = ">";
        this.leftButton.innerHTML = "<";

        this.rightButton.addEventListener("click", (e)=>{
            this.moveToDirection(1);
        });

        this.leftButton.addEventListener("click", (e)=>{
            this.moveToDirection(-1);
        });

        this.contendor.appendChild(this.rightButton);
        this.contendor.appendChild(this.leftButton);
    }

    moveToDirection(nextDirection) {
        clearTimeout(this.timerId);
        this.direction = nextDirection;
        this.moveToNext();
        this.tick();
    }

    tick(){
        this.timerId = setTimeout(
            ()=>{
                this.moveToNext();
                this.tick()
            },
            this.timeInSeconds * 1000
        );
    }

    moveToNext(){

        this.currentItem = this.currentItem + this.direction;
        this.moveTo(this.currentItem);
    }

    moveTo(index){
        this.track.style.transition = 'transform 0.7s ease-in-out';
        this.track.style.transform = `translateX(-${index * 100}vw)`;
    }
}