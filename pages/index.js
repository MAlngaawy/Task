import React from 'react';
import styles from '../styles/Home.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Images from '../components/images';
import Home from '../components/home';

export default function App() {
  return (
    <Router>
      <div className={styles.cover}>
        <div className={styles.layout}>
          <div className={styles.title}>
            <h3>Be up to date with our</h3>
            <h2>events</h2>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <ul className={styles.nav_menu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/images">Images</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/images">
            <Images />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
