import React from "react";

const Intro = () => {
	return (
		<div className="text-center h-96 align-middle">
			<div className=" text-ourBlack italic md:text-5xl w-3/4 mx-auto pt-16 text-2xl md:pt-28 lg:w-2/3">
				{
					'"The IEEE-RAS PESU Chapter aims to promote diligent growth amongst the students of PES University about various fields of Robotics and Automation."'
				}
			</div>
			<div className="md:my-10 my-6 w-3/4 mx-auto text-ourGray text-lg md:text-2xl lg:text-3xl">
				Check out what we are upto and how you can contribute!
			</div>
			<button className="bg-gray-400 hover:bg-gray-700 border-gray-500 border-2 text-white rounded-3xl text-xs my-5 w-52 h-9 md:w-72 md:h-12 md:text-base">
				WHAT ARE YOU WAITING FOR?
			</button>
		</div>
	);
};

export default Intro;
