import "./App.css";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Events from "./components/Events";
import SingleEvent from "./components/SingleEvent";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cluster from "./components/Cluster.js";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Home from "./components/Home";
import AdminMembers from "./components/AdminMembers";
import RegisterEvent from "./components/RegisterEvent";
import Resources from "./components/Resources.js";
import Clusters from "./components/Clusters.js"
import Final from "./components/Final";
import Navbar from "./components/Navbar";
import { useEffect, useState } from 'react'
import { hasAccess } from './components/Access'
import Cookies from 'js-cookie'

function App() {

  const [refresh, setrefresh] = useState(false)

  useEffect(() => {
    accessAdmin()
  }, [])


  const accessAdmin = async () => {
    let accessToken = Cookies.get("access");
    let refreshToken = Cookies.get("refresh");
    const access = await hasAccess(accessToken, refreshToken);
    if (!access) {
      console.log("You are not authorized");
    } else {
      setrefresh(true)
    }
  };
  console.log(refresh)
  return (
    <div className="App">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=RocknRoll+One&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
      </style>
      <Router>

        <Switch>
          <Route path="/home" exact>
            <Navbar />
            <Home />
          </Route>
          <Route path="/resources" exact >
            <Resources />
          </Route>

          <Route path="/events" exact>
            <Navbar />
            <Events />
          </Route>
          <Route path="/clusters" exact>
            <Navbar />  <Clusters />
          </Route>
          <Route path="/login" exact component={Login} />
          <Route path="/events/:id">
            <Navbar />  <SingleEvent />
          </Route>
          <Route path="/register/:id">
            <Navbar />  <RegisterEvent />
          </Route>
          {/* <Route path="/cluster">
            <Cluster />
          </Route> */}
          <Route path="/contact">
            <Navbar />  <Final />
          </Route>
          {refresh ?
            <Route path="/admin" exact component={Admin} /> : null
          }
          <Route path="/">
            <Redirect to="/home"></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
