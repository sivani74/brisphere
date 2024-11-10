import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Discover from './components/Discover'
import Home from './components/Home'
import Services from './components/Services'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/services" component={Services} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
