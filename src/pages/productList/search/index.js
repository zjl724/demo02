import React from 'react';
import { Input } from 'antd';
import './index.css'
const { Search } = Input;

class SearchProduct extends React.Component{
    constructor(props){
        super(props);
    }

    /**
     *把input框的值和当前页码传给父亲
     *
     * @memberof SearchProduct
     */
    
    searchResult = (value) =>{
        const {onSearch,current} = this.props;
        onSearch(current,value)
    }

    render(){
        return(
            <Search placeholder="请输入要查询的名字" onSearch={this.searchResult} enterButton />
        )
    }
}
export default SearchProduct;