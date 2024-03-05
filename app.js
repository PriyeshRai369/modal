let openBtn = document.getElementById('open-modal')
let modal = document.getElementById('modal')
let closeBtn = document.getElementById('close-modal')
let modalContainer = document.querySelector('.modal-container')
let clicked = false;


openBtn.addEventListener('click', function () {
    modal.classList.add('open-modal');
    modalContainer.style.backdropFilter = "blur(10px)";
    modalContainer.style.zIndex = 2;
    modalContainer.style.backgroundColor = "rgba(0, 0, 0, 0.203)";
    clicked = true;
    closeBtn.classList.add('after-click')
})

closeBtn.addEventListener('click', function () {
    modal.classList.remove('open-modal');
    modalContainer.style.backdropFilter = "none";
    modalContainer.style.zIndex = -1;
    clicked = false;
    closeBtn.classList.remove('after-click')

})
// modalContainer.addEventListener('click', function () {
//     if (clicked) {
//         modal.classList.remove('open-modal')
//         modalContainer.style.backdropFilter = "none";
//         modalContainer.style.zIndex = -1;
//         closeBtn.classList.remove('after-click')
//     }
// });
