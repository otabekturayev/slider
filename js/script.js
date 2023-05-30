let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let slides = document.querySelectorAll('.slides-inner .slide')

let slideCount = 0


nextBtn.addEventListener('click', () => {
    console.log('next')
    if(slideCount >= slides.length - 1){
        slideCount = 0
    }else{
        slideCount++
    }
    
    hideSlide()
    showSlide(slideCount)
})

prevBtn.addEventListener('click', () => {
    if(slideCount <= 0){
    	slideCount = slides.length - 1
    }else{
    	slideCount--
    }
    
    hideSlide()
    showSlide(slideCount)
})

function hideSlide(){
    slides.forEach( slide => {
        slide.classList.remove('active')
    })
}

function showSlide(i = 0){
    slides[i].classList.add('active')
}

hideSlide()
showSlide()

