
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I’m red!";
paragraph.style.color = "red";

const header = document.createElement("h3");
header.textContent = "I’m a blue h3!";
header.style.color = "blue";

container.appendChild(paragraph);
container.appendChild(header);

const secondContainer = document.createElement("div");
secondContainer.style.backgroundColor = "pink";
secondContainer.style.borderColor = "black";

const secondHeader = document.createElement("h3");
secondHeader.textContent = "I'm a div";

const secondParagraph = document.createElement("p");
secondParagraph.textContent = "ME TOO!";

container.appendChild(secondContainer);
secondContainer.appendChild(secondHeader);
secondContainer.appendChild(secondParagraph);

const button = document.querySelector("#btn");
// button.addEventListener("click", () => {
//     alert("Hello World!");
// });

// function alertFunction(){
//     alert("Yay you did it again");
// }

button.addEventListener("click", function(e){
    console.log(e.target.style.backgroundColor = "blue");
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});

