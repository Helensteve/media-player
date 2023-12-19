import { Link } from "react-router-dom";
import Add from "../components/Add";
import View from "../components/View";
import Category from "../components/Category";
import { useState } from "react";

function Home() {
    const [uploadVideoStatus, setUploadVideoStatus]=useState({})
    return (
        <div>
            <div className="container mt-5 mb-5 d-flex justify-content-between align-item-center">
                <div className="add_videos">
                    <Add setUploadVideoStatus={setUploadVideoStatus}/>
                </div>
                <div>
                    <Link to={'/watch'} style={{textDecoration:"none", color:"white",fontSize:"30px"}}> Watch History</Link>
                </div>
               
            </div>
            <div className="container mt-5 mb-5 d-flex justify-content-between align-item-center">
                <div className="all-videos col-md-6 mt-5">
                    <h4>All Videos</h4>
                    <View uploadVideoStatus={uploadVideoStatus}/>
                </div>
                <div>
                    <Category/>
                </div>
            </div>
        </div>
    )
}
export default Home;