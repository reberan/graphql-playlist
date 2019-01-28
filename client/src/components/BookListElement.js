import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery, deleteBookMutation } from '../queries/queries';

class BookListElement extends Component {

    deleteBook(book){
        this.props.deleteBookMutation({
            variables: {
                id: book.id
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }

    render(){
        const { book } = this.props;
        return (
            <div>
                <span> { book.name } </span>
                &nbsp;
                <a onClick={ (e) => this.deleteBook(book)}> X </a>
            </div>
        );
    }
}

export default graphql(deleteBookMutation)(BookListElement);
