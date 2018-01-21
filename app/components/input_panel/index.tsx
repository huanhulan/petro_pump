import * as React from "react";
import {inputPanelInterface} from '../../types';
import LCD from '../LCD';
import Keypad from './keypad';

class InputPanel extends React.Component<inputPanelInterface,{}> {
    constructor(props: inputPanelInterface) {
        super(props);
    }

    shouldComponentUpdate() {
        return false;
    }

    onClick(key) {
        return this.props.sKeypad.send(key);
    }

    render() {
        return (
            <div>
                <LCD name="preset" cPresetLCD={this.props.cPresetLCD}/>
                <Keypad onClick={this.onClick.bind(this)}/>
            </div>
        )
    }
}

export default InputPanel;