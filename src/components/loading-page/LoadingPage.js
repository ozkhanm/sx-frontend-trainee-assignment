import React from "react";

import PageHeader from "../page-header/PageHeader";

const LoadingPage = () => {
    return (
        <React.Fragment>
            <PageHeader/>
            <h1 className="load">Загрузка данных...</h1>
        </React.Fragment>
    );
};

export default LoadingPage;