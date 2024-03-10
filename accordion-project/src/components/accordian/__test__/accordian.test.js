import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Accordian from '../accordian';

const testData = [
  {
    id: 1,
    question: 'Question 1',
    answer: 'Answer 1',
  },
  {
    id: 2,
    question: 'Question 2',
    answer: 'Answer 2',
  },
  // Add more test data if needed
];

test('renders Accordian component', () => {
  render(<Accordian />);
});

test('renders questions from provided data', () => {
  const { getByText } = render(<Accordian />);
  testData.forEach((dataItem) => {
    const questionElement = screen.getByText(dataItem.question);
    expect(questionElement).toBeInTheDocument();
  });
});

test('toggles single selection on click', () => {
  const { getByText } = render(<Accordian />);
  const questionElement =screen.getByText(testData[0].question);

  fireEvent.click(questionElement);
  expect(questionElement.nextElementSibling).toHaveClass('acc-content');

  fireEvent.click(questionElement);
  expect(questionElement.nextElementSibling).not.toHaveClass('acc-content');
});

test('toggles multi-selection on button click', () => {
  const { getByText, queryByText } = render(<Accordian />);
  const questionElement = screen.getByText(testData[0].question);

  fireEvent.click(getByText('Enable Multi Selection'));
  fireEvent.click(questionElement);
  expect(questionElement.nextElementSibling).toHaveClass('acc-content');

  fireEvent.click(questionElement);
  expect(questionElement.nextElementSibling).not.toHaveClass('acc-content');
});

test('displays answers for multiple selected items in multi-selection mode', () => {
  const { getByText } = render(<Accordian />);
  fireEvent.click(getByText('Enable Multi Selection'));

  testData.forEach((dataItem) => {
    const questionElement = getByText(dataItem.question);
    fireEvent.click(questionElement);
    expect(questionElement.nextElementSibling).toHaveClass('acc-content');
  });
});

test('displays no data found message when data is empty', () => {
  const { getByText } = render(<Accordian data={[]} />);
  const noDataMessage = screen.getByText('No data found !');
  expect(noDataMessage).toBeInTheDocument();
});
