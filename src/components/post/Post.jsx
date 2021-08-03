import React from 'react';
import "./post.css";
import testImage from "../../images/kl.jpg"

export default function Post () {
    return (
        <div className="post">
            <img className="postImg" src={testImage} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Malaysia</span>
                </div>
                <span className="postTitle">Remote Year</span>
                <hr />
                <span className="postDate">09/07/2016</span>
            </div>
            <p className="postDesc">
            Well, it’s been a crazy couple of weeks. In the past 14 days I’ve traveled a total of 11,396 miles; 21 hours of driving and 21 hours in flight. I’ve either sold or moved all my belongings across two time zones, and I’ve spent 14 hours in Hong Kong on a layover to remember.
            I’ve also begun my Remote Year in Kuala Lumpur.
            </p>
        </div>
    );
}
