let birgar = document.querySelector('.birgar')
let  navList = document.querySelector('.nav-list')
let navbar = document.querySelector('.navbar')

birgar.addEventListener('click',()=>{
    navList.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');   
})
//equipment part//
  const trigger1 = document.querySelector('.mod1');
  const trigger2 = document.querySelector('.mod2');
  const trigger3 = document.querySelector('.mod3');
  const trigger4 = document.querySelector('.mod4');
  const modalWrapper1 = document.querySelector('.modwrapp1');
  const modalWrapper2 = document.querySelector('.modwrapp2');
  const modalWrapper3 = document.querySelector('.modwrapp3');
  const modalWrapper4 = document.querySelector('.modwrapp4');
  const modalWrapper = document.querySelector('.modal__wrapper');
  const closeBtn = document.querySelector('.close');

  trigger1.addEventListener('click', function(){
      modalWrapper1.classList.add('active');

  });
  trigger2.addEventListener('click', function(){
      modalWrapper2.classList.add('active');
  });
  trigger3.addEventListener('click', function(){
      modalWrapper3.classList.add('active');
  });
  trigger4.addEventListener('click', function(){
      modalWrapper4.classList.add('active');
  });

  closeBtn.addEventListener('click', function(){
      closeModal();
 });

  function closeModal() {
      modalWrapper.classList.remove('active');
  }