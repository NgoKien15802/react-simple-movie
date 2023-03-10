import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
// catch error when truyền props vào
import { withErrorBoundary } from "react-error-boundary";

import { tmdbAPI } from "~/config";
import Button from "~/components/button/Button";
import FallbackComponent from "~/components/error/FallbackComponent";

const MovieCard = ({ item }) => {
    const { title, vote_average, poster_path, release_date, id } = item;
    // useNavigate: điều hướng đến page other
    const navigate = useNavigate();
    return (
        <div className="flex flex-col h-full p-3 text-white rounded-lg select-none movie-card bg-slate-800">
            <img
                src={tmdbAPI.image500(poster_path)}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg mb-5"
            />

            <div className="flex flex-col flex-1">
                <h3 className="mb-3 text-xl font-bold ">{title}</h3>
                <div className="flex items-center justify-between mb-10 text-sm opacity-50">
                    <span>{new Date(release_date).getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>

                <Button full onClick={() => navigate(`/movie/${id}`)}>
                    Watch now
                </Button>
            </div>
        </div>
    );
};

// catch error when truyền props vào
MovieCard.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        vote_average: PropTypes.number,
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
        id: PropTypes.number,
    }),
};

export default withErrorBoundary(MovieCard, {
    FallbackComponent,
});
