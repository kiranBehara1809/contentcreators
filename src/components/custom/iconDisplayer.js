const IconDisplayer = (props) => {
    return (
      <>
        <img
          src={props.src}
          alt={props.alt}
          loading="lazy"
          style={props.style}
        />
      </>
    );
}

export default IconDisplayer