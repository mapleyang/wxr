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
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // this.setState({ loading: true })
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
              <h1 id="PerformName">GHCralwer</h1>
              <Spin spinning={this.state.loading}>
                <Form inline onSubmit={this.handleSubmit}>
                  <Row className="ul-wrap">
                    <Col span={12} offset={6}>
                      <FormItem hasFeedback>
                        {getFieldDecorator('url', {
                            rules: [{ required: true, message: '请输入目标url' }],
                        })(
                          <Input
                            addonBefore="URL"
                            placeholder="请输入需要爬去页面的url"
                            type="text"
                          />
                        )}
                      </FormItem>
                      <FormItem hasFeedback>
                        {getFieldDecorator('fileName', {
                          rules: [{ required: true, message: '请输入文件名' }],
                        })(
                          <Input
                            addonBefore="文件名"
                            placeholder="请输入存放的文件名称"
                            type="text"
                          />
                        )}

                      </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>
                  <FormItem
                  style={{width: '100%'}}>
                  {getFieldDecorator('contentType')(
                    <RadioGroup>
                      <Radio value="all">全部</Radio>
                      <Radio value="text">文字</Radio>
                      <Radio value="image">图片</Radio>
                    </RadioGroup>
                  )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>
                  <FormItem>
                    <Button type="primary" htmlType="submit">执行</Button>
                  </FormItem>
                </Col>
              </Row>
              </Form>
            </Spin>
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