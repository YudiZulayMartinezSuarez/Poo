class lapiz{
    #marca
    constructor({color="#ECDE41",
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
        return this.dimension;
    }

    getMarca(){
        return this.#marca;
    }

    getBorrador(){
        return this.borrador;
    }
    getMaterial(){
        return this.material;
    }
    getBoton(){
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
    color.values = obj.color;
    dimension.values = obj.dimension;
    marca.values = obj.marca;
    borrador.values = obj.borrador;
    material.values = obj.material;
    boton.checked = true;
    boton = document.getElementById("boton");

    const formulario=document.querySelector("#form");
            formulario.addEventListener("submit",(e)=>{
            e.preventDefault();
            let caja = new lapiz({});
            document.querySelector("#tabla").insertAdjacentHTML("beforeend",`
            <tr>
                <th>${caja.getcolor()}</th>
                <th>${caja.getDimension()}</th>
                <th>${caja.getMarca()}</th>
                <th>${caja.getBorrador()}</th>
                <th>${caja.getMaterial()}</th>
            </tr>`);
    })
    
})





 














