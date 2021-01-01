import React, { useEffect, useState } from 'react';

export type IHandleGameClick = (row: number, column: number, mined: boolean) => void;

interface ICellProps {
    row: number;
    column: number;
    mined?: boolean;
    forcedOpen?: boolean;
    neighborMineCount: number;
    handleGameClick: IHandleGameClick;
}

export const Cell: React.FC<ICellProps> = ({ 
    row, 
    column, 
    mined = false, 
    neighborMineCount, 
    handleGameClick, 
    forcedOpen 
}) => {

    const [state, setState] = useState({opened: false, flagged: false});

    const handleClick = () => {
        setState({opened: true, flagged: false});
        handleGameClick(row, column, mined);
    };
    
    const handleRightClick = () => {
        if (!state.opened) {
            setState({opened: false, flagged: !state.flagged});
        }
    };
    
    useEffect(() => {
        if (forcedOpen) {
            handleClick();
        }
    }, [forcedOpen]);

    return (
        <div onClick={handleClick} onContextMenu={handleRightClick} className="cell">
            {
                state.opened 
                    ? (
                        mined 
                            ? "*" 
                            : neighborMineCount === 0
                                ? ""
                                : neighborMineCount
                    ) 
                    : ""
            }
        </div>
    );
};