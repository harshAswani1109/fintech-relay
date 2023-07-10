import React, { useEffect, useRef } from 'react';
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"

const Accordion = ({ question, answer, turn, setTurn, idx }) => {
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
        contentRef.current.style.maxHeight = turn[idx] ? `${contentRef.current.scrollHeight}px` : "0px";
        }
    }, [contentRef, turn, idx]);

    const toggleAccordion = () => {
        let newTurn = [...turn];
        newTurn[idx] = !newTurn[idx];
        setTurn(newTurn);
    };

    return (
        <div className='flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base'>
        <button
            onClick={toggleAccordion}
            className={`bg-[#e5e7eb] px-5 shadow cursor-pointer w-full h-full ${turn[idx] ? 'active' : ''}`}
        >
        <div className='py-3'>
            <div className='flex items-center justify-between h-14 text-left'>
                <span className='ml-2 font-medium lg:font-semibold text-[17px] max-md:text-sm text-gray-500'>{question}</span>
                <div>
                {turn[idx] ? (
                <AiOutlineMinus />
                ) : (
                <AiOutlinePlus />
                )}
                </div>
            </div>
            <div ref={contentRef} className='mx-4 overflow-hidden text-left transition-all duration-500 h-full'>
                <p className='py-1 font-normal leading-normal text-justify whitespace-pre-line text-[16px] max-md:text-sm'>
                    {answer}
                </p>
            </div>
        </div>
        </button>
    </div>
    );
};

export default Accordion;
