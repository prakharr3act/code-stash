const accordians = document.querySelectorAll('.accordian');

accordians.forEach(accordian => {
  const icon = accordian.querySelector('.material-symbols-outlined')
  const answer = accordian.querySelector('.answer')

  accordian.addEventListener('click' ,() =>{
    icon.classList.toggle('active');
    answer.classList.toggle('active');
  })
})