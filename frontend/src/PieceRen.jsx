import React from 'react';
import WhitePawn from './assets/whitepawn.png';
import WhiteKnight from './assets/whiteknight.png';
import WhiteBishop from './assets/whitebishop.png';
import WhiteRook from './assets/whiterook.png';
import WhiteQueen from './assets/whitequeen.png';
import WhiteKing from './assets/whiteking.png';
import BlackPawn from './assets/blackpawn.png';
import BlackKnight from './assets/blackknight.png';
import BlackBishop from './assets/blackbishop.png';
import BlackRook from './assets/blackrook.png';
import BlackQueen from './assets/blackqueen.png';
import BlackKing from './assets/blackking.png';


const PieceRen = props => {
    const x_not = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7}
    const y_not = {'1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7}
    const x_pos = x_not[props.position[0]] * 12.5
    const y_pos = y_not[props.position[1]] * 12.5

    if(props.type === 'WhitePawn') {
        return (
            <img src={WhitePawn} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhitePawn" />
        )
    }
    if(props.type === 'WhiteKnight') {
        return (
            <img src={WhiteKnight} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteKnight" />
        )
    }
    if(props.type === 'WhiteBishop') {
        return (
            <img src={WhiteBishop} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteBishop" />
        )
    }
    if(props.type === 'WhiteRook') {
        return (
            <img src={WhiteRook} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteRook" />
        )
    }
    if(props.type === 'WhiteQueen') {
        return (
            <img src={WhiteQueen} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteQueen" />
        )
    }
    if(props.type === 'WhiteKing') {
        return (
            <img src={WhiteKing} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteKing" />
        )
    }
    if(props.type === 'BlackPawn') {
        return (
            <img src={BlackPawn} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackPawn" />
        )
    }
    if(props.type === 'BlackKnight') {
        return (
            <img src={BlackKnight} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackKnight" />
        )
    }
    if(props.type === 'BlackBishop') {
        return (
            <img src={BlackBishop} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackBishop" />
        )
    }
    if(props.type === 'BlackRook') {
        return (
            <img src={BlackRook} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackRook" />
        )
    }
    if(props.type === 'BlackQueen') {
        return (
            <img src={BlackQueen} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackQueen" />
        )
    }
    if(props.type === 'BlackKing') {
        return (
            <img src={BlackKing} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackKing" />
        )
    }
    
    return null;
}

export default PieceRen;