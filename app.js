const fs = require("fs");
const xml2js = require('xml2js');
const path = require("path");
var bodyParser = require('body-parser');
const { nextTick, send } = require("process");
const { REFUSED } = require("dns");




const express = require('express')
    , app = express()
    , multer = require('multer');



app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())



app.set('view engine', 'html');





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')

    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
        file.originalname;
        setTimeout(function () {
            ler_arquivo(file.originalname)
        }, 2000);






    }



});



const upload = multer({ storage });

app.use(express.static('public'));

app.post('/file/upload', upload.single('file'),
    (req, res) =>


        setTimeout(function () {

            res.redirect("http://localhost:3000/casa")

        }, 5000));



function inicial() {

    console.log("teste")
}


app.listen(3000, () => console.log('App na porta 3000'));

global.end = './etiqueta_ph.png'
function ler_arquivo(nome_arquivo) {


    let texto = fs.readFileSync(path.join(__dirname, './uploads/' + nome_arquivo), 'ucs2');


    var palavra_array = texto.split('><');

    var flag_copy_code;
    var flag_copy_tex;

    /*Codigo*/
    var flag_codigo;
    var flag_codigo_text;

    /*Produto*/
    var flag_produto;
    var flag_produto_tex;

    /*Titulo*/
    var flag_field3;
    var flag_field3_tex;

    for (var i = 0; i < palavra_array.length; i++) {

        /*Field03*/
        if (palavra_array[i] == 'Field Name="Field03"') {
            flag_field3 = 1;
            console.log('encontrado o field 3');
        }
        if (flag_field3 == 1) {
            if (palavra_array[i].includes("CDATA")) {
                flag_field3_tex = palavra_array[i];
                flag_field3 = 0;
                console.log(flag_field3_tex);

            }
        }
        /*Produto*/
        if (palavra_array[i] == 'Field Name="Produto"') {
            flag_produto = 1;
            console.log('encontrado o produto');
        }
        if (flag_produto == 1) {
            if (palavra_array[i].includes("CDATA")) {
                flag_produto_tex = palavra_array[i];
                flag_produto = 0;
                console.log(flag_produto_tex);
            }
        }
        /*codigo*/
        if (palavra_array[i] == 'Field Name="codigo"') {
            flag_codigo = 1;
            console.log('encontrado o codigo');
        }
        if (flag_codigo == 1) {
            if (palavra_array[i].includes("CDATA")) {
                flag_codigo_text = palavra_array[i];
                flag_codigo = 0;
                console.log(flag_codigo_text);
            }
        }
        /*copy codigo*/
        if (palavra_array[i] == 'Field Name="Copy of codigo"') {
            flag_copy_code = 1;
            console.log('encontrado o Copy of Code');
        }
        if (flag_copy_code == 1) {
            if (palavra_array[i].includes("CDATA")) {
                flag_copy_code_text = palavra_array[i];
                flag_copy_code = 0;
                console.log(flag_copy_code_text);
            }
        }




    }

    var cc = flag_copy_code_text.replace('![CDATA[', '');
    global.cc2 = cc.replace(']]', '');
    console.log(cc2);
    var c = flag_codigo_text.replace('![CDATA[', '');
    global.c2 = c.replace(']]', '');
    console.log(c2);
    var p = flag_produto_tex.replace('![CDATA[', '');
    global.p2 = p.replace(']]', '');
    console.log(p2);
    var f = flag_field3_tex.replace('![CDATA[', '');
    global.f2 = f.replace(']]', '');

    console.log(f2)


    app.get('/casa', function (req, res, next) {

        res.send(

'<table style="border-collapse: collapse; width: 100%; height: 36px;" border="1">'+
'<tbody>'+
'<tr style="height: 18px;">'+
'<td style="width: 50%; height: 18px; text-align: justify;">'+
/*a*/
'Dados do Arquivo:  ' + nome_arquivo + ' ' +
'<table style="border-collapse: collapse; width: 100%; height: 72px;" border="1">' +
'<tbody>' +
'<tr style="height: 18px;">' +
'<td style="width: 30%; height: 18px;">Nome produto</td>' +
'<td style="width: 30%; height: 18px;">' + f2 + '</td>' +
'</tr>' +
'<tr style="height: 18px;">' +
'<td style="width: 30%; height: 18px;">Codigo do produto</td>' +
'<td style="width: 30%; height: 18px;">' + p2 + '</td>' +
'</tr>' +
'<tr style="height: 18px;">' +
'<td style="width: 30%; height: 18px;">Codigo</td>' +
'<td style="width: 30%; height: 18px;">' + c2 + '</td>' +
'</tr>' +
'<tr style="height: 18px;">' +
'<td style="width: 30%; height: 18px;">Codigo de barra</td>' +
'<td style="width: 30%; height: 18px;">' + cc2 + '</td>' +
'</tr>' +
'</tbody>' +
'</table>' +
/*a*/
'</td>'+
'<td style="width: 50%; height: 18px; text-align: justify;">'+


/*a1*/


'<table style="height: 60px; width: 100%; border-collapse: collapse; float: left;" border="1">' +
            '<tbody>' +
            '<tr style="height: 73px;">' +
            '<td style="width: 22.9781%; height: 60px;">' +
            '<h1>KC</h1>' +
            '</td>' +
            '<td style="width: 100%; height: 60px;">' +
            '<h1><strong>llllll llllll lllllll llllllllll&nbsp;</strong></h1>' +
            '<table style="border-collapse: collapse; width: 100.538%; height: 20px;" border="1">' +
            '<tbody>' +
            '<tr>' +
            '<td style="width: 100%; text-align: center;">CODIGO: <span style="background-color: #ff0000; color: #ffffff;">' + c2 + '</span></td>'+
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '<table style="border-collapse: collapse; width: 100.0%; height: 69px;" border="1">' +
            '<tbody>' +
            '<tr style="height: 69px;">' +
            '<td style="width: 100%; text-align: center; height: 69px;">' +
            '<h3 style="text-align: center;">CODIGO DO PRODUTO:  <span style="background-color: #ff0000; color: #ffffff;">' + p2 + '</span> </h3>' +
            '</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +
            '<table style="border-collapse: collapse; width: 100%; height: 101px;" border="1">' +
            '<tbody>' +
            '<tr style="height: 48px;">' +
            '<td style="width: 100%; height: 48px;">' +
            '<h1 style="text-align: center;"><strong>llllll llllll lllllll llllllllll</strong></h1>' +
            '</td>' +
            '</tr>' +
            '<tr style="height: 17px;">' +
            '<td style="width: 100%; height: 17px;">CODIGO DE BARRA: (90) <span style="background-color: #ff0000; color: #ffffff;">' + p2 + '</span>&nbsp;&nbsp;&nbsp;  (11) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; (15)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(10)</td>' +
            '</tr>' +
            '<tr style="height: 18px;">' +
            '<td style="width: 100%; height: 18px; text-align: center;">NOME DO PRODUTO:  <span style="background-color: #ff0000; color: #ffffff;">' + f2 + '</span></td>' +
            '</tr>' +
            '<tr style="height: 18px;">' +
            '<td style="width: 100%; height: 18px;">Prod&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Venc&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Qtde&nbsp; &nbsp; &nbsp; Lote</td>' +
            '</tr>' +
            '</tbody>' +
            '</table>' +



/*a1*/







'</td>'+
'</tr>'+
'<tr style="height: 18px;">'+
/*'<td style="width: 50%; heigh: 18px;">'+*/
/*b1*/

  
'<table style="border-collapse: collapse; width: 50%; height: 54px;" border="1">' +
'INSIRA OS NOVOS VALORES AQUI' +
'<form action="/casa" method="post">' +
'<tbody>' +
'<tr style="height: 10px;">' +
'<tr style="height: 18px;">' +
'<td style="width: 30.2632%; height: 18px;"><input name="q3" required="" type="text" placeholder="Novo Nome do Produto" />Novo Nome do Produto' +
'</tr>' +
'<tr style="height: 18px;">' +
'<td style="width: 30.2632%; height: 18px;"><input name="q2" required="" type="text" placeholder="Novo Codigo" />Novo Codigo' +
'</tr>' +
'<tr style="height: 18px;">' +
'<td style="width: 30.2632%; height: 18px;"><input name="q1" required="" type="text" placeholder="Novo Codigo do produto" />Novo Codigo do produto' +
'</tr>' +
'</tbody>' +
'</table>' +
'<input type="submit" value="Enviar" /></td></form> ' +
'<p></p>' +
'<p></p>' +
'<p></p>'+




/*b2 */

'</td>'+

'</tr>'+
'</tbody>'+
'</table>'
          




        )


        res.end();

        console.log(end)




    });








    app.post('/casa', (req, res, next) => {

        console.log('Got body:', req.body.q1);
        console.log('Got body:', req.body.q2);
        console.log('Got body:', req.body.q3);
        var a = req.body.q1
        var b = req.body.q2
        var d = req.body.q3
        setTimeout(function () {

            function replaceAll(str, find, replace) {
                return str.replace(new RegExp(find, 'g'), replace);
            }

            text1 = replaceAll(texto, p2, a);
            text2 = replaceAll(text1, c2, b);
            text3 = replaceAll(text2, f2, d);
            fs.writeFile('new_' + nome_arquivo, text3, 'ucs2', function (err) {


                if (err) return console.log(err);

                console.log("Feito")
                /*  res.send(
                    '<h1>Tag da etiquetadora modificado com sucesso,gerado um novo  arquivo salvo no diretorio:/uploads/'+'new_'+nome_arquivo+'</h1>'+
                    '<p><a href="http://localhost:3000/">Click aqui para retornar a pagina principal</a></p>'
                 ) */

                // Set disposition and send it.



            });

            setTimeout(function () {
                global.file = path.join(__dirname, '/new_' + nome_arquivo);

                res.download(file);

            }, 3000)
        }, 6000);





    });





}




