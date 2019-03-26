import React, { Component } from "react";
import Input from "./Input";

// fields: an array of objects with name and field properties and outputs an Input for each
// className: so you can style it from its parent
// button: the text for the submit button
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: props.fields.slice(),
        }
        this.submit = this.submit.bind(this);
    }
    
    change(e, i) {
        const article = this.state.article.slice();
        article[i].value = e.target.value;
        this.setState({ article: article });
    }

    disabled() {
        return !this.state.article.every(({ value }) => value);
    }
    submit(e) {
        e.preventDefault();
        const data = this.state.article.reduce((data, { name, value }) => {
            data[name] = value;
            return data;
        }, {});
        console.log(data);    

        this.props.onSubmit(data);
    }

    render() {
        const { className, button } = this.props;
        return (
            <form onSubmit={ this.submit } className={ "form" + (className ? " " + className : "") } >
                { this.state.article.map(({ name, label, value }, i) => (
                    <Input
                        key={ i }
                        value={ value }
                        name={ name }
                        label={ label }
                        onChange={ e => this.change(e, i) }
                    />
                ))}
                <button disabled={ this.disabled() } className="btn btn-success">{ button }</button>
            </form>
        );
    }
} 

export default Form;
