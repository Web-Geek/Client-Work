import React from 'react'

const LandingContainer = () => {
    return (
        <div className="container mt-5">
            <div className="card card1">
                <div className="row">
                        <div className="col-lg-6 col-img">
                            <img src="https://images.pexels.com/photos/6963061/pexels-photo-6963061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img1" className="img-fluid img1" />
                        </div>
                        <div className="col-lg-6 text-col text-center">
                            <div className="alltext">
                                <h1 className="jio-h1">Jio Glass Developer</h1>
                                <h1 className="dash-h1">Dashboard</h1>
                                <p className="col-p">Build AR and VR Applications for the next billion internet users</p>
                                <button className="btn btn-primary mb-4">Enter</button>
                            </div>
                        </div>
                </div>
            </div>

            <div className="row row2">

                <div className="col-lg-6 mt-5">
                    <div className="card card2">
                        <h1 className="des-h1">Design</h1>
                        <p className="des-p">Jio Mixed Reality Design System</p>
                        <button className="btn btn-outline-primary explore">Explore</button>
                    </div>
                </div>
                <div className="col-lg-6 mt-5">
                    <div className="card card3">
                        <h1 className="dev-h1">Develop</h1>
                        <p className="dev-p">Introduction to Jio Mixed Reality Development</p>
                        <button className="btn btn-outline-primary explore">Explore</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default LandingContainer
