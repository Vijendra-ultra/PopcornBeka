import React, { useState } from "react";

import MovieHolder from "./MovieHolder";
import "./styles/MovieHolder.css";
import LoadScreener from "./miniComps/LoadScreener";
import BoxContainer from "./BoxContainer";
import CloseAndOpenBtn from "./miniComps/CloseAndOpenBtn";
import MovieListRenderer from "./miniComps/MovieListRenderer";
import ErroDisplayer from "./miniComps/ErrorDisplayer";

export default function Movielist({ MovieDatas, isLoading, ErrorMessage }) {
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

          {renderCondition && <MovieListRenderer MovieDatas={MovieDatas} />}
        </>
      )}
    </BoxContainer>
  );
}
