let sizeofGrid = 16;
const resetButton = document.querySelector('button');
const container = document.querySelector('.container');

const createGrid = (amtofGrids) => {
    //create for loop to create rows left to right
    for (let i = 0; i < amtofGrids; i++) {
        const row = document.createElement("div");
        row.classList.add("grid-row");

        //loop for columns in one row; finish loop before returning to outer loop
        for (let j = 0; j < amtofGrids; j++) {
            const gridBox = document.createElement("div");
            gridBox.classList.add("grid-box");
            row.appendChild(gridBox);
        }
        
        //append finished row to container
        container.appendChild(row); 
    }
}

createGrid(sizeofGrid);