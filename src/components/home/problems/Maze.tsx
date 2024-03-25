import Highlight from "@/components/Highlight";
import ProblemItem from "./ProblemItem";
import List from "../List";
import { FC, Fragment } from "react";
import { ProblemComponentProps } from "./types";

const Maze: FC<ProblemComponentProps> = ({ order }) => {
    const noteItems = [
        {
            content: (
                <Fragment>
                    Put this page at the route
                    <Highlight text="/find-the-cheese" />
                    , and title it
                    <strong className="mx-1">'Find the cheese'.</strong>
                </Fragment>
            )
        },
        {
            content: "Add description, \"Click 'Start' to see how the mouse find the cheese by using DFS!\", below page title"
        },
        {
            content: (
                <Fragment>
                    The color of the walls is
                    <Highlight text="gray-800" />
                </Fragment>
            )
        },
        {
            content: (
                <Fragment>
                    The color of the path is
                    <Highlight text="lime-50" />
                </Fragment>
            )
        },
        {
            content: (
                <Fragment>
                    The icon of the mouse is
                    <Highlight text="LuRat" />
                    with color
                    <Highlight text="neutral-500" />
                </Fragment>
            )
        },
        {
            content: (
                <Fragment>
                    The icon of the cheese is
                    <Highlight text="FaCheese" />
                    with color
                    <Highlight text="amber-400" />
                </Fragment>
            )
        },
        {
            content: (
                <Fragment>
                    Highlight current path with color
                    <Highlight text="amber-200" />
                </Fragment>
            )
        },
        {
            content: (
                <Fragment>
                    The button has a background color of
                    <Highlight text="amber-500" />
                    , and a hover background color of
                    <Highlight text="amber-400" />.
                </Fragment>
            )
        },
        {
            content: (
                <Fragment>
                    <Highlight text="/api/maze" />
                    simulates an endpoint on another server, so you need to use axios
                    to fetch the data.
                </Fragment>
            )
        },
    ]
    return (
        <ProblemItem title="Maze" order={order}>
            <p className="mt-1">
                For this task, your objective is to implement a page where a mouse
                traverses a maze to find cheese.
            </p>
            <p className="mt-4">
                During server-side rendering, you need to hit the
                <Highlight text="/api/maze" />
                endpoint to fetch the maze map array and display all the maps along
                with their respective start buttons on the screen. When the user
                clicks the start button, the mouse on that map will begin to solve
                the maze using Depth-First Search (DFS), with each step taking 100
                ms.
            </p>
            <p className="mt-4">
                Meanwhile, the start button will disappear, replaced by a reset
                button. Clicking the reset button will stop the mouse's movement,
                reset the map to its initial state, and the reset button will be
                replaced by the start button again.
            </p>
            <p className="mt-4">
                <a
                    className="cursor-pointer font-bold mr-1 text-amber-500 underline hover:text-amber-400"
                    href="https://youtube.com/shorts/uA744cMSNK8?si=U80OGTvH3rGV17zu"
                    target="_blank"
                >
                    Click
                </a>
                to watch a demonstration of the expected behavior.
            </p>
            <p className="mt-4">Note that:</p>
            <List items={noteItems} />
        </ProblemItem>
    )
}
export default Maze;
