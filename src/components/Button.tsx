import { ReactNode } from 'react';
import clsx from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
    children: ReactNode;
    asChild?: Boolean;
}

export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';

    return (
        <div>
            <Comp
                className={clsx(
                    'bg-cyan-500 text-black font-semibold rounded text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white py-3 px-4 '
                )}
            >
                {children}
            </Comp>
        </div>
    );
}
