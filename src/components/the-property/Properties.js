import React, { Component } from 'react';
import Sauna from './Sauna';
import Venevaja from './Venevaja';
import { Tabs, TabList, Tab, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class Properties extends Component {

  render() {
    const displayProperties = (
      <Tabs defaultIndex={0} onSelect={index => console.log(index)}>
        <TabList>
          <Tab key={1}>Sauna</Tab>
          <Tab key={2}>Venevaja</Tab>
        </TabList>

        <TabPanel key={1}>
          <Sauna pictures={this.props.pictures} />
        </TabPanel>
        <TabPanel key={2}>
          <Venevaja />
        </TabPanel>
      </Tabs>
    );
    return (
      <div>
        { displayProperties }
      </div>
    )
  }

}