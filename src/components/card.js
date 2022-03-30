import React from "react"; 

 
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "Birds", description: "", cards: []};  
      }

    render() {
      return(
          <>
           {this.props.nameX}
          </>
      ) 
    }
}

export default Card 