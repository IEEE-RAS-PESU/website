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
					className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
				>
					<ion-icon name={open ? "close" : "menu"}></ion-icon>
				</div>

				<ul
					className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-ourBlack  md:bg-white md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "top-20 " : "top-[-490px]"
					}`}
				>
					{Links.map((link) => (
						<li
							key={link.name}
							className="md:ml-8 text-md md:my-0 my-7"
						>
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
