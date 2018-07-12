import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
           <div style={{width: '100%', margin: 'auto'}}> 
           <Grid className = "landing-grid">
           <Cell col={12}>
           <img 
           src="/images/Raichel.jpg"
           alt="Raichel"
           className="image"
           />
           <div className="banner-text">
           <h1>Full Stack Web Developer</h1>

           <hr />
           <p>HTML/CSS | Bootstrap | Javascript | NodeJS | MySQL | Express | MongoDB | React</p>
           <div className="social-links">
           <a href="mailto:raicheljohn28@gmail.com" rel="noopener noreferrer" target="_blank">
           <i className= "fa fa-envelope-o" aria-hidden="true" />
           </a>

           <a href="https://www.linkedin.com/in/raichel-mary-john-47a633152/" rel="noopener noreferrer" target="_blank">
           <i className= "fa fa-linkedin-square" aria-hidden="true" />
           </a>

            <a href="https://github.com/raicheljohn28" rel="noopener noreferrer" target="_blank">
           <i className= "fa fa-github-square" aria-hidden="true" />
           </a>

            <a href="https://stackoverflow.com/" rel="noopener noreferrer" target="_blank">
           <i className= "fa fa-stack-overflow" aria-hidden="true" />
           </a>

           </div>
           </div>
           </Cell>
           </Grid>
           
           </div>
        )
    }
}

export default Landing;