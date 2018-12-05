import React, { Component } from 'react'
import _ from 'lodash'
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService'
import List from './common/listGroup' 
import MoviesTable from './moviesTable'
import Pagination from './common/pagination' 
import { paginate } from './utils/paginate'
class Movies extends Component {
    state = {
      movies: [],
      genres: [],
      pageSize: 4,
      currentPage: 1,
      sortColumn: {path: 'title', order: 'asc'}
    }
    componentDidMount () {
     this.setState({movies: getMovies(), genres: getGenres()})
    }
    handleDelete = (movie) => {
     const movies = this.state.movies.filter(m => m._id !== movie._id)
      this.setState({movies})
    }
    handleLike = (movie) => {
      console.log('like', movie)
    }
    handlePageChange = page => {
      this.setState({currentPage: page})
    }
    handleGenre = genre => {
      this.setState({selectedGenre: genre})
    }
    handleSort = path => {
      this.setState({sortColumn: {path, order: 'asc'}})
    }
    render() {
        const {length} = this.state.movies
        const {currentPage, pageSize, movies: allMovies, selectedGenre, sortColumn} = this.state
        if (length === 0) return <p>No movies in the database</p>
        const filtered = selectedGenre ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const movies = paginate(sorted, currentPage, pageSize)
        return (
            <div className="row">
            <div className="col-2">
              <List items={this.state.genres} onItemSelect={this.handleGenre} selectedItem={this.state.selectedGenre}/>
            </div>
            <div className="col">
            <p>Showing {filtered.length} movies today</p>
            <MoviesTable movies={movies} onLike={this.handleLike} onDelete={this.handleDelete} onSort={this.handleSort} />
            </div>
              <Pagination itemCount={filtered.length} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} currentPage={this.state.currentPage}/>
            </div>
        )
    }
}

export default Movies
