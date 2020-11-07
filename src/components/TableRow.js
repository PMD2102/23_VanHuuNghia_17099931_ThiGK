import React, { Component } from 'react';
import axios from 'axios';
class TableRow extends Component {
  constructor(props){
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(){
    axios.get('http://localhost:4000/sanphams/delete/'+this.props.obj.maSP)
    .then(console.log('Deleted'))
    .catch(err => console.log(err))
  }

  render() {
    return (
        <tr>
          <td>
            {this.props.obj.maSP}
          </td>
          <td>
            {this.props.obj.tenSP}
          </td>
          <td>
            {this.props.obj.soLuong}
          </td>
          <td>
            <button className="btn btn-success" onClick={this.delete}>Delete</button>
          </td>
        </tr>
    );
  }
}

export default TableRow;