const calculateTip = (event) => {
    event.preventDefault();
    console.log("TESTE");
    const formData = new FormData(event.target); // esse aqui tem que colocar.
    
    // tem que pegar o que está dentro do "event" (input) e transformar em um formData
     
    //pegar o value
    const value = formData.get("value"); // valor da refeição
    // pegar o percentage
    const percentage = formData.get("percentage"); // porcentagem da gorjeta

    console.log (value, percentage); // so par fazer teste no consle

    const tagTotalValue = document.getElementById("totalvalue");
    const tagTipValue = document.getElementById("tipvalue"); //valor da gorjeta
    const tagOriginalValue = document.getElementById("originalvalue"); 

    // agora colocar os textos na tela 

    tagOrinalValue.textContent = value; //valor da refeição = valor original
    tagTipValue.textContent = 
    tagTotalValue.textContent = 

        
};

    const calculatePercentage = (value, percentage) => {
        const percentageValue
};
