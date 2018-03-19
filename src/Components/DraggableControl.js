import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import {Types} from "../Types";

const controlsTarget = {

    // canDrag(props) {
    //     console.log('canDrag');
    //     return props.isReady;
    // },

    isDragging(props, monitor) {
        // console.log('dragging: ' + monitor.getItem().id);
        return monitor.getItem().id === props.id;
    },

    beginDrag(props, monitor, component) {
        // console.log('beginDrag');
        const item = { id: props.item.id, name: props.item.name, type: props.item.type, options: props.item.options };
        return item;
    },

    endDrag(props, monitor, component) {

        if (!monitor.didDrop()) {
            return;
        }

        // const item = monitor.getItem();

        // console.log('Is dropped: ' + item);

        // const dropResult = monitor.getDropResult();

        // console.log('Result: ' + dropResult);

    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}


class DraggableControl extends Component {

    render(){

        const { connectDragSource } = this.props;

        return connectDragSource(
            <div className='draggable-component'>
                {this.props.item.name}
            </div>
        );
    }

}

export default DragSource(Types.DRAGGABLE_ELEMENT, controlsTarget, collect)(DraggableControl);