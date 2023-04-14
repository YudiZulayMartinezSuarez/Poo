const resultados = {
    color : "",
    dimension : "",
    marca : "",
    borrador : "",
    material : "",
}

const obj = undefined
const color = document.querySelector(`#checkBoton`)
color.addEventListener(`change`, datos)
const dimension = document.querySelector(`#dimension`)
dimension.addEventListener(`change`, datos)
const mongol = document.querySelector(`#mongol`)
mongol.addEventListener(`change`, datos)
const norma = document.querySelector(`#norma`)
norma.addEventListener(`change`, datos)
const fabelCastle = document.querySelector(`#fabelCastle`)
fabelCastle.addEventListener(`change`, datos)
const big = document.querySelector(`#big`)
big.addEventListener(`change`, datos)
const borradorTiene = document.querySelector(`#tiene`)
borradorTiene.addEventListener(`change`, datos)
const borradorNoTiene = document.querySelector(`#noTiene`)
borradorNoTiene.addEventListener(`change`, datos)
const madera = document.querySelector(`#madera`)
madera.addEventListener(`change`, datos)
const goma = document.querySelector(`#goma`)
goma.addEventListener(`change`, datos)
const boton = checked = true;
addEventListener("DOMContentLoaded",(e)=>{
 const boton = document.getElementById("#boton");
        const formulario = document.addEventListener("submit",(e)=>{
            e.preventDefault();
            document.querySelector("#tabla").insertAdjacentHTML("beforeend",`
            <tr>
                <th>${resultados.color}</th>
                <th>${resultados.dimension}</th>
                <th>${resultados.marca}</th>
                <th>${resultados.borrador}</th>
                <th>${resultados.material}</th>
            </tr>`);
            
    })
    
})

function datos(e) {
    console.log(e.target.value);
    resultados[e.target.name] = e.target.value;}
    console.log(resultados);




 














