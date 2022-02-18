import React, {useState} from "react";
import {connect} from "react-redux";

import Subcomment from "../subcomment/Subcomment";

import {getDate, createMarkup} from "../../utils";

const Comment = (props) => {
    const {comment, articleComments} = props;
    const [buttonPressed, setButtonPress] = useState(false);
    const [kidsComments, toggleKidsComments] = useState(-1);

    const getButtonElement = (comment) => {
        const id = comment.id;

        if ((!buttonPressed) && (comment.hasOwnProperty(`kids`))) {
            return <button className="comment-show-more-block" type="button" onClick={() => {
                toggleKidsComments(id);
                setButtonPress(true);
            }}>show more</button>;
        } else {
            return;
        }
    };

    const getSubcommentElement = (id) => {
        if (kidsComments === id) {
            const comments = articleComments[articleComments.findIndex((it) => it.id === id)].kids;
            
            return (
                <Subcomment comments={comments}/>
            );
        }
    };

    const getParentCommentElement = (comment) => {
        return (
            <div className="comment-item-block">
                <div className="comment-parent-block">
                    <div className="comment-item-header-block">
                        <p className="comment-item">by: {comment.by}</p>
                        <p className="comment-item">at: {getDate(comment.time)}</p>
                    </div>
                    <p className="comment-item-text" dangerouslySetInnerHTML={createMarkup(comment.text)}></p>
                </div>
                {getButtonElement(comment)}
                {getSubcommentElement(comment.id)}
            </div>
        );
    };

    if ((!comment.hasOwnProperty(`deleted`)) && (!comment.hasOwnProperty(`dead`))) {
        return getParentCommentElement(comment);
    } else {
        return null;
    }
};

const mapStateToProps = (state) => ({
    articleComments: state.articleComments,
});

export default connect(mapStateToProps)(Comment);