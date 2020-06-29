import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

import '../animate.css'

const MemberList = (props) => {
    
    
    return(
        <Container className='animated fade-in fast'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.membersList.map((member) => {
                            return <tr key={ member.name }>
                                        <td>{ member.name }</td>
                                        <td>{ member.userName }</td>
                                        <td>{ member.email }</td>
                                    </tr>
                        })
                    }
                    
                </tbody>
            </Table>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        membersList: state.newMembers
    }
}

export default connect (mapStateToProps)(MemberList)