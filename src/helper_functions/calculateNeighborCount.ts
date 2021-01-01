import { GridFunction } from "./createGrid";

export const calculateNeighborCount: GridFunction = grid => {
    let count = 0;

    grid.map((row, i) => {
        row.map((cell, j) => {
            if (grid[i - 1]) {
                count = grid[i - 1][j - 1] ? (grid[i - 1][j - 1].mined ? count + 1 : count) : count;
                count = grid[i - 1][j].mined ? count + 1 : count;
                count = grid[i - 1][j + 1] ? (grid[i - 1][j + 1].mined ? count + 1 : count) : count;
            }
            count = grid[i][j - 1] ? (grid[i][j - 1].mined ? count + 1 : count) : count;
            count = grid[i][j + 1] ? (grid[i][j + 1].mined ? count + 1 : count) : count;
            if (grid[i + 1]) {
                count = grid[i + 1][j - 1] ? (grid[i + 1][j - 1].mined ? count + 1 : count) : count;
                count = grid[i + 1][j].mined ? count + 1 : count;
                count = grid[i + 1][j + 1] ? (grid[i + 1][j + 1].mined ? count + 1 : count) : count;
            }

            cell.neighborMineCount = count;
            count = 0;
        });
    });

    return grid;
};