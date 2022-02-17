import React from "react";

import {getDate, createMarkup} from "../../utils";

const Subcomment = (props) => {
    const {comments} = props;
    console.log(comments);

    const getSubcomments = (comments) => {
        return comments.map((it) => {
            if (it.hasOwnProperty(`kids`)) {
                if ((!it.hasOwnProperty(`deleted`)) && (!it.hasOwnProperty(`dead`))) {
                    return (
                        <div key={it.id} className="comment-item-block">
                            <div className="comment-parent-block">
                                <div className="comment-item-header-block">
                                    <p className="comment-item">by: {it.by}</p>
                                    <p className="comment-item">time: {getDate(it.time)}</p>
                                </div>
                                <p className="comment-item" dangerouslySetInnerHTML={createMarkup(it.text)}></p>
                            </div>
                            {getSubcomments(it.kids)}
                        </div>
                    );
                } else {
                    return;
                }
            } else {
                if ((!it.hasOwnProperty(`deleted`)) && (!it.hasOwnProperty(`dead`))) {
                    return (
                        <div key={it.id} className="comment-item-block">
                            <div className="comment-parent-block">
                                <div className="comment-item-header-block">
                                    <p className="comment-item">by: {it.by}</p>
                                    <p className="comment-item">time: {getDate(it.time)}</p>
                                </div>
                                <p className="comment-item" dangerouslySetInnerHTML={createMarkup(it.text)}></p>
                            </div>
                        </div>
                    );
                } else {
                    return;
                }
            }
        });
    };

    return (
        <React.Fragment>
            {getSubcomments(comments)}
        </React.Fragment>
    );
};

export default Subcomment;