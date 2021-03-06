import React, { Component } from 'react';

class HabitAddForm extends Component {
    formRef =  React.createRef();
    inputRef = React.createRef();
    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    }

    render() {
        return (
            <form className="add-form" ref={this.formRef}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
                <button className="add-button" onClick={this.onSubmit}>add</button>
            </form>
        );
    }
}

export default HabitAddForm;