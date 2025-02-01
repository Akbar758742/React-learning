import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

const Display = ({ data,reference }) => {
    return (
        <motion.div drag dragConstraints={reference} className=' flex shrink-0 relative px-8 py-10 w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white overflow-hidden '>
            <FaRegFileAlt />
            <p className='text-sm leading-tight mt-4'>{data.description}</p>

            <div className='  absolute w-full  footer left-0 bottom-0  '>

                <div className='px-8 flex items-center justify-between mb-5 '>
                    <h4>{data.fileSize} </h4>
                    <span className='w-5 h-5 rounded-full text-black bg-zinc-500  flex items-center justify-center '>
                        {
                            data.close ? <IoIosCloseCircle /> : <IoIosArrowRoundDown />
                        }


                    </span>
                </div>

                {
                    data.tag.isOpen && (<div className={` ${ data.tag.tagColor==="blue"?"bg-blue-700":"bg-green-600" } w-full flex items-center justify-center py-3 tag `}>
                        <h3 className='text-sm font-semibold '>Download Now</h3>

                    </div>)
                }



            </div>

        </motion.div>
    )
}

export default Display