import './App.css';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Home from './components/home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import User from './components/user';
import DetailImage from './components/detailImage';
import SearchPage from './components/searchPage';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/user',
      element: <User />
    },
    {
      path: '/image/:id',
      element: <DetailImage />
    },
    {
      path: '/search/:query',
      element: <SearchPage />
    }
  ])

  return (
    // for redux
    <Provider store={appStore}>
      {/* for routing */}
      <RouterProvider router={appRouter} />

    </Provider >
  );
}

export default App;
