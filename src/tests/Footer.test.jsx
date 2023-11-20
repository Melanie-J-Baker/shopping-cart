import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer/Footer";

describe("Footer component", () => {
    it("renders Contact link", () => {
        render(
                <Footer />
        )
        expect(screen.getByText('Contact')).toBeInTheDocument;
    })

    it("renders T&Cs link", () => {
        render(
                <Footer />
        )
        expect(screen.getByText('T&Cs')).toBeInTheDocument;
    })

    it("renders Refunds link", () => {
        render(
                <Footer />
        )
        expect(screen.getByText('Refunds')).toBeInTheDocument;
    })

    it("renders Help link", () => {
        render(
                <Footer />
        )
        expect(screen.getByText('Help')).toBeInTheDocument;
    })

    it("renders Careers link", () => {
        render(
                <Footer />
        )
        expect(screen.getByText('Careers')).toBeInTheDocument;
    })

    it("renders footer bottom", () => {
        render(
            <Footer />
        )
        expect(screen.getByText(/Not a real website!/)).toBeInTheDocument;
    })
});