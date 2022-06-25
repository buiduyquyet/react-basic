import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

/*
- className
- State( trạng thái ): như là một memory(bộ nhớ) của react giúp lưu lại biến ỏ các giá trị 

*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent />
      </header>
      
    </div>
  );
}

export default App;
