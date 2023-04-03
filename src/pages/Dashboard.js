import { useState } from "react";
import { useSelector } from "react-redux";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useGetUserQuery } from "../features/user/userApiSlice";
import { selectCurrentUser } from "../features/auth/authSlice";

import Layout from "../components/layout/Layout"
import styles from "../assets/styles/Dashboard.module.css";
import { Button } from "../components/Button";
import HorizontalLine from "../components/HorizontalLine";

import dashboard_beneficiaries from "../assets/images/beneficiaries.png";
import dashboard_filling_station from "../assets/images/filling_station.png";
import fuel_purchases from "../assets/images/fuel_purchases.png";
import total_purchases from "../assets/images/total_purchases.png";


const Dashboard = () => {
  const [isWalletVisible, setIsWalletVisible] = useState(false);
  const [isCreditVisible, setIsCreditVisible] = useState(false);

  const user = useSelector(selectCurrentUser);
  let userId = user.id;
  const {
    data: userMetrics,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUserQuery(userId);

  const handleToggleWallet = () => {
    setIsWalletVisible(!isWalletVisible)
  }

  const handleToggleCredit = () => {
    setIsCreditVisible(!isCreditVisible)
  }
  

  return (
    <Layout>
      <section className={styles.grid_container}>
        <div className={styles.grid_item}>
          <img src={fuel_purchases} alt="Fuel purchases" />
          <p>
            <span className={styles.name}>Fuel purchases</span>
            <span className={styles.value}>{userMetrics?.count_fuel}</span>
          </p>
        </div>
        <div className={styles.grid_item}>
          <img src={total_purchases} alt="Total purchases" />
          <p>
            <span className={styles.name}>Total purchases</span>
            <span className={styles.value}>{userMetrics?.total_fuel}</span>
          </p>
        </div>
        <div className={styles.grid_item}>
          <img src={dashboard_beneficiaries} alt="Beneficiaries" />
          <p>
            <span className={styles.name}>Beneficiaries</span>
            <span className={styles.value}>{userMetrics?.beneficiary}</span>
          </p>
        </div>
        <div className={styles.grid_item}>
          <img src={dashboard_filling_station} alt="Filling Stations" />
          <p>
            <span className={styles.name}>Filling Stations</span>
            <span className={styles.value}>{userMetrics?.filling_station_count}</span>
          </p>
        </div>
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
                <div className={styles.toggle_balance}>
                  FuelCredit balance
                  <div onClick={handleToggleWallet}>
                    {isWalletVisible
                      ? <AiFillEyeInvisible size={20} color="#8F928E" />
                      : <AiFillEye size={20} color="#8F928E" />
                    }
                  </div>
                </div>
                <p className={styles.amount}>
                  {isWalletVisible ? `₦${userMetrics?.balance}` : "******"}
                </p>
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
                <p className={styles.amt_filling_station}>₦0</p>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.credit_wrapper}>
          <div className={styles.credit_header}>
            <p className={styles.credit}>Credit</p>
            <p className={styles.credit_details}>See details</p>
          </div>
          <div className={styles.credit_container}>
            <div className={styles.toggle_credit}>
              FuelCredit “Quick” balance
              <div onClick={handleToggleCredit}>
                {isCreditVisible
                  ? <AiFillEyeInvisible size={20} color="#8F928E" />
                  : <AiFillEye size={20} color="#8F928E" />
                }
              </div>
            </div>
            <p className={styles.credit_balance}>
              {isCreditVisible ? `₦${userMetrics?.credit}` : "******"}
            </p>
            <p className={styles.request_amount}>
              You can still request up to {" "}
              <span>₦{userMetrics?.creditDetails?.limit}</span>
            </p>
            <HorizontalLine />
            <div className={styles.make_request}>
              <div>
                <Button title="Request credit" />
              </div>
              <p className={styles.repayment_timeline}>
                Repayment due in {" "}
                <span>{userMetrics?.creditDetails?.expire} days</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Dashboard