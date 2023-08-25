import IconDisplayer from "./custom/iconDisplayer";

const PageNotFound = () => {
    return (
      <>
        <div
          style={{
            height: "100dvh",
            width: "100dvw",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection : "column"
          }}
        >
          <IconDisplayer
            src={"../icons/404.svg"}
            alt="PAGE NOT FOUND"
            style={{ width: 300, height: 300 }}
          />
          <p>
            <h3>Oops...! Page not found</h3>
          </p>
        </div>
      </>
    );
}


export default PageNotFound;