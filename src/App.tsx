import './App.css'
import { PropertiesDisplay } from './components/properties-display'

function App() {
  return (
    <>
      <h1 className="text-4xl text-green-400 font-bold">Welcome to Marvelous Mansions</h1>
      <h2 className="text-2xl font-bold">A one stop shop to your dream property!</h2>
      <h3 className="text-xl font-bold">Current property listings:</h3>
      <PropertiesDisplay />
    </>
  )
}

export default App
