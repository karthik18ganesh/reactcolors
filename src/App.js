import React,{Component} from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import {generatePalette} from './colorHelper';
import {Route,Switch} from 'react-router-dom';
class App extends Component {
  findPalette(id){
   return seedColors.find(function(palette){
      return palette.id === id;
    });
  }
  render(){
  return (

    <Switch>
      <Route exact path="/" render={()=>{return <h1>Palette List</h1>}}/>
  <Route exact path="/palette/:id" render={(routeprops)=><Palette palette={generatePalette(this.findPalette(routeprops.match.params.id))}/>}/>
    </Switch>
    // <div className="App">
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div>
  );
}
}
export default App;
