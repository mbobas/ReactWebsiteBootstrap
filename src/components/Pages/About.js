import React, {Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/a.jpg';
import Timeline from '../Common/Timeline'

class About extends  Component {
render() {
    return(
          <div>
          <Header 
                title="About Us"
                subtitle="It's really a great strory"
                showButton={false}
                image={image}
                />  

          <Timeline />      

           </div>    
        
    )
}

}

export default About;