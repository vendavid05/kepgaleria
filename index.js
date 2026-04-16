import { KEPESLISTA } from "./adat.js";
import Kepek from "./Kepek.js";
import KiemeltKep from "./KiemeltKep.js";
import Nagykep from "./Nagykep.js";

const szuloELEM = document.querySelector(".kartyatarto")
const nagyKepELEM = document.querySelector(".kiemelt")

new Kepek(KEPESLISTA,szuloELEM);


window.addEventListener("kivalaszt", function(event) {
    console.log(event.detail)
    nagyKepELEM.innerHTML=""
    new KiemeltKep(KEPESLISTA[event.detail], nagyKepELEM)
    new Nagykep(event.detail,KEPESLISTA,nagyKepELEM)
});