import React from 'react';
import "./singlepost.css";
import testImage from "../../images/baby.jpg"

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src={testImage} alt="" className="singlePostImg"
                />
                <h1 className="singlePostTitle">Lorem ipsum dolor, sit amet.
                 <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                 </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Rolando Noe Rios</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, ratione illo. Eveniet, inventore cum! Nobis quia perferendis unde magni voluptate velit maiores vel a esse ad reprehenderit, blanditiis nisi quis?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequatur eligendi repudiandae libero sint itaque nesciunt nihil corporis exercitationem nostrum, maxime veniam! Perspiciatis ratione sit harum incidunt corrupti labore qui?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis consequatur magni fuga, labore vel sunt ad voluptatum omnis, recusandae voluptate dignissimos quidem eveniet perferendis obcaecati architecto est, laudantium soluta porro?
                </p>
            </div>
        </div>
    );
}

export default SinglePost;
