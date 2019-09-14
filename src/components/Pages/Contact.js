import React, { Component} from 'react';
import Field from '../Common/Field';

//two arrays in one object
const  fields = {
    sections: [
                [ 
                    {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your name*'},
                    {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your email*'},
                    {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your phone number*'},
                ],
                [
                    {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Type your message*'}
                ]
            ]
} 




class Contact extends Component {
    constructor(props){
        super(props);

        this.state ={
            name: '',
            email: '',
            phone: '',
            message: ''
        }

    }

    submitForm = (e) => {
        e.preventDefault();
        alert("Form Submitted. Thank you very much!");
    }

    render(){
        return(
            
        <section className="page-section" id="contact">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <form name="sentMessage" novalidate="novalidate" onSubmit={e => this.submitForm(e)}>
                    <div className="row">

                   {fields.sections.map((section, sectionIndex) => {
                       console.log("Rendering section", sectionIndex, "with", section);
                       return (
                            <div className="col-md-6" key={sectionIndex}>
                            {section.map((field, i) => {
                                return <Field 
                                {...field} 
                                key={i} 
                                value={this.state[field.name]}
                                onChange={e => this.setState({
                                    [field.name]: e.target.value})}
                                />

                            })}
                            </div>
                       )
                   })}

                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                        <div id="success"></div>
                        <button 
                        id="sendMessageButton" 
                        className="btn btn-primary btn-xl text-uppercase" 
                        type="submit"
                        
                        >Send Message</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
  </section>
        )
    }
}

export default Contact;
