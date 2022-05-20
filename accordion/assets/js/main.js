let acc = document.querySelectorAll('.accordion');

// for(let i = 0; i < acc.length; i++){
//      acc.item(i).addEventListener('click', () => {
//          this.classList.toggle('active');

//         let panel = this.nextElementSibling;
//         if(panel.style.display === 'block'){
//             panel.style.display = 'none';
//         }else{
//             panel.style.display = 'block';
//         }
//     })
// }

acc.forEach(acc => {
    acc.addEventListener('click', () => {
      acc.classList.toggle('active');

      let panel = acc.nextElementSibling;
    //   console.log(panel);
      if(panel.style.display === 'block'){
          panel.style.display = 'none';
      }else{
          panel.style.display = 'block';
      }
     })
  })
