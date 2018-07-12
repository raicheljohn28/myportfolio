import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, CardText } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
    if(this.state.activeTab === 0) {
        return(
            <div className="projects-grid">
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176 px'}}>Book App</CardTitle>
            <CardText>
           A Book App created using MERN applications that allows Users to keep track of the books to read and what is read in the past. We can also add a synopsis to the books and update them.
    </CardText>
    <CardActions border>
    <Button colored><a href="https://github.com/raicheljohn28/MERN-Book-App" rel="noopener noreferrer" target="_blank">Github</a></Button>
    <Button colored><a href="https://warm-shelf-95592.herokuapp.com/"rel="noopener noreferrer" target="_blank">Heroku</a></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
   
    </CardMenu>
           </Card>

           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176 px'}}>Cats Clicky Game</CardTitle>
            <CardText>
            This app is a memory game with React. This project required me to break up my application's UI into components, manage component state, and respond to user events.
    </CardText>
    <CardActions border>
    <Button colored><a href="https://github.com/raicheljohn28/Click-Game" rel="noopener noreferrer" target="_blank">Github</a></Button>
    <Button colored><a href="https://cryptic-mountain-53371.herokuapp.com/" rel="noopener noreferrer" target="_blank">Heroku</a></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
   
    </CardMenu>
           </Card>

           </div>
        )
    } else if(this.state.activeTab === 1) {
        return(
            
             <div className="projects-grid">
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176 px'}}>News Scraper</CardTitle>
            <CardText>
            This is a web app that lets users view and leave comments on the latest news. It doesn't actually write any articles; instead, it uses Mongoose and Cheerio muscles to scrape news from another site.
    </CardText>
    <CardActions border>
    <Button colored><a href="https://github.com/raicheljohn28/News-Scraper" rel="noopener noreferrer" target="_blank">Github</a></Button>
    <Button colored><a href="https://safe-garden-87139.herokuapp.com/"rel="noopener noreferrer" target="_blank">Heroku</a></Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
  
    </CardMenu>
           </Card>
           
            </div>
        )
    } else if(this.state.activeTab === 2) {
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>kudozo</CardTitle>
             <CardText>
             A restaurant Rating and Review App to write your mind out of your favorite food places.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/Project-2" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://intense-journey-91293.herokuapp.com/"rel="noopener noreferrer" target="_blank">Heroku</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>Eat Da Burger</CardTitle>
             <CardText>
             This app is a burger logger with MySQL, Node, Express, Handlebars, and follows the MVC design pattern. Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-Burger" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://obscure-castle-75837.herokuapp.com/"rel="noopener noreferrer" target="_blank">Heroku</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>
       
             </div>
        )
    } else if(this.state.activeTab === 3) {
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>Friend Finder</CardTitle>
             <CardText>
             "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-FriendFinder" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://intense-anchorage-24191.herokuapp.com/"rel="noopener noreferrer" target="_blank">Heroku</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>
            </div>
        )
    } else if(this.state.activeTab === 4) {
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>Liri Node App</CardTitle>
             <CardText>
             LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-liri-node-app" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://drive.google.com/file/d/1p85DX2DSwqrfJ3rdESbG463gXiWQdpOl/view?usp=sharing"rel="noopener noreferrer" target="_blank">Video</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>
            </div>
        )
    } else if(this.state.activeTab === 5) {
        return(
            <div className="cards">
            <Card shadow={3} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>Divvy Up</CardTitle>
             <CardText>
            A basic shopping cart to compare the prices of products you want to purchase. Uses Walmart and Best Buy API's to display the product list.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-Project_1" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://raicheljohn28.github.io/raicheljohn28-Project_1/"rel="noopener noreferrer" target="_blank">io</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>GIF'S in Action</CardTitle>
             <CardText>
             Uses the GIPHY API to make a dynamic web page and uses JavaScript, jQuery to change the HTML of the site.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-GifTastic1" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://raicheljohn28.github.io/raicheljohn28-GifTastic1/"rel="noopener noreferrer" target="_blank">io</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>

             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>Trivia Game</CardTitle>
             <CardText>
             Trivia game using JavaScript for the logic and jQuery to manipulate HTML.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-TriviaGame" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://raicheljohn28.github.io/raicheljohn28-TriviaGame/"rel="noopener noreferrer" target="_blank">io</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>
           

                         <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>Crystal Collector</CardTitle>
             <CardText>
            A Crystal Collector is a fun and interactive game for web browsers.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-week-4-game" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://raicheljohn28.github.io/raicheljohn28-week-4-game/"rel="noopener noreferrer" target="_blank">io</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>

                         <Card shadow={5} style={{minWidth: '450',marginTop: '8%'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>Star Wars RPG</CardTitle>
             <CardText>
             Interactive Web Game using jquery to attack and defend the Jedi's.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-reimagined-octo-adventure" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://raicheljohn28.github.io/raicheljohn28-reimagined-octo-adventure/"rel="noopener noreferrer" target="_blank">io</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>

                                     <Card shadow={5} style={{minWidth: '450',marginTop: '8%', marginLeft: '25px'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>Hangman</CardTitle>
             <CardText>
            A guessing game with the category of Animals and Birds.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-Hangman-Game" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://raicheljohn28.github.io/raicheljohn28-Hangman-Game/"rel="noopener noreferrer" target="_blank">io</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>
 
            </div>
        )
    } else if(this.state.activeTab === 6) {
        return(
            <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>Bootstrap Portfoloio</CardTitle>
             <CardText>
            Basic Portfolio using Bootstrap
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-Bootstrap-Portfolio1" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://raicheljohn28.github.io/raicheljohn28-Bootstrap-Portfolio1/"rel="noopener noreferrer" target="_blank">io</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>

            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>Responsive Portfolio</CardTitle>
             <CardText>
            Portfolio using Bootstrap which is responsive in mobile.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-Responsive-Portfolio" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://raicheljohn28.github.io/raicheljohn28-Responsive-Portfolio/"rel="noopener noreferrer" target="_blank">io</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
   
     </CardMenu>
            </Card>

 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
             <CardTitle style={{color: 'black', height: '176 px'}}>HTML/CSS Portfoloio</CardTitle>
             <CardText>
             Basic Portfolio using only HTML and CSS.
     </CardText>
     <CardActions border>
     <Button colored><a href="https://github.com/raicheljohn28/raicheljohn28-portfolio" rel="noopener noreferrer" target="_blank">Github</a></Button>
     <Button colored><a href="https://raicheljohn28.github.io/raicheljohn28-portfolio/"rel="noopener noreferrer" target="_blank">io</a></Button>
     </CardActions>
     <CardMenu style={{color: '#fff'}}>
     </CardMenu>
            </Card>
            </div>
        )
    }
}
    render() {
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId })} ripple>
            <Tab>React</Tab>
            <Tab>MongoDB</Tab>
            <Tab>MySQL</Tab>
            <Tab>Express</Tab>
            <Tab>NodeJS</Tab>
            <Tab>jquery/Javascript</Tab>
            <Tab>HTML/CSS</Tab>
            </Tabs>

            
            <Grid>
            <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>            
            </Cell>
            </Grid>
        
            
            </div>
        )
    }
}

export default Projects;