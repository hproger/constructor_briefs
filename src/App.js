import React, { Component } from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import './App.css';

import TargetComponent from './Components/TargetComponent';
import FormControls from './Components/FormControls';

const listControls = [
    { id: 1, name: 'Строка ввода', type: 'text', options:{} },
    { id: 2, name: 'Галочка', type: 'checkbox', options:{} },
    { id: 3, name: 'Радио кнопка', type: 'radio', options:{} },
    { id: 4, name: 'Область ввода', type: 'textarea', options:{ rows: '5', cols: '30' } },
    { id: 5, name: 'Выпадающий список', type: 'select', options:{ optionsSel: [
        { val: 'value-1', text: 'value-1' },
        { val: 'value-2', text: 'value-2' },
        { val: 'value-3', text: 'value-3' },
        { val: 'value-4', text: 'value-4' },
    ] } },
]

class App extends Component {
  render() {
    return (
      <div className="App">
          <FormControls listControls={listControls}/>
          <TargetComponent />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
