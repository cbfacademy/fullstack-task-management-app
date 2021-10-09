import React from "react";
import { mount } from "enzyme";
import TaskForm from "./TaskForm";
import axios from "./../__mocks__/axios";

describe('The task form', () => {
  let taskForm;

  beforeEach(() => {
    jest.mock('axios');
    taskForm = mount(<TaskForm />);
  });

  it('Should render a form element', () => {
    expect(taskForm.find('form').length).toEqual(1);
  });

  it('Should render a textual control to input the title', () => {
    const label = taskForm.find('#titleLabel');
    expect(label.length).toEqual(1);
    expect(label.text()).toEqual('Title');

    const input = taskForm.find('#title');
    expect(input.length).toEqual(1);
  });

  it('Should render a textual control to input the description', () => {
    const label = taskForm.find('#descriptionLabel');
    expect(label.length).toEqual(1);
    expect(label.text()).toEqual('Description');

    const input = taskForm.find('#description');
    expect(input.length).toEqual(1);
  });

  it('Should render a checkbox control to mark the task as completed', () => {
    const label = taskForm.find('#completedLabel');
    expect(label.length).toEqual(1);
    expect(label.text()).toEqual('Completed');

    const checkbox = taskForm.find('#completed');
    expect(checkbox.length).toEqual(1);
  });

  it('Should render a submit button', () => {
    const button = taskForm.find('#submit');
    expect(button.length).toEqual(1);
    expect(button.text()).toEqual('Submit');
    expect(button.type()).toEqual('button');
  });

  it('Should update its state as the title input changes', () => {
    const title = taskForm.find('#title');

    title.simulate('change', {
      target: {
        name: 'title',
        value: 'Schedule meeting'
      }
    });

    expect(taskForm.state().title).toEqual('Schedule meeting');
  });

  it('Should update its state as the description input changes', () => {
    const description = taskForm.find('#description');

    description.simulate('change', {
      target: {
        name: 'description',
        value: 'Schedule a 3-amigo session for Monday 11th of October'
      }
    });

    expect(taskForm.state().description).toEqual('Schedule a 3-amigo session for Monday 11th of October');
  });

  it('Should update its state as the complete checkbox changes', () => {
    const checkbox = taskForm.find('#completed');

    checkbox.simulate('click', {
      target: {
        name: 'completed',
        checked: true
      }
    });

    expect(taskForm.state().completed).toEqual(true);
  });

  it('Should invoke axios to post content when the submit button is clicked', () => {
    const title = taskForm.find('#title');
    const description = taskForm.find('#description');
    const completed = taskForm.find('#completed');

    title.simulate('change', {
      target: {
        name: 'title',
        value: 'Schedule meeting'
      }
    });

    description.simulate('change', {
      target: {
        name: 'description',
        value: 'Schedule a 3-amigo session for Monday 11th of October'
      }
    });

    completed.simulate('click', {
      target: {
        name: 'completed',
        checked: true
      }
    });

    const spy = jest.spyOn(axios, 'post');
    const button = taskForm.find('#submit');

    button.simulate('click');

    expect(spy).toBeCalled();
    expect(spy).toHaveBeenCalledWith(
      'http://localhost:4000/tasks',
      {
        title: "Schedule meeting",
        description: "Schedule a 3-amigo session for Monday 11th of October",
        completed: true
      }
    );
  });

})