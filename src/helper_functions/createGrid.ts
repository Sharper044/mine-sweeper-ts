import { IGrid } from "../components/Board";

export type GridFunction = (grid: IGrid, optionalNumParam?: number) => IGrid;
export type GridCreator = (rows: number, columns: number) => IGrid;

export const createGrid: GridCreator = (rows, columns) => {
    const grid: IGrid = [];

    for (let i = 0; i < rows; i++) {
        grid.push([]);
        for (let j = 0; j < columns; j++) {
            grid[i].push({
                mined: false,
                neighborMineCount: 0,
            });
        }
    }

    return grid;
};