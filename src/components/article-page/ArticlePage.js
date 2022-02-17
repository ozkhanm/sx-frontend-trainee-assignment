import React from "react";
import {connect} from "react-redux";

import PageHeader from "../page-header/PageHeader";
import LoadingPage from "../loading-page/LoadingPage";
import Comments from "../comments/Comments";
import ErrorPage from "../error-page/ErrorPage";

import {getDate} from "../../utils";

const ArticlePage = (props) => {
    const {activeArticle, articleComments, isCommentLoaded, isActiveArticleLoaded} = props;

    if (isActiveArticleLoaded && isCommentLoaded) {
        return (
            <React.Fragment>
                <PageHeader/>
                <div className="item-container">
                    <h1>{activeArticle.title} {activeArticle.url ? <a href={activeArticle.url} className="article-data">({activeArticle.url})</a> : ``}</h1>
                    <div className="article-data-block">
                        <p className="article-data">by: {activeArticle.by},</p>
                        <p className="article-data">posted: {getDate(activeArticle.time)},</p>
                        <p className="article-data">comments: {activeArticle.descendants}</p>
                    </div>
                    <hr/>
                    <Comments articleComments={articleComments}/>
                </div>
            </React.Fragment>
        );
    } else if (activeArticle === -1) {
        return <ErrorPage/>;
    } else {
        return <LoadingPage/>;
    }
};

const mapStateToProps = (state) => ({
    activeArticle: state.activeArticle,
    articleComments: state.articleComments,
    isCommentLoaded: state.isCommentLoaded,
    isActiveArticleLoaded: state.isActiveArticleLoaded
});

export default connect(mapStateToProps)(ArticlePage);