import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import FormError from './FormError'

class TextInput extends React.Component {
    constructor(props){
        super(props)
        this.state={
            error:'',
            isInvalid:'',
        };
        if(laravelErrors[this.props.identity]!==undefined)
        {
            this.state.error=laravelErrors[this.props.identity][0]
            this.state.isInvalid=' is-invalid'
        }
    }
    render(){
        let inputProps = {}
        inputProps.id=this.props.identity
        inputProps.type=this.props.controlType===undefined?'text':this.props.controlType
        inputProps.className=this.state.isInvalid
        inputProps.name=this.props.name===undefined?this.props.identity:this.props.name
        inputProps.autoComplete=this.props.autoComplete===undefined?this.props.identity:this.props.autoComplete
        inputProps.required=this.props.required===undefined?true:this.props.required
        inputProps.autoFocus=this.props.autoFocus===undefined?false:this.props.autoFocus
        if(this.props.controlType!=='password')
        {
            inputProps.defaultValue=this.props.defaultValue
            inputProps.onChange=(text)=>{this.props.action(text.target.value)}
        }
        return (
            <Form.Group>
                <Row>
                    <Form.Label htmlFor={this.props.identity} className="col-md-4 col-form-label text-md-right">{this.props.label}</Form.Label>
                    <Col md="6">
                        <Form.Control {...inputProps} />
                        <FormError message={this.state.error} />
                    </Col>
                </Row>
            </Form.Group>
        )
    }
}

export default TextInput
