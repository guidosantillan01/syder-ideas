import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from 'components/App'
import AddIdea from 'components/Ideas/AddIdea'
import NotFoundPage from 'components/NotFoundPage'
import Done from 'components/Done'
import Dashboard from 'components/Dashboard'
import AddIdeaDescription from 'components/Ideas/AddIdeaDescription'
import Content from 'components/Content'
import IdeaFeaturesEdit from 'components/Menu/IdeaFeaturesEdit'
import Categories from 'components/Categories'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' component={App} exact />
        <Route path='/create' component={AddIdea} exact/>
        <Route path='/create/:id' component={AddIdeaDescription} />
        <Route path='/idea/:id' component={Content} />
        <Route path='/edit/:option/:id' component={IdeaFeaturesEdit} />
        
        <Route path='/done' component={Done} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/categories' component={Categories} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  </Provider>
)

// Solution to that root problem
// https://stackoverflow.com/questions/44673079/cannot-read-property-query-of-null-in-react-js/44674408#44674408
// https://stackoverflow.com/questions/52684017/react-router-v4-nested-match-params-not-accessible-at-root-level
// https://codedaily.io/tutorials/48/Use-matchPath-to-Match-Nested-Route-Paths-in-Parent-Routes-with-React-Router
// https://github.com/ReactTraining/react-router/issues/5870

export default Root