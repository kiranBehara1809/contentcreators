import { Card, Grid, Stack, useMediaQuery, useTheme } from "@mui/material";

const AboutCc = () => {
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
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid
            item
            xs={sm_up ? 8 : 12}
            sx={{ pl: 1, pb: 2, pr: 2, pt: 2, mb: 3, height: 300 }}
          >
            <Stack
              direction={"row"}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <img
                src="../bsybmw.jpeg"
                alt="Bayya Sunny Yadav"
                style={{ width: 200, height: 200, borderRadius: "50%" }}
              />
              <img
                src="../bsy.jpeg"
                alt="Bayya Sunny Yadav"
                style={{ width: 200, height: 200, borderRadius: "50%" }}
              />
              <img
                src="../bsywithtiger.jpeg"
                alt="Bayya Sunny Yadav"
                style={{ width: 200, height: 200, borderRadius: "50%" }}
              />
            </Stack>
            <Card
              sx={{ height: 300, p: 1.5, width: "100%", mt: 1 }}
              className="glassCard"
            >
              <marquee scrollamount="12">
                <span style={{ fontSize: "xx-large" }}>
                  🇮🇳 🇹🇭 🇧🇩 🇲🇾 🇳🇵 🇵🇰 🇱🇦 🇻🇳 🇰🇭 🇸🇬 🇦🇺 🇨🇱 🇦🇷
                </span>
              </marquee>
            </Card>
          </Grid>
        </Grid>
      </>
    );
}


export default AboutCc;