import {Router, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";

import MainPage from "./components/main-page/MainPage";
import ArticlePage from "./components/article-page/ArticlePage";

import history from "./history";
import {ActionCreator} from "./reducer/action-creator";
import {Operation} from "./reducer/reducer";

const App = (props) => {
  const {changeActiveArticleId, getActiveArticle, getArticles} = props;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => {
          getArticles();

          return <MainPage/>;
        }}>
        </Route>
        <Route exact strict path="/:id" render={(renderProps) => {
          const articleId = parseInt(renderProps.match.params.id, 10);

          changeActiveArticleId(articleId);
          getActiveArticle(articleId);

          return <ArticlePage/>;
        }}>
        </Route>
      </Switch>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeActiveArticleId(articleId) {
      dispatch(ActionCreator.changeActiveArticleId(articleId));
  },
  getActiveArticle(articleId) {
    dispatch(Operation.getActiveArticle(articleId));
  },
  getArticles() {
    dispatch(Operation.getArticles());
  }
});

export default connect(null, mapDispatchToProps)(App);
