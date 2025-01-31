import React, { useEffect, useState } from "react";
import List from "../Components/List";
import axios from "axios";
import Pagination from "../Components/Pagination";
const Roots = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPreviousPageUrl(res.data.previous);
        setPokemon(res.data.results.map((pokemon) => pokemon.name));
      });
    return () => cancel();
  }, [currentPageUrl]);
  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  function goToPreviousPage() {
    setCurrentPageUrl(previousPageUrl);
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <List pokemon={pokemon} />
      <Pagination
        goToNextPage={nextPageUrl ? goToNextPage : null}
        goToPreviousPage={previousPageUrl ? goToPreviousPage : null}
      />
    </div>
  );
};

export default Roots;
