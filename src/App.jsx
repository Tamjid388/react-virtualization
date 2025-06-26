import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import { Card } from './Component/Card';
import { VirtualizedList } from './Component/virtualizedList/VirtualizedList';

function App() {
  const [lists, setLists] = useState([]);
       const fetchlists = async () => {
    try {
      const response = await axios.get("/list.json");
     setLists(response.data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
   fetchlists();
  }, []);




  return (
     <div className='max-w-7xl m-auto py-12'>
        <h1 className='text-4xl mb-4 font-bold ml-1'>React Virtualization</h1>
        <h5>
          <h5>
  Virtualized list with <code className='bg-gray-100'>react-virtuoso</code> — only visible items are rendered for performance.
</h5>

        </h5>
        {/* <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                lists?.map((list,index)=><Card key={index} list={list} index={index}/>)
            }
        </ul> */}

<VirtualizedList/>
    </div>
  )
}

export default App
