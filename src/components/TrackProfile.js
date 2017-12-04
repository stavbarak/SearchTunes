import React, { Component } from 'react';
import TrackPlay from './TrackPlay';

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
            previewUrl: '',
            playingUrl: '',
            playing: false
        }
    }

    loadTrack(url){
      fetch(url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const track = json.results[0];
      console.log(track);
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
            previewUrl: track.previewUrl,
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

    playAudio = (previewUrl) => {
        let audio = new Audio(previewUrl);
        if(!this.state.playing){
            audio.play();
            this.setState({
                playingUrl: this.state.previewUrl,
                playing: true,
                audio
            })           
        }
        else {
            if(this.state.playingUrl === previewUrl){
                this.state.audio.pause();
                this.setState({
                    playing: false
                })
            }
            else{
                 this.state.audio.pause();
                 audio.play();
                 this.setState({
                    playingUrl: this.state.previewUrl,
                    playing: true,
                    audio
                })
            }
        }
        
    }

    render(){
        return(           
            <div className="trackProfile">
                <div className="trackName"><a href={this.state.link}><h1>{this.state.name}</h1></a></div>
                <div className="trackCard">
                    <div className="trackPic" onClick={()=> this.playAudio(this.state.previewUrl)}>
                        <img alt={this.state.name} src={this.state.pic} />
                          <TrackPlay playingUrl={this.state.playingUrl} previewUrl={this.state.previewUrl}/> 
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