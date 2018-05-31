console.log('\n');
console.log('\n');
console.log("Initializing... :)");
console.log('\n');
console.log('\n');
console.log("############################# INFOGLOBO - OGLOBO #############################");
console.log("                                                                              "); 
console.log("#    #   ##   #    # ######    #    # ######      ##      ######   ##   #    #"); 
console.log("##  ##  #  #  #   #  #         ##  ## #          #  #     #       #  #  ##   #"); 
console.log("# ## # #    # ####   #####     # ## # #####     #    #    #####  #    # # #  #"); 
console.log("#    # ###### #  #   #         #    # #         ######    #      ###### #  # #"); 
console.log("#    # #    # #   #  #         #    # #         #    #    #      #    # #   ##"); 
console.log("#    # #    # #    # ######    #    # ######    #    #    #      #    # #    #"); 
console.log("                                                                              ");
console.log("################################### BRAZIL ###################################");
console.log("                                                                              ");

var dirImg = "";

var qtdQuest = 9;
var resultados = new Array();

var dados = [
    {
      "Idol": "Rafaela Silva",
      "Quest1": 4,
      "Quest2": 5,
      "Quest3": 5,
      "Quest4": 4,
      "Quest5": 5,
      "Quest6": 4,
      "Quest7": 1,
      "Quest8": 2,
      "Quest9": 2,
      "Modality": "Judo",
      "Characteristics": "Focus, Strength and Passion",
      "Main Award": "Brazilian Sportswomen"
    },
    {
      "Idol": "Isaquias Queiroz",
      "Quest1": 3,
      "Quest2": 5,
      "Quest3": 3,
      "Quest4": 3,
      "Quest5": 3,
      "Quest6": 2,
      "Quest7": 1,
      "Quest8": 4,
      "Quest9": 1,
      "Modality": "Canoe Sprint",
      "Characteristics": "Conscientious and Intelligent",
      "Main Award": "Gold Panamerican"
    },
    {
      "Idol": "Flávia Saraiva",
      "Quest1": 3,
      "Quest2": 2,
      "Quest3": 3,
      "Quest4": 2,
      "Quest5": 3,
      "Quest6": 1,
      "Quest7": 5,
      "Quest8": 4,
      "Quest9": 5,
      "Modality": "Gymnast",
      "Characteristics": "Efficiency and Determinism",
      "Main Award": "Gold Youth Ganes"
    },
    {
      "Idol": "Diego Hipollito",
      "Quest1": 5,
      "Quest2": 5,
      "Quest3": 4,
      "Quest4": 3,
      "Quest5": 1,
      "Quest6": 2,
      "Quest7": 2,
      "Quest8": 5,
      "Quest9": 2,
      "Modality": "Gymnast",
      "Characteristics": "Brilliant, Calm and Careful",
      "Main Award": "Silver National Championship"
    },
    {
      "Idol": "Tiago Brás",
      "Quest1": 2,
      "Quest2": 3,
      "Quest3": 1,
      "Quest4": 3,
      "Quest5": 5,
      "Quest6": 5,
      "Quest7": 2,
      "Quest8": 1,
      "Quest9": 4,
      "Modality": "Athletics",
      "Characteristics": "Conscientious, Confident and Courageous",
      "Main Award": "Bronze Youth Ganes"
    },
    {
      "Idol": "Bruno Fratus",
      "Quest1": 5,
      "Quest2": 1,
      "Quest3": 3,
      "Quest4": 1,
      "Quest5": 2,
      "Quest6": 4,
      "Quest7": 2,
      "Quest8": 3,
      "Quest9": 2,
      "Modality": "Swimming",
      "Characteristics": "Decisive and Critical",
      "Main Award": "Gold Panamerican"
    },
    {
      "Idol": "Daniel Dias",
      "Quest1": 2,
      "Quest2": 1,
      "Quest3": 3,
      "Quest4": 3,
      "Quest5": 5,
      "Quest6": 3,
      "Quest7": 5,
      "Quest8": 3,
      "Quest9": 1,
      "Modality": "Swimming",
      "Characteristics": "Efficient and Energetic",
      "Main Award": "Bronze Panamerican"
    },
    {
      "Idol": "Sarah Menezes",
      "Quest1": 1,
      "Quest2": 2,
      "Quest3": 3,
      "Quest4": 4,
      "Quest5": 3,
      "Quest6": 2,
      "Quest7": 3,
      "Quest8": 3,
      "Quest9": 4,
      "Modality": "Judo",
      "Characteristics": "Friendly and Focus",
      "Main Award": "Gold National Championship"
    },
    {
      "Idol": "Felipe Kitadai",
      "Quest1": 3,
      "Quest2": 5,
      "Quest3": 2,
      "Quest4": 5,
      "Quest5": 4,
      "Quest6": 4,
      "Quest7": 4,
      "Quest8": 3,
      "Quest9": 1,
      "Modality": "Judo",
      "Characteristics": "Hardworking and Serious",
      "Main Award": "Silver National Championship"
    },
    {
      "Idol": "Bruna Takahashi",
      "Quest1": 5,
      "Quest2": 1,
      "Quest3": 1,
      "Quest4": 4,
      "Quest5": 4,
      "Quest6": 5,
      "Quest7": 5,
      "Quest8": 5,
      "Quest9": 4,
      "Modality": "Table Tennis",
      "Characteristics": "Gentle, Generous and Graceful",
      "Main Award": "Gold Panamerican"
    },
    {
      "Idol": "Felipe Wu",
      "Quest1": 4,
      "Quest2": 4,
      "Quest3": 3,
      "Quest4": 4,
      "Quest5": 1,
      "Quest6": 5,
      "Quest7": 1,
      "Quest8": 1,
      "Quest9": 2,
      "Modality": "Shooter",
      "Characteristics": "Shy and Rational",
      "Main Award": "Bronze Panamerican"
    },
    {
      "Idol": "Poliana Okimoto",
      "Quest1": 3,
      "Quest2": 5,
      "Quest3": 3,
      "Quest4": 2,
      "Quest5": 1,
      "Quest6": 3,
      "Quest7": 4,
      "Quest8": 4,
      "Quest9": 2,
      "Modality": "Swimming",
      "Characteristics": "Brilliant and Confident",
      "Main Award": "Bronze Youth Ganes"
    },
    {
      "Idol": "Marcelinho Huertas",
      "Quest1": 1,
      "Quest2": 4,
      "Quest3": 1,
      "Quest4": 2,
      "Quest5": 4,
      "Quest6": 1,
      "Quest7": 3,
      "Quest8": 3,
      "Quest9": 5,
      "Modality": "Basketball",
      "Characteristics": "Determinated and Focus",
      "Main Award": "Gold Panamerican"
    },
    {
      "Idol": "Ana Marcela",
      "Quest1": 4,
      "Quest2": 4,
      "Quest3": 3,
      "Quest4": 1,
      "Quest5": 1,
      "Quest6": 1,
      "Quest7": 5,
      "Quest8": 4,
      "Quest9": 5,
      "Modality": "Swimming",
      "Characteristics": "Tactical and Patient",
      "Main Award": "Gold Youth Ganes"
    }
  ];

