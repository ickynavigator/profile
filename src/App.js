import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Screens
import ProjectScreen from "./screens/ProjectScreen";
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
// 404
import NotFound from "./screens/NotFoundScreen";

function App() {
  return (
    <Router>
      <Container className="d-flex align-items-center">
        <Container>
          <Header />
          <hr />
          <main>
            <Switch>
              {/* About Screen */}
              <Route path="/projects" component={ProjectScreen} exact />

              {/* About Screen */}
              <Route path="/about" component={AboutScreen} exact />

              {/* Contact Screen */}
              <Route path="/contact" component={ContactScreen} exact />

              {/* Home Screen */}
              <Route path="/" component={HomeScreen} exact />

              {/* 404 page */}
              <Route component={NotFound} />
            </Switch>
          </main>
          <hr />
          <Footer />
        </Container>
      </Container>
    </Router>
  );
}

export default App;
