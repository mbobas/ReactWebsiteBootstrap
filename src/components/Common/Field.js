import React, {Component} from 'react';

//Field is the Component to faster create fields in ContactForm like input, textarea etc. 

class Field extends Component {
    render(){
        return(
            <div className="form-group">
                {this.props.elementName === 'input' ?
                <input 
                    className="form-control" 
                    id={this.props.name} 
                    type={this.props.type} 
                    placeholder={this.props.placeholder}
                    required="required" 
                    data-validation-required-message="Please enter your name."
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}

                />
                :
                <textarea
                    className="form-control" 
                    id={this.props.name}  
                    placeholder={this.props.placeholder} 
                    required="required" 
                    data-validation-required-message="Please enter a message."
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                
                />
                }
                <p className="help-block text-danger"></p>
                {(this.props.touched && this.props.errors) &&
                <span className="span-contact">{this.props.errors}</span>
                }
            </div>

        )
    }
}

export default Field;