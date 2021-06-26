import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Components
import Header from "./components/Header";

//screens
import HomeScreen from "./screens/HomeScreen";
import MessageScreen from "./screens/MessageScreen";

// 404
import NotFound from "./screens/NotFoundScreen";

library.add(fas);

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          {/* Message Screen */}
          <Route path="/message/:id" component={MessageScreen} />

          {/* Home Screen */}
          <Route path="/" component={HomeScreen} exact />

          {/* 404 page */}
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
