const ActionType = {
    GET_ARTICLES: `GET_ARTICLES`,
    CHANGE_LOADING_STATUS: `CHANGE_LOADING_STATUS`
};

const ActionCreator = {
    getArticles: (articles) => ({
        type: ActionType.GET_ARTICLES,
        payload: articles
    }),
    changeLoadingStatus: (status) => ({
        type: ActionType.CHANGE_LOADING_STATUS,
        payload: status
    })
};

export {ActionCreator, ActionType};