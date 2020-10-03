import React,{Component} from 'react';





const active = {
    border: '5px solid red'
}
  


class Header extends Component {
    state = {
        active: active,
        keywords: ''
    }

    inputChange(e) {
        const {active} = this.state
        let value = e.target.value === '' ? active : 'not-active';
            this.setState({
            active:value,
            keywords: e.target.value
        })
    }

    buttonClick(){
        this.setState({
            count: this.state.count+1
        })
       
    }

    render(){     
    return (
            <header style={this.state.active }>
                <div className="logo">Logo</div>
                <input type='number'
                  onChange={(e)=>this.inputChange(e)}  
                    /> 
                 <button onClick={() => this.buttonClick()}>Increment</button> 
                 {this.state.count}
            </header>
            );
          }
    }
  

export default Header;
