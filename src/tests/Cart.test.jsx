import { describe, it, expect, vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart/Cart";

describe("Cart component", () => {
    it("renders Cart title", () => {
        const itemsInCart = [];
        const removeFromCart = vi.fn();
        const closeCart = vi.fn();
        const totalPrice = 0;
        render(
            <Cart itemsInCart={itemsInCart} removeFromCart={removeFromCart} closeCart={closeCart} totalPrice={totalPrice} />
        )
        expect(screen.getByText('SHOPPING CART')).toBeInTheDocument;
    })

    it("renders item in cart", () => {
        const itemsInCart = [[]];
        const removeFromCart = vi.fn();
        const closeCart = vi.fn();
        const totalPrice = 0;
        render(
            <Cart itemsInCart={itemsInCart} removeFromCart={removeFromCart} closeCart={closeCart} totalPrice={totalPrice} />
        )
        expect(screen.getByText(/Quantity:/i)).toBeInTheDocument;
        expect(screen.getByTestId('cart-item')).toBeInTheDocument;
    })

    it("renders close cart button", () => {
        const itemsInCart = [];
        const removeFromCart = vi.fn();
        const closeCart = vi.fn();
        const totalPrice = 0;
        render(
            <Cart itemsInCart={itemsInCart} removeFromCart={removeFromCart} closeCart={closeCart} totalPrice={totalPrice} />
        )
        expect(screen.getByRole('button', { name: 'Close Cart' })).toBeInTheDocument;
    })

    it("renders checkout button", () => {
        const itemsInCart = [];
        const removeFromCart = vi.fn();
        const closeCart = vi.fn();
        const totalPrice = 0;
        render(
            <Cart itemsInCart={itemsInCart} removeFromCart={removeFromCart} closeCart={closeCart} totalPrice={totalPrice} />
        )
        expect(screen.getByRole('button', { name: 'Checkout' })).toBeInTheDocument;
    })

    it("renders subtotal", () => {
        const itemsInCart = [];
        const removeFromCart = vi.fn();
        const closeCart = vi.fn();
        const totalPrice = 0;
        render(
            <Cart itemsInCart={itemsInCart} removeFromCart={removeFromCart} closeCart={closeCart} totalPrice={totalPrice} />
        )
        expect(screen.getByTestId('subtotal')).toBeInTheDocument;
    })

    it("renders correct amount in subtotal", () => {
        const itemsInCart = [];
        const removeFromCart = vi.fn();
        const closeCart = vi.fn();
        const totalPrice = 20;
        render(
            <Cart itemsInCart={itemsInCart} removeFromCart={removeFromCart} closeCart={closeCart} totalPrice={totalPrice} />
        )
        expect(screen.getByTestId('subtotal')).toHaveTextContent('Subtotal: £20')
    })

});