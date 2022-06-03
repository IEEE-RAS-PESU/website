import ParticlesWrapper from "./Particles"

const LandingPage = () => {
    return (
        <div className="bg-[url('../public/images/homepage.jpg')] h-screen">
        {/* <ParticlesWrapper /> */}
            <div className="flex flex-col justify-center items-start text-left mx-20 w-1/2 h-full">
                <h1 className="text-8xl font-bold my-10 landing-gradient">IEEE Robotics and Automation Society</h1>
                <h1 className="text-4xl text-white">PESU Student Chapter</h1>
                <button className="bg-ourPurple text-white rounded-full px-5 py-2 my-5 text-lg">
                    <p>Learn More</p>
                </button>
            </div>
        </div>
        
    )
}

export default LandingPage