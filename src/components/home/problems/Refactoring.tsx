import { FC } from "react";
import ProblemItem from "./ProblemItem";
import { ProblemComponentProps } from "./types";

const Refactor: FC<ProblemComponentProps> = ({ order }) => {
    return (
        <ProblemItem title="Refactoring" order={order}>
            <p className="mt-1">
                For this task, your objective is to refactor the current page
                following your coding conventions and best practices. Look for
                opportunities to enhance code structure, eliminate redundancy,
                clarify variable names, and simplify complex logic.
            </p>
        </ProblemItem>
    );
}
export default Refactor; 