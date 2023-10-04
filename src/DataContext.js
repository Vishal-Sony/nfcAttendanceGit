import React, { useState ,createContext} from 'react'


export const DataContext=createContext();




export const DataProvider = (props)=>{
    const [data,setData]=useState( [
        {
            teacherId:'E12345',
            teacherData:[{
                class:'20CSE21',
                attendance:[
                    {
                        date:'2023-08-09',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    },
                    {
                        date:'2023-10-01',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    }
                ]
            },
            {
                class:'20CSE6',
                attendance:[
                    {
                        date:'2023-08-09',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    },
                    {
                        date:'2023-10-01',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    }
                ]
            },
            {
                class:'20CSE22',
                attendance:[
                    {
                        date:'2023-08-09',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    },
                    {
                        date:'2023-10-01',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    }
                ]
            },
            {
                class:'20CSE23',
                attendance:[
                    {
                        date:'2023-08-09',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    },
                    {
                        date:'2023-10-01',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    }
                ]
            }
    
        ]
         },{
            teacherId:'E11111',
            teacherData:[{
                class:'20CSE21',
                attendance:[
                    {
                        date:'2023-08-09',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    },
                    {
                        date:'2023-10-01',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    }
                ]
            },
            {
                class:'20CSE6',
                attendance:[
                    {
                        date:'2023-08-09',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    },
                    {
                        date:'2023-10-01',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    }
                ]
            },
            {
                class:'20CSE22',
                attendance:[
                    {
                        date:'2023-08-09',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    },
                    {
                        date:'2023-10-01',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    }
                ]
            },
            {
                class:'20CSE23',
                attendance:[
                    {
                        date:'2023-08-09',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    },
                    {
                        date:'2023-10-01',
                        uids:['20BCS7025','20BCS5946','20BCS7042','20BCS7001','20BCS7002','20BCS7003','20BCS7004','20BCS7005','20BCS7006','20BCS7007',]
                    }
                ]
            }
    
        ]
         }
        
    ])
    return(
        <DataContext.Provider value={[data,setData]}>
            {props.children}
        </DataContext.Provider>

    );
}