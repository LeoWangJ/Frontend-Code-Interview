import { Fragment } from "react";

const IntroSection = () => {
    return (
        <Fragment>
            <p className="mt-6">
                Welcome to our frontend engineer assessment! This test is designed to
                evaluate your frontend development skills and related knowledge.
            </p>
            <p className="mt-4">
                Please read each question carefully and imagine them as typical work
                tasks. Respond in the same manner you would during your regular work.
            </p>
            <p className="mt-4">
                You can create any folders, ts/tsx/css files you need at any position
                that you think is appropriate.
            </p>
        </Fragment>
    )
};
export default IntroSection;