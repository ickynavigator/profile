import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
// Screens
import HomeScreen from "./screens/HomeScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <main>
          <Switch>
            {/* About Screen */}
            <Route path="/about" component={HomeScreen} />

            {/* Contact Screen */}
            <Route path="/contact" component={ContactScreen} />

            {/* Home Screen */}
            <Route path="/" component={AboutScreen} />

            {/* 404 pages */}
            {/* <Route component={NotFound} /> */}
          </Switch>
        </main>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
