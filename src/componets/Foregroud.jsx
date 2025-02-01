import React, { useRef } from 'react'
import Display from './Display'
import { motion } from "framer-motion"

const Foregroud = () => {

const data = [
    {
        description: "Project Report",
        fileSize: "1.2MB",
        close: false,
        tag: {
            isOpen: true,
            tagTitle: "Download",
            tagColor: "blue"
        }
    },
    {
        description: "Project Report",
        fileSize: "1.2MB",
        close: false,
        tag: {
            isOpen: true,
            tagTitle: "Download",
            tagColor: "blue"
        }
    },
    {
        description: "Financial Statement",
        fileSize: "2.5MB",
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "Download",
            tagColor: "green"
        }
    },
    {
        description: "Design Mockup",
        fileSize: "3.1MB",
        close: false,
        tag: {
            isOpen: false,
            tagTitle: "Pending",
            tagColor: "yellow"
        }
    },
    {
        description: "Resume",
        fileSize: "400KB",
        close: false,
        tag: {
            isOpen: true,
            tagTitle: "Open",
            tagColor: "purple"
        }
    },
    {
        description: "Contract Agreement",
        fileSize: "1.8MB",
        close: true,
        tag: {
            isOpen: true,
            tagTitle: "Download",
            tagColor: "red"
        }
    },
  
    
];

const ref=useRef(null);
    return (
        

            <div  ref={ref} className=' w-full h-full absolute z-[3] top-0 left-0 flex flex-wrap gap-5 p-3 '>
              {
               data.map((item,index)=>(
                     <Display data={item} reference={ref} />
               ))

              }

            </div>



        
    )
}

export default Foregroud