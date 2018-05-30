
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
            //pega a diferença, se existir a questão
            if(d['Quest'+x]!=""){
                //calcula a diferença
                var calc = resultados[x-1]-d['Quest'+x];
                //deixa o resultado positivo
                calc = calc<0 ? calc*-1 : calc;
                //soma a diferença que deu
                dif += calc;
                //soma a diferençå máxima com 4, que sao os extremos 1-5
                maxDif += 4; 
            }
        }
        //verifica se partido respondeu pelo menos uma pergunta
        if(maxDif!=0){
            console.log(maxDif);
            //calculo do percentual, digamos que ele diferefiu em 2 de 8 possiveis
            var discordancia = (dif/maxDif)*100; //transforma em percentual
            var identificacao = (100-discordancia); //trasforma em percentual. Se a discordancia for 0, o resultado é 100. 25 o resultato é 75
            //verifica se tem casa decimal e substitui por virgula
            var strIdf = String(identificacao);
            var percentual = identificacao;
            if(strIdf.indexOf('.')!=-1){
                percentual = formataNumero(identificacao).toFixed(1);
                identificacao = String(percentual).replace(".",",");
                //str.substring(0,(str.length - 1)
            }
            resultadoFinal.push({
                partido:d['Partido'],
                identificacao:identificacao,
                posicao:d['Posicao'],
                imagem:d['Imagem'],
                percentual:percentual}
            );
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
            //guarda escolha
            $(this).toggleClass('escolhido');
            var indice = $(this).parent().parent().index();
            resultados[indice] = $(this).attr('data-numero');

            if(indice>=(qtdQuest-1)){
                //Finaliza teste
                // console.log("Escolhas \/");
                // console.table(resultados);
                setTimeout(function(){
                    //chama resultado
                    var resultadoFinal = comparaResultados(dados, resultados);
                    var seletor = $('.resultado ul');
                    $('.resultado ul.esq,.resultado ul.dir').html("");
                    // console.log("Obejto final \/");
                    // console.table(resultadoFinal);
                    $.each(resultadoFinal,function(i,d){
                        seletor.append('<li><div class="partido">'+d.partido+'</div><div class="posicao">'+d.posicao+'</div><div class="porcentagem">'+d.identificacao+'%</div><div class="barras"><div style="width:'+d.percentual+'%" class="barra"></div></div></li>');
                    })
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

                }, 300);
            }
            setTimeout(function(){
                $(".botao-pergunta").removeClass('escolhido');

                $('.voltar').removeClass('desativado');

                quiz.slick('slickNext');
                atualizaContador();
            }, 500);
        })

        var posTop = $(".perguntas").offset().top;

        function atualizaContador(){
            $('.perguntas .contador').text((quiz.slick("slickCurrentSlide") + 1) + " de " + quiz.slick("getSlick").slideCount);
        }

    });

}
