
class lapiz{
    #marca
    constructor({color="fff700",
                dimension=19,
                borrador=true,
                material="Madera",
                marca="mongol"}){
        this.color = color;
        this.dimension = dimension;
        this.borrador = borrador;
        this.material = material;
        this.#marca = marca;
    }
    getcolor(){
    return this.color;
    }

    getDimencion(){
        return this.Dimencion;
    }
}
let obj = undefined
let color = document.querySelector(`[name= "colo"]`)

let dimension =
addEventListener("DOMContentLoaded",(e)=>{
    obj = new lapiz ({});
    color.value = obj.color;
})












