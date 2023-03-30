import React from 'react'
import Layout from '../components/layout/Layout'
import { dashboardGrid } from '../utils/arrayItems'
import styles from "../assets/styles/Dashboard.module.css";


const Dashboard = () => {
  return (
    <Layout>
      <section className={styles.grid_container}>
        {
          dashboardGrid.map((item) => {
            const { id, icon, name, value } = item;

            return (
              <div key={id} className={styles.grid_item}>
                <img src={icon} alt={name} />
                <p>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.value}>{value}</span>
                </p>
              </div>
            )
          })
        }
      </section>
    </Layout>
  )
}

export default Dashboard