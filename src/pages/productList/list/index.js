import React from 'react';
import './index.css'

class List extends React.Component{
    constructor(props){
        super(props)
    }

    /**
     *把当前点击的该条数据的id,price传给父亲
     *
     * @param {*} id
     * @param {*} price
     * @memberof List
     */
    
    showEditDialog(id,price){
        this.props.showDialog(id,price)
    }

    render(){
        const {list} = this.props
        return(
            <div> 
                {
                    list.map(item =>
                        <div className="list-content" key={item.id}>
                            <span> {item.id} </span>
                            <span> {item.name} </span>
                            <span> ￥{item.price} </span>
                            <span className="edit" onClick={() => this.showEditDialog(item.id,item.price)}> 编辑 </span>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default List;