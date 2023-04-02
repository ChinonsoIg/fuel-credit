import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import Layout from '../components/layout/Layout'
import { dashboardGrid } from '../utils/arrayItems'
import styles from "../assets/styles/Dashboard.module.css";
import { Button } from '../components/Button';
import HorizontalLine from "../components/HorizontalLine";


const Dashboard = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  const handleToggleBalance = () => {
    setIsBalanceVisible(!isBalanceVisible)
  }

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

      <section className={styles.wallet_and_credit_wrapper}>
        <div className={styles.wallet_wrapper}>
          <div className={styles.wallet_header}>
            <p className={styles.wallet}>Wallet</p>
            <p className={styles.details}>See details</p>
          </div>
          <div className={styles.wallet_container}>
            <div className={styles.balance}>
              <div>
                <p className={styles.toggle_balance}>
                  FuelCredit balance
                  <div onClick={handleToggleBalance}>
                    {isBalanceVisible
                      ? <AiFillEyeInvisible size={20} color="#8F928E" />
                      : <AiFillEye size={20} color="#8F928E" />
                    }
                  </div>
                </p>
                <p className={styles.amount}>₦95,520.00</p>
              </div>
              <div>
                <Button title="Fund Wallet" />
              </div>
            </div>
            <HorizontalLine />
            <div>
              <div className={styles.recent_transactions}>
                <p className={styles.recent}>Recent Transactions</p>
                <p className={styles.see_all_recent_transaction}>See all</p>
              </div>
              <div className={styles.total_filling_station}>
                <p>
                  <span className={styles.total}>Total Filling station</span>
                  <span className={styles.today}>Today 10:00AM </span>
                </p>
                <p className={styles.amt_filling_station}>-₦5,000</p>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.credit_wrapper}>
          <div className={styles.credit_header}>
            <p className={styles.credit}>Wallet</p>
            <p className={styles.credit_details}>See details</p>
          </div>
          <div className={styles.credit_container}>
            <p className={styles.toggle_credit}>
              FuelCredit “Quick” balance
              <div onClick={handleToggleBalance}>
                {isBalanceVisible
                  ? <AiFillEyeInvisible size={20} color="#8F928E" />
                  : <AiFillEye size={20} color="#8F928E" />
                }
              </div>
            </p>
            <p className={styles.credit_balance}>-₦4,500</p>
            <p className={styles.request_amount}>
              You can still request up to {" "}
              <span>₦5,500</span>
            </p>
            <HorizontalLine />
            <div className={styles.make_request}>
              <div>
                <Button title="Request credit" />
              </div>
              <p className={styles.repayment_timeline}>
              Repayment due in {" "}
              <span>2 days</span>
            </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard