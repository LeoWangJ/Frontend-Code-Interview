import { FC, Fragment } from "react";
import ProblemItem from "./ProblemItem";
import Highlight from "@/components/Highlight";
import List from "../List";
import { ProblemComponentProps } from "./types";

const Layout: FC<ProblemComponentProps> = ({ order }) => {
    const items = [
        {
            content: (
                <Fragment>
                    A header displaying
                    <strong className="mx-1">'Jedi Software'</strong> that collapses
                    when scrolling up and reappears when scrolling stops.
                </Fragment>
            )
        },
        {
            content: (
                <Fragment>
                    A collapsible menu offering redirection to the homepage and
                    <Highlight text="/find-the-cheese" />
                    .
                </Fragment>
            )
        },
    ]
    return (
        <ProblemItem title="Layout" order={order}>
            <p className="mt-1">
                For this task, your objective is to create and apply a global shared
                layout. The layout should consist of:
            </p>
            <List items={items} />
        </ProblemItem>
    )
}
export default Layout;