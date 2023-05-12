import React from "react";
import { useState, useEffect } from "react";
import { getTrending } from "../../components/API/API";
import { HomeList } from '../../components/HomeList/HomeList.jsx';
import css from './Home.module.css';

const Home = () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        getTrending().then(data => setFilms(data.results));
    }, []);

    return (
        <>
        <h1 className={css.title}>Trending today</h1>
        <HomeList films={films} />
        </>
    );
};

export default Home;