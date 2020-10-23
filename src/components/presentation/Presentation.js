import React, { Component } from 'react'
import {infoUser} from '../../data/schema'
import { useQuery } from '@apollo/client';
import {Button, Spinner, Image} from 'react-bootstrap'

export default () => {
    const { loading, error, data } = useQuery(infoUser);
    if (loading) {
      return <Spinner animation="border"/>;
    }
    if (error) {
        console.log(error)
      return <Button variant="danger">Error Loading data 😡 </Button>;
    }
    if (data) {
        console.log(data)
        return (
            <div>
            <Button >dataload </Button>
            <Image className="avatar" src={data.user.avatarUrl} roundedCircle />
            </div>
        )        
    }
}
