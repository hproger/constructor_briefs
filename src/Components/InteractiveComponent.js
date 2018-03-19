import  React, { Component } from 'react';
// import { sortable } from 'react-sortable';

// class Item extends Component {
//     render() {
//         return (
//             <li {...this.props}>
//                 {this.props.name}
//             </li>
//         )
//     }
// }


// var SortableItem = sortable(Item);

class InteractiveComponent extends Component {

    // onSortItems = (items) => {
    //     this.setState({
    //         items: items
    //     });
    // }
    selectElement = (type, options) => {
        let elementForm;
        if (type === 'text'){
            elementForm = <input type={type} name={type} />;
        }
        else if (type === 'checkbox'){
            elementForm = <input type={type} name={type} />;
        }
        else if (type === 'radio'){
            elementForm = <input type={type} name={type} />;
        }
        else if (type === 'textarea'){
            elementForm = <textarea name={type} cols={options.cols} rows={options.rows} ></textarea>;
        }
        else if (type === 'select'){
            elementForm = <select name={type} ></select>;
        }

        return(
            elementForm
        );
    }

    render(){
        return(
            <div className='form-field-wrap'>
                <div className="field-handle"></div>
                <div className="form-field">
                    <div className="title">{this.props.name}</div>
                    <div className="body">{this.selectElement(this.props.type, this.props.options)}</div>
                </div>
            </div>
        );
    }
}

export default InteractiveComponent;