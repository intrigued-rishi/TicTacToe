import React from 'react'
import Square from './square'

function retSquare(i,arr,func){
    return(
        <Square value={arr[i]} handleClick={func} ind={i} />
    );
}

export default function Board(props){
    return(
        <div>
            <div className="board-row">
                {retSquare(0,props.squares,props.handleClick)}
                {retSquare(1,props.squares,props.handleClick)}
                {retSquare(2,props.squares,props.handleClick)}
            </div>

            <div className="board-row">
                {retSquare(3,props.squares,props.handleClick)}
                {retSquare(4,props.squares,props.handleClick)}
                {retSquare(5,props.squares,props.handleClick)}
            </div>

            <div className="board-row">
                {retSquare(6,props.squares,props.handleClick)}
                {retSquare(7,props.squares,props.handleClick)}
                {retSquare(8,props.squares,props.handleClick)}
            </div>
        </div>    
    )
}