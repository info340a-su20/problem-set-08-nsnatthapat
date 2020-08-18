import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */


export class App extends Component {

  render() {
    let senators = this.props.senators;
    let toReturn = (
      <div className="container">
          <h1>US Senators 2019</h1>
          <SenatorTable senators={senators} />;
      </div>
  );
  return toReturn;
  }
}

export class SenatorTable extends Component {

  render() {
    let senators = this.props.senators;
    let mapped = senators.map((person) => {
      let toReturn = <SenatorRow senator={person} key={senators.name}></SenatorRow>;
      return toReturn;
    })


    let toReturn = (
      <table className="table table-bordered">
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']}/>;
        <tbody>{mapped}</tbody>;
      </table>
     );



     return toReturn;

  }

}

export class TableHeader extends Component {
  render() {
    let col = this.props.cols;
    let names = col.map((name) => {
      let toReturn = <th key={name}>{name}</th>;
      return toReturn;
    });

    let toReturn = (
      <thead>
        <tr>
          {names}
        </tr>
      </thead>
     );

     return toReturn;
  }
}

export class SenatorRow extends Component {

  render() {
    let senator = this.props.senator;
    let name = senator.name;
    let state = senator.state;
    let party = senator.party.substring(0, 1);
    let phone = senator.phone;
    let twitter = senator.twitter;

    let toReturn = (
      <tr>
        <td>{name}</td>;
        <td>{party + " - " + state}</td>;
        <td><a href={"tel:" + phone}>{phone}</a></td>;
        <td><a href={"https://twitter.com/" + twitter}>{"@" + twitter}</a></td>;


      </tr>
    )
    return toReturn;
  }
}
