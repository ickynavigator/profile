import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./components/Header";

//screens
import HomeScreen from "./screens/HomeScreen";
import MessageScreen from "./screens/MessageScreen";

// 404
import NotFound from "./screens/NotFoundScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          {/* Home Screen */}
          <Route path="/message/:id" component={MessageScreen} exact />

          {/* Home Screen */}
          <Route path="/" component={HomeScreen} exact />

          {/* 404 page */}
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
