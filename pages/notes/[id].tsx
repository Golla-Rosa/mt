import React from 'react'
import { DataService } from '../global/global.service'

export default function index({code})  {
    var datas = DataService.datas.notes;

    var note = datas.filter(n => n.code === code)
    return (<div className="h-96 overflow-auto-scroll p-5">
           {
               note.name
           }
    </div>)
  
}
