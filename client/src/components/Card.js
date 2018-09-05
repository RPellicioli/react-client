import React, { Component } from 'react';
import Currency from 'react-currency-formatter';

 class Card extends Component {
    constructor(props) {
        super(props);    
    }
    
     render(){
         return(
            <div className="card">
                <div className="header-card">
                    <h3>{this.props.book.title}</h3>
                    <h4>{this.props.book.subtitle}</h4>
                </div>
                <div className="box-image">
                    <img src={this.props.book.image} className="card-image" />
                </div>
                <div className="description">
                    {this.props.book.description.substring(0,180)}... 
                </div>
                <div className="footer-card">
                    <div className="actions">
                        <button className="btn-card">
                            Ver mais
                        </button>                
                    </div>    
                    <div className="money">
                        <Currency quantity={this.props.book.price} decimal="," group="." />
                    </div>   
                </div>
            </div>
         )
     }
 }
    
export default Card;