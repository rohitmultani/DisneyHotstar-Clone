import React, { Fragment, useContext } from "react";
import Design3 from "../../LayoutDesigned/Design3";
import classes from "./Play.module.css";
import { memo } from "react";
import PlayListContext from "../../../Store/PlayList-context";
const Play = (props) => {
  const PlayCtx = useContext(PlayListContext);
  const PlayItems = (
    <ul className={classes.containerList}>
      {PlayCtx.movies.map((item) => (
        <Design3
          id={item.id}
          key={item.id}
          name={item.name}
          detail={item.detail}
          title={item.title}
          image={item.image}
        />
      ))}
    </ul>
  );
  return <Fragment>{PlayItems}</Fragment>;
};
export default memo(Play);
