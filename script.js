const modal = document.querySelector(".modal");
const openbtn = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal")

openbtn.addEventListener("click", () =>{
    modal.show()
})
closeModal.addEventListener("click", () =>{
    modal.close()
})

