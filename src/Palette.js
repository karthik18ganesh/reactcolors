import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';
export class Palette extends Component {
    constructor(props){
        super(props);
        this.state={
            level:500
        }
    }
    changeLevel = (newLevel)=>{
        console.log(newLevel);
        this.setState({level:newLevel});
    }
    render() {
        console.log(this.props.palette);
        const {colors} = this.props.palette;
        const {level} = this.state;
        const ColorBoxes = colors[level].map(color =>(
            <ColorBox background={color.rgba} name={color.name} />
        ));
        return (
            <div className="Palette">
                <div className="slider">
                <Slider defaultValue={this.state.level} min={100} onAfterChange={this.changeLevel} max={900} step={100}/>
                </div>
                <div className="Palette-colors">{ColorBoxes}</div>
            </div>
        )
    }
}

export default Palette;
