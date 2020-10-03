import React from 'react';




class Footer extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props, '****')
    }
    render() {
    
        return (
            <footer style={{backgroundColor:'green'}}> 
                This is Footer {this.props.footerText}
            </footer>
        )
    }
}

export default Footer;