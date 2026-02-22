import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"

const Homepage = () => {
  return (
    <div>
        <PageNav />
      <h1>Worldwise Homepage</h1>
      <Link to="/app">Go to the App Layout</Link>
    </div>
  )
}

export default Homepage
