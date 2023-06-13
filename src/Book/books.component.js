import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'antd/dist/antd.css';
import '../index.css';
import {Table, Col} from "antd";
import ModelComponent from "../utility/ModelWindow.container.js";
import BooksSearchBarComponent from "./searchBooks.container";
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
// const Search = Input.Search;
// // const InputGroup = Input.Group;
// const Option = Select.Option;
const BookComponent = props => {
  const {  selectedRowKeys } = props.book.selectedRowKeys;
  const rowSelection = {
    selectedRowKeys,
    onChange: props.onSelectChange,
  };
 
    return (
      <div >        
        <Col offset={2}>
        <Tabs defaultActiveKey="1" >
              <TabPane tab="Available Books" key="1">
              <BooksSearchBarComponent 
                handleSearchTypeChange={props.handleSearchTypeChange.bind(this)}
                filterDataSource={props.filterDataSource.bind(this)}
                resetSearch={props.resetSearch.bind(this,'Add to Cart')}
                tabName={"Add to Cart"}
              />
        <Table rowSelection={rowSelection} dataSource={props.book.dataSource} columns={props.book.columns} /></TabPane>
              <TabPane tab="My Cart" key="2"> <BooksSearchBarComponent 
                handleSearchTypeChange={props.handleSearchTypeChange.bind(this)}
                filterDataSource={props.filterDataSource.bind(this)}
                resetSearch={props.resetSearch.bind(this)}
                tabName={"Remove from Cart"}
              />  
              <Table rowSelection={rowSelection} dataSource={props.book.myBooksDataSource} columns={props.book.returnColumns} locale={{ emptyText: 'No Books in the Cart' }}/>      
              </TabPane>
              
              {/* <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane> */}
          </Tabs>
        
        </Col>
        <ModelComponent
          visible = {props.model.visible}
          handleOk = {props.onOk.bind(this)}
          handleCancel = {props.onCancel.bind(this)}
            />
      </div>
      
    );
  }
export default BookComponent;
