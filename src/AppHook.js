import React from "react";
import { v4 } from "uuid";
import { useState } from "react";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import { Route, Routes } from "react-router-dom";
import Description from "./components/Description";
const AppHook = () => {
  const [search, setSearch] = useState("");
  const [rateSearch, setRateSearch] = useState("");
  const [movieList, setMovieList] = useState([
    {
      id: v4(),
      title: "La La Land",
      description:
        "  is a 2016 American romantic musical comedy-drama film written and directed by Damien Chazelle. It stars Ryan Gosling and Emma Stone as a struggling jazz pianist and an aspiring actress.",
      urlPoster:
        "https://m.media-amazon.com/images/I/91jrKX9xjQL._AC_SL1500_.jpg",
      rating: 2,
      trailer: "https://www.youtube.com/embed/0pdqf4P9MB8",
    },
    {
      id: v4(),
      title: "Apocalypto",
      description:
        " is a 2006 action adventure film produced, co-written, and directed by Mel Gibson. The film features a cast of Native American and Indigenous Mexican .",
      urlPoster:
        "https://upload.wikimedia.org/wikipedia/tr/5/55/Apocalfilm.jpg",
      rating: 5,
      trailer: "https://www.youtube.com/embed/ngWBddVNVZs",
    },
    {
      id: v4(),
      title: "Asfour Stah",
      description:
        " is a Tunisian film made in 1990, the first fiction feature film by the director Ferid Boughedir.The boy discovers the pleasures of life as his family adopts a teen girl. ",
      urlPoster:
        "https://m.media-amazon.com/images/I/419PAuvTOCL._AC_SY1000_.jpg",
      rating: 0,
      trailer: "https://www.youtube.com/embed/uBdHPSQSoHU",
    },
    {
      id: v4(),
      title: "Pirates Of The Caribbean 5",
      description:
        " is a 2017 American swashbuckler fantasy film directed by Joachim Rønning and Espen Sandberg and written by Jeff Nathanson, from a story by Nathanson and Terry Rossio.",
      urlPoster: "http://img.over-blog-kiwi.com/0/71/40/63/obpice0VuXb.jpeg",
      rating: 3,
      trailer: "https://www.youtube.com/embed/Hgeu5rhoxxY",
    },
    {
      id: v4(),
      title: "Parasite",
      description:
        " is a 2019 South Korean dark comedy thriller film directed by Bong Joon-ho, who co-wrote the screenplay with Han Jin-won and co-produced the film, highly qualified individuals.",
      urlPoster: "https://m.media-amazon.com/images/I/711eM3-rs8L.jpg",
      rating: 1,
      trailer: "https://www.youtube.com/embed/5xH0HfJHsaY",
    },
    {
      id: v4(),
      title: "Limitless",
      description:
        " is a 2011 American science-fiction thriller film directed by Neil Burger and written by Leslie Dixon. Based on the 2001 novel The Dark Fields by Alan Glynn.",
      urlPoster: "https://m.media-amazon.com/images/I/81WaeHtrN1L._SL1500_.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/4TLppsfzQH8",
    },
  ]);
  const handleDelete = (movie) => {
    setMovieList(movieList.filter((elem) => elem.id !== movie.id));
  };

  const handleAdd = (newMovie) => {
    setMovieList([...movieList, newMovie]);
  };
  const handleSearch = (val) => {
    setSearch(val);
  };
  const handleRateSearch = (val) => {
    setRateSearch(val);
  };
  return (
    <div style={{ backgroundColor: "rgb(42, 44, 92)" }}>
      <Routes>
        <Route
          index
          element={
            <>
              <AddMovie
                handleRateSearch={handleRateSearch}
                handleSearch={handleSearch}
                handleAdd={handleAdd}
              />
              <MovieList
                handleDelete={handleDelete}
                list={movieList.filter(
                  (elem) =>
                    elem.title.toLowerCase().includes(search.toLowerCase()) &&
                    elem.rating >= rateSearch
                )}
              />
            </>
          }
        />
        <Route
          path="/Description/:id"
          element={<Description movieList={movieList} />}
        />
      </Routes>
    </div>
  );
};

export default AppHook;
