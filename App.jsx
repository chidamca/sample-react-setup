import React from 'react'

class App extends React.Component {
    render() {

        var myStyle = {
            fontSize: 100,
            color: '#FF0000'
        };

        var element = <div>          
                 <Content text="Hello world rendered from react" />
                 <SampleButton/>
        </div>;

        return (element);
    }
}

class SampleButton extends React.Component {

    handleClick() {
         alert('hello world clicked using react')
    }

    render() {
        var zbutton = <button onClick={this.handleClick} >{this.props.switch ? 'START' : 'STOP'}</button>

        return zbutton;
    }
}


class Content extends React.Component{
    render() {
        return (<div>{this.props.text}</div>);
    }

}

export default App;