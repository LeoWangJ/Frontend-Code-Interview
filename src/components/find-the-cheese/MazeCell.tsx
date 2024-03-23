import { MazeCell, MazeCellEnum } from "@/components/find-the-cheese/types";
import { FaCheese } from "react-icons/fa";
import { LuRat } from "react-icons/lu";


export const MazeCellComponent = ({ cell }: { cell: MazeCell }) => {
    const cellStyle = (cell: MazeCell) => {
        switch (cell) {
            case MazeCellEnum.Wall:
                return 'bg-green-800';
            case MazeCellEnum.Path:
                return 'bg-lime-50';
            case MazeCellEnum.Visited:
                return 'bg-amber-200';
            default:
                return '';
        }
    };

    if (cell === MazeCellEnum.Start || cell === MazeCellEnum.Current) {
        return (
            <div className="flex bg-amber-200 h-6 w-6 justify-center items-center">
                <LuRat className="h-4 text-neutral-500 w-4 " />
            </div>
        );
    }

    if (cell === MazeCellEnum.End) {
        return (
            <div className="flex bg-lime-50 h-6 w-6 justify-center items-center">
                <FaCheese className="h-4 text-amber-400 w-4" />
            </div>
        );
    }

    return (
        <div
            className={`w-6 h-6 ${cellStyle(cell)}`}
        ></div>
    );
};
