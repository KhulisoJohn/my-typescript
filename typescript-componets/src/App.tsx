import './App.css';
import Button from './Components/ButtonComponent';
import withLoading from './Components/withLoading';

function App() {
  const ButtonWithLoading = withLoading(Button);
  return (
    <>
      <ButtonWithLoading label="My Simple Button" isLoading={true} />
    </>
  );
}

export default App;