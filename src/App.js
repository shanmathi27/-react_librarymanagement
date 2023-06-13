import React, { Component ,useState,useEffect} from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'antd/dist/antd.css';
import './index.css';
// import {Table,Select,Input,Button} from "antd"
import BookContainer from "./Book/books.container";
import ClipLoader from "react-spinners/ClipLoader";

// const Search = Input.Search;
// const InputGroup = Input.Group;
// const Option = Select.Option;

class App extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    // Simulate loading data
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000); // Set the loading state to false after 2 seconds (adjust as needed)
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="loader-container">
            <ClipLoader color="#1890ff" loading={this.state.loading} size={100} />
          </div>
        ) : (
          <BookContainer />
        )}
      </div>
    );
  }
}

export default App;
