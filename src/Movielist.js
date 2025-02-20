import React, { useState, useContext } from "react";
import { MovieDataContext } from "./App";

import "./styles/MovieHolder.css";
import LoadScreener from "./miniComps/LoadScreener";
import BoxContainer from "./BoxContainer";
import CloseAndOpenBtn from "./miniComps/CloseAndOpenBtn";
import MovieListRenderer from "./miniComps/MovieListRenderer";
import ErroDisplayer from "./miniComps/ErrorDisplayer";

export default function Movielist({ isLoading, ErrorMessage }) {
  const { MovieDatas } = useContext(MovieDataContext);

  const [isOpen, setIsOpen] = useState(true);
  const renderCondition = isOpen;
  return (
    <BoxContainer>
      {isLoading ? (
        <LoadScreener />
      ) : !MovieDatas || MovieDatas.length < 1 ? (
        <ErroDisplayer ErrorMessage={ErrorMessage} />
      ) : (
        <>
          <CloseAndOpenBtn isOpen={isOpen} setIsOpen={setIsOpen} />

          {renderCondition && (
            <MovieListRenderer MovieDatastoRender={MovieDatas} />
          )}
        </>
      )}
    </BoxContainer>
  );
}
