import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
//import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import { deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflowX: "hidden",
    maxHeight: 300,
    textAlign: "left"
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  },
  purple: {
    color: "#fff",
    backgroundColor: deepPurple[500]
  },
  listItem: { marginLeft: "12.5px" },
  subHeader: {
    marginTop: "15px",
    backgroundColor: "transparent"
  },
  subHeader2: {
    backgroundColor: "transparent"
  }
}));

export default function StickyExample() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      {[0, 1, 2, 3, 4].map(sectionId => (
        <li key={`section-${sectionId}`} className={classes.listSection}>
          <ul className={classes.ul}>
            <div
              className={
                sectionId !== 0 ? classes.subHeader : classes.subHeader2
              }
            >
              <Avatar className={classes.purple}>
                {sectionId === 0
                  ? "A"
                  : sectionId === 1
                  ? "B"
                  : sectionId === 2
                  ? "C"
                  : sectionId === 3
                  ? "D"
                  : "E"}
              </Avatar>
            </div>
            {[0, 1, 2].map(item => (
              <ListItem
                className={classes.listItem}
                key={`item-${sectionId}-${item}`}
              >
                <ListItemText
                  primary={`${
                    sectionId === 0
                      ? "A"
                      : sectionId === 1
                      ? "B"
                      : sectionId === 2
                      ? "C"
                      : sectionId === 3
                      ? "D"
                      : "E"
                  } ${item + 1}`}
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
