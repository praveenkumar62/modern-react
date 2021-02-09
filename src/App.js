import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Blog from './Components/Blog';
import BlogPost from './Components/BlogPost';
import Create from './Components/Create';
import NotFound from './Components/NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/create' component={Create} />
        <Route path='/blog' component={Blog} />
        <Route path='/blogs/:id' component={BlogPost} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
