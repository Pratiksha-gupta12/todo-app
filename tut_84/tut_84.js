document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault();

    let titleElement = document.getElementById("title");
    let descElement = document.getElementById("desc");

    let titleValue = titleElement.value;
    let descValue = descElement.value;

    localStorage.setItem("todo", JSON.stringify([titleValue, descValue]));
    console.log(e);
    todo.innerHTML=`
    <h1>${titleValue}</h1>
    <p>${descValue}</p>
    `

    titleElement.value=""
    descElement.value=""
});


document.getElementById("deleteBtn").addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML=""
});



