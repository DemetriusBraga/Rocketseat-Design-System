import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

import { Login } from './Login';

export default {
    title: 'Pages/Login',
    component: Login,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('/sessions', (req, res, ctx) => {
                    return res(
                        ctx.json({
                            message: 'Login autorizado!',
                        })
                    );
                }),
            ],
        },
    },
} as Meta;

//função para rodar testes no storybook
export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        userEvent.type(
            canvas.getByPlaceholderText('Digite seu e-mail'),
            'user@email.com'
        );
        userEvent.type(canvas.getByPlaceholderText('*******'), '123456');

        userEvent.click(canvas.getByRole('button'));

        await waitFor(() => {
            return expect(
                canvas.getByText('Login realizado!')
            ).toBeInTheDocument();
        });
    },
};
