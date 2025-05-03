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


const RenderPiece = props => {
    const x_not = {'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7}
    const y_not = {'1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7}
    const x_pos = x_not[props.piece[props.piece.length-2]] * 12.5
    const y_pos = y_not[props.piece[props.piece.length-1]] * 12.5

    console.log(props.piece)
    console.log(props.type)
    console.log(x_pos)
    console.log(y_pos)

    if(props.type === 'black'){
        if(props.piece.length === 2){
            return <img src={BlackPawn} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackPawn" />;
        }

        else if(props.piece[0] === 'N'){
            return <img src={BlackKnight} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackKnight" />
        }

        else if(props.piece[0] === 'B'){
            return <img src={BlackBishop} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackBishop" />
        }

        else if(props.piece[0] === 'R'){
            return <img src={BlackRook} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackRook" />
        }

        else if(props.piece[0] === 'Q'){
            return <img src={BlackQueen} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackQueen" />
        }

        else if(props.piece[0] === 'K'){
            return <img src={BlackKing} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackKing" />
        }   
    }
    else if(props.type === 'white'){
        if(props.piece.length === 2){
            return <img src={WhitePawn} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhitePawn" />;
        }

        if(props.piece[0] === 'N'){
            return <img src={WhiteKnight} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteKnight" />
        }

        if(props.piece[0] === 'B'){
            return <img src={WhiteBishop} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteBishop" />
        }
        if(props.piece[0] === 'R'){
            return <img src={WhiteRook} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteRook" />
        }
        if(props.piece[0] === 'Q'){
            return <img src={WhiteQueen} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteQueen" />
        }
        if(props.piece[0] === 'K'){
            return <img src={WhiteKing} className="piece" style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteKing" />
        }

    }

    else {
        return null
    }
}

export default RenderPiece;