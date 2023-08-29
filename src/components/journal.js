import { Card, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import JournalCard from "./custom/journalCard";

const Journal = () => {
  const height = 100 - 15;
   const theme = useTheme();
   const sm_up = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Grid
        container
        direction={"row"}
        sx={{
          height: `${height}dvh`,
          overflow: "auto",
          mt: 2,
          width: "100dvw",
          display: "flex",
          flexWrap :"wrap"
        }}
      >
        {[1, 2, 3,4,5,6,7,8,9,10,11,12].map((x) => {
          return (
            <Grid
              item
              xs={sm_up ? 6 : 12}
              key={x}
              sx={{ pl: 1, pb: 2, pr: 2, pt: 2, mb: 3, height: 300 }}
            >
                <JournalCard />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Journal;
