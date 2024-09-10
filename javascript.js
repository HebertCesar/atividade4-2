// Função para determinar a estação do ano com base no mês
function determinarEstacao(mes) {
    // Convertendo o mês para número inteiro e tratando possíveis entradas inválidas
    const mesNumero = parseInt(mes, 10);

    if (mesNumero < 1 || mesNumero > 12 || isNaN(mesNumero)) {
        return 'Mês inválido. Por favor, informe um número entre 1 e 12.';
    }

    // Determinando a estação com base no número do mês
    if (mesNumero >= 3 && mesNumero <= 5) {
        return 'Primavera';
    } else if (mesNumero >= 6 && mesNumero <= 8) {
        return 'Verão';
    } else if (mesNumero >= 9 && mesNumero <= 11) {
        return 'Outono';
    } else {
        return 'Inverno';
    }
}

// Exemplo de uso
const mes = prompt('Digite o número do mês (1 a 12):');
const estacao = determinarEstacao(mes);
alert(`A estação correspondente ao mês ${mes} é ${estacao}.`);
