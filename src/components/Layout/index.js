import SideBar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page"></div>
    </div>
  )
}
export default Layout