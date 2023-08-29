import { Grid, Card, Stack, Typography } from "@mui/material";

const JournalCard = () => {
  return (
    <>
      <Card className="glassCard" sx={{ height: 300, p: 1.5, width: "100%" }}>
        <Grid container direction={"row"} sx={{ height: 20 }}>
          <Grid item xs={8}>
            <Typography variant="h6">Endless Ride</Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Typography variant="body1">20/08/2023</Typography>
        </Grid>
        <Grid
          container
          direction={"row"}
          sx={{ pt: 2, height: 250, maxHeight: 250, overflow: "hidden" }}
        >
          <Grid item xs={4}>
            <img
              src="../icons/twitter.svg"
              style={{ width: "100%", height: 230 }}
            />
          </Grid>
          <Grid item xs={8} sx={{pt :2, pl :2}}>
            This is some random text. This is some random text. This is some
            random text. This is some random text. This is some random text.{" "}
            This is some random text. This is some random text. This is some
            random text. This is some random text. This is some random text.{" "}
            This is some random text. This is some random text. This is some
            random text. This is some random text. This is some random text.{" "}
            This is some random text. This is some random text. This is some
            random text. This is some random text. This is some random text.{" "}
            This is some random text. This is some random text. This is some
            random text. This is some random text. This is some random text.{" "}
            This is some random text. This is some random text. This is some
            random text. This is some random text. This is some random text.{" "}
            This is some random text. This is some random text. This is some
            random text. This is some random text. This is some random text.{" "}
            This is some random text. sdfdfsdfsdfsd
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default JournalCard;
