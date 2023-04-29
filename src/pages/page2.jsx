import Image from 'next/image'
import { Inter } from 'next/font/google'
import {MyComponent} from '../components/my-component'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })



export default function Page2() {

  let name = 'ANAHAT';

  return (
    <div style={{'display': 'flex', 'justifyContent':'space-around'}}>
    <MyComponent name= {name}/>
    <MyComponent name= {name}/>
    <MyComponent name= {name}/>
    <MyComponent name= {name}/>
    <Link href='page'>Page Swap</Link>
    </div>
  );
  
}
