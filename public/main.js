const skills = document.querySelector('#skills')
const work = document.querySelector('#work')
const fadeIn = document.querySelectorAll('[data-fade-in]')

document.querySelector('#menu').addEventListener('click', evt => {
  document.querySelector('aside').classList.toggle('visible')
})

let options = {
  rootMargin: '0px',
  threshold: 0
}

if(skills) {
  const skillsObserver = new IntersectionObserver((evt) => {
    if(evt[0].isIntersecting) {
      skills.classList.add('visible')
    }
  }, options);

  skillsObserver.observe(skills)
}

if(work) {
  const workObserver = new IntersectionObserver((evt) => {
    if(evt[0].isIntersecting) {
      document.querySelectorAll('#work img').forEach(img => {
        img.src = img.dataset.src
      })
    }
  }, options);

  workObserver.observe(work)
}

if(fadeIn) {
  const fadeInObserver = new IntersectionObserver((evts) => {
    evts.map((evt) => {
      if(evt.isIntersecting) {
        evt.target.classList.add('visible')
      } else {
        evt.target.classList.remove('visible')
      }
    })
  }, options);

  fadeIn.forEach(item => fadeInObserver.observe(item))
}