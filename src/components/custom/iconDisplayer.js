import { useCallback, useEffect, useState } from "react";

const IconDisplayer = (props) => {
  const imageBasePath = window.location.protocol + "//" + window.location.host;
  const [imgsrc, setImgSrc] = useState(imageBasePath + props?.src);
  return (
    <>
      <img src={imgsrc} alt={props.alt} style={props.style} />
    </>
  );
};

export default IconDisplayer;
