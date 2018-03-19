import React, { Component } from 'react';
import DraggableControl from './DraggableControl';

class FormControls extends Component {

    render(){

        return (
            <div className='draggable-components formControls'>
                {this.props.listControls.map((item, index) => (
                    <DraggableControl item={item} key={index} />
                ))}
            </div>
        );
    }

}

export default FormControls;