import Image from 'next/image';
import  Main  from './components/Main'


export default function Home() {
 
  



  return (
    <main className='bg-gray-100' >
    <div className='border-2 shadow-xl flex justify-center items-center rounded-lg py-4'>
    <Image src="/logo3.png" width={400} height={400} alt="logo" className='p-8'/>
       
    </div>
     
<Main />
    </main>
  );
}
