import { Inter } from 'next/font/google'
import { useState } from 'react'
import Layout from '../../../components/layout';
import data from "../../../public/data.json";
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
    const [active, setActive] = useState([false, false, false, false, false]);
    const isSomeActive = active.some((element) => element);
    const handleClick = () => {
        isSomeActive
        ? setActive([false, false, false, false,false])
        : setActive([true, true, true, true, true, true]);
    };

    return (
    <>
        
        <div className='grid place-items-center w-full'>
        <Layout
            handleClick={handleClick}
            isSomeActive={isSomeActive}
            data={data}
            turn={active}
            setTurn={setActive}
        />
        </div>

        </>
    )
}
