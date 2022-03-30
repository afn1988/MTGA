import React from "react";
import axios from 'axios';
import Card from "./card";

 
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "Birds", description: "", cards: []}; 
      }

     getCard = async () => {
        axios.get(`https://api.magicthegathering.io/v1/cards?name=${this.state.name}`).then(res => {  
            const response = res.data  
            this.setState({cards: response.cards}) 
        })
        
    }

    inputchange = e => {
        this.setState({name: e.target.value})
    }

    render() {
      return(
          <>
            <input className="" value={this.state.name} onChange={this.inputchange}/>
            {this.state.name === 'Abel' && <div>XPTO</div>}
            <button onClick={this.getCard}>XPTO</button> 
            {this.state.cards && this.state.cards.map((card, index) => (  
             <>
                <Card nameX={card.name}/>
                <div>{card.manaCost}</div> 
                <img src={card.imageUrl}/>
             </>
            ))}
          </>
      ) 
    }
}

export default Welcome 