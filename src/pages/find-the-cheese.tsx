import { Maze } from "@/components/find-the-cheese/types";
import request from "@/utils/request";
import { Mazes } from "@/components/find-the-cheese/Maze";
import { Fragment } from "react";

export async function getServerSideProps() {
    let mazes: Array<Maze> = []
    try {
        mazes = await request.get('/api/maze');
    } catch (e) {
        console.log('fetch maze error: ', e)
    }

    return {
        props: {
            mazes,
        },
    };
}

export default function FindTheCheese({ mazes }: { mazes: Array<Maze> }) {
    return (
        <main className="min-h-screen bg-amber-50 p-4">
            <div className="bg-white rounded mx-auto shadow text-center p-4">
                <h1 className="font-bold text-4xl">Find the cheese</h1>
                <p className="mt-1 text-lg">Click 'Start' to see how the mouse find the cheese by using DFS!</p>
                <section className="flex flex-col flex-wrap space-y-4 justify-center md:flex-row md:space-y-0 md:space-x-8 md:items-end">
                    {
                        mazes.map((maze, index, arr) => (
                            <Fragment key={index}>
                                <div key={index} className="w-full md:w-auto">
                                    <Mazes mazes={maze} />
                                </div>
                                {index < arr.length - 1 && (
                                    <div className="h-px bg-gray-200 my-2 w-full md:hidden"></div>
                                )}
                            </Fragment>
                        ))
                    }
                </section>
            </div>
        </main>
    );
}