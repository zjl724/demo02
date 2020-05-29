import React from 'react';
import SearchProduct from "./search";
import PageNumber from "./pageNumber";
import List from './list'
import axios from 'axios';
import { Modal,Input } from 'antd';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalData: [],//请求到的全部数据
            current: 1, //当前页码
            pageSize: 10, //每页显示的条数
            total: 0,//商品列表总条数
            currentId: 0,//要修改的当前商品的id
            currentPrice: 0,//要修改的当前商品的价格
            visible: false,//控制编辑框的显示和隐藏
        };
    }

    componentWillMount(){
        this.getProductList()
    }

    
    /**
     *获取商品列表
     *
     * @memberof ProductList
     */
    getProductList =(current=1,text='',pageSize=this.state.pageSize) => {
        axios.get('productList.json',)
        .then((res) =>{
            let {status, data,} = res
            if(status == 200){
                // 根据商品名称筛选商品
                data = data.filter(item => item.name.indexOf(text) >= 0)
                this.setState({
                    totalData: data.slice((current-1)*pageSize,current*pageSize),
                    total: data.length
                })
            }
        })
        .catch((error) =>{
            console.error(error)
        })
    }

    /**
     *设置当前要编辑的id,和price,以便在弹框中显示和修改价格
     *
     * @memberof ProductList
     */
    showDialog = (id,price) => {
        this.setState({
            currentId:id,
            currentPrice: price,
            visible: true
        })
    }

    /**
     *修改该条商品的价格
     *
     * @param {*} id
     * @memberof ProductList
     */
    handleOk(id){
        let totalData = this.state.totalData
        totalData.forEach(item =>{
            if(item.id == id){
                item.price = this.state.currentPrice
            }
        })
        this.setState({
            totalData:[...totalData],
            visible: false,
        })
    };
    /**
     *关闭弹框
     *
     * @memberof ProductList
     */
    handleCancel = e => {
        this.setState({
          visible: false,
        });
    };

    /**
     *监听文本框的改变
     *
     * @memberof ProductList
     */
    inputChange = e => this.setState({currentPrice:e.target.value})

    render() {
        const {totalData,total,current,currentId,currentPrice} = this.state;
      return (
          <div>
              {/**搜索 */}
              <SearchProduct current={current} onSearch={this.getProductList}></SearchProduct>
              {/**列表 */}
              <List list = {totalData} showDialog={this.showDialog}></List>
              {/**分页 */}
              <PageNumber current={current} total={total} changeNumber={this.getProductList}></PageNumber>
              {/**修改商品价格的弹框 */}
              <Modal title="修改商品的价格" visible={this.state.visible} onOk={()=>this.handleOk(currentId)} onCancel={this.handleCancel}>
                <Input value={currentPrice} onChange={this.inputChange}/>
              </Modal>
          </div>
      )
    }
}
export default ProductList;

