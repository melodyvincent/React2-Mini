import React, {Component} from 'react'


class Header extends Component {
    render() {
        console.log(this.props)
        return(
            <header>
                <h1>{this.props.name} Melodys Color Palette</h1>
                <input type='text'
                onChange={this.props.method} />
       
            </header>

        )
    }
}

export default Header