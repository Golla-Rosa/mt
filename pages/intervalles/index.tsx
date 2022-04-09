import { gql } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import client from '../../apollo-client';
import { DataService } from '../global/global.service'
import IntervalService from '../../services/interval.service'

export default function index({note}) {
    const [intervals, setIntervals] = useState([])
    const [isLoading, setLoading] = useState(false)
  

    useEffect(() => {
      setLoading(true)
      IntervalService.get().then(({props}) => {
        setIntervals(props.intervals);
      })
        
    }, [])
    return (
    <div className="p-5">{
            intervals.map((interval) => {
                return <div className="m-2 shadow-md border-sm" key={'k' + interval.code}>{interval.name}</div>;
            } )
        }</div>
  )
}

