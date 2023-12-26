import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { Layout } from "../../components/layout/component"
import styles from './style.module.css'

export const HomePage = () => {
    return (
      <Layout>
        <div>Home Page</div>
        <NavLink
          to="/restaurants"
          className={({ isActive }) =>
            classNames(styles.link, {
              [styles.active]: isActive,
            })
          }
        >
          
          Restaurants
        </NavLink>
      </Layout>
    );
}