import Head from 'next/head'
import Link from 'next/link'
import React, { Component } from 'react';

class Layout extends Component{
    constructor(props) {
        super(props);    
    }

    componentDidMount() {
        document.body.style.margin = 0;
    }
    
    render(){
        return (
            <div className="app">
                <Head>
                    <title>Ezoom</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                    <link href="https://fonts.googleapis.com/css?family=Barlow:300,300i,400,400i,500,500i,700,700i" rel="stylesheet"/>
                </Head>
                <header>
                    <div className="common-limiter nav">
                        <Link href="/about">
                            <img src={require('../assets/img/logo.png')} id="logo" />
                        </Link>
                    </div>           
                </header>
                <main>
                    { this.props.children }
                </main>
                <footer id="footer">
                    <span>Developed by Ricardo Pellicioli © 2018</span>
                </footer>
            </div>
        );
    }
}

export default Layout;