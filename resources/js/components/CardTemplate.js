
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Row, Col, Card } from 'react-bootstrap'
import ContentSelector from './ContentSelector'
import { setPrams } from '../actions/authentications'

class CardTemplate extends React.Component {
    constructor(props){
        super(props)
        if(props.params!==undefined)
        {
            props.setPrams(props.params)
        }
    }
    render(){
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col md="8">
                        <Card>
                            <Card.Header>{this.props.title}</Card.Header>
                            <Card.Body>
                                <ContentSelector content={this.props.content} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
CardTemplate.propTypes = {
    setPrams: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({
    setPrams: (request) => dispatch(setPrams(request)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CardTemplate)
