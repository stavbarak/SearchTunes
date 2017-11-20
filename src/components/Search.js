import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import ResultsList from './ResultsList';

class Search extends Component {
   constructor(props){
    super(props);
    this.state = {
      query: '',
      resultItems: [],
      loaded: false
    }
  }
  search = () => {
    const FETCH_URL = `${this.props.baseURL}?term=${this.state.query}`;
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        resultItems: json.results,
        loaded: true
      })
    })
    .catch(err => {
          console.log(err)
      })
  }

  render () {
    return (
      <div>
      <FormGroup>
          <InputGroup>
            <FormControl 
              type="text" 
              placeholder="Search for artist" 
              value={this.state.query}
              onChange={(event) => {this.setState({query: event.target.value})}} 
              onKeyPress={(event)=> {
                  if(event.key==='Enter') this.search();
                }
              }
            />           
          <InputGroup.Addon onClick={() => this.search()}>
            <Glyphicon glyph="search"></Glyphicon>
          </InputGroup.Addon>
          </InputGroup> 
        </FormGroup>

        {this.state.loaded ? <ResultsList listOfResults={this.state.resultItems}/> : ''}
        </div>
    )
  }
}

export default Search;
