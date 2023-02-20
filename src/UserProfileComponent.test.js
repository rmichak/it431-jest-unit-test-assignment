import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfileComponent from './UserProfileComponent';

describe('The User Profile Component', () => {
    test('displays an error message if first name blank', () => {
        render(<UserProfileComponent />);

        const firstNameInput = screen.getByLabelText('First Name*');
        fireEvent.change(firstNameInput, { target: { value: '' } });

        const submitButton = screen.getByText('Update');
        fireEvent.click(submitButton);

        const errorMessage = screen.getByText(/First Name cannot be blank/i);
        expect(errorMessage).toBeInTheDocument();
    });

    //TODO: create test to check for last name blank

    //TODO: create test to check for email blank

    //TODO: create test to check for email invalid

    //TODO: create test to check for password blank

    //TODO: create test to check for password confirm blank

    //TODO: create test to check for password and password confirm not matching

    //TODO: create test to check for successful submission (check for Thank you message)



});
