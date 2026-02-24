import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
const CityList = ({ cities, isLoading }) => {
  if (isLoading) {
    return <Spinner/>
  }
  if (cities.length === 0) {
    return <Message message="No cities added yet. Start adding some!" />
  }
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (<CityItem key={city.id} city={city} />))}
    </ul>
  )
}

export default CityList
