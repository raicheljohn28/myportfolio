import React, {Component} from 'react';
import { Grid, Cell, Footer, FooterSection } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
            <Grid>
            <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            <img src="/images/Raichel.jpg"
           alt="Raichel"
           style={{height: '200px'}} />
           </div>
           <h2 style={{paddingTop: '2em'}}>Raichel Mary John</h2>
           <h4 style={{color: 'grey'}}>MERN Developer</h4>
           <hr style= {{borderTop: '3px solid #833fb2', width: '50%'}}/>
           <p>Full Stack Web Developer specialized in building user interactive websites using HTML, CSS, JavaScript, jQuery, MongoDB, ReactJS. Being self-motivated I have completed my ITIL Certification and am a trained Hadoop Architect. Have a proven track record of being a team player and would leverage my experience to build web applications based on usability and user experience.</p>

           <hr style= {{borderTop: '3px solid #833fb2', width: '50%'}}/>

            <a className="res" href="/Raichel Mary John-Resume.docx" download="Raichel Resume">Download Resume</a>

            </Cell>
            <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
             <Education 
                startYear={2018}
                endYear={2018}
                schoolName="Rutgers University"
                department="Web Development Coding Bootcamp"
                schoolDescription="An intensive 24-week long boot camp dedicated to designing and building web applications. Skills learned consisted of HTML5, CSS3, Javascript, JQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js and ReactJS."
            />

              <Education 
                startYear={2008}
                endYear={2012}
                schoolName="P.B. College of Engineering"
                department="Information Technology"
                schoolDescription=""
            />
            
            <hr style={{borderTop:'3px solid #e22947'}} />

            <h2>Experience</h2>
  <Experience 
            startYear={2013}
            endYear={2015}
            jobName="Network Administrator"
            jobDescription="Managed connectivity issues for users, troubleshooting TeamViewer. Maintained records for issues, preparing daily and weekly reports. Contributed to discussions and prepared Quote to Vendor for Licenses knowledgeably. Oversaw Active Directory User Accounts, Groups, and Organizational Units, and handled creation and management of User Profiles including Roaming and Mandatory Profiles. Recorded and prioritized Tickets based on User issues on BMC Remedy. Integrated DHCP and DNS for Client and Server configurations. Performed troubleshooting of Desktop and Network related issues for end clients and users."
            />

               <Experience 
            startYear={2012}
            endYear={2012}
            jobName="Technical Support Executive"
            jobDescription="Addressed customer inquiries related to McAfee antivirus and performed troubleshooting within specified SLAs. Handled setup of McAfee for users, resolving software issues due to installation.Performed troubleshooting for software and Internet connectivity issues, remotely connecting to user’s
machines, providing customer guidance, and issuing service for systems under warranty. Ensured availability of support staff to resolve issues requiring manual intervention."
            />

 <hr style={{borderTop:'3px solid #e22947'}} />

 <h2>Skills</h2>
 <Skills 
    skill="ReactJS"
    progress={70}
 />

 <Skills 
    skill="MongoDB"
    progress={80}
 />

 <Skills 
    skill="jQuery"
    progress={75}
 />

<Skills 
    skill="NodeJS"
    progress={65}
 /> 

 <Skills 
    skill="mySql"
    progress={80}
 /> 

 <Skills 
    skill="Javascript"
    progress={70}
 /> 

 <Skills 
    skill="HTML/CSS"
    progress={80}
 /> 

 <hr style={{borderTop:'3px solid #e22947'}} />

 <h2>Certification</h2>
 <h4 style={{color: 'white', fontSize: '15px'}}>ITIL Foundation Level Professional</h4>
 <h4 style={{color: 'white', fontSize: '15px'}}>Hadoop Architect Training</h4>
 <h4 style={{color: 'white', fontSize: '15px'}}>Microsoft Certified IT Professional (MCITP)</h4>
 <h4 style={{color: 'white', fontSize: '15px'}}>Cisco Certified Design Associate(CCDA)</h4>

            </Cell>
            </Grid>

            <Footer size="mega">
           <FooterSection type="middle" className="foot">
           <p>Copyright © 2018</p>
           </FooterSection>
           </Footer> 

            </div>
        )
    }
}

export default Resume;