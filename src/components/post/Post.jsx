import React from 'react';
import "./post.css";
import testImage from "../../images/baby.jpg"

export default function Post () {
    return (
        <div className="post">
            <img className="postImg" src={testImage} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Malaysia</span>
                    <span className="postCat">Thailand</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem repudiandae quia. Consequatur illum repellat laborum ipsum numquam atque sed minima. Sequi, aut dolorem eaque iusto qui magni adipisci quae?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores autem repudiandae quia. Consequatur illum repellat laborum ipsum numquam atque sed minima. Sequi, aut dolorem eaque iusto qui magni adipisci quae?
            </p>
        </div>
    );
}
