import './Form.css';
import { useState } from 'react';

function MyForm() {
    const [electric, setElectric] = useState("");
    const [gas, setGas] = useState("");
    const [oil, setOil] = useState("");
    const [mileage, setMileage] = useState("");
    const [shortFlights, setShortFlights] = useState("");
    const [longFlights, setLongFlights] = useState("");
    const [paper, setPaper] = useState("True");
    const [tin, setTin] = useState("True");
    const [totalFootprint, setTotalFootprint] = useState(0);
    const calculateFP = () => {
        const electricFP = electric * 105;
        const gasFP = gas * 105;
        const oilFP = oil * 113;
        const carFP = mileage * 0.79;
        const shortFlightsFP = shortFlights * 1100;
        const longFlightsFP = longFlights * 4400;
        const paperFP = paper ? 0 : 184;
        const tinFP = tin ? 0 : 166;
 
        const total = electricFP + gasFP + oilFP + carFP + shortFlightsFP + longFlightsFP + paperFP + tinFP;
 
        setTotalFootprint(total);
    }
    const submit = (e) => {
        e.preventDefault();
        alert(`${electric}, ${gas}, ${oil}, ${mileage}, ${shortFlights}, ${longFlights}, ${paper}, ${tin}`);
        alert(`${calculateFP}`);
    }
    const paperChange = (event) => {
        setPaper(event.target.value);
      }
    const tinChange = (event) => {
        setTin(event.target.value);
      }
    return (
      <form onSubmit={submit}>
        <h3>Calculate your footprint:</h3>

        <label>What is your monthly electric bill?
            <input 
                type="number" 
                value={electric}
                onChange={(event) =>
                setElectric(event.target.value)}
            />
        </label><br/><hr/>

        <lable>What is your monthly gas bill?
            <input 
                type='number'
                value={gas}
                onChange={(event) =>
                setGas(event.target.value)}
            />
        </lable><br/><hr/>

        <lable>What is your monthly oil bill?
            <input 
                type='number' 
                value={oil}
                onChange={(event) =>
                setOil(event.target.value)}
            />
        </lable><br/><hr/>

        <lable>What is your yearly mileage on your car?
            <input 
                type='number'
                value={mileage}
                onChange={(event) =>
                setMileage(event.target.value)}
            />
        </lable><br/><hr/>

        <p>How many flights have you taken in the past year that are shorter than 4 hours?</p>
        <lable>
            <input 
                type='radio' 
                value={0}
                name='short_flights'
                onChange={(event) =>
                setShortFlights(event.target.value)}
            />None
        </lable>
        <lable>
            <input 
                type='radio' 
                value={1}
                name='short_flights'
                onChange={(event) =>
                setShortFlights(event.target.value)}
            />one
        </lable><br/>
        <lable>
            <input 
                type='radio' 
                value={2}
                name='short_flights'
                onChange={(event) =>
                setShortFlights(event.target.value)}
            />Two
        </lable>
        <lable>
            <input 
                type='radio' 
                value={3}
                name='short_flights'
                onChange={(event) =>
                setShortFlights(event.target.value)}
            />Three
        </lable><br />
        <lable>
            <input 
                type='radio' 
                value={4}
                name='short_flights'
                onChange={(event) =>
                setShortFlights(event.target.value)}
            />Four or more
        </lable><br/><hr/>

        <p>How many flights have you taken in the past year that are longer than 4 hours?</p>
        <lable>
            <input 
                type='radio' 
                value={0}
                name='long-flights'
                onChange={(event) =>
                setLongFlights(event.target.value)}
            />None
        </lable>
        <lable>
            <input 
                type='radio' 
                value={1}
                name='long-flights'
                onChange={(event) =>
                setLongFlights(event.target.value)}
            />one
        </lable><br/>
        <lable>
            <input 
                type='radio' 
                value={2}
                name='long-flights'
                onChange={(event) =>
                setLongFlights(event.target.value)}
            />Two
        </lable>
        <lable>
            <input 
                type='radio' 
                value={3}
                name='long-flights'
                onChange={(event) =>
                setLongFlights(event.target.value)}
            />Three
        </lable><br />
        <lable>
            <input 
                type='radio' 
                value={4}
                name='long_flights'
                onChange={(event) =>
                setLongFlights(event.target.value)}
            />Four or more
        </lable><br/><hr/>
        
        <lable>Do you recycle paper?
            <select value={paper} onChange={paperChange}>
                <option value="True">True</option>
                <option value="False">False</option>
            </select>
        </lable><br/><hr/>

        <lable>Do you recycle cans and foil?
            <select value={tin} onChange={tinChange}>
                <option value="True">True</option>
                <option value="False">False</option>
            </select>
        </lable><br/><hr/>
        
        <button onClick={calculateFP}>Calculate</button>
        <h2>Total Carbon Footprint: {totalFootprint} kg CO2</h2>
      </form>
    )
  }
 
  export default MyForm;
