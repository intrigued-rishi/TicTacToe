import React from 'react'
import Board from './board'

export default class Game extends React.Component{
    constructor(){
        super();
        this.state = {
            flag:true,
            stepNumber:0,
            arrangement:Array(9).fill(null)
        }
    }
    checkWinner(i,squares,curr){
        let t = i;
        var res = true;
        /* checking the vertical matching */
        do{
            t=(t+3)%9;
            if(squares[t]!==curr)res=false;
        }while(t!==i);
        if(res===true){
            return true;
        }
        /*  */
        res=true;
        let p=parseInt(i/3);
        t=i;

        /* checking the horizontal matching */
        do{
            t=(t+1)%3;
            t=p*3+t;
            if(squares[t]!==curr)res=false;
        }while(t!==i);
        /* */
        if(res===true)return true;
        if(squares[0]===curr&&squares[4]===curr&&squares[8]===curr)return true;   //for checking one diagonal
        if(squares[2]===curr&&squares[4]===curr&&squares[6]===curr)return true;   //for checking 2nd diagonal
    }
    handleClick=(i)=>{
        if(this.state.arrangement[i]){
            alert("Box Already Filled!");
            return;
        }
        var current = this.state.arrangement;
        current[i] = this.state.flag? 'X' : '0';
        var number = this.state.stepNumber + 1;
        var newFlag = !this.state.flag;
        var decide = this.checkWinner(i,current,current[i]);
        this.setState((state)=>{
            return {
                arrangement:current,
                stepNumber:number,
                flag:newFlag
            }
        });
        if(number == 9 && !decide){
            setTimeout(()=>{
                alert("Game Drawn!");
                this.setState((state)=>{
                    return{
                        arrangement:[],
                        stepNumber:0,
                        flag:true
                    }
                });
            },0);
        }
        if(decide){
            setTimeout(()=>{
                alert("You are the fucking winner!!!");
            },0);
            setTimeout(()=>{
                this.setState((state)=>{
                    return{
                        arrangement:[],
                        stepNumber:0,
                        flag:true
                    }
                });
            },1000);
        }
    }

    render(){
        var squares = this.state.arrangement;
        return(
            <div className="game">
                <div className="game-board">
                    <Board handleClick={this.handleClick} squares={squares}/>
                </div>
            </div>
        )
    }
}