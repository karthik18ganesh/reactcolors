import React, { Component } from 'react'
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './NavBar';
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
                <Navbar changeLevel={this.changeLevel} level={level}/>
                <div className="Palette-colors">{ColorBoxes}</div>
            </div>
        )
    }
}

export default Palette;
