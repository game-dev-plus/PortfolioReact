import React, { Component } from "react";
import "../css/HeadingTab.css";
import SwipeableViews from "react-swipeable-views";
import { Paper, Tabs, Tab, GridList,GridListTile, GridListTileBar,IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

var headings = [
  {
    header: "Mobile",
    subitems: [
      {
        name: "Android",
        projects: [{ projectName: "Project 1",githubLink:"https://github.com/game-dev-plus", imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] },
      { projectName: "Project 1", githubLink:"https://github.com/game-dev-plus",imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] },
      { projectName: "Project 1", githubLink:"https://github.com/game-dev-plus",imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] },
      { projectName: "Project 1", githubLink:"https://github.com/game-dev-plus",imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] },
      { projectName: "Project 1", githubLink:"https://github.com/game-dev-plus",imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] },
    { projectName: "Project 1",githubLink:"https://github.com/game-dev-plus", imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "iOS",
        projects: [{ projectName: "Project 2",githubLink:"https://github.com/game-dev-plus", imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "Xamarin",
        projects: [{ projectName: "Project 3", githubLink:"https://github.com/game-dev-plus",imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "React Native",
        projects: [{ projectName: "Project 4", githubLink:"https://github.com/game-dev-plus",imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      }
    ]
  },
  {
    header: "Backend",
    subitems: [
      {
        name: "Nodejs",
        projects: [{ projectName: "Project 5",githubLink:"https://github.com/game-dev-plus", imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "Docker",
        projects: [{ projectName: "Project 6",githubLink:"https://github.com/game-dev-plus", imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "MSSQL",
        projects: [{ projectName: "Project 7",githubLink:"https://github.com/game-dev-plus", imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "MySQL",
        projects: [{ projectName: "Project 8",githubLink:"https://github.com/game-dev-plus", imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      }
    ]
  },
  {
    header: "FrontEnd",
    subitems: [
      {
        name: "HTML",
        projects: [{ projectName: "Project 9",githubLink:"https://github.com/game-dev-plus", imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "CSS",
        projects: [{ projectName: "Project 10",githubLink:"https://github.com/game-dev-plus", imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "JavaScript",
        projects: [{ projectName: "Project 11",githubLink:"https://github.com/game-dev-plus", imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
      },
      {
        name: "React Js",
        projects: [{ projectName: "Project 12",githubLink:"https://github.com/game-dev-plus", imageLinks: ["https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"] }]
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
        {headings[index].subitems.map((items, subIndex) => (
          <Chip
            label={items.name}
            clickable
            key={subIndex}
            className="chip"
            onClick={event => chipSelected(index, subIndex)}
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
      width: 0, 
      height: 0,
      projectsToRender:headings[0].subitems[0].projects,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  handleChange = (event, value) => {
    this.setState({ selectedIndex: value });
  };

  handleChangeIndex = index => {
    this.setState({ selectedIndex: index });
  };

  handleChipSelected=(selectedIndex,selectedSubIndex)=>{
    this.setState({
      selectedIndex:selectedIndex,
      selectedSubIndex:selectedSubIndex,
      projectsToRender:headings[selectedIndex].subitems[selectedSubIndex].projects
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
   
        <Typography component="div" dir={swipeDir} style={{ padding: 8 * 3 }}>
           <GridList cellHeight={300} spacing={20} cols={(this.state.width>800)?3:(this.state.width>500)?2:1}>
            {this.state.projectsToRender.map((project,index)=>(
              <GridListTile key={index}>
              <img src={project.imageLinks} alt={project.projectName} />
              <GridListTileBar
                title={project.projectName}
                actionIcon={
                  <IconButton>
                    <a href={project.githubLink} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="icon" icon={faGithub} /></a>
                  </IconButton>
                }
              />
            </GridListTile>
            ))}
          </GridList>
          </Typography>
      </Paper>
    );
  }
}
