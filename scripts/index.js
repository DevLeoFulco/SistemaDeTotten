
let contadorRecepcao = 0;
let contadorPegarExames = 0;
let contadorFazerExames = 0;
let contadorAgendarConsulta = 0;
let contadorConsultar = 0;

function gerarSenha(tipo) {
    // Lógica para gerar senha
    let tipoAbreviado = "";
    let numeroSequencial = 0;
    
    // Verificar o tipo de serviço e capturar as duas primeiras letras
    switch(tipo) {
        case 'Recepção':
            tipoAbreviado = "RE";
            contadorRecepcao++;
            numeroSequencial = contadorRecepcao;
            break;
        case 'Pegar Exames':
            tipoAbreviado = "PE";
            contadorPegarExames++;
            numeroSequencial = contadorPegarExames;
            break;
        case 'Fazer Exames':
            tipoAbreviado = "FE";
            contadorFazerExames++;
            numeroSequencial = contadorFazerExames;
            break;
        case 'Agendar Consulta':
            tipoAbreviado = "AC";
            contadorAgendarConsulta++;
            numeroSequencial = contadorAgendarConsulta;
            break;
        case 'Consultar':
            tipoAbreviado = "CO";
            contadorConsultar++;
            numeroSequencial = contadorConsultar;
            break;
        default:
            alert("Tipo de serviço não reconhecido!");
            return; // Sai da função se o tipo de serviço não for reconhecido
    }
    
    // Converte o número sequencial para uma string de 3 dígitos
    let numero = numeroSequencial.toString().padStart(3, '0');
    
    // Atribua a senha gerada onde for necessário
    let senha = tipoAbreviado + numero;
    alert("Sua senha é: " + senha);
}

function exibirModal(tipo) {
    if (tipo === 'exames') {
        document.getElementById('modalExames').style.display = 'block';
    } else if (tipo === 'consulta') {
        document.getElementById('modalConsulta').style.display = 'block';
    }
}

function fecharModal(tipo) {
    if (tipo === 'exames') {
        document.getElementById('modalExames').style.display = 'none';
    } else if (tipo === 'consulta') {
        document.getElementById('modalConsulta').style.display = 'none';
    }
}
