import { Provider } from 'react-redux';
import './App.css';
import UsersList from './components/UsersList';
import store from './redux/store';

function App() {
    console.log('store', store.getState());

    return (
        <Provider store={store}>
            <h1>Redux Saga</h1>
            <UsersList />
        </Provider>
    );
}

export default App;
