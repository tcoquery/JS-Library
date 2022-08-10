let myLibrary = [];
const library = document.querySelector(".library");
const thead = document.querySelector(".thead");
const tbody = document.querySelector(".tbody");
const btn = document.querySelector("#btn");
const remove = document.querySelector(".remove");

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function showBooks() {  
    library.textContent = "";
    const row = document.createElement("tr");
    const title = document.createElement("td");
    const author = document.createElement("td");
    const pages = document.createElement("td");
    const read = document.createElement("td");
    row.classList.add("first-row");
    title.textContent = "Title";
    author.textContent = "Author";
    pages.textContent = "Pages";
    read.textContent = "Read";
    library.appendChild(row)
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(read);    
    for (let i = 0; i < myLibrary.length ; i++) {
        const newRow = document.createElement("tr");
        const newTitle = document.createElement("td");
        const newAuthor = document.createElement("td");
        const newPages = document.createElement("td");
        const newRead = document.createElement("button");
        const button = document.createElement("button");
        newTitle.textContent = myLibrary[i].title;
        newAuthor.textContent = myLibrary[i].author;
        newPages.textContent = myLibrary[i].pages;
        newRead.textContent = myLibrary[i].read;
        button.textContent = "Remove";
        button.classList.add("remove")
        if(myLibrary[i].read == "yes") {
            newRead.classList.add("read")
        } else { 
            newRead.classList.add("unread")
        }
        button.dataset.indexNumber = i;
        newRead.dataset.indexNumber = i;
        library.appendChild(newRow)
        newRow.appendChild(newTitle);
        newRow.appendChild(newAuthor);
        newRow.appendChild(newPages);
        newRow.appendChild(newRead);
        newRow.appendChild(button);
    }
    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach(button =>{
        button.addEventListener("click", function(){
            let i = button.dataset.indexNumber;
            myLibrary.splice(i, 1)
            showBooks();
            });
        })
    const readButtons = document.querySelectorAll(".read, .unread");
    readButtons.forEach(button =>{
        button.addEventListener("click", function(){
            let i = button.dataset.indexNumber;
            if(myLibrary[i].read == "yes") {
                button.textContent = "no"
                myLibrary[i].read = "no"
                button.classList.add("unread")
                button.classList.remove("read")
            } else { 
                button.textContent = "yes"
                myLibrary[i].read = "yes"
                button.classList.add("read")
                button.classList.remove("unread")
            }
            });
        })
    }

btn.addEventListener("click", () => {
    const t = document.getElementById('title').value 
    const a = document.getElementById('author').value 
    const p = document.getElementById('pages').value 
    let r = document.getElementById('status').checked 
    if(r == true) {
        r = "yes"
        addBookToLibrary(t,a,p,r)
    } else {
        r = "no"
        addBookToLibrary(t,a,p,r)
    }
    showBooks();
});


