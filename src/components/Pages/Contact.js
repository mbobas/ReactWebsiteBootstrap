import React, { Component} from 'react';
import Field from '../Common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

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
                <form onSubmit={this.props.handleSubmit} name="sentMessage" novalidate="novalidate" >
                    <div className="row">

                   {fields.sections.map((section, sectionIndex) => {
                       console.log("Rendering section", sectionIndex, "with", section);
                       return (
                            <div className="col-md-6" key={sectionIndex}>
                            {section.map((field, i) => {
                                return <Field 
                                {...field} 
                                key={i} 
                                value={this.props.values[field.name]}
                                name={field.name}
                                onChange={this.props.handleChange}
                                onBlur={this.props.handleBlur}
                                touched={(this.props.touched[field.name])}
                                errors={this.props.errors[field.name]}
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

//wrapping Components is a kind of "decorator your component" before export.
export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'CCome on bro. your name shopuld be longer').required('You must give us your name'),
        email: Yup.string().email('Please put the correct email').required('We need your email'),
        phone: Yup.string()
            .min(9, 'Please provide your 9 digit phone number.')
            .max(15, 'Your phone number is to loong.')
            .required('We need you phon numer bro.'),
        message: Yup.string()
            .min(500, 'To short message.')
            .required('Message is required.')

    }),

    handleSubmit: (values, {setSubmitting}) => {
        console.log("VALUES", values);
        alert("You've Submitted the form", JSON.stringify(values));
    }

})(Contact);
