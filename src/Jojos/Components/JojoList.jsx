import { useMemo, useState } from "react";
import { JojoCard } from "./JojoCard";
import { JojoByChapter } from "../helpers/getJojoByChapter";
import { useDebounce } from "use-debounce";

export const JojoList = ({ chapter }) => {
  const Jojos = useMemo(() => JojoByChapter(chapter), [chapter]);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [value] = useDebounce(search, 300);

  const JojosFiltered = () => {

    if( search.length === 0 ) 
      return Jojos.slice(currentPage, currentPage + 5);

  const filtered = Jojos.filter( jojo => jojo.name.includes( search ) );

    return Jojos.filter((jojo) => {
      if (search.length > 0) {
        return jojo.name
          .trim()
          .includes(value.trim());
      }

      return filtered;
    }).slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
      if(Jojos.filter(jojo => jojo.name.includes(search)).length > currentPage + 5) setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 5);
  };

  const handleOnChangeText = (e) => {
    const { value } = e.target;
    setSearch(value);
    setCurrentPage(0);
  };

  return (
    <>
      <div className="container-search mb-4">
        <input
          type="search"
          className="search-input"
          onChange={handleOnChangeText}
        />
      </div>
      <div className="container-button mb-4">
        <button className="button" onClick={prevPage}>
          Anterior
        </button>
        <button className="button" onClick={nextPage}>
          Siguiente
        </button>
      </div>

      <div className="container-card row rows-cols-1 row-cols-md-4 g-4 mt-4 d-flex">
        {JojosFiltered().map((jojo) => (
          <JojoCard key={jojo.id} {...jojo} />
        ))}
      </div>

    </>
  );
};
