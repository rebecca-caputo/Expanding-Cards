const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')               // add a specific class of active
    })
})

function removeActiveClasses () {
    panels.forEach(panel => {
        panel.classList.remove('active')

    })
}