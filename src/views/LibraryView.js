import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LibraryView extends Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const response = await axios.get('http://localhost:4040/books');
    console.log(response.data);

    this.setState({
      books: response.data,
    });
  }

  // используем match.url для вложенной навигации
  // используем match.path для создания вложенных маршрутов

  render() {
    return (
      <>
        <ul>
          {this.state.books.map(book => {
            return (
              <li key={book.id}>
                <Link to={`${this.props.match.url}/${book.id}`}>
                  {book.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default LibraryView;
