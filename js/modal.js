const portfolioContainer = document.querySelector('.portfolio__items')

portfolioContainer.addEventListener('click', e => {
    // console.log(e)
    e.preventDefault()

    const modalToggle = e.target.closest('.portfolio-link')
    // console.log(modalToggle)

    if(!modalToggle) return

    const modal = modalToggle.parentNode.nextElementSibling
    const closeButton = modal.querySelector('.modal-close')

    closeButton.addEventListener('click', _ => {
        //console.log(e)
        modal.classList.remove('is-open');
    })
    

    modal.classList.add('is-open');
})