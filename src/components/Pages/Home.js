import React, {Component} from 'react';
import Header from '../Common/Header';
import image from '../assets/img/header-bg.jpg';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';

//Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
//import About from './About';

class Home extends Component {
    render(){
        return(
            <div>
                <Header 
                title="Witaj na stronie"
                subtitle="iT'S NICE TO MEET YOU"
                buttonText="Tell me more"
                link="/services"
                showButton={true}
                image={image}
                />

                <Services />
                <Portfolio />
                <Timeline />
                <Team />

            </div>
        );
    }
}

export default Home;