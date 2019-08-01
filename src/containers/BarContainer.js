import React, { Component, Fragment } from 'react'
// import MoreButton from '../components/MoreButton'
import BrewDetails from '../components/BrewDetails'
import BrewSummery from '../components/BrewSummery'

export default class BarContainer extends Component {
    state = {
        page: 0
    }

    constructor() {
        super();
        this.state = {
            brews: [],
            selected: '',
            page: 1,
        }

        fetch(`https://api.openbrewerydb.org/breweries?page=${this.state.page}&per_page=50&by_state=new_york`)
            .then(res => res.json())
            .then(breweryPage => {
                this.setState({ brews: breweryPage })
            })
        // .then(x => console.log(this.state.brews))
    }

    loadBrew = (deets) => {
        this.setState({ selected: deets })
    }

    unloadBrew = () => {
        this.setState({ selected: '' })
    }

    details = () => {
        if (this.state.selected === '') {
            return this.state.brews.map(brew => {
                return <BrewSummery loadBrew={this.loadBrew} key={brew.id} {...brew} />
            })
        } else {
            return <BrewDetails {...this.state.selected} unloadBrew={this.unloadBrew} />
        }
    }

    render() {
        return (
            <Fragment>
                <div className="brewBody">
                    {this.details()}
                </div>
            </Fragment>
        )
    }
}
