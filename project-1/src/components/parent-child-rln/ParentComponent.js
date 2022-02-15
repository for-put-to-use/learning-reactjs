import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }

      // this need to be binded whenever used in methods
      this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        // alert('Hello '+this.state.parentName);
        alert(`Hello ${this.state.parentName} from ${childName}`);//ES6 Javascript Feature - template literals
    }

    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent