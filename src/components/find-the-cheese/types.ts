export type MazeCell = 'start' | 'wall' | 'path' | 'end' | 'visited' | 'current';
export type Maze = MazeCell[][];
export enum MazeCellEnum {
    Start = 'start',
    Wall = 'wall',
    Path = 'path',
    End = 'end',
    Visited = 'visited',
    Current = 'current'
}