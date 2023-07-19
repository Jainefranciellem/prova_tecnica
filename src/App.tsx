import './index.css'
import Header from './components/Header'
import Todo from './components/Todo'

function App() {
  return (
   <div className='flex h-screen justify-center items-center flex-col'>
    <Header />
      <Todo />
   </div> 
  )
}

export default App
