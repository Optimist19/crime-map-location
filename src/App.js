import { useState } from 'react';
import './App.css';
import Map from './components/Map';
import { api } from './data/api';



function App() {

  const [eventData] = useState(api)

  return (
    <div className='app'>
    <Map eventData={eventData} />
    </div>
  )
}

export default App