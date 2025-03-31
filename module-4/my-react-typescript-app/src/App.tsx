import  './App.css'
import UserCat from './components/UserCatComponent'

function App() {
  

  const handdleFollow = () => {
    alert("test");
  }

  return (
    <>
      <UserCat name={"khulyso"} age={33} onFollow={handdleFollow} />
  </>
  )
}

export default App
