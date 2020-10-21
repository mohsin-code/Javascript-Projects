function changeBg() {
    let hexChar = [{ q : "Tomorrow is mystery, yesterday was history but today is a gift. That's why its called a present.", p : "Master Ugwe" } , 
                    { q : "Qurrrote", p : "Markis" } , 
                    { q : "Quotdddde", p : "Markus"} ];
    
    let index = parseInt(Math.random() * hexChar.length);
    
    quote = hexChar[index].q
    auther = hexChar[index].p

    document.getElementsByTagName("h3")[0].innerText = quote;
    document.getElementsByTagName("em")[0].innerText = auther;  
}
