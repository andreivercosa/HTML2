function paciente(){
    var nome = $("#name").val()
    var sobrenome = $("#sobrenome").val()
    var telefone = $("#telefone").val()
    var cidade = $("#cidade").val()
    var estado = $("#estado").val()
    
    
    if(!nome){
        $.alert({
            title: 'ATENÇÃO',
            content: 'INFORME O NOME',
            type: 'green'
        })
        return false
    }

    if(!sobrenome){
        $.alert({
            title: 'ATENÇÃO',
            content: 'INFORME O SOBRENOME',
            type: 'green'
        })
        return false
    }

    if(!telefone){
        $.alert({
            title: 'ATENÇÃO',
            content: 'INFORME O TELEFONE',
            type: 'green'
        })
        return false
    }

    if(!cidade){
        $.alert({
            title: 'ATENÇÃO',
            content: 'INFORME A CIDADE',
            type: 'green'
        })
        return false
    }
    var d = "Nome: " + nome +"<br>Sobrenome: " + sobrenome + "<br>Telefone: " + telefone +"<br>Cidade: " + cidade;
    $.alert({
        title: 'DADOS CADASTRADOS',
        content: d,
        type: 'green'
    })
    
}

function estado(){
    var estado = $("#estado").val()

    if(!estado){
        $.alert({
            title: 'ATENÇÃO',
            content: 'INFORME O ESTADO',
            type: 'green'
        })
        return false
    }
    var d = "Estado: "+estado;
    $.alert({
        title: 'DADOS CADASTRADOS',
        content: d,
        type: 'green'
    })
    
}

function cidade(){
    var cidade = $("#cidade").val()
    var estado = $("#estado").val()

    if(!cidade){
        $.alert({
            title: 'ATENÇÃO',
            content: 'INFORME A CIDADE',
            type: 'green'
        })
        return false
    }
    if(!estado){
        $.alert({
            title: 'ATENÇÃO',
            content: 'INFORME O ESTADO',
            type: 'green'
        })
        return false
    }
    var d = "Cidade: " + cidade + "Estado: " + estado;
    $.alert({
        title: 'DADOS CADASTRADOS',
        content: d,
        type: 'green'
    })
    
}

function especialidade(){
    var especiadlidade = $("#especiadlidade").val()

    if(!especiadlidade){
        $.alert({
            title: 'ATENÇÃO',
            content: 'INFORME A ESPECIALIDADE',
            type: 'green'
        })
        return false
    }
    var d = "Especialidade: " + especiadlidade;
    $.alert({
        title: 'DADOS CADASTRADOS',
        content: d,
        type: 'green'
    })
    
}