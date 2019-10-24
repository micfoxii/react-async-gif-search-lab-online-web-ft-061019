import React, { Component } from 'react'

import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {
    state = {
        gifs: []
    }

    render() {
        return(
            <div>
                <GifSearch fetchGifs={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    fetchGifs = (query = "dolphins") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&raiting=g&limit=3`)
        .then(resp => resp.json())
        .then(({data}) => {
            this.setState({gifs: data.map(gif=> ({url: gif.images.orginal.url }))})
        })
    }

    componentDidMount() {
        this.fetchGifs()
    }
}

export default GifListContainer