import React, { Component } from "react";
import "../css/HeadingTab.css";
import Menu from "@material-ui/core/Menu";
import SwipeableViews from "react-swipeable-views";
import { Paper, Tabs, Tab, GridList,GridListTile, GridListTileBar,IconButton,Icon} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import classNames from 'classnames';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var headings = [
  {
    header: "Mobile",
    subitems: [
      {
        name: "Android",
        projects: [{ projectname: "Project 1",githublink:"https://github.com/game-dev-plus", imagelinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] },
      { projectname: "Project 1", githublink:"https://github.com/game-dev-plus",imagelinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] },
      { projectname: "Project 1", githublink:"https://github.com/game-dev-plus",imagelinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] },
      { projectname: "Project 1", githublink:"https://github.com/game-dev-plus",imagelinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] },
      { projectname: "Project 1", githublink:"https://github.com/game-dev-plus",imagelinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] },
    { projectname: "Project 1",githublink:"https://github.com/game-dev-plus", imagelinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "iOS",
        projects: [{ projectname: "Project 2",githublink:"https://github.com/game-dev-plus", imagelinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "Xamarin",
        projects: [{ projectname: "Project 3", githublink:"https://github.com/game-dev-plus",imagelinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "React Native",
        projects: [{ projectname: "Project 4", githublink:"https://github.com/game-dev-plus",imagelinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      }
    ]
  },
  {
    header: "Backend",
    subitems: [
      {
        name: "Nodejs",
        projects: [{ projectname: "Project 5",githublink:"https://github.com/game-dev-plus", imagelinks: [""] }]
      },
      {
        name: "Docker",
        projects: [{ projectname: "Project 6",githublink:"https://github.com/game-dev-plus", imagelinks: [""] }]
      },
      {
        name: "MSSQL",
        projects: [{ projectname: "Project 7",githublink:"https://github.com/game-dev-plus", imagelinks: [""] }]
      },
      {
        name: "MySQL",
        projects: [{ projectname: "Project 8",githublink:"https://github.com/game-dev-plus", imagelinks: [""] }]
      }
    ]
  },
  {
    header: "FrontEnd",
    subitems: [
      {
        name: "HTML",
        projects: [{ projectname: "Project 9",githublink:"https://github.com/game-dev-plus", imagelinks: [""] }]
      },
      {
        name: "CSS",
        projects: [{ projectname: "Project 10",githublink:"https://github.com/game-dev-plus", imagelinks: [""] }]
      },
      {
        name: "JavaScript",
        projects: [{ projectname: "Project 11",githublink:"https://github.com/game-dev-plus", imagelinks: [""] }]
      },
      {
        name: "React Js",
        projects: [{ projectname: "Project 12",githublink:"https://github.com/game-dev-plus", imagelinks: [""] }]
      }
    ]
  }
];
const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
};
function TabContainer({ children, dir, index,chipSelected }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      <div className={styles.root}>
        {headings[index].subitems.map((items, subindex) => (
          <Chip
            label={items.name}
            clickable
            key={subindex}
            className="chip"
            onClick={event => chipSelected(index, subindex)}
          />
        ))}
      </div>
    </Typography>
  );
}

export default class HeadingTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedSubIndex:0,
      projectsToRender:headings[0].subitems[0].projects,
    };
  }

  handleChange = (event, value) => {
    this.setState({ selectedIndex: value });
  };

  handleChangeIndex = index => {
    this.setState({ selectedIndex: index });
  };

  handleChipSelected=(selectedIndex,selectedSubindex)=>{
    this.setState({
      selectedIndex:selectedIndex,
      selectedSubIndex:selectedSubindex,
      projectsToRender:headings[selectedIndex].subitems[selectedSubindex].projects
    });
  }
  render() {
    var swipeDir = "x";
    return (
      <Paper className="tabHeader">
        <Tabs
          onChange={this.handleChange}
          value={this.state.selectedIndex}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >
          {headings.map((heading, index) => (
            <Tab key={index} label={<span className="tabHeaderFont">{heading.header}</span>} />
          ))}
        </Tabs>
        <SwipeableViews
          axis={swipeDir}
          index={this.state.selectedIndex}
          onChangeIndex={this.handleChangeIndex}>
          {headings.map((heading, index) => (
            <TabContainer key={index} dir={swipeDir} index={index} chipSelected={this.handleChipSelected}/>
          ))}
        </SwipeableViews>

           <GridList cellHeight={300} spacing={20} cols={3}>
            {this.state.projectsToRender.map((project,index)=>(
              <GridListTile key={index}>
              <img src={project.imagelinks} alt={project.projectname} />
              <GridListTileBar
                title={project.projectname}
                actionIcon={
                  <IconButton>
                    <a href={project.githublink} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                  </IconButton>
                }
              />
            </GridListTile>
            ))}
          </GridList>

      </Paper>
    );
  }
}
