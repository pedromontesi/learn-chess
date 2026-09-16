export type Color = 'white' | 'black';

export interface Position {
  file: string; 
  rank: number; 
}

export abstract class Piece {
  private file: string;
  private rank: number;
  private color: Color;

 constructor(position: Position, color: Color) {
  this.file = position.file;
  this.rank = position.rank;
  this.color = color;
}

  get positionFile(): string {
    return this.file;
  }

  set positionFile(value: string) {
    this.file = value;
  }

  get positionRank(): number {
    return this.rank;
  }

  set positionRank(value: number) {
    this.rank = value;
  }

  get pieceColor(): Color {
    return this.color;
  }

  abstract getValidMoves(): Position[];
}