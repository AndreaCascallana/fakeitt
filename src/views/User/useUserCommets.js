import React, { useState } from "react";

const usePostComments = () => {
    //
    const [userComments, setUserComments] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);


    //fetch, loading and error controller
    const fetchUserComments = async (id) => {
        try {
            setIsLoading(true);
            const userComments_ = await fetch(
                "http://localhost:5757/comments?userId=" + id + "&_order=asc&_sort=date"
            )
                .then((d) => d.json())
                .then((d) => d);


            setUserComments(userComments_);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setHasError(true);
            setIsLoading(false);
        }

    };

    return { fetchUserComments, userComments, isLoading, hasError };
};

export default usePostComments;