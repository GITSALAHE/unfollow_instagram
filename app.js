(() => {
    let i = 0;
    const followInterval = setInterval(() => {
        if (i >= 1000) {
            clearInterval(followInterval);
            return;
        }
        const buttons = document.querySelectorAll('button._8A5w5'); 
        const nextButton = buttons[i];
        nextButton.click();
        nextButton.scrollIntoView();
        setTimeout(() => {
            let confirmUnfollowB = document.querySelector('.aOOlW.-Cab_'); 
            confirmUnfollowB.click();
        }, 1000);  
    }, 5000);
})();
