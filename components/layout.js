import React, { useState } from 'react';
import Accordion from './Accordion';
import {BiChevronDownCircle} from "react-icons/bi";

const Layout = ({ handleClick, isSomeActive, data, turn, setTurn }) => {
    return (
        <div className='items-center flex flex-col lg:w-7/12 lg:mt-7 w-full my-5 px-4 '>
            <div className='font-bold text-3xl px-6 py-3 text-white rounded-md bg-gray-900'>
                Frequently Asked Questions
            </div>
        <div className='flex items-center justify-between w-full mb-6 lg:justify-end'>
            <button
                className="flex items-center mr-3 space-x-1 text-sm font-bold lg:text-base lg:space-x-2 py-2 px-4 bg-slate-50"
                onClick={handleClick}
        >
            <span className="text-black min-w-fit text-ellipsis">
            {!isSomeActive ? "Open All" : "Close All"}
            </span>
            <div
                className={
                    "relative transition-all ease-in-out duration-200 " +
                    (isSomeActive ? " rotate-180" : "rotate-0")
                }   
            >
            <BiChevronDownCircle className="w-[20px] h-[20px]"/>
            </div>
            </button>
        </div>

        {data.map((el, i) => (
            <div className='w-full' key={"questions" + i}>
            <Accordion
                question={el.question}
                answer={el.answer}
                turn={turn}
                setTurn={setTurn}
                idx={el.idx}
            />
        </div>
        ))}
    </div>
    );
};

export default Layout;
