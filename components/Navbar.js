import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
	let Links = [
		{ name: "HOME", link: "/" },
		{ name: "MAJOR PROJECTS", link: "/" },
		{ name: "OUR TEAM", link: "/" },
		{ name: "ABOUT US", link: "/" },
		{ name: "CONTACT", link: "/" },
		{ name: "EVENTS", link: "/" },
	];
	let [open, setOpen] = useState(false);
	return (
		<div className="shadow-md w-full top-0 left-0">
			<div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
				<Image
					src="/logos/ieee-ras-logo.png"
					width={150}
					height={60}
					alt="IEEE logo"
				></Image>

				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
				>
					<ion-icon name={open ? "close" : "menu"}></ion-icon>
				</div>

				<ul
					className={`text-sm md:text-lg lg:flex lg:items-center lg:pb-0  absolute lg:static bg-ourBlack  lg:bg-white lg:z-auto z-[1]  left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "top-20 " : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li key={link.name} className="lg:ml-8 lg:my-0 my-5">
							<Link href={link.link}>
								<a className="text-white lg:hover:text-white lg:hover:bg-ourPurple lg:hover:px-3 lg:hover:py-2 hover:rounded-md lg:text-ourBlack duration-500">
									{link.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
