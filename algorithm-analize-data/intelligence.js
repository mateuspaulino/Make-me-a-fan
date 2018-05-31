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
      "Quest1": 1,
      "Quest2": 3,
      "Quest3": 1,
      "Quest4": 2,
      "Quest5": 3,
      "Quest6": 1,
      "Quest7": 1,
      "Quest8": 2,
      "Quest9": 4,
      "Modality": "Judo",
      "Characteristics": "Focus, Strength and Passion",
      "Main Award": "Brazilian Sportswomen"
    },
    {
      "Idol": "Isaquias Queiroz",
      "Quest1": 3,
      "Quest2": 3,
      "Quest3": 4,
      "Quest4": 3,
      "Quest5": 5,
      "Quest6": 1,
      "Quest7": 3,
      "Quest8": 3,
      "Quest9": 1,
      "Modality": "Canoe Sprint",
      "Characteristics": "Conscientious and Intelligent",
      "Main Award": "Gold Panamerican"
    },
    {
      "Idol": "Flávia Saraiva",
      "Quest1": 3,
      "Quest2": 5,
      "Quest3": 4,
      "Quest4": 2,
      "Quest5": 3,
      "Quest6": 1,
      "Quest7": 1,
      "Quest8": 1,
      "Quest9": 4,
      "Modality": "Gymnast",
      "Characteristics": "Efficiency and Determinism",
      "Main Award": "Gold Youth Games"
    },
    {
      "Idol": "Diego Hipollito",
      "Quest1": 1,
      "Quest2": 4,
      "Quest3": 5,
      "Quest4": 1,
      "Quest5": 5,
      "Quest6": 2,
      "Quest7": 1,
      "Quest8": 3,
      "Quest9": 5,
      "Modality": "Gymnast",
      "Characteristics": "Brilliant, Calm and Careful",
      "Main Award": "Silver National Championship"
    },
    {
      "Idol": "Tiago Brás",
      "Quest1": 3,
      "Quest2": 2,
      "Quest3": 2,
      "Quest4": 3,
      "Quest5": 4,
      "Quest6": 3,
      "Quest7": 1,
      "Quest8": 5,
      "Quest9": 2,
      "Modality": "Athletics",
      "Characteristics": "Conscientious, Confident and Courageous",
      "Main Award": "Bronze Youth Games"
    },
    {
      "Idol": "Bruno Fratus",
      "Quest1": 1,
      "Quest2": 2,
      "Quest3": 5,
      "Quest4": 4,
      "Quest5": 4,
      "Quest6": 4,
      "Quest7": 4,
      "Quest8": 2,
      "Quest9": 5,
      "Modality": "Swimming",
      "Characteristics": "Decisive and Critical",
      "Main Award": "Gold Panamerican"
    },
    {
      "Idol": "Daniel Dias",
      "Quest1": 1,
      "Quest2": 2,
      "Quest3": 5,
      "Quest4": 1,
      "Quest5": 3,
      "Quest6": 4,
      "Quest7": 3,
      "Quest8": 3,
      "Quest9": 2,
      "Modality": "Swimming",
      "Characteristics": "Efficient and Energetic",
      "Main Award": "Bronze Panamerican"
    },
    {
      "Idol": "Sarah Menezes",
      "Quest1": 1,
      "Quest2": 4,
      "Quest3": 4,
      "Quest4": 1,
      "Quest5": 3,
      "Quest6": 3,
      "Quest7": 5,
      "Quest8": 5,
      "Quest9": 4,
      "Modality": "Judo",
      "Characteristics": "Friendly and Focus",
      "Main Award": "Gold National Championship"
    },
    {
      "Idol": "Felipe Kitadai",
      "Quest1": 2,
      "Quest2": 4,
      "Quest3": 4,
      "Quest4": 3,
      "Quest5": 5,
      "Quest6": 1,
      "Quest7": 1,
      "Quest8": 3,
      "Quest9": 5,
      "Modality": "Judo",
      "Characteristics": "Hardworking and Serious",
      "Main Award": "Silver National Championship"
    },
    {
      "Idol": "Bruna Takahashi",
      "Quest1": 3,
      "Quest2": 2,
      "Quest3": 3,
      "Quest4": 4,
      "Quest5": 5,
      "Quest6": 2,
      "Quest7": 2,
      "Quest8": 3,
      "Quest9": 2,
      "Modality": "Table Tennis",
      "Characteristics": "Gentle, Generous and Graceful",
      "Main Award": "Gold Panamerican"
    },
    {
      "Idol": "Felipe Wu",
      "Quest1": 2,
      "Quest2": 1,
      "Quest3": 5,
      "Quest4": 2,
      "Quest5": 5,
      "Quest6": 4,
      "Quest7": 2,
      "Quest8": 2,
      "Quest9": 2,
      "Modality": "Shooter",
      "Characteristics": "Shy and Rational",
      "Main Award": "Bronze Panamerican"
    },
    {
      "Idol": "Poliana Okimoto",
      "Quest1": 4,
      "Quest2": 3,
      "Quest3": 4,
      "Quest4": 4,
      "Quest5": 5,
      "Quest6": 4,
      "Quest7": 2,
      "Quest8": 3,
      "Quest9": 2,
      "Modality": "Swimming",
      "Characteristics": "Brilliant and Confident",
      "Main Award": "Bronze Youth Games"
    },
    {
      "Idol": "Marcelinho Huertas",
      "Quest1": 4,
      "Quest2": 2,
      "Quest3": 3,
      "Quest4": 3,
      "Quest5": 5,
      "Quest6": 5,
      "Quest7": 1,
      "Quest8": 1,
      "Quest9": 5,
      "Modality": "Basketball",
      "Characteristics": "Determinated and Focus",
      "Main Award": "Gold Panamerican"
    },
    {
      "Idol": "Ana Marcela",
      "Quest1": 2,
      "Quest2": 5,
      "Quest3": 2,
      "Quest4": 3,
      "Quest5": 4,
      "Quest6": 5,
      "Quest7": 5,
      "Quest8": 1,
      "Quest9": 3,
      "Modality": "Swimming",
      "Characteristics": "Tactical and Patient",
      "Main Award": "Gold Youth Games"
    }
  ];

