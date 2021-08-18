function createGrid(n) {
    const boxContainer = document.getElementById("box-container");
    boxContainer.style["grid-template-columns"] = `repeat(${n}, 1fr)`
    boxContainer.style["grid-template-rows"] = `repeat(${n}, 1fr)`

    const box = document.createElement("div");
    box.classList = "box"
    boxContainer.appendChild(box);

    for (let i=n**2; i>1; i--) {
        boxContainer.appendChild(box.cloneNode(true));
    }
}


createGrid(16);

const boxes = document.querySelectorAll(".box")
boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.classList = "box-hover";
    })
});

const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", () => {
    boxes.forEach(box => {
        box.classList ="box"
    })
})