import { shallow } from 'enzyme';
import React from 'react';
import * as axios from 'axios';
import TasksTable from "./TasksTable";

describe('The tasks table', () => {
  let component;

  beforeEach(() => {
    jest.mock('axios');
    component = shallow(<TasksTable />)
  });

  it('Should render a table element', () => {
    expect(component.find('table').length).toEqual(1);
  })

  it('Should render a caption element', () => {
    expect(component.find('caption').length).toEqual(1);
  })

  it('Should render a header element with four columns', () => {
    expect(component.find('th').length).toEqual(4);
  })

  it('Should render titles in the columns', () => {
    expect(component.find('th').at(0).text()).toEqual('#');
    expect(component.find('th').at(1).text()).toEqual('Title');
    expect(component.find('th').at(2).text()).toEqual('Description');
    expect(component.find('th').at(3).text()).toEqual('Completed');
  })

  it('Should use Axios to load a list of tasks', () => {
    const getSpy = jest.spyOn(axios, 'get');
    expect(getSpy).toBeCalled();
  })

  it('Should load the tasks from the API call', () => {
    expect(component.state().tasks).toBeDefined();
    expect(component.state().tasks.length).toEqual(2);
  })

  it('Should display the tasks from the API call', () => {
    expect(component.find('td').at(0).text()).toEqual('1');
    expect(component.find('td').at(1).text()).toEqual('Schedule Meeting');
    expect(component.find('td').at(2).text()).toEqual('Schedule a 3-amigo session for Monday 11th of October');
    expect(component.find('td').at(3)).toBeDefined();
    expect(component.find('td').at(4).text()).toEqual('2');
    expect(component.find('td').at(5).text()).toEqual('Contract tests');
    expect(component.find('td').at(6).text()).toEqual('Write provider contract tests for the new version of our API');
    expect(component.find('td').at(7)).toBeDefined();
  })
})