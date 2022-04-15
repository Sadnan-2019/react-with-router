// import logo from './logo.svg';
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
// import Home from './components/Home/Home';
// import Friends from './components/Friends/Friends';
// import About from './components/About/About';
import {} from "react-bootstrap";
import Friends from "./components/Friends/Friends";
import About from "./components/About/About";
import Error from "./components/Error/Error";
import Header from "./components/Header/Header";
import FriendsDetails from "./components/FriendsDetails/FriendsDetails";
import Posts from "./components/Posts/Posts";
import PostDetails from "./components/PostDetails/PostDetails";
import Countries from "./components/Countries/Countries";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import CountryMoreDetails from "./components/CountryMoreDetails/CountryMoreDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="text-primary">React Router</h1>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/friends" element={<Friends />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/posts" element={<Posts />}>
          <Route path=":postId" element={<PostDetails />}></Route>
        </Route>
        <Route path="/friend/:friendId" element={<FriendsDetails />}></Route>
        <Route path="/countries" element={<Countries></Countries>}></Route>
        <Route path="/country/:countryName" element={<CountryDetails/>}></Route>
        <Route path="/country-details/:countryDetails" element={<CountryMoreDetails/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
