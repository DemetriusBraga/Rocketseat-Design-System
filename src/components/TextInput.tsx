import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className="flex items-center gap-3 bg-gray-800 rounded w-full  focus-within:ring-2 ring-cyan-300 h-12 py-3 px-4">
            {props.children}
        </div>
    );
}
TextInputRoot.displayName = 'TextInput.Root';

export interface TextInputIconProps {
    children: ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
    return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}
TextInputIcon.displayName = 'TextInput.Icon';

export interface TextInputBaseProps
    extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputBase(props: TextInputBaseProps) {
    return (
        <input
            className="bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400"
            {...props}
        />
    );
}
TextInputBase.displayName = 'TextInput.Base';

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputBase,
    Icon: TextInputIcon,
};
