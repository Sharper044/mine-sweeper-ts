import { GridFunction } from "./createGrid";

const randomNumber: (max: number) => number = max => Math.floor(Math.random() * Math.floor(max));

export const mineGrid: GridFunction = (grid, numberOfMines) => {
    const numOfRows = grid.length;
    const numOfCols = grid[0].length;
    let minesPlaced = 0;
    let randomRow = 0;
    let randomCol = 0;

    if (numberOfMines) {
        while (minesPlaced < numberOfMines) {
            randomCol = randomNumber(numOfCols);
            randomRow = randomNumber(numOfRows);
            if (!grid[randomRow][randomCol].mined) {
                grid[randomRow][randomCol].mined = true;
                minesPlaced++;
            }
        }
    }
    return grid;
};