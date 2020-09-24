import React from 'react';
import axios from 'axios';
import space_default from '../images/space_default.jpg'

export default class NasaPic extends React.Component {
    constructor(props){
        super(props);
        this.state = {pic_url: ""};
    }
    componentDidMount(){
        axios.get('https://api.nasa.gov/planetary/apod', {params: {api_key: 'CbAJPPepvmsgmVLNxZsaER0hat8epkD0fbfUiiEX'}})
            .then((response)=>{
                if(response.status === 200){
                    const pic_url = response.data.url;
                    this.setState({pic_url});
                }
                
            }).catch(error => {
                this.setState({space_default})
                console.log(error);
            });
    }

    render(){
        return(
            <div className='parallax-header' style={{backgroundImage: 'url('+this.state.pic_url+')', height: '100vh'}}/>
        )
    } 
}