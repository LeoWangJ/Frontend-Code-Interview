import { Maze, MazeCellEnum } from "@/components/find-the-cheese/types";
import { useRef, useState } from "react";
import { MazeCellComponent } from "./MazeCell";


export const Mazes = ({ mazes }: { mazes: Maze }) => {
    const initialMaze = JSON.parse(JSON.stringify(mazes));
    const [maze, setMaze] = useState<Maze>(mazes);
    const shouldRunningMaze = useRef(false);
    const getStartLocation = (maze: Maze): [number, number] => {
        for (let i = 0; i < maze.length; i++) {
            for (let j = 0; j < maze[0].length; j++) {
                if (maze[i][j] === MazeCellEnum.Start) {
                    return [i, j];
                }
            }
        }
        return [0, 0]
    }

    const dfs = async (x: number, y: number, prevPosition: [number, number], map: Maze) => {

        if (!shouldRunningMaze.current) {
            return await new Promise((_, reject) => {
                reject('reset')
            })
        }

        if (x < 0 || x >= map.length || y < 0 || y >= map[0].length || map[x][y] === MazeCellEnum.Wall || map[x][y] === MazeCellEnum.Visited || map[x][y] === MazeCellEnum.Current) {
            return false;
        }

        const [prevX, prevY] = prevPosition;

        if (map[x][y] === MazeCellEnum.End) {
            map[x][y] = MazeCellEnum.Current;
            if (prevPosition) {
                map[prevX][prevY] = MazeCellEnum.Visited;
            }
            setMaze([...map]);
            return true;
        }

        map[prevX][prevY] = MazeCellEnum.Visited;
        map[x][y] = MazeCellEnum.Current;
        setMaze([...map]);
        await new Promise(resolve => setTimeout(resolve, 100));

        const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
        for (const [dx, dy] of directions) {
            if (await dfs(x + dx, y + dy, [x, y], map)) {
                return true;
            }
        }

        map[prevX][prevY] = MazeCellEnum.Current;
        map[x][y] = MazeCellEnum.Path;
        setMaze([...map]);
        await new Promise(resolve => setTimeout(resolve, 100));

        return false;
    };

    async function runMaze() {
        shouldRunningMaze.current = true;
        const startLocation = getStartLocation(initialMaze);
        setMaze(initialMaze);
        try {
            await dfs(startLocation[0], startLocation[1], startLocation, JSON.parse(JSON.stringify(initialMaze)));
        } catch (e) {
            // 避免回朔時資料未重置
            setMaze(initialMaze);
        }
    }

    function resetMaze() {
        shouldRunningMaze.current = false;
        setMaze(initialMaze);
    }



    return (
        <div className="flex flex-col my-6 w-full items-center">
            {maze.map((row, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {row.map((cell, cellIndex) => (
                        <MazeCellComponent key={cellIndex} cell={cell} />
                    ))}
                </div>
            ))}
            <button className="rounded bg-amber-500 mt-4  text-lg w-full py-1 hover:bg-amber-400" onClick={shouldRunningMaze.current ? resetMaze : runMaze}>{shouldRunningMaze.current ? `Reset` : `Start`}</button>
        </div>
    );
}

