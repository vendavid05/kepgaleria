import KiemeltKep from "./KiemeltKep.js";

export default class Nagykep {
    #aktindex;
    #lista;
    constructor(index, lista, nagykepelem) {
        this.#aktindex = index;
        this.#lista = lista;
        this.nagykepelem = nagykepelem;

        this.megjelenit();
    }
        megjelenit() {
        this.nagykepelem.innerHTML = "";
        
        new KiemeltKep(this.#lista[this.#aktindex], this.nagykepelem);

        this.balgombELEM = document.querySelector(".balgomb");
        this.jobbgombELEM = document.querySelector(".jobbgomb");

        this.balgombELEM.addEventListener("click", () => {
            this.#aktindex--;
            this.megjelenit();
        });

        this.jobbgombELEM.addEventListener("click", () => {
            this.#aktindex++;
            this.megjelenit();
        });
    }
}