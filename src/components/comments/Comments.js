import React from "react";

import Comment from "../comment/Comment";

const Comments = (props) => {
    const {articleComments} = props;
    console.log(articleComments);

    const getCommentsElements = (comments) => {
        return comments.map((it) => <Comment key={it.id} comment={it}/>);
    };

    return (
        <div className="comment-block">
            {getCommentsElements(articleComments)}
        </div>
    );
};

export default Comments;