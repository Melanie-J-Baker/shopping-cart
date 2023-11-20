import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Shop from "../components/Shop/Shop";
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe("Shop component", () => {
    it("renders loading page", () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        )
        expect(screen.getByText('Loading...')).toBeInTheDocument;
    })

    it("renders Nav component", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        )
        await screen.findByRole('navigation');
    })

    it("renders Footer component", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        )
        const footer = await screen.findByRole('contentinfo');
        expect(footer).toBeInTheDocument;
    })

    it("renders product elements", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        );
        const productElements = await screen.findAllByRole('listitem');
        expect(productElements).toBeInTheDocument;
    })

    it("renders quantity inputs", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        );
        const quantityBtns = await screen.findAllByRole('spinbutton');
        expect(quantityBtns).toBeInTheDocument;
    })

    it("renders buy buttons", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        )
        const buttons = await screen.findAllByRole('button', { name: 'Add to Cart' });
        expect(buttons).toBeInTheDocument;
    })

    it("adds item to cart", async () => {
        const user = userEvent.setup();
        const button = await screen.findAllByRole('button', { name: 'Add to Cart' })[0];
        await user.click(button);
        expect(screen.findByText('Added to Cart!')).toBeInTheDocument;
    })
});