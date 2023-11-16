import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Home from "../components/Home/Home";
import { MemoryRouter } from 'react-router-dom';

describe("Home component", () => {
    it("renders Nav component", () => {
        render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        )
        expect(screen.getByRole('navigation'));
    })

    it("renders correct heading", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(screen.getByText('Welcome to All Tech'))
    });
    it("renders correct main text", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        expect(screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'))
    })

    it("renders image1", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        expect(screen.getByAltText('electronics')).toHaveAttribute('src', '/src/assets/images/image1.jpg');
    })

    it("renders image2", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        expect(screen.getByAltText('tech')).toHaveAttribute('src', '/src/assets/images/image2.jpg');
    })

    it("renders image3", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        expect(screen.getByAltText('gadgets')).toHaveAttribute('src', '/src/assets/images/image3.jpg');
    })

    it("renders Footer component", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>            
        )
        expect(screen.getByRole('contentinfo'))
    })
});