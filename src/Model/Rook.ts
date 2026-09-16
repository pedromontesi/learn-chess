import { Piece, type Position } from './common/Piece';

export class Rook extends Piece {
  getValidMoves(): Position[] {
    const moves: Position[] = [];
    const files = 'abcdefgh';
    const currentFileIndex = files.indexOf(this.positionFile);


    const directions = [
      { df: 0, dr: 1 },
      { df: 0, dr: -1 },
      { df: 1, dr: 0 },
      { df: -1, dr: 0 },
    ];

    for (const { df, dr } of directions) {
      let fileIndex = currentFileIndex + df;
      let rank = this.positionRank + dr;

      while (fileIndex >= 0 && fileIndex < 8 && rank >= 1 && rank <= 8) {
        moves.push({ file: files[fileIndex], rank });
        fileIndex += df;
        rank += dr;
      }
    }

    return moves;
  }
}