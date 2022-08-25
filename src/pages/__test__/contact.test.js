import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from '@testing-library/react'

import Contact from '../contact';


const mockChildComponent = jest.fn();
jest.mock("../../components/header", () => (props) => {
    mockChildComponent(props);
    return <mock-childComponent />;
});
jest.mock("../../components/profile", () => (props) => {
    mockChildComponent(props);
    return <mock-childComponent />;
});
jest.mock("../../components/footer", () => (props) => {
    mockChildComponent(props);
    return <mock-childComponent />;
});


describe("Contact Form", () => {
    test("check if email is valid", () => {
        render(<Contact />);
        let emailElem = screen.getByTestId('email-field');
        fireEvent.change(emailElem, { target: { value: "vivek@gmail.com" } });
        let emailField = screen.getByDisplayValue(/vivek@gmail.com/i);
        expect(emailField).toBeInTheDocument();
    })
})
