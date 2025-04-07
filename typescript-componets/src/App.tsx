import Button from './Components/ButtonComponent'
import './App.css'
import withLoading from './Components/withLpading'

function App() {
const ButtonWithLoading = withLoading(Button);

  return (
    <>
     < ButtonWithLoading label="my simple Button" isLoading={true}/>
    </>
  )
}

export default App
