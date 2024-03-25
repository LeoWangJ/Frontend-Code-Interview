import React, { Fragment, ComponentType } from "react";
import Refactoring from "./problems/Refactoring";
import Maze from "./problems/Maze";
import Layout from "./problems/Layout";
import { ProblemComponentProps } from "./problems/types";

interface ProblemItemsProps {
    name: ComponentType<ProblemComponentProps>;
}
const ProblemSection = () => {
    const problemItems: ProblemItemsProps[] = [
        { name: Refactoring },
        { name: Maze },
        { name: Layout },
    ];

    return (
        <Fragment>
            {problemItems.map((item, index) => {
                const Component = item.name;
                return <Component order={index + 1} key={index} />;
            })}
        </Fragment>
    );
}

export default ProblemSection;
