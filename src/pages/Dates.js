import React from "react";
import Content from "../components/elements/Content";
import PageWrapper from "../components/elements/PageWrapper";

const Dates = () => {
    return (
        <PageWrapper>
            <Content>
                <h1>Important Dates</h1>
                <hr />
                <p><strong>Timezone</strong><br/>Anywhere in the world!</p>
                <p> <strong>Paper Submissions Due</strong><br/><del>March 21, 2024</del> April 1, 2024 (FIRM)</p>
                <p> <strong> Notification of Acceptance</strong><br/>April 9, 2024  </p>
                <p> <strong>Camera-Ready Due</strong><br/>April 17, 2024</p>
                <p> <strong>Workshop Days</strong><br/>June 3-4, 2024</p>
            </Content>
        </PageWrapper>
    );
};

export default Dates;
