import Card from "./Card";
import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            selectedAuthors: [], 
            books: [], 
            authors: [],
            initBooks: []
        };

        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount() {
        var _this = this;
        this.callApi()
          .then(res => {    
            var listBooks = res.express;
            let listAuthor = [];

            listBooks.map(book => {
                if (listAuthor.indexOf(book.author) === -1) {
                    listAuthor.push(book.author)
                }
            });

            _this.setState({books: listBooks, authors: listAuthor, initBooks: listBooks.slice(0)});
          })
          .catch(err => console.log(err));
      }
    
    callApi = async () => {
        const response = await fetch('/api/books');
        const body = await response.json();
        
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    filterBooks(){
        var selectedAuthors = this.state.selectedAuthors;

        if(selectedAuthors.length == 0){
            this.setState({books: this.state.initBooks});
            return;
        }

        var books = this.state.initBooks;
        var newBooks = [];
        
        selectedAuthors.forEach(a => {
            books.forEach(b => {
                if(b.author == a){
                    newBooks.push(b);
                }
            });
        });

        this.setState({books: newBooks});
    }

    handleChange(event) {      
        var selectedAuthors = this.state.selectedAuthors;
        var pos = selectedAuthors.indexOf(event.target.value);

        pos === -1 ? selectedAuthors.push(event.target.value) : selectedAuthors.splice(pos, 1);

        this.setState({selectedAuthors: selectedAuthors});
        this.filterBooks(); 
    }

    render(){
        const { books, authors } = this.state;

        return(
            <section className="section-list">
                <div className="filter">
                    <h5 className="title-filter">Autor</h5>
                    <ul className="list-filter">
                        {authors.map((name, i) => {     
                            return (
                                <li key={i}>
                                    <input type="checkbox" onChange={this.handleChange} value={name} className="checkbox-filter"/>
                                    <span>{name}</span>
                                </li>
                            ) 
                        })}    
                    </ul>

                    <h5 className="title-filter">Preço</h5>
                    <ul className="list-filter">
                        <li>
                            <input type="checkbox" value="50" className="checkbox-filter"/>
                            <span>Até R$ 50,00</span>
                        </li>
                        <li>
                            <input type="checkbox" value="100" className="checkbox-filter"/>
                            <span>Até R$ 100,00</span>
                        </li>
                        <li>
                            <input type="checkbox" value="500" className="checkbox-filter"/>
                            <span>Até R$ 500,00</span>
                        </li>
                        <li>
                            <input type="checkbox" value="1000" className="checkbox-filter"/>
                            <span>Até R$ 1.000,00</span>
                        </li>
                    </ul>
                </div>
                <div className="content-list">
                    {/* .filter((book) => book.author == this.author) */}
                    {books.map((book, i) => {     
                        return (<div className="box-card" key={i}><Card book={book}></Card></div>) 
                    })}
                </div>            
            </section>
        )
    }
}

export default List;