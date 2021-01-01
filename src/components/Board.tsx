import React, { useState } from 'react';

import { Cell, IHandleGameClick } from "./Cell";

interface ICellData {
    mined: boolean;
    neighborMineCount: number;
    forcedOpen?: boolean;
}

export type IGrid = ICellData[][];

interface IForcedOpenCells {
    row: number;
    column: number;
}

interface IBoardProps {
    gridData: IGrid;
    handleGameClick: IHandleGameClick;
}

export const Board: React.FC<IBoardProps> = ({ gridData, handleGameClick }) => {
    const [forcedOpenCells, setForcedOpenCells] = useState<IForcedOpenCells[]>([]);

    forcedOpenCells.forEach((cell) => {
        gridData[cell.row][cell.column].forcedOpen = true;
    });

    return (
        <div className="board">
            {
                gridData.map((rowData, i) => (
                    <div key={i} className="row">
                        {
                            rowData.map((cellData, j) => (
                                <Cell 
                                    key={`${i}/${j}`}
                                    row={i} 
                                    column={j} 
                                    mined={cellData.mined} 
                                    forcedOpen={cellData.forcedOpen} 
                                    neighborMineCount={cellData.neighborMineCount}
                                    handleGameClick={handleGameClick}
                                />
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};