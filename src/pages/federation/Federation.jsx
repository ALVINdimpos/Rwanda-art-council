import "./fed.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Table from '../../components/table/Table'
import Navbar from '../../components/nav/Navbar'

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Table />
      </div>
    </div>
  )
}

export default List