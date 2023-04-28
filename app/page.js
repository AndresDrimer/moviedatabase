import Image from 'next/image';
import  Main  from './components/Main'


export default function Home() {
 
  



  return (
    <main className='bg-gray-100' >
    <div className='border-2 shadow-xl flex justify-center items-center rounded-lg py-4'>
       <h1 className="text-bold text-3xl sm:text-5xl md:text-6xl text-center"> ABETO´S MOVIE DATABASE</h1>
    </div>
     
<Main />
    </main>
  );
}
