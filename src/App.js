import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from './store';
import Cart from './components/Cart';
import RecipeReviewCard from './navbar';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <h1>App Component</h1>
     <RecipeReviewCard/>
     <Cart />
    </div>
    </Provider>
  );
}

export default App;