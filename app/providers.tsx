'use client'

import { Navbar, NavbarBrand, NextUIProvider } from '@nextui-org/react'
import ServerProps from './types/ServerProps'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider>
            <Navbar>
                <NavbarBrand></NavbarBrand>
            </Navbar>
            {children}
        </NextUIProvider>
    )
}