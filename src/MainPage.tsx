import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import './MainPage.css';
import FirstPage from './components/FirstPage/FirstPage';
import Works from './components/Works/Works';
import Cards from './components/Cards/Cards';
import ContactForm from './components/ContactForm/ContactForm';


interface Props{

}

interface State{
    offsetForSc1: any;
    offsetForSc2: any;
    offsetForSc3: any;
    offsetForSc4: any;
}

class MainPage extends Component<Props, State>{

    constructor(props: any){
        super(props)
        this.state = {
            offsetForSc1: null,
            offsetForSc2: null,
            offsetForSc3: null,
            offsetForSc4: null,
        }
    }

    componentDidMount() {

    }

        getOffsetsFromSctions1 = (Offset1: number) => {
            this.setState({offsetForSc1: Offset1})
            console.log(Offset1)
        }

        getOffsetsFromSctions2 = (Offset2: number) => {
            this.setState({offsetForSc2: Offset2})
            console.log(Offset2)
        }

        getOffsetsFromSctions3 = (Offset3: number) => {
            this.setState({offsetForSc3: Offset3})
            console.log(Offset3)
        }
        
        getOffsetsFromSctions4 = (Offset4: number) => {
            this.setState({offsetForSc4: Offset4})
            console.log(Offset4)
        }
        

    render() {

        return(

            <div >
                <NavBar offsetForSc1={this.state.offsetForSc1} offsetForSc2={this.state.offsetForSc2} offsetForSc3={this.state.offsetForSc3} offsetForSc4={this.state.offsetForSc4}  />
                <div id="section_1" style={{"height": "100vh"}}><FirstPage getOffsetsFromSctions={this.getOffsetsFromSctions1}/></div>
                <div id="section_2" style={{backgroundColor:'#f5f5f5'}}><Cards getOffsetsFromSctions={this.getOffsetsFromSctions2}/></div>
                <div id="section_3" style={{backgroundColor:'#f5f5f5', paddingTop: '4rem'}}><Works getOffsetsFromSctions={this.getOffsetsFromSctions3}/></div>
                <div className="bg-dark" id="section_4" ><ContactForm getOffsetsFromSctions={this.getOffsetsFromSctions4}/></div>
            </div>
        )
    }
}
export default MainPage;