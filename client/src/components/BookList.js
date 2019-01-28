import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';

// components
import BookDetails from './BookDetails';
import BookListElement from './BookListElement';

class BookList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }

    displayBooks(){
        let data = this.props.data;
        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
            return data.books.map(book => (
                <li key={ book.id }>
                    <BookListElement book={book} onClick={ (e) => this.selectBook(book) }/>
                </li>
            ));
        }
    }

    selectBook(book){
        this.setState({ selected: book.id });
    }

    render(){
        return(
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
                <BookDetails bookId={ this.state.selected } />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
