import React, { Component } from 'react';
import ScriptTag from 'react-script-tag';
 
class Demo extends Component {
 
    render() {
        return (<ScriptTag  type="text/javascript" src="./calculator.js" />);
    }
}

export default Demo;