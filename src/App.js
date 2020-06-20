import React from 'react';
import {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api'; // we don't need to mention index.js, it automatically searches for index.js first
 
class App extends React.Component {
    
    //constructor will automatically be created in the backend
    state = {
        data : {}
    }
    
    async componentDidMount() { // especially with componentDidMount, the async keyword is put in the front
        const fetchedData = await fetchData();
        this.setState({data : fetchedData})
    }

    render() {
        const {data} = this.state;
        return (
            <div className={styles.container}>
                <Cards data={data} />
                <CountryPicker />
                <Chart />
            </div>
        );
    }
}

export default App;