import './reportDashboard.css'
import PageTitle from './PageTitle'
import Dashboard from './Dashboard'
import Charts from './Charts'
import Upperpage from './Upperpage'
import Notices from './Notices'


const ReportDashboard = () => {
  return (
    <main id='main' className='main'>
      <PageTitle/>
      <Upperpage/>
      <Dashboard/>
      <Charts/>
      <Notices/>


    </main>
  )
}

export default ReportDashboard


