import { CheckIcon } from '@heroicons/react/solid'
import Image from 'next/dist/client/image'

export default function AboutUs() {
    return (
        <div className="grid grid-cols-2 gap-1 my-20">
            <div className='flex items-center justify-center'>
                <div className="w-96 h-96 rounded-full bg-circleGray text-center flex flex-col items-center justify-center">
                    <div>
                        <Image
                        src="/logos/about.jpg"
                        height="100"
                        width="100"
                        alt=""
                        />
                    </div>
                    <div>
                        <Image
                        src="/logos/pesu-logo.png"
                        height="100"
                        width="280"
                        alt=""
                        />
                    </div>
                   
                </div>
            </div>
            <div className='flex flex-col gap-12'>
                <h1 className="text-6xl border-b-2 w-fit">About Us</h1>
                <ul className="list-none flex flex-col items-center justify-around gap-5 text-ourGray">
                    <li className='flex gap-2 text-lg'>
                        <ul className="list-none flex gap-2">
                            <li>
                                <CheckIcon className="h-8 w-8 text-ourRed"/>
                            </li>
                            <li>It is advancing innovation and technological excellence for the benefit of humanity. IEEE and its members inspire a global community to innovate for a better tomorrow through its highly-cited publications, conferences, technology standards, and professional and educational activities.</li>
                        </ul>
                    </li>
                    <li className='flex gap-2 text-lg'>
                        <ul className="list-none flex gap-2">
                            <li>
                                <CheckIcon className="h-8 w-8 text-ourRed"/>
                            </li>
                            <li>Being the PESU chapter, IEEE RAS PESU aims to promote diligent growth amongst the students of PES University about various fields of Robotics and Automation. The club conducts hands-on workshops, guest seminars,lectures and industrial visits to various Robotics Research Labs. The club also has various ongoing mega projects, which are mentored by the core team members and faculty members that students are allowed to join to work on them.</li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div>
    )
}