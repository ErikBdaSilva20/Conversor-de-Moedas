// Função para calcular o valor convertido de uma moeda para outra
function convertvalues() {
    const ValueInput = document.querySelector(".input-currency").value; // Valor do input
    const ValueToConvert = document.querySelector(".currency-value-to-convert"); // Moeda de origem 
    const ValueConverted = document.querySelector(".currency-value-Converted"); // Moeda para ser convertida

    // Valores fictícios das taxas de câmbio
    const exchangeRates = {
        real: 1, // Real é a moeda base
        dolar: 6.29,
        euro: 5.50,
        libra: 7.12,
        btc: 563237.36
    };

    // Pega as moedas selecionadas nos selects
    const fromCurrency = document.querySelector(".currency-select-first-value").value; //(Moeda selecionada no primeiro select)
    const toCurrency = document.querySelector(".currency-select-second").value; // Moeda de destino(segundo select)

    // Valida se o input é um número
    const valueToConvert = parseFloat(ValueInput);
    if (isNaN(valueToConvert) || valueToConvert <= 0) {
        return;
    }

    // Exibe o valor original formatado para o formato da moeda de origem
    ValueToConvert.innerHTML = formatCurrency(valueToConvert, fromCurrency);

    // Calcula a conversão de acordo com as taxas de câmbio
    let resultValues = 0;

    // Se a moeda de origem for diferente de "real", calcula o valor baseado na taxa
    if (fromCurrency !== "real") {
        resultValues = valueToConvert * (exchangeRates[fromCurrency] / exchangeRates["real"]);
    } else {
        resultValues = valueToConvert;
    }

    // Agora, converta o valor para a moeda de destino
    if (toCurrency !== "real") {
        resultValues = resultValues * (exchangeRates[toCurrency] / exchangeRates["real"]);
    }

    if(fromCurrency === toCurrency){
       resultValues = null;
    }

    // Exibe o valor convertido
    ValueConverted.innerHTML = formatCurrency(resultValues, toCurrency);

    // Atualizar a imagem e o nome da moeda convertida e original
    updateFirstCurrency(valueToConvert);
    updateSecondCurrency();
}

// Função para formatar os valores de acordo com a moeda
function formatCurrency(value, currency) {
    let currencyFormat;
    switch (currency) {
        case "real":
            currencyFormat = "BRL";
            break;
        case "dolar":
            currencyFormat = "USD";
            break;
        case "euro":
            currencyFormat = "EUR";
            break;
        case "libra":
            currencyFormat = "GBP";
            break;
        case "btc":
            return `₿ ${value.toFixed(1)}`; // Bitcoin com 1 casas decimais
    }

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currencyFormat
    }).format(value);
}

// Função para atualizar o nome da moeda e a imagem no primeiro select
function updateFirstCurrency() {
    const firstCurrencyName = document.getElementById("currency-first-name");
    const changeImageValue = document.querySelector(".currency-select-first-img");
    const selectedCurrency = document.querySelector(".currency-select-first-value").value;

    // Atualiza o nome e a imagem da moeda de origem
    const currencies = {
        real: { name: "Real", img: "./assets/real.png" },
        euro: { name: "Euro", img: "./assets/euro.png" },
        btc: { name: "Bitcoin", img: "./assets/bitcoin 1.png" },
        libra: { name: "Libra", img: "./assets/libra 1.png" },
        dolar: { name: "Dólar Americano", img: "./assets/dolar.png" }
    };

    firstCurrencyName.innerHTML = currencies[selectedCurrency].name;
    changeImageValue.src = currencies[selectedCurrency].img;
}

// Função para atualizar o nome da moeda e a imagem no segundo select
function updateSecondCurrency() {
    const secondCurrencyName = document.getElementById("currency-second-name");
    const changeImageValue = document.querySelector(".currency-img");
    const selectedCurrency = document.querySelector(".currency-select-second").value;

    const currencies = {
        real: { name: "Real", img: "./assets/real.png" },
        euro: { name: "Euro", img: "./assets/euro.png" },
        btc: { name: "Bitcoin", img: "./assets/bitcoin 1.png" },
        libra: { name: "Libra", img: "./assets/libra 1.png" },
        dolar: { name: "Dólar Americano", img: "./assets/dolar.png" }
    };

    secondCurrencyName.innerHTML = currencies[selectedCurrency].name;
    changeImageValue.src = currencies[selectedCurrency].img;
}
    