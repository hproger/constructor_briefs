import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Types } from '../Types';
import { DropTarget } from 'react-dnd';


import InteractiveComponent from './InteractiveComponent';

const targetSource = {

    canDrop(props, monitor) {
        const item = monitor.getItem();
        // console.log(item);
        return item;
    },

    hover(props, monitor, component) {

        const clientOffset = monitor.getClientOffset();
        const componentRect = findDOMNode(component).getBoundingClientRect();

        const isJustOverThisOne = monitor.isOver({ shallow: true });

        const canDrop = monitor.canDrop();
    },

    drop(props, monitor, component) {

        if (monitor.didDrop()) {
            return;
        }

        const item = monitor.getItem();

        return { moved: true };
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        items: monitor,
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    };
}

class TargetComponent extends Component {
    constructor(props){
        super(props);
        this.state = { items: [] };
    }
    componentWillReceiveProps(nextProps) {
        if (!this.props.isOver && nextProps.isOver) {
            //    если объект занесли над областью
        }

        if (this.props.isOver && !nextProps.isOver) {
            //    если объект отпустили в область
            let items = this.state.items;
            items.push(this.props.canDrop);
            this.setState({ items: items });
        }

        if (this.props.isOverCurrent && !nextProps.isOverCurrent) {

        }
    }

    render() {

        const { isOver, canDrop, items, connectDropTarget } = this.props;



        return connectDropTarget(
            <div className='targetBLock'>
                {/*{isOver && canDrop && <div className='green' />}*/}
                {/*{!isOver && canDrop && <div className='yellow' />}*/}
                {/*{isOver && !canDrop && <div className='red' />}*/}
                {this.state.items.map((item, index) =>
                    <InteractiveComponent key={index} name={item.name} type={item.type} options={item.options} />
                )}
            </div>
        );
    }
}

export default DropTarget(Types.DRAGGABLE_ELEMENT, targetSource, collect)(TargetComponent);