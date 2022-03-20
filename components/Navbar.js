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
		<div className="w-full absolute">
			<div className="md:flex items-center justify-between py-4 md:px-10 px-7">
				<Image
					src="/logos/ieee_ras_logo_2.png"
					width={300}
					height={150}
					alt="IEEE logo"
				></Image>

				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
				>
					<ion-icon name={open ? "close" : "menu"}></ion-icon>
				</div>

				<ul
					className={`text-sm md:text-lg lg:flex lg:items-center lg:pb-0  absolute lg:static lg:z-auto z-[1]  left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "top-20 bg-ourBlack" : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li key={link.name} className="lg:ml-8 lg:my-0 my-5">
							<Link href={link.link}>
								<a className="p-3 text-white text-sm hover:bg-ourBlack  hover:rounded-md duration-500">
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
