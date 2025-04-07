import './App.css';
import Button from './Components/ButtonComponent';
import withLoading from './Components/withLoading';
import Tabs from './Components/Menu/Tabs';

function App() {
  const ButtonWithLoading = withLoading(Button);
  return (
    <>
      <ButtonWithLoading label="My Simple Button" isLoading={true} />

      <Tabs>
        
    <div>
      <Tabs.Tab id="tab1" title="Tab 1" />
      <Tabs.Tab id="tab2" title="Tab 2" />
      <Tabs.Tab id="tab3" title="Tab 3" />
    </div>
  </Tabs>
    </>
  );
}

export default App;