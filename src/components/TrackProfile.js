import React, { Component } from 'react';

class TrackProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            pic: '',
            link: '',
            product: '',
            genre: '',
            description: '',
            price: '',
            currency: '',
            country: '',
        }
    }

    loadTrack(url){
      fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const track = json.results[0];
      this.setState({
            name: track.trackName || track.collectionName,
            pic: track.artworkUrl100,
            link: track.trackViewUrl,
            product: track.kind || track.collectionType,
            genre:  track.primaryGenreName,
            description: track.longDescription,
            price: track.collectionPrice,
            currency: track.currency,
            country: track.country,
        })
    })
    .catch(err => {
          console.log(err)
      })
    } 

    componentWillMount(){       
      const currentId = this.props.location.pathname.substr(1);
      this.loadTrack(`${this.props.baseURL}/?id=${currentId}`);
    }

    render(){
        return(           
            <div className="trackProfile">
                <div className="trackName"><h1>{this.state.name}</h1></div>
                <div className="trackCard">
                    <div className="trackPic">
                        <a href={this.state.link}><img alt={this.state.name} src={this.state.pic} /></a>
                    </div>
                    <div className="trackInfo">
                        <div>{`(${this.state.product}, ${this.state.country})`}</div>
                        <div className="desc">{this.state.description}</div>
                        <div className="genre">{`Genre: ${this.state.genre}`}</div>
                        <div>{`Price: ${this.state.price} ${this.state.currency}`}</div>
                    </div>
                </div>       
            </div>    
                
        )
    }
}

export default TrackProfile;