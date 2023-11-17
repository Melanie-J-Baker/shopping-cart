import { describe, it, expect, vi } from 'vitest';
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
        expect(screen.getByText('Loading...'));
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
        await screen.findByRole('contentinfo');
    })

    it("renders product elements", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        );
        await screen.findAllByRole('listitem');
    })

    it("renders quantity inputs", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        );
        await screen.findAllByRole('spinbutton');
    })

    it("renders buy buttons", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        )
        await screen.findAllByRole('button', { name: 'Add to Cart' })
    })

    it("adds item to cart", async () => {
        const user = userEvent.setup();
        const button = await screen.findAllByRole('button', { name: 'Add to Cart' })[0];
        await user.click(button);
        expect(screen.findByText('Added to Cart!'));
    })

    /*it("should call onClick function when clicked", async () => {
        const onClick = vi.fn();
        const user = userEvent.setup();
        render(
            <MemoryRouter>
                <Shop></Shop>
            </MemoryRouter>
        )
        const button = await screen.findAllByRole("button", { name: "Add to Cart" })[0];
        await user.click(button);
        expect(onClick).toHaveBeenCalled();
    });*/

    it("should not call the onClick function when it isn't clicked", async () => {
        const onClick = vi.fn();
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        )
        expect(onClick).not.toHaveBeenCalled();
    });

});