import React, { useState } from "react"
import Square from "./Square"


const Board =()=>{
    const [columns, setColumns]= useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn]= useState(true);
    const checkWinner=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for (let logic of winnerLogic){
            const[a,b,c] = logic;
            if (columns[a] !==null && columns[a]===columns[b] && columns[a]===columns[c]){
                return columns[a];
            }
        }
        return false;
    };
    const isWinner = checkWinner();
    const handleClick =(index)=>{
        if(columns[index] !=null){
            return;
        }
        const copyState = [...columns];
        copyState[index]=isXTurn ? "X": "O";
        setColumns(copyState);
        setIsXTurn(!isXTurn);
    };
    const handleReset=()=>{
        setColumns(Array(9).fill(null));
    };
    return(
        <div className="board-container">
            {isWinner ? (
                <>
                <div className="won-text text-center justify-content-center p-5">
                {isWinner} won the game{" "}<br/>
                <button onClick={handleReset} className="m-3 btn btn-success rounded-0">Play Again </button>
                </div></>
            ):(
                <>
                <h4 className="text-center p-5">Player {isXTurn ? "X" : "O" } please move </h4>
                 <div className="board-row">
                <Square onClick={()=> handleClick(0)} value={columns[0]}/>
                <Square onClick={()=> handleClick(1)} value={columns[1]}/>
                <Square onClick={()=> handleClick(2)} value={columns[2]}/>
               
            </div>
            <div className="board-row">
            <Square onClick={()=> handleClick(3)} value={columns[3]}/>
            <Square onClick={()=> handleClick(4)} value={columns[4]}/>
            <Square onClick={()=> handleClick(5)} value={columns[5]}/>
            </div>
            <div className="board-row">
            <Square onClick={()=> handleClick(6)} value={columns[6]}/>
            <Square onClick={()=> handleClick(7)} value={columns[7]}/>
            <Square onClick={()=> handleClick(8)} value={columns[8]}/>
            </div>
                </>
            
            )}
           
        </div>
    )
}
export default Board;