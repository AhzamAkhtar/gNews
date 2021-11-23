import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Element from './Element'
import Spinner from './Spinner'
export class Api extends Component {
    static defaultProps = {
        country: "in",
        pagesize: 8,
        category: "breaking-news"
    }
    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string,
    }
    articles = []

    constructor() {
        super()
        console.log("hrll")
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        console.log("cdm")
        //let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=097575c06ecd4bc4b550fae79a2bd131&pagesize=${this.props.pagesize}`
        const url=`https://gnews.io/api/v4/top-headlines?token=a3bd46c42dd12ae35906909a6c7b3556&country=${this.props.country}&lang=en`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState(
            {
                articles: parsedData.articles,
                loading: false
            })
        console.log(parsedData)
    }
    handlePrev = async () => {
        console.log("prev")
        let url = `https://gnews.io/api/v4/top-headlines?token=a3bd46c42dd12ae35906909a6c7b3556&country=${this.props.country}&lang=en`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handleNext = async () => {
        console.log("next")
        console.log("cdm")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {


        }
        else {
            let url = `https://gnews.io/api/v4/top-headlines?token=a3bd46c42dd12ae35906909a6c7b3556&country=${this.props.country}&lang=en`
            this.setState({ loading: true })
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className="container my-3 ">
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-3 my-4" key={element.url}>
                            <Element title={element.title ? element.title : ""} description={element.description ? element.description : ""} image={element.image} url={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-dark" onClick={this.handlePrev}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" class="btn btn-dark" onClick={this.handleNext}>NEXT &rarr; </button>
                </div>
                
            </div>

        )
    }
}

export default Api