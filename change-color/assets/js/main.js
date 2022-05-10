(function(){
    const red = document.getElementById('input-r');
    const green = document.getElementById('input-g');
    const blue = document.getElementById('input-b');
    const btnChange = document.getElementById('btnChange');
    const bgColor = document.getElementById('container');
    const bodyBgColor = document.querySelector('body');
    let valueR = document.getElementById('value-r');
    let valueG = document.getElementById('value-g');
    let valueB = document.getElementById('value-b');

    
    btnChange.addEventListener('click', () =>{
        bgColor.style.backgroundColor = (`rgb(${red.value}, ${green.value}, ${blue.value})`);
        bodyBgColor.style.backgroundColor = (`rgb(${red.value}, ${green.value}, ${blue.value}, ${0.5})`);
        valueR.innerHTML = `R: ${red.value}`;
        valueG.innerHTML = `G: ${green.value}`;
        valueB.innerHTML = `B: ${blue.value}`; 
    })
    
})()