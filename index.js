const calculateTip = (event) => {
    event.preventDefault();
    console.log("TESTE");
    const formData = new FormData(event.target); // esse aqui tem que colocar.
    
    // tem que pegar o que está dentro do "event" (input) e transformar em um formData
     
    //pegar o value
    const value = formData.get("value"); // valor da refeição
    // pegar o percentage
    const percentage = formData.get("percentage"); // porcentagem da gorjeta
    const percentageValue = calculatePercentage(value,percentage)

    console.log (value, percentage); // so par fazer teste no consle

    //criando os elementos

    const tagTotalValue = document.getElementById("totalvalue"); //valor da refeição = valor da refeição + gorjeta
    const tagTipValue = document.getElementById("tipvalue"); //valor da gorjeta
    const tagOriginalValue = document.getElementById("originalvalue"); //valor da refeição

    // agora colocar os textos na tela 

    tagOriginalValue.textContent = value + "R$"; //valor da refeição 
    tagTipValue.textContent = percentageValue + "R$"       // valor da gorjeta
    tagTotalValue.textContent = `${Number(value) + percentageValue}` + "R$" //valor da refeição + gorjeta
    

        
};

    const calculatePercentage = (value, percentage) => {
        const percentageValue = (value/100)*percentage;
        return percentageValue;
};
