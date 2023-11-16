import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Shop from "../components/Shop/Shop";
import { MemoryRouter } from 'react-router-dom';

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

    /*it("renders product elements", async () => {
        render(
            <MemoryRouter>
                <Shop />
            </MemoryRouter>
        );
        await screen.findByRole('listitem');
        expect(screen.getByText(/20/));
        expect(screen.getByText(/30/));
    })*/
})