let sizeofGrid = 16;
const resetButton = document.querySelector('button');
const container = document.querySelector('.container');

const createGrid = (amtofGrids) => {
    //create for loop to create rows left to right
    for (let i = 0; i < amtofGrids; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        //loop for columns in one row; finish loop before returning to outer loop
        for (let j = 0; j < amtofGrids; j++) {
            const widthAndHeight = 960 / sizeofGrid; //changes grid dynamically based of sizeofGrid
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;

            gridBox.addEventListener('mouseover', () => {
                gridBox.style.backgroundColor = 'black';
            });
            
            row.appendChild(gridBox);
        }
        
        //append finished row to container
        container.appendChild(row); 
    }
}

createGrid(sizeofGrid);

resetButton.addEventListener('click', () => {
    let userSize = Number(prompt('What dimensions do you want for the new grid'));

    while (userSize > 100) {
        userSize = Number(prompt('Enter a number less than 100'));
    }

    container.innerHTML = '';
    createGrid(userSize);
});

