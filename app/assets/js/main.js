
var dirImg = "";

var nomeArq = "https://infograficos.oglobo.globo.com/htmlinfo_arquivo/188/dados.csv";
var qtdQuest = $(".perguntas .case-perguntas .pergunta").length;
var resultados = new Array();
// var maxDif = 20;
// getToJson(nomeArq, function(data) {
//     iniciaAplicacao(data);
// })

getToJson(nomeArq, function(data) {
    iniciaAplicacao(data);
    console.table(data);
});


function formataNumero(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

function comparaResultados(dados, resultados){
    var resultadoFinal = new Array();
    $.each(dados,function(i,d){
        var dif=0;
        var maxDif=0;
        for(var x=1;x<=qtdQuest;x++){
            //pega a diferenÃ§a
            if(d['Quest'+x]!=""){
                var calc = resultados[x-1]-d['Quest'+x];
                calc = calc<0 ? calc*-1 : calc;
                dif += calc;
                maxDif += 4;
                
            }
        }
        //verifica se partido respondeu pelo menos uma pergunta
        if(maxDif!=0){
            //calculo do percentual
            var discordancia = (dif/maxDif)*100;
            var identificacao = (100-discordancia);
            //verifica se tem casa decimal e substitui por virgula
            var strIdf = String(identificacao);
            var percentual = identificacao;
            if(strIdf.indexOf('.')!=-1){
                percentual = formataNumero(identificacao).toFixed(1);
                identificacao = String(percentual).replace(".",",");
                //str.substring(0,(str.length - 1)
            }
            resultadoFinal.push({partido:d['Partido'],identificacao:identificacao,posicao:d['PosiÃ§Ã£o'],imagem:d['Imagem'],percentual:percentual});
        }
    })
    resultadoFinal = _.sortBy(resultadoFinal, function(obj){ return -parseInt(obj.identificacao, 10) });
    return resultadoFinal;
}

// resize();
function iniciaAplicacao(dados){
    // console.table(dados);
    //pega respostas usuÃ¡rios

    $(function() {
        var quiz = $(".perguntas .case-perguntas");
        quiz.slick({
            dots: false,
            arrows: false, 
            infinite: false,
            speed: 300,
            swipe: false,
            cssEase: 'cubic-bezier(1.000, 0.210, 0.285, 0.695)',
        });
        $(".botao-pergunta").click(function(){
            $(this).toggleClass('escolhido');
            var indice = $(this).parent().parent().index();
            resultados[indice] = $(this).attr('data-numero');

            if(indice>=(qtdQuest-1)){
                //acabou
                setTimeout(function(){
                    //chama resultado
                    var resultadoFinal = comparaResultados(dados, resultados);
                    var tamLista = (resultadoFinal.length)/2;
                    var seletor = $('.resultado ul.esq');
                    $('.resultado ul.esq,.resultado ul.dir').html("");
                    $.each(resultadoFinal,function(i,d){
                        if(i>=tamLista){
                            seletor = $('.resultado ul.dir');
                        }
                        seletor.append('<li><div class="partido">'+d.partido+'</div><div class="posicao">'+d.posicao+'</div><div class="porcentagem">'+d.identificacao+'%</div><div class="barras"><div style="width:'+d.percentual+'%" class="barra"></div></div></li>');
                    })
                    // $(".resultado").fadeIn();
                    //mais se identifica
                    var idf1 = '<div class="partido"><img src="'+dirImg+'partidos/'+resultadoFinal[0].imagem+'.jpg"><p>'+resultadoFinal[0].partido+': <span>'+resultadoFinal[0].percentual+'%</span></p></div>';
                    var idf2 = '<div class="partido"><img src="'+dirImg+'partidos/'+resultadoFinal[1].imagem+'.jpg"><p>'+resultadoFinal[1].partido+': <span>'+resultadoFinal[1].percentual+'%</span></p></div>';
                    $('.box-partidos.esq .bloco').html(idf1+idf2);
                    //menos se identifica
                    var dif1 = '<div class="partido"><img src="'+dirImg+'partidos/'+resultadoFinal[(resultadoFinal.length)-1].imagem+'.jpg"><p>'+resultadoFinal[(resultadoFinal.length)-1].partido+': <span>'+resultadoFinal[(resultadoFinal.length)-1].percentual+'%</span></p></div>';
                    var dif2 = '<div class="partido"><img src="'+dirImg+'partidos/'+resultadoFinal[(resultadoFinal.length)-2].imagem+'.jpg"><p>'+resultadoFinal[(resultadoFinal.length)-2].partido+': <span>'+resultadoFinal[(resultadoFinal.length)-2].percentual+'%</span></p></div>';
                    $('.box-partidos.dir .bloco').html(dif1+dif2);
                    $('.perguntas').animate({'opacity':0},700,function(){
                        $('.resultado').css({'opacity':0,'display':'block'}).animate({'opacity':1},700,function(){
                            $('.perguntas').css({'display':'none'});
                        })

                    })

                    //envia resultados

                    var respostaUsuario = new Array();
                    $.each(resultados,function(i,d){
                        respostaUsuario.push({questao:(i+1),resposta:+d});
                    })

                    formdata = {
                        "responses": respostaUsuario
                    }

                    //qlt, prd
                    /*
                    $.ajax("https://1beigxaz56.execute-api.us-east-1.amazonaws.com/prd/infograficoPreferenciaPartidaria", {
                        type: 'post',
                        data: JSON.stringify(formdata),
                        dataType: 'json',
                        processData: false,
                        contentType: 'application/json',    
                        success: function(data) {
                            console.table(data);
                        }
                    });
                    */

                    $('.link-facebook').on('click',function(){
                        var p1 = Number(resultadoFinal[0].percentual);
                        var p2 = Number(resultadoFinal[1].percentual);
                        var partidosComp = {
                            partido1:resultadoFinal[0].partido+" ("+p1.toFixed(0)+"%)",
                            partido2:resultadoFinal[1].partido+" ("+p2.toFixed(0)+"%)",
                        }
                        compartilharDepoimento(partidosComp);
                    });
                    $('.link-twitter').on('click',function(){
                        var p1 = Number(resultadoFinal[0].percentual);
                        var p2 = Number(resultadoFinal[1].percentual);
                        var partidosComp = {
                            partido1:resultadoFinal[0].partido+" ("+p1.toFixed(0)+"%)",
                            partido2:resultadoFinal[1].partido+" ("+p2.toFixed(0)+"%)",
                        }
                        compartilhaTwitter(partidosComp);
                    });


                }, 300);
            }
            setTimeout(function(){
                $(".botao-pergunta").removeClass('escolhido');

                $('.voltar').removeClass('desativado');

                quiz.slick('slickNext');
                atualizaContador();
            }, 500);
        })

        $(".voltar").click(function(){
            if(!$(this).hasClass('desativado')){
                quiz.slick('slickPrev');
                atualizaContador();
                if(quiz.slick('slickCurrentSlide')==0){
                    $(this).addClass('desativado');
                }              
            }
        })
        var posTop = $(".perguntas").offset().top;
        $(".novamente").click(function(){
            quiz.slick('slickGoTo',0);
            $('.resultado').animate({'opacity':0},700,function(){
                $("html, body").animate({ scrollTop: posTop-30}, 1000);
                // $("html, body").scrollTop(posTop);
                $('.perguntas').css({'opacity':0,'display':'block'}).animate({'opacity':1},700,function(){
                    $('.resultado').css({'display':'none'});
                    quiz.slick('setPosition');
                    $('.voltar').addClass('desativado');
                })
            })
        })

        $(".ler-artigo").click(function(){
            $(this).toggleClass('aberto');
            $(this).parent().parent().parent().next('.texto-especialista').slideToggle();
        })

        function atualizaContador(){
            $('.perguntas .contador').text((quiz.slick("slickCurrentSlide") + 1) + " de " + quiz.slick("getSlick").slideCount);
        }

        // $('.link-facebook').on('click',function(){
        //     // compartilharDepoimento(horasFacebook);
        // });

        var urlInfo = "http://infograficos.oglobo.globo.com/brasil/partido-do-voce-nao-me-representa.html";

        function compartilharDepoimento(partidos){
            // partido1
            FB.init({appId: "275998675912771"});
                 function postToFeed() {
                   var obj = {
                     method: 'feed',
                     link: urlInfo,
                     picture: "http://infograficos-estaticos.s3.amazonaws.com/identificacao-partidaria/assets/images/fb-partidos.jpg",
                     name: "Os partidos com que mais me identifico: "+partidos.partido1+" e "+partidos.partido2+". FaÃ§a o teste vocÃª tambÃ©m",
                     description: 'NÃºcleo de dados - O Globo',
                     caption: ""
                   };
                   FB.ui(obj);
                 }
                 postToFeed();
        }

        function compartilhaTwitter(partidos){
           var p1 = (partidos.partido1).replace('%','%25');
           var p2 = (partidos.partido2).replace('%','%25');
           var base = 'https://twitter.com/intent/tweet?text=';
           var texto = "Os partidos com que mais me identifico: "+p1+" e "+p2+". FaÃ§a o teste vocÃª tambÃ©m";
           var link = base +texto+'&url='+urlInfo+'&via=JornalOGlobo';
           console.log(link);
           window.open(link, '_blank');
        }

    });

}
