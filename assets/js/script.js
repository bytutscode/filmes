$(function(){
    $.ajax({
        url:'https://api.b7web.com.br/cinema/',
        type:'GET',
        dataType: 'json',
        beforeSend:function(){
            $('.filmes').html('<div class="col-12 fs-3">Carregando...</div>');
        },
        success: function (json) {
            let html = '';
            for(let i in json){
                html += `<div class="col-md-4 col-sm-6 mt-3  text-center"><div class="filme rounded small h-100 fw-bold p-3"><img class="img-fluid rounded mb-2 w-100 mb-1" alt="" src="${json[i].avatar}">${json[i].titulo}</div></div>`;
            }
            $('.filmes').html(html)
        }
    })
});


// alternative way

// async function  getMovies() {
//     document.querySelector(".filmes").innerHTML = '<div class="col-12 fs-5">Carregando...</div>';
//     let ajax = await fetch('https://api.b7web.com.br/cinema/');
//     let json = await ajax.json();
//     settingMovies(json);
// }
// function settingMovies (json) {
//     let html = '';
//     for (let filme in json) {
//         html +=`<div class="col-md-4 col-sm-6 mt-3  text-center"><div class="filme rounded small h-100 fw-bold p-3"><img class="img-fluid rounded mb-2 w-100 mb-1" alt="" src="${json[filme].avatar}">${json[filme].titulo}</div></div>`;
//     }
//     document.querySelector(".filmes").innerHTML = html;
// }
// getMovies();