import React, { Component, Fragment } from 'react'
// import MoreButton from '../components/MoreButton'
import BrewDetails from '../components/BrewDetails'
import BrewSummery from '../components/BrewSummery'
import Navigation from '../components/Navigation'

export default class BarContainer extends Component {


    constructor() {
        super();
        this.state = {
            brews: [],
            selected: '',
            page: 1,
            city: ''
        }
        // .then(x => console.log(this.state.brews))
        this.fetchBreweryList(0)
    }

    fetchBreweryList(pageChange) {
        var newPage = this.state.page + pageChange
        var url = `https://api.openbrewerydb.org/breweries?page=${newPage}&per_page=50`
        if (this.state.city.length > 0) {
            url += `&by_state=${this.state.city}`
        }
        fetch(url)
            .then(res => res.json())
            .then(breweryPage => {
                if (breweryPage.length > 0 && newPage > 0) {
                    this.setState((prevState) => {
                        return {
                            brews: breweryPage,
                            page: prevState.page + pageChange,
                        }
                    })
                }
            })
    }

    loadBrew = (deets) => {
        this.setState({ selected: deets })
    }

    unloadBrew = () => {
        this.setState({ selected: '' })
    }

    navigate = (change) => {
        this.fetchBreweryList(change)
    }

    updateCity = (e) => {
        let city = e.target.value.toLowerCase();
        city = city.split(' ').join('_')
        if (e.target.value.length > 0) {
            this.setState({ city: city })
            this.fetchBreweryList(0)
        }
    }

    details = () => {
        if (this.state.selected === '') {
            return <div>
                <input type="text" id='input' placeholder='City' onChange={this.updateCity} />
                <Navigation navigate={this.navigate} page={this.state.page} />
                {this.state.brews.map(brew => <BrewSummery loadBrew={this.loadBrew} key={brew.id} {...brew} />)}
                <Navigation navigate={this.navigate} page={this.state.page} />
            </div>
        } else {
            return <BrewDetails {...this.state.selected} unloadBrew={this.unloadBrew} />
        }
    }

    render() {
        return (
            <Fragment>
                {this.details()}
            </Fragment >
        )
    }
}
