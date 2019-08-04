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
        // .then(x => console.log(this.state.brews))
        this.fetchBreweryList(0)
    }

    fetchBreweryList(pageChange) {
        var newPage = this.state.page + pageChange
        fetch(`https://api.openbrewerydb.org/breweries?page=${newPage}&per_page=50&by_state=new_york`)
            .then(res => res.json())
            .then(breweryPage => {
                this.setState((prevState) => {
                    return {
                        brews: breweryPage,
                        page: prevState.page + pageChange,
                    }
                })
            })
    }

    loadBrew = (deets) => {
        this.setState({ selected: deets })
    }

    unloadBrew = () => {
        this.setState({ selected: '' })
    }

    nextPage() {
        this.fetchBreweryList(1)
        // console.log(this.state.page)
        // this.setState(prevState => {
        //     return { page: prevState.page + 1 }
        // })
    }

    prevPage() {
        console.log('Prev')
        this.fetchBreweryList(-1)
        //     if (this.state.page > 1) {
        //         this.fetchBreweryList(-1)
        //         }
        //     }
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
                <div className="pageButtons">
                    <button onClick={() => this.prevPage()}>Last Page</button>
                    <button onClick={() => this.nextPage()}>Next Page</button>
                </div>
                <div className="brewBody">
                    {this.details()}
                </div>
            </Fragment >
        )
    }
}
