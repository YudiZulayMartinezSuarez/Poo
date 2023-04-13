class lapiz{
    #marca
    constructor({color="#F0D000",
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

    getDimension(){
        return this.Dimension;
    }

    getMarca(){
        return this.Marca;
    }

    getBorrador(){
        return this.borrador;
    }
    getMaterial(){
        return this.material;
    }
    getboton(){
        return this.submit;
    }
}
let obj = undefined
let color = document.querySelector(`[name= "color"]`)
let dimension = document.querySelector(`[name = "dimension"]`)
let marca = mongol.checked=true;
let borrador = tiene.checked=true;
let material = madera.checked=true;
let boton = checked = true;
addEventListener("DOMContentLoaded",(e)=>{
    obj = new lapiz ({});
    color.value = obj.color;
    dimension.value = obj.dimension;
    marca.value = obj.mongol;
    borrador.value = obj.borrador;
    material.value = obj.material;
    boton.checked = true;
    boton = document.getElementById("boton")
    
})













