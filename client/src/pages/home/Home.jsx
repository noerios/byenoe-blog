import { Header } from "../../components/header/Header";
import { Posts } from "../../components/posts/Posts";
import { Sidebar } from "../../components/sidebar/Sidebar";
import "./home.css";
import React from "react";

export const Home = () => {
    return (
        <>
        <Header/>
        <div className="home">
            <Sidebar />
            <Posts />
            </div>
        </>
    );
}

export default Home;