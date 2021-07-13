document.querySelector('#menu').addEventListener('click', evt => {
  document.querySelector('aside').classList.toggle('visible')
})

let options = {
  rootMargin: '0px',
  threshold: 0
}

const skills = document.querySelector('#skills')

const skillsObserver = new IntersectionObserver((evt) => {
  if(evt[0].isIntersecting) {
    skills.classList.add('visible')
  }
}, options);

skillsObserver.observe(skills)

const work = document.querySelector('#work')

const workObserver = new IntersectionObserver((evt) => {
  if(evt[0].isIntersecting) {
    document.querySelectorAll('#work img').forEach(img => {
      img.src = img.dataset.src
    })
  }
}, options);

workObserver.observe(work)