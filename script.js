document.getElementById("book-form").addEventListener('submit', function(e){
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    addBookToList(title, author, year);
    clearForm();
});

function addBookToList(title, author, year){
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${year}</td>
        <td><button onclick="removeBook(this)">Hapus</button></td>
    `;
 list.appendChild(row);

}

function removeBook(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function clearForm(){
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
}