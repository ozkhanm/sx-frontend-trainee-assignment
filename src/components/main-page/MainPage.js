import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

import PageHeader from "../page-header/page-header";

const MainPage = (props) => {
    const {articles, isDataLoaded} = props;

    if (isDataLoaded) {
            return (
                <React.Fragment>
                    <PageHeader/>
                    <div className="container">
                        <ul className="list">
                            {articles.map((it, index) => {
                                const date = it.time * 1000;
                                const formattedDate = `${new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : new Date(date).getDate()}.${new Date(date).getMonth() < 9 ? `0${new Date(date).getMonth() + 1}` : new Date(date).getMonth() + 1}.${new Date(date).getFullYear()}, ${new Date(date).getHours() < 10 ? `0${new Date(date).getHours()}` : new Date(date).getHours()}:${new Date(date).getMinutes() < 10 ? `0${new Date(date).getMinutes()}` : new Date(date).getMinutes()}`;
                                const additionalInfo = `by: ${it.by} | at: ${formattedDate}`;

                                return (
                                    <li key={index} className="item">                                    
                                        <div className="content-block">
                                            <Link to={`/${index}`} className="item-link">{it.title}</Link>
                                            <div>
                                                <p className="additional-content-block">{additionalInfo}</p>
                                            </div>
                                        </div>
                                        <p className="score">{it.score}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <PageHeader/>
                    <h1 className="load">Загрузка данных...</h1>
                </React.Fragment>
            );
        }
};

const mapStateToProps = (state) => ({
    articles: state.articles,
    isDataLoaded: state.isDataLoaded
});

export default connect(mapStateToProps)(MainPage);