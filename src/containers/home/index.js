import React, { Component } from 'react'
import { Spin, message, Form, Icon, Input, Button, Row, Col } from 'antd'
import './index.scss'
const FormItem = Form.Item


class Home extends Component {
	constructor(props, context) {
    super(props)
    this.state = {
      loading: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.checkPass = this.checkPass.bind(this)
    this.checkName = this.checkName.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      // debugger
      if (!err) {
        // this.setState({ loading: true })
        console.log(values)
        fetch("/movie/cinema_detail?url=" + values.url)
        .then(response => response.json())
        .then(json => { 
          console.log(json)
        })
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
              <Row className="ul-wrap">
                <Col span={12} offset={6}>
                  <Spin spinning={this.state.loading}>
                    <Form inline onSubmit={this.handleSubmit}>
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
                        {getFieldDecorator('tag', {
                          rules: [{ required: true, message: '请输入文件名' }],
                        })(
                          <Input
                            addonBefore="文件名"
                            placeholder="请输入存放的文件名称"
                            type="text"
                          />
                        )}

                      </FormItem>
                      <FormItem>
                        <Button type="primary" htmlType="submit">执行</Button>
                      </FormItem>
                    </Form>
                  </Spin>
                </Col>
              </Row>
            </div>
          </div>
        <div id="companyName" className="companyName"></div>
      </div>
    );
  }
}

export default Home = Form.create({
})(Home)  