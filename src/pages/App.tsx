import '@/styles/App.css'
import HomeLayout from '../layouts/HomeLayout'
import SideBar from '../components/SideBar';
import MainContent from '../components/MainContent';

function App() {
  return (
    <>
      <HomeLayout>
          <MainContent />
          <SideBar />
      </HomeLayout>
    </>
  )
}

export default App
