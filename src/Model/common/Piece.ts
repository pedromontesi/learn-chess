export type Color = 'white' | 'black';

export interface Position {
  file: string; // coluna: 'a' até 'h'
  rank: number; // linha: 1 até 8
}

export abstract class Piece {
  private file: string;
  private rank: number;
  private color: Color;

  constructor(file: string, rank: number, color: Color) {
    this.file = file;
    this.rank = rank;
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