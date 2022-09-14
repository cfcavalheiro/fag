import React from 'react';
export class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countStep: 1
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        let value = Number(event.target.value);
        if (!isNaN(value)) {
            this.setState({ countStep: value });
        } else {
            alert('Número inválido');
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <label htmlFor="input-step" className='input-step-l'>
                    <input id='input-step' type="number" placeholder='Digite um valor' value={this.state.countStep} onChange={this.handleChange} />
                </label>
                <br />
                <button className='btnp' onClick={() => this.setState({ count: this.state.count + this.state.countStep })}>
                    +
                </button>
                <button className='btns' onClick={() => this.setState({ count: this.state.count - this.state.countStep })}>
                    -
                </button>
                <button className='btnz' onClick={() => this.setState({ count: 0 })}>
                    0
                </button>
            </div>
        );
    }
}