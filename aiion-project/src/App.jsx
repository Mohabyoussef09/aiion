import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import History from './Components/History/History';
import NotFound from './Components/NotFound/NotFound';
import SingleInput from './Components/SingleInput/SingleInput';
import MultiInputs from './Components/MultiInputs/MultiInputs';


let x = createBrowserRouter([
  {path: '' , element: <Layout/> ,children: [
    {index: true , element: <Home/>},
    {path: 'about' , element: <About/>},
    {path: 'history' , element: <History/>},
    {path: 'single' , element: <SingleInput/>},
    {path: 'multi' , element: <MultiInputs/>},
    {path: '*' , element: <NotFound />}
  ]}
])


function App() {

  return <RouterProvider router={x}></RouterProvider>

}

export default App
