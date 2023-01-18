import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/index.js';
import { Provider } from 'react-redux';
import store from './store/store.js';



function App() {
  return (

    <Provider store={store}>
            <RouterProvider router={router}/>
    </Provider>
  );
}

export default App;


