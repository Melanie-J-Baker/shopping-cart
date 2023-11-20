import { describe, it, vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav/Nav";
import { MemoryRouter } from 'react-router-dom';

describe("Nav component", () => {
    it("renders Home link", async () => {
        const openCart = vi.fn();
        const totalItems = 2;
        render(
            <MemoryRouter>
                <Nav openCart={openCart} totalItems={totalItems}/>
            </MemoryRouter>

        )
        await (screen.getByText('Home')).toBeInTheDocument;
    })

    it("renders Products link", async () => {
        const openCart = vi.fn();
        const totalItems = 2;
        render(
            <MemoryRouter>
                <Nav openCart={openCart} totalItems={totalItems}/>
            </MemoryRouter>

        )
        await (screen.getByText('Products')).toBeInTheDocument;
    })

    it("renders heading", async () => {
        const openCart = vi.fn();
        const totalItems = 2;
        render(
            <MemoryRouter>
                <Nav openCart={openCart} totalItems={totalItems}/>
            </MemoryRouter>

        )
        await (screen.getByText(/All Tech/i)).toBeInTheDocument;
    })

    it("renders shopping cart button", async () => {
        const openCart = vi.fn();
        const totalItems = 2;
        render(
            <MemoryRouter>
                <Nav openCart={openCart} totalItems={totalItems}/>
            </MemoryRouter>

        )
        await (screen.findByTestId('cart-btn')).toBeInTheDocument;
    })

    it("renders number of items", async () => {
        const openCart = vi.fn();
        const totalItems = 2;
        render(
            <MemoryRouter>
                <Nav openCart={openCart} totalItems={totalItems}/>
            </MemoryRouter>

        )
        await (screen.findByText(/2 items/)).toBeInTheDocument;
    })
});