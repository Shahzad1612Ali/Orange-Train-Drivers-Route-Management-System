import React, { useEffect, useState } from 'react'
import '../styles/home.css'

export default function TimeTable() {
    const [table, setTable] = useState([]);
    const [tripNum, setTripNum] = useState('');
    const [table_Id, setTableId] = useState('');
    const [startAT, setStartAT] = useState('');
    const [arrivedAt, setArrivedAt] = useState('');

    const getTimeTable = () => {
        fetch('https://sheetdb.io/api/v1/rpxytol8tabbv')
        .then((response) => response.json())
        .then(async (data) => {
            console.log("Drivers Routes Fetched Successfully")
            console.log(data)
            await setTable(data);
        });
    }

    useEffect(()=>{
      getTimeTable()
    },[]);

    const findTime = () => {
        console.log("I am findtime function");
        let check=0;
        table.forEach((item) => {
            if (item.TableID === table_Id && item.TripNumber === tripNum) {
                console.log(`Starting Station : ${item.StartingStation}`);
                console.log(`Pick Time : ${item.PickTime}`);
                console.log(`Ending Station : ${item.EndStation}`);
                console.log(`Arrival Time : ${item.ArrivalTime}`);
                console.log(`Trip Number is : ${tripNum}`);
                console.log(`Table ID : ${table_Id}`);
                setStartAT(item.PickTime);
                setArrivedAt(item.ArrivalTime);
                check=1;
            }

        });
        if(check===0){
            alert('Inavlid Trip Number or Table ID Recheck and Try Again');

        }
    }

    return (
        <div>
            <h1 style={{marginBottom:'20vh', marginTop:'5vh', marginLeft:'5vw', marginRight:'5vw'}}>Orange Line Train Driver Route Management</h1>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'center', height: '100vh' }}>

            <div style={{ width: '80%', maxWidth: '400px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'green', borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <input
                    type="text"
                    placeholder="Enter Trip Number"
                    value={tripNum}
                    onChange={(input) => setTripNum(input.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', margin: '10px 0', boxSizing: 'border-box' }}
                />

                <input
                    type="text"
                    placeholder="Enter Table Id"
                    value={table_Id}
                    onChange={(input) => setTableId(input.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', margin: '10px 0', boxSizing: 'border-box' }}
                />

                <button
                    onClick={findTime}
                    style={{ width: '60%', padding: '10px', backgroundColor: 'black', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1)', marginTop: '10px' }}
                >
                    Result
                </button>
            </div>
            {startAT && arrivedAt && (
                <div id='result' style={{ width: '80%', maxWidth: '400px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'green',color:'white' ,borderRadius: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                    <p>Pick Up Time: {startAT}</p>
                    <p>Arrival Time: {arrivedAt}</p>
                </div>
            )}
            </div>
        </div>
    );
}