function formataNumero(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}

var primeiroCalculo = 0;

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
                //guarda o primeiro calculo apenas para print
                if(i==1 && x==1){
                    var discPrint = (dif/maxDif)*100 ;
                    primeiroCalculo = "Example calculation => "+ (resultados[x-1]) +" - "+ (d['Quest'+x])+" = "+(resultados[x-1]-d['Quest'+x])+". Turn into integer =>"+calc+", High Diference = 4";
                    primeiroCalculo += "\nDiscording rate => "+ (dif/maxDif)*100 +". Identification rate => "+ (100-discPrint)+"\n";
                    // console.log(primeiroCalculo);
                }
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
                // identificacao = formataNumero(identificacao).toFixed(1).replace(".",",");
                // identificacao = formataNumero(identificacao).toFixed(1);
                //str.substring(0,(str.length - 1)
            }
            resultadoFinal.push({
                Idol:d['Idol'],
                Modality:d['Modality'],
                Characteristics:d['Characteristics'],
                ['Main Award']:d['Main Award'],
                Identification:identificacao,
                Percentage:percentual+"%"}
            );
        }
    })
    // resultadoFinal = _.sortBy(resultadoFinal, function(obj){ return -parseInt(obj.identificacao, 10) });
    // console.table(resultadoFinal);
    return resultadoFinal;
}


var resultados = [];
var resultadosPrint = [];
for (var x=0;x<qtdQuest;x++) {
    resultados[x] = Math.floor((Math.random() * 5) + 1);
    resultadosPrint["Answer -> Question "+(x+1)] = Math.floor((Math.random() * 5) + 1);
}
// console.log("User answers --- \\/");
// console.log(resultadosPrint);
// console.log('\n');
// console.log("Final result --- \\/");
// comparaResultados(dados, resultados);
// console.log('\n');


var dadosFinais = comparaResultados(dados, resultados);

const dadosFinaisOrdenados = Object.keys(dadosFinais).map(function (key) {
    return dadosFinais[key];
  })
  .sort(function (itemA, itemB) {
    return itemA.Identification < itemB.Identification;
  });

console.log("User answers --- \\/");
console.log(resultadosPrint);
console.log('\n');
// console.log("Final result --- \\/");
// console.table(dadosFinais);
// console.log('\n');

console.log("Final result --- \\/");
console.table(dadosFinaisOrdenados);

console.log('\n');
console.log("Intelligence completed");
console.log('\n');
