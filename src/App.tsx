
import { QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import queryClient from './app/utils/hooks/queryClient'
import { RouterProvider } from 'react-router-dom'
import routes from './app/router'
import { Provider as ReduxProvider } from "react-redux";
import { store } from './app/store'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
function App() {

  return (
    <ReduxProvider store={store}>
    <QueryClientProvider client={queryClient}>
    <ToastContainer />
    <RouterProvider router={routes} />
  </QueryClientProvider>
  </ReduxProvider>
  )
}

export default App
