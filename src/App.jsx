import Content from './components/Content'
import Header from './components/Header'
import Navbar from './components/Navbar'
import logo from './assets/img/Logo Nexaas.png'

function App() {
  return (
    <div className="container h-screen">
      <div className="grid grid-cols-12 grid-rows-6">
        <div className="col-span-2 h-14 row-span-1 lg:col-span-1">
          <img src={logo} />
        </div>

        <div className="border-t-2 col-span-2 row-span-5 row-start-2 lg:col-span-1">
          <Navbar />
        </div>

        <div className="border-l-2 col-span-8 row-span-1 lg:col-span-9">
          <Header />
        </div>

        <div className="border-t-2 border-l-2 bg-gray-200 col-span-8 lg:col-span-9 row-span-5">
          <Content />
        </div>
      </div>
    </div>
  )
}

export default App
