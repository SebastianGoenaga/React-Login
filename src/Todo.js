import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
          <h2>{this.props.text} {this.props.priority} {this.props.dueDate.format('DD-MM-YYYY')}</h2>
	//Do not forget to add the other properties of your TODO!
        );
    }

}
