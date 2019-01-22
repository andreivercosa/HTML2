function msg(){
    var nome = $("#name").val()
    var sobrenome = $("#sobrenome").val()
    var cpf = $("#CPF").val()
    var cidade = $("#cidade").val()
    
    
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

    if(!cpf){
        $.alert({
            title: 'ATENÇÃO',
            content: 'INFORME O CPF',
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
    var d = "Nome: " + nome +"<br>Sobrenome: " + sobrenome + "<br>CPF: " + cpf +"<br>Cidade: " + cidade;
    $.alert({
        title: 'DADOS CADASTRADOS',
        content: d,
        type: 'green'
    })
   // document.getElementById("comit").value = d;
    
}