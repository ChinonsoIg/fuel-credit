import home from "../assets/images/home.png";
import wallet from "../assets/images/wallet.png";
import credit from "../assets/images/credit.png";
import beneficiaries from "../assets/images/beneficiaries.png";
import filling_station from "../assets/images/filling_station.png";
import stats from "../assets/images/stats.png";

import dashboard_beneficiaries from "../assets/images/beneficiaries.png";
import dashboard_filling_station from "../assets/images/filling_station.png";
import fuel_purchases from "../assets/images/fuel_purchases.png";
import total_purchases from "../assets/images/total_purchases.png";


export const navItems = [
  {
    id: "1",
    title: "Home",
    image: home,
    routeMatcher: "/home"
  },
  {
    id: "2",
    title: "Wallet",
    image: wallet,
    routeMatcher: "/wallet"
  },
  {
    id: "3",
    title: "Credit",
    image: credit,
    routeMatcher: "/credit"
  },
  {
    id: "4",
    title: "Beneficiaries",
    image: beneficiaries,
    routeMatcher: "/beneficiaries"
  },
  {
    id: "5",
    title: "Filling Stations",
    image: filling_station,
    routeMatcher: "filling_station"
  },
  {
    id: "6",
    title: "Stats",
    image: stats,
    routeMatcher: "stats"
  },
]


export const dashboardGrid = [
  {
    id: "1",
    icon: fuel_purchases,
    name: "Fuel purchases",
    value: "24",
  },
  {
    id: "2",
    icon: total_purchases,
    name: "Total purchases",
    value: "₦155K",
  },
  {
    id: "3",
    icon: dashboard_beneficiaries,
    name: "Beneficiaries",
    value: "7",
  },
  {
    id: "4",
    icon: dashboard_filling_station,
    name: "Filling Stations",
    value: "5",
  },
]