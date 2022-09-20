import "./fed.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Table from '../../components/table/Table'
import Navbar from '../../components/nav/Navbar'
import { Container } from "@material-ui/core"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Container>
        <Table />
        </Container>

      </div>
    </div>
  )
}

export default List