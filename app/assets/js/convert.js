/* 
Ayrton Teshima

Retorno da função será um array de objetos:

var arr = [
	{
		k: "Primeiro opção",
		v: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8"]
	},

	{
		k: "Segundo opção",
		v: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11"]
	},

	{
		k: "Terceiro opção",
		v: ["v1", "v2", "v3", "v4", "v5"]
	}
]

Desta forma facilita a ordenação:

/* POR CHAVES/TÍTULOS ALFABÉTICA

arr.sort(function(a, b){
	if(a.k>b.k)
		return -1;
	else
		return 1;
	return 0;
});

OU POR QUANTIDADE DE VALORES

arr.sort(function(a, b){
	if(a.v.length > b.v.length)
		return -1;
	else
		return 1;
	return 0;
});

ORDENAR ENTRE OS PRÓPRIOS VALORES

arr[1].v.sort();


INVERTER O ARRAY
arr.reverse();

*/

// function convertToSpecialArray (obj, opts, value) {
// 	var arr = [];
// 	var lenObj = obj.length;
// 	var lenOpts = opts.length;

// 	for (var i = 0; i < lenObj; i++) {
// 		for (var j = 0, has=false; j < lenOpts; j++) {
// 			if(arr.indexOf(obj[i][opts[j]]) !== -1)  {
// 				has = true;
// 				break;
// 			}	
// 		}

// 		if(has) {
// 			arr[i].v.push( obj[i][opts[j]] );
// 		} else {
// 			arr.push({ k:opts[j], v:[obj[i][opts[j]]] });
// 		}
// 	}

// 	return arr;
// }



// for (var i = 0; i < csv.length; i++) {
// 	csv[i].id=i;
// };

function getStyle(el, cssprop) {
    if (el.currentStyle) //IE
        return el.currentStyle[cssprop]
    else if (document.defaultView && document.defaultView.getComputedStyle) //Firefox
        return document.defaultView.getComputedStyle(el, "")[cssprop]
    else //try and get inline style
        return el.style[cssprop]
}

function mergeObjects(obj1, obj2) {

    for (var prop in obj1) {
        if (obj1.hasOwnProperty(prop)) {
            if (obj2[prop] === undefined)
                obj1[prop] = obj1[prop];
            else
                obj1[prop] = obj2[prop];
        }
    }

    for (var prop2 in obj2) {
        if (obj2.hasOwnProperty(prop2)) {
            if (obj1[prop2] === undefined)
                obj1[prop2] = obj2[prop2];
        }
    }

    return obj1;

}

var isArray = Array.isArray || function(a) {
        return Object.prototype.toString.call(a) === "[object Array]";
    };

var isObject = function(o) {
    return Object.prototype.toString.call({}) === "[object Object]";
};

var convertToSpecialArray = function(config) {
    'use strict';

    var defaults = {
        json: null,
        output: "object",
        values: null,
        fields: null,
        group: true
    };

    config = mergeObjects(defaults, config);

    if (!isArray(config.json)) {
        console.log("ERRO -  o json passado deve ser um array.");
        return;
    }
    var lenJson = config.json.length;
    var fields = [];
    var $output = config.output === "object" ? {} : [];
    var pos_output = $output;

    var run = function(c) {


        // validações
        if (c.fields !== null) {

            if (isArray(c.fields)) {
                fields = c.fields;
            } else {
                fields.push(c.fields);
            }

            outputGenerator();
            pos_output = $output;
            return $output;
        }
        return null;
    };

    var queue = [];
    queue.push(run);



    function outputGenerator() {

        for (var i = 0, fieldsLen = fields.length; i < fieldsLen; i++) {


            for (var j = 0; j < lenJson; j++) {

                if (config.json[j][fields[i]] === undefined) return;

                if (!$output[fields[i]]) {
                    $output[fields[i]] = [];
                }


                if (config.group) {
                    for (var k = 0, has = false; k < $output[fields[i]].length; k++) {
                        if ($output[fields[i]][k].k === config.json[j][fields[i]] && config.json[j][fields[i]] != "") {
                            has = true;
                            break;
                        }
                    }

                    if (has) {
                        $output[fields[i]][k].v.push(insertValues(j));
                    } else {

                        $output[fields[i]].push({
                            k: config.json[j][fields[i]],
                            v: [insertValues(j)]
                        });
                    }

                } else {
                    $output[fields[i]].push(insertValues(j));
                }

            }

        }




        // CASO NA CONFIGURAÇÃO SEJA O OUTPUT COMO ARRAY
        if (config.output.toLowerCase() === "array") {
            var output_arr = [];

            for (var prop in $output) {
                output_arr.push({
                    k: prop,
                    v: $output[prop]
                });
            }

            $output = output_arr;
        } else {
            if (fieldsLen <= 1) {
                $output = $output[fields[0]];
            }

        }


    }


    function insertValues(i) {
        if (typeof config.values === "string") {


            if (config.values === 'all')
                return config.json[i];
            else
                return config.json[i][config.values];

        } else if (isArray(config.values)) {

            var ret = {};
            for (var j = 0; j < config.values.length; j++) {
                if (!ret[config.values[i]]) {
                    ret[config.values[j]] = config.json[i][config.values[j]];
                }
            }
            return ret;
        }

        return null;
    }


    return {
        run: function() {

            for (var i = 0, ln = queue.length; i < ln; i++) {
                queue.shift()(config);
            }

            var path_find = [];
            // var ret=$output;

            return {
                find: function($k) {

                    if (isArray(pos_output)) {

                        for (var i = 0, has = false; i < pos_output.length; i++) {
                            if (pos_output[i].k === $k) {
                                has = true;
                                break;
                            }
                        }

                        if (pos_output[i] === undefined)
                            pos_output = [];
                        else
                            pos_output = pos_output[i].v;

                    } else if (isObject(pos_output)) {

                        if (pos_output.v === undefined) {
                            pos_output = pos_output[$k];
                            return this;
                        }

                        for (var i = 0, has = false; i < pos_output.v.length; i++) {
                            if (pos_output.v[i].k === $k) {
                                has = true;
                                break;
                            }
                        }

                        if (pos_output.v[i] === undefined)
                            pos_output = [];
                        else
                            pos_output = pos_output.v[i].v;
                    }



                    return this;


                },
                get: function() {
                    return pos_output;
                }
            };
        },
        beforeRun: function(fn) {
            queue.unshift(fn);
            return this;
        },
        afterRun: function(fn) {
            queue.push(fn);
            return this;
        }
    };
};
// var opts = {
// 	json: csv,
// 	fields: ['militante', 'preso', 'o-que-era'], // array ou string ou null
// 	output:"object",
// 	values: 'all', // acept: all | field (grava em object) | array fields	(grava em object)
// 	group: true
// };

// var json = convertToSpecialArray(opts)
// 			.beforeRun(function(){
// 				console.log("antes");
// 			})
// 			.afterRun(function(){
// 				console.log("depois");
// 			})
// 			.run();




// getToJson("planilha.csv", function(json) {
// 	var opts = {
// 		json:json,
// 		fields:['id', 'profissao']
// 	};

// 	var dados = convertToSpecialArray(opts).run();

// });

// var comercio = json.find("o-que-era").find("Imprensa").get();
// json.
// console.table(comercio);