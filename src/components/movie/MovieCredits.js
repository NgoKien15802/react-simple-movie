import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

import useSWR from "swr";

import { api_key, fetcher } from "../../config";

const MovieCredits = () => {
    const { movieId } = useParams();

    const { data } = useSWR(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`,
        fetcher
    );

    if (!data) return null;
    const { cast } = data;

    if (!cast || cast.length <= 0) return null;

    return (
        <Fragment>
            <h2 className="mb-10 text-3xl text-center">Casts</h2>
            <div className="grid grid-cols-4 gap-5">
                {cast.slice(0, 4).map((item) => (
                    <div className="cast-item">
                        <img
                            key={item.id}
                            src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                            alt=""
                            className="w-full h-[350px] object-cover rounded-lg mb-3"
                        />
                        <h3 className="text-xl font-medium text-center">
                            {item.name}
                        </h3>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default MovieCredits;
