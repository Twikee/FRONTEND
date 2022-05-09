const textP = document.getElementById('text');
const btnAdd = document.getElementById('add');
const btnDecrement = document.getElementById('decrement');

(() => {
    let count = 0;
    
    btnAdd.addEventListener('click', () => {
        count++;
        textP.innerHTML = count;
    });

    btnDecrement.addEventListener('click', () => {
        count--;
        textP.innerHTML = count;
    });

})();


    
    