function formataNumero(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

function comparaResultados(dados, resultados){
    var resultadoFinal = new Array();
    dados.forEach(function(d,i){
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
            //calculo do percentual, digamos que ele diferefiu em 2 de 8 possiveis
            var discordancia = (dif/maxDif)*100; //transforma em percentual
            var identificacao = (100-discordancia); //trasforma em percentual. Se a discordancia for 0, o resultado é 100. 25 o resultato é 75
            //verifica se tem casa decimal e substitui por virgula
            var strIdf = String(identificacao);
            var percentual = identificacao;
            if(strIdf.indexOf('.')!=-1){
                percentual = formataNumero(identificacao).toFixed(1);
                // identificacao = String(percentual).replace(".",",");
                identificacao = formataNumero(identificacao).toFixed(1).replace(".",",");
                //str.substring(0,(str.length - 1)
            }
            resultadoFinal.push({
                Idol:d['Idol'],
                Modality:d['Modality'],
                Characteristics:d['Characteristics'],
                ['Main Award']:d['Main Award'],
                // Identification:identificacao,
                Percentage:percentual+"%"}
            );
        }
    })
    // resultadoFinal = _.sortBy(resultadoFinal, function(obj){ return -parseInt(obj.identificacao, 10) });
    console.table(resultadoFinal);
    return resultadoFinal;
}

var resultados = [];
var resultadosPrint = [];
for (var x=0;x<qtdQuest;x++) {
    resultados[x] = Math.floor((Math.random() * 5) + 1);
    resultadosPrint["Answer -> Question "+(x+1)] = Math.floor((Math.random() * 5) + 1);
}
console.log("User answers --- \\/");
console.log(resultadosPrint);
console.log('\n');
console.log("Final result --- \\/");
comparaResultados(dados, resultados);
console.log('\n');
console.log("Intelligence completed");
console.log('\n');

// resize();
// function iniciaAplicacao(dados){
//     // console.table(dados);
//     //pega respostas usuÃ¡rios

//     $(function() {
//         var quiz = $(".perguntas .case-perguntas");
//         quiz.slick({
//             dots: false,
//             arrows: false, 
//             infinite: false,
//             speed: 300,
//             swipe: false,
//             cssEase: 'cubic-bezier(1.000, 0.210, 0.285, 0.695)',
//         });
//         $(".botao-pergunta").click(function(){
//             //guarda escolha
//             $(this).toggleClass('escolhido');
//             var indice = $(this).parent().parent().index();
//             resultados[indice] = $(this).attr('data-numero');

//             if(indice>=(qtdQuest-1)){
//                 //Finaliza teste
//                 // console.log("Escolhas \/");
//                 // console.table(resultados);
//                 setTimeout(function(){
//                     //chama resultado
//                     var resultadoFinal = comparaResultados(dados, resultados);
//                     var seletor = $('.resultado ul');
//                     $('.resultado ul.esq,.resultado ul.dir').html("");
//                     // console.log("Obejto final \/");
//                     // console.table(resultadoFinal);
//                     $.each(resultadoFinal,function(i,d){
//                         seletor.append('<li><div class="partido">'+d.partido+'</div><div class="posicao">'+d.posicao+'</div><div class="porcentagem">'+d.identificacao+'%</div><div class="barras"><div style="width:'+d.percentual+'%" class="barra"></div></div></li>');
//                     })
//                     $('.perguntas').animate({'opacity':0},700,function(){
//                         $('.resultado').css({'opacity':0,'display':'block'}).animate({'opacity':1},700,function(){
//                             $('.perguntas').css({'display':'none'});
//                         })
//                     })

//                     //envia resultados

//                     var respostaUsuario = new Array();
//                     $.each(resultados,function(i,d){
//                         respostaUsuario.push({questao:(i+1),resposta:+d});
//                     })

//                 }, 300);
//             }
//             setTimeout(function(){
//                 $(".botao-pergunta").removeClass('escolhido');

//                 $('.voltar').removeClass('desativado');

//                 quiz.slick('slickNext');
//                 atualizaContador();
//             }, 500);
//         })

//         var posTop = $(".perguntas").offset().top;

//         function atualizaContador(){
//             $('.perguntas .contador').text((quiz.slick("slickCurrentSlide") + 1) + " de " + quiz.slick("getSlick").slideCount);
//         }

//     });

// }
