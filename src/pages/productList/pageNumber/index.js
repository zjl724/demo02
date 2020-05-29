import React from 'react';
import { Pagination } from 'antd';

class PageNumber extends React.Component{
    constructor(props){
        super(props);
    }

    /**
     *监听页码改变的事件,当页码改变的时候,把页码传给父亲
     *
     * @memberof PageNumber
     */
    onPageNumberChange = (page) =>{
        this.props.changeNumber(page)
    }

    render(){
        const {total ,current} = this.props
        return(
            <Pagination defaultCurrent={current} total={total} onChange={this.onPageNumberChange}/>
        )
    }
}
export default PageNumber;