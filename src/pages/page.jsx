import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import {MyComponent} from '../components/my-component'

const inter = Inter({ subsets: ['latin'] })



export default function Home() {


  let name = 'PRABHJOT';

  return (
    <div style={{'display': 'flex', 'justifyContent':'space-around'}}>
    <MyComponent name= {name}/>
    <MyComponent name= {name}/>
    <MyComponent name= {name}/>
    <MyComponent name= {name}/>
    <Link href='page2'>Page Swap</Link>
    </div>
  )
}
