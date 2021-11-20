function createGrid(n) {
    const boxContainer = document.getElementById("box-container");
    boxContainer.style["grid-template-columns"] = `repeat(${n}, 1fr)`
    boxContainer.style["grid-template-rows"] = `repeat(${n}, 1fr)`

    const box = document.createElement("div");
    box.classList = "box"
    
    boxContainer.innerHTML = "";
    for (let i=n**2; i>1; i--) {
        boxContainer.appendChild(box.cloneNode(true));
    }
}

game(16);
const slider = document.getElementById("grid-size");
slider.addEventListener("change", () => {
    console.log(slider.value);
    game(slider.value);
})

function game(gridSize) {
    createGrid(gridSize)
    const boxes = document.querySelectorAll(".box")
    boxes.forEach(box => {
        box.addEventListener("mouseenter", () => {
            console.log("hover")
            box.classList = "box-hover";
        })
    });
    
    const resetButton = document.getElementById("reset")
    resetButton.addEventListener("click", () => {
        boxes.forEach(box => {
            box.classList ="box";
        })
    })
    
    const saveButton = document.getElementById("save")
    saveButton.addEventListener("click", () => {
        let container = document.getElementById("box-container")
    
        html2canvas(container).then(
            function (canvas) {
                document.getElementById("screenshots").prepend(canvas);
            }
        )
    })
}