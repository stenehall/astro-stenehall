document.querySelector('#menu').addEventListener('click', evt => {
  document.querySelector('aside').classList.toggle('visible')
})

let options = {
  rootMargin: '0px',
  threshold: 0
}

const skills = document.querySelector('#skills')

let observer = new IntersectionObserver((evt) => {
  if(evt[0].isIntersecting) {
    skills.classList.add('visible')
  }
}, options);

observer.observe(skills)