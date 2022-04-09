import { gql } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import client from '../../apollo-client';
import { DataService } from '../global/global.service';
import ChordService from '../../services/chord.service'

export default function index({note}) {
  const [chords, setChords] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    ChordService.get().then(({props}) => {
           setChords(props.chords)
      });
  }, [chords, note])

  return chords ? (
  <div className="h-96 overflow-auto-scroll p-5">
          { chords.map(function(item) {
                  return <div className="m-2 shadow-md border-sm" key={'k' + item.code}>
                      {item.name}
                      </div>
              })
          }
          

  </div>) : <></>

}