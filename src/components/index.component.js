import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sanphams : []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/sanphams')
            .then(response => {
                this.setState({sanphams: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.sanphams.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Danh sach san pham</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>Ma SP</th>
                        <th>Ten SP</th>
                        <th>So luong</th>
                        <th colSpan="2">Chon</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}