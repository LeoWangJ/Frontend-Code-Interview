import { Fragment } from "react";
import Highlight from "@/components/Highlight";
import List from "./List";



const RequirementSection = () => {
    const items = [
        {
            content: (
                <Fragment>
                    <strong>NEVER</strong> change anything in the directories named in
                    the pattern
                    <Highlight text="**/api/**" />
                </Fragment>)
        },
        { content: "Style with tailwindcss and css file." },
        {
            content: (
                <Fragment>
                    Use <Highlight text="axios" /> to fetch data
                </Fragment>)
        },
        { content: "Implement Responsive Web Design (RWD) with a breakpoint at 768px (md in tailwindcss default breakpoints)" },
        {
            content: (
                <p>
                    Submit the URL of your answer repository by
                    <strong className="mx-1">
                        23:59 on the 5th day after receiving the questions,
                    </strong>
                    and cease answering (pushing commits). For example: if you receive
                    the questions on Mar 1st, you should submit the answer by 23:59 on
                    Mar 5th.
                </p>)
        },
    ]
    return (
        <Fragment>
            <p className="mt-4">Here's the requirements for the assessment:</p>
            <List items={items}></List>
            <p className="mt-4">Good luck! Let's get started.</p>
        </Fragment>
    );
}
export default RequirementSection;