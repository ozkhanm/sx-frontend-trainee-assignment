import initialState from "./initial-state";
import {ActionType, ActionCreator} from "./action-creator";

const Operation = {
    getArticles: () => (dispatch, getState, api) => {
        return api.get(`/newstories.json?print=pretty`)
            .then((response) => {
                const ids = response.data.slice(0, 100);
                
                return Promise.all(ids.map((it) => api.get(`item/${it}.json?print=pretty`)));
            })
            .then((response) => {
                const articles = response.slice().map((it) => it.data);

                dispatch(ActionCreator.getArticles(articles));
            });
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.CHANGE_LOADING_STATUS:
            return Object.assign({}, state, {
                isDataLoaded: action.payload
            });

        case ActionType.GET_ARTICLES:
            return Object.assign({}, state, {
                articles: action.payload
            });
    }

    return state;
};

export {reducer, Operation};