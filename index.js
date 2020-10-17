function agregaIngrediente(ElementoIng)
{
    let html = 
    `<li class="list-group-item border-0" id="${ElementoIng.id}">
        <div class="row">
            <div class="col-2">
                <button class="btn btn-danger" onclick="borrarElementoIng(${ElementoIng.id})">&times;</button>
            </div>
            <div class="col-8 my-2 nom-Elem">${ElementoIng.nombreIng}</div>
        </div>
    </li>`;
    
    $("#lista-ingredientes").append(html);
    
    return html;
}

function borrarElementoIng(id)
{
    $("#" + id).hide(700, function(){
        $(this).remove();
    });
}

function muestraValidacion(mensaje)
{
    $("#valida-datos").text(mensaje);
    $("#valida-datos").show(1000);
}

$(document).ready(function()
{
    //let arr_Ing = [];
    $("#valida-datos").hide(0);


    $("#btn-ingrediente").click(function(e)
    {
        e.preventDefault();
        let nombreIng = $("#ingrediente").val();
        
        let ElementoIng =
        {
            nombreIng,
            id: Date.now()
        };

        let val_Ing = agregaIngrediente(ElementoIng);

        
    });

    
    $("#form-recetario").submit(function(e)
    {
        

        e.preventDefault();

        let nombre = $("#nombre").val();

        if(nombre.trim() === "")
        {
            muestraValidacion("Se debe completar el campo del Nombre");
            return;
        }

        let urlIma = $("#imagen").val();

        if(urlIma.trim() === "")
        {
            muestraValidacion("Se debe completar el campo de la Imágen");
            return;
        }

        let categoria = $("#categorias").val();
        
        if(categoria.trim() === "")
        {
            muestraValidacion("Se debe seleccionar el campo de la Categoria");
            return;
        }

       

        let datosR =
        {
            nombre,
            categoria,
            urlIma,
            id: Date.now()
        };


        console.log(nombre);
        console.log(categoria);
        console.log(urlIma);

       
       

        console.log("-----------------------")

    });

});