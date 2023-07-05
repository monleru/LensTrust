import React from "react";
import { Link, useParams } from "react-router-dom";
import './style.scss'
import ProgressBar from "../../components/ProgressBar";

const Profile = () => {
    const params = useParams().id
    return(
        <div>
            <div>
                <Link to="/">Home</Link> {`>`} {params}.lens
            </div>

            <div className="profile-head-div">
                <div className="left-div">
                    <div className="left-div-header">
                        <img width={30} src={'https://user-content.lenster.xyz/300x300/https://cdn.stamp.fyi/avatar/eth:0x8fb9e1390b86e66acd82a3676f4e75ea3a54a2c0?s=300'} alt="" />
                        <div>
                            <p>{params}.lens</p>
                            <button>Follow</button>
                        </div>
                    </div>
                </div>
                <div>
                    <ProgressBar />
                </div>
                <div className="right-div">
                    123
                </div>
            </div>
        </div>
    )
}

export default Profile;