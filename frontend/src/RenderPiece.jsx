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

    // console.log(props.player, props.type, props.piece)
    const blackClass = (props.player === props.type ? 'playPiece' : 'oppPiece')
    const whiteClass = (props.player === props.type ? 'playPiece' : 'oppPiece')
    let pieceClass = (props.type === 'black' ? blackClass : whiteClass)

    // console.log(blackClass, whiteClass, pieceClass )
    

    const x_not =  (props.player === 'black') ? ({'a': 7, 'b': 6, 'c': 5, 'd': 4, 'e': 3, 'f': 2, 'g': 1, 'h': 0}) :
    ({'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7})
    
    const y_not = (props.player === 'black') ? ({'1': 7, '2': 6, '3': 5, '4': 4, '5': 3, '6': 2, '7': 1, '8': 0}) :
    ({'1': 0, '2': 1, '3': 2, '4': 3, '5': 4, '6': 5, '7': 6, '8': 7})

    
    // console.log(x_not, y_not)
    const x_pos = (x_not[props.piece[props.piece.length-2]] * 12.5)
    const y_pos = (y_not[props.piece[props.piece.length-1]] * 12.5)

    const handleSelect = () => {
        if (props.type === props.player) props.setSelection(props.piece);
        else null;
    }

    if(props.selection === props.piece) pieceClass = 'selectPiece';

    if(props.type === 'black'){
        if(props.piece.length === 2){
            return <img src={BlackPawn} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackPawn" />;
        }

        else if(props.piece[0] === 'N'){
            return <img src={BlackKnight} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackKnight" />
        }

        else if(props.piece[0] === 'B'){
            return <img src={BlackBishop} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackBishop" />
        }

        else if(props.piece[0] === 'R'){
            return <img src={BlackRook} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackRook" />
        }

        else if(props.piece[0] === 'Q'){
            return <img src={BlackQueen} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackQueen" />
        }

        else if(props.piece[0] === 'K'){
            return <img src={BlackKing} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="BlackKing" />
        }   
    }
    else if(props.type === 'white'){
        if(props.piece.length === 2){
            return <img src={WhitePawn} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhitePawn" />;
        }

        if(props.piece[0] === 'N'){
            return <img src={WhiteKnight} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteKnight" />
        }

        if(props.piece[0] === 'B'){
            return <img src={WhiteBishop} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteBishop" />
        }
        if(props.piece[0] === 'R'){
            return <img src={WhiteRook} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteRook" />
        }
        if(props.piece[0] === 'Q'){
            return <img src={WhiteQueen} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteQueen" />
        }
        if(props.piece[0] === 'K'){
            return <img src={WhiteKing} className={pieceClass} onClick={handleSelect} style={{ bottom:`${y_pos}%` , left : `${x_pos}%`}} alt="WhiteKing" />
        }

    }

    else {
        return null
    }
}

export default RenderPiece;