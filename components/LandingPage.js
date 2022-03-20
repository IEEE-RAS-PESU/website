import ParticlesWrapper from "./Particles"

const LandingPage = () => {
    return (
        <div className="landing-gradient h-screen">
        <ParticlesWrapper />
            <div className="flex justify-center items-center text-center h-full">
            <div className="text-5xl font-bold font-sans">
                <h1 className="text-white">IEEE Robotics and Automation Society</h1>
                <h1 className="text-white">PESU Student Chapter</h1>
                <button className="bg-ourBlack text-white rounded-full px-5 py-2 my-5 text-lg">
                    <p>Learn More</p>
                </button>
            </div>                
            </div>
        </div>
        
    )
}

export default LandingPage