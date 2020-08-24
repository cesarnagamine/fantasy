import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';

class Stock2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }
    }

    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const pointerToThis = this;
        console.log(pointerToThis);
        //Remember to keep this Key (from alphavantage.co) in the .env file!:
        const API_KEY = 'ZRLY68QD1ZKHKWI0';
        let StockSymbol = 'BND';
        //Note the Back Ticks!:
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_Call)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (data) {
                    console.log(data);

                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                    }

                    // console.log(stockChartXValuesFunction);
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    });
                }
            )
    }

    render() {

        return (
            <div>
                <h1 align='center'>Vanguard Aggregated Bond Fund</h1>
                <Plot
                    data={[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockChartYValues,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: { color: 'blue' },
                        }
                    ]}
                    layout={{
                        width: undefined,
                        height: undefined,
                        autosize: true,
                        responsive: true,
                    }}

                    useResizeHandler={true}
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
        )
    }
}

export default Stock2;