import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col, Radio  } from 'antd'
import './index.scss'
const FormItem = Form.Item
const RadioGroup = Radio.Group;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};

class Home extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
      url: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.checkPass = this.checkPass.bind(this)
    this.checkName = this.checkName.bind(this)
  }

  componentDidMount () {
    this.props.form.setFieldsValue({contentType: "all"})
  }

  handleSubmit(e) {
    let _this = this;
    const hide = message.loading('请耐心等待', 0);
    setTimeout(hide, 2000);
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        let url = "/movie/cinema_detail?url=" + values.url + "&fileName=" + values.fileName + "&contentType=" + values.contentType + "&fileType=";
        location.href = url;
        // fetch("/movie/cinema_detail?url=" + values.url + "&fileName=" + values.fileName + "&contentType=" + values.contentType + "&fileType=")
        // .then(response => response.json())
        // .then(json => { 
        //   console.log(json)
        // })
      }
    })
  }

  handleChange(e) {
    const newState = {}
    newState[e.target.name] = e.target.value
    this.setState(newState)
  }

  checkName(rule, value, callback) {
    const { validateFields } = this.props.form
    if (value) {
      // validateFields([''])
    }
    callback()
  }

  checkPass(rule, value, callback) {
    const { validateFields } = this.props.form
    if (value) {
      // validateFields([''])
    }
    callback()
  }

  render() {
  	 const { getFieldDecorator } = this.props.form
    return (
      <div className="login">
          <div className="sy_top"></div>
          <div className="btmLogin">
            <div className="sy_bottom">
              <h1 id="PerformName">hello, wxr.</h1>
            </div>
          </div>
        <div id="companyName" className="companyName"></div>
      </div>
    );
  }
}

export default Home = Form.create({
})(Home)  


// <Row>
//   <Col span={12} offset={6}>
//     <FormItem
//     style={{width: '100%'}}
//      {...formItemLayout}
//     label="输出文件类型">
//     {getFieldDecorator('fileType')(
//       <RadioGroup>
//         <Radio value=".txt">.txt</Radio>
//         <Radio value=".excel">.excel</Radio>
//         <Radio value=".doc">.doc</Radio>
//         <Radio value="img">图片</Radio>
//       </RadioGroup>
//     )}
//   </FormItem>
//   </Col>
// </Row>