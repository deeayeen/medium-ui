import React from "react";
import Headroom from "react-headroom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../logoWhite.svg";
import "../App.css";
import Card from "../Card.js";
import FadeIn from "react-fade-in";

const useStyles = makeStyles(theme => ({
  root: {
    height: "10000px"
  },
  root2: {
    flexGrow: 1,
    height: "10000px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function HeaderExample() {
  const classes = useStyles();

  return (
    <div className={classes.root2}>
      <div>
        <Headroom>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                React App{" "}
                <img
                  style={{ width: "50px" }}
                  src={logo}
                  className="App-logo"
                  alt="logo"
                />
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Headroom>
      </div>
      <div class="d-flex flex-column justify-content-center align-items-center mt-5">
        <h1
          class="mb-4 ml-5"
          style={{ color: "gray", alignSelf: "flex-start" }}
        >
          Kanye West
        </h1>
        <FadeIn>
          <Card
            song={"Follow God"}
            artist={"Kanye West"}
            image={
              "https://images.genius.com/df2d9c960e6d5f00bd2186ed3331312c.1000x1000x1.jpg"
            }
          />
          <Card
            song={"Power"}
            artist={"Kanye West"}
            image={
              "https://i.pinimg.com/originals/33/77/b4/3377b40b436e026b06713056cbd1aad0.jpg"
            }
          />
          <Card
            song={"Stronger"}
            artist={"Kanye West"}
            image={
              "https://i.pinimg.com/originals/04/7c/05/047c0554f3f636f4f96fd98fbfce101a.jpg"
            }
          />
        </FadeIn>

        <h1
          class="mb-4 mt-5 ml-5"
          style={{ color: "gray", alignSelf: "flex-start" }}
        >
          Drake
        </h1>
        <Card
          song={"God's Plan"}
          artist={"Drake"}
          image={
            "https://i.pinimg.com/originals/e3/f2/0f/e3f20f0243a2102b5d8de3c7d44bcc14.jpg"
          }
        />
        <Card
          song={"One Dance"}
          artist={"Drake"}
          image={
            "https://upload.wikimedia.org/wikipedia/en/a/af/Drake_-_Views_cover.jpg"
          }
        />
        <Card
          song={"Hotline Bling"}
          artist={"Drake"}
          image={
            "https://www.billboard.com/files/styles/article_main_image/public/media/drake-hotline-bling-video-still-2015-billbaord-650.jpg"
          }
        />
        <Card
          song={"Back to Back"}
          artist={"Drake"}
          image={"https://i.ytimg.com/vi/XHYG2crLab4/hqdefault.jpg"}
        />
      </div>
    </div>
  );
}
