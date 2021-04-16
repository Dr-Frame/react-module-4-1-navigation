import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import LibraryView from './views/LibraryView';
import NotFoundView from './views/NotFoundView';
import BookDetailsView from './views/BookDetailsView';

//делаем пути нашего сайта,  его страниц
// что бы применить инлайн стили используем не Link, а NavLink

/* const linkStyles = {
  base: {
    color: 'black',
  },
  active: {
    color: 'red',
  },
};

<NavLink to="/" style={linkStyles.base} activeStyle={linkStyles.active}></NavLink> */

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/authors"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Authors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/library"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Library
        </NavLink>
      </li>
    </ul>

    {/* ищет до первого свовпадения и рендерит компонент */}
    <Switch>
      <Route exact path="/" component={HomeView} />

      <Route path="/authors" component={AuthorsView} />
      {/* динамический маршрут, после/ можно ставить что угодно, это просто будет свойством */}
      <Route path="/library/:bookId" component={BookDetailsView} />
      <Route path="/library" component={LibraryView} />
      <Route component={NotFoundView} />
    </Switch>
  </>
);

export default App;
