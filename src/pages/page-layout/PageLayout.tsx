import {Outlet} from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './styles.scss'
function PageLayout() {
  return (
    <section className='page-container'>
      <Header />
      <main className='main-section'>
        <Outlet />
      </main>
      <Footer />
    </section>
  )
}

export default PageLayout