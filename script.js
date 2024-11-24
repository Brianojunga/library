const modal = document.querySelector(".modal");
const openbtn = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const form = document.querySelector("form");
const cardContainer = document.querySelector(".card-container")

openbtn.addEventListener("click", () =>{
    modal.showModal()
})
closeModal.addEventListener("click", () =>{
    modal.close()
})




const myLibrary = [];

function Book(author, title, pages, read) {
  this.id = Date.now()
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}



function addBookToLibrary(title, author, pages, read) {
    const Book1= new Book(title, author, pages, read);
    myLibrary.push(Book1);
}

function createCards(item, index){
    const div = document.createElement("div");
    div.classList.add("card")
    const para1 = createElements("h5", `Title: ${item.title}`);
    div.appendChild(para1)
    const para2 = createElements("p", `Author: ${item.author}`);
    div.appendChild(para2);
    const para3 = createElements("p", `Pages: ${item.pages}`);
    div.appendChild(para3)

    const buttondiv = document.createElement("div");
    div.classList.add("btndiv")

    const readbtn = createElements("button", item.read);
    readbtn.classList.add(`${item.read}`)
    buttondiv.appendChild(readbtn)

    const dltbtn = createElements("button", "Del");
    dltbtn.classList.add("delete");
    buttondiv.appendChild(dltbtn);

    div.appendChild(buttondiv)

    cardContainer.appendChild(div)


   
    readbtn.addEventListener("click", () =>{
        toggleReadBtn(readbtn)
    })
    dltbtn.addEventListener("click", () =>{
        deleteElements(index)
        alert("deleted")
    })


}



function createElements (element, text){
    const el = document.createElement(element);
    el.textContent = `${text}`;
    return el
}

function toggleReadBtn(button){
    const getClass = button.className === "read" ? "unread" : "read";
    button.className = getClass;
    button.textContent = getClass;
}
function deleteElements(index){
    myLibrary.splice(index, 1);
    cardContainer.replaceChildren();
    myLibrary.forEach(createCards)
}


 






