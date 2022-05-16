let today = new Date();

$("#btn").click(requisicao);

function requisicao() {
    const pegarData = $("#calendario").val();

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=w4otrhmBtewMkhK8LzVqzzwVnXUzjjI9T3ehDcNq&date=${pegarData}`,
        success: function (resultado) {
            if (resultado.media_type == 'image') {
                document.getElementById("media").innerHTML = "<img src='" + resultado.url + "'style='width:50%;'/>";
            } else if (resultado.media_type == 'video') {
                document.getElementById("media").innerHTML = "<iframe src=" + resultado.url + "></iframe>";
            }
            if (resultado.copyright == undefined) {
                document.getElementById("copyright").innerHTML = "";
            } else {
                document.getElementById("copyright").innerHTML = "By " + resultado.copyright;
            }
            document.getElementById("title").innerHTML = resultado.title;
            document.getElementById("explanation").innerHTML = resultado.explanation;
            console.log(resultado);
        },
        error: function (erro) {
            console.log(erro);
        }

    });

}




