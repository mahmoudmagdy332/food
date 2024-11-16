
import { QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import queryClient from './app/utils/hooks/queryClient'
import { RouterProvider } from 'react-router-dom'
import routes from './app/router'

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={routes} />
  </QueryClientProvider>
  )
}

export default App
