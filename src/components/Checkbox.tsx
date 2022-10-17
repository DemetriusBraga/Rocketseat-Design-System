import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

// o extends e o props aqui foram adicionados para que a label fosse contectada ao checkbox para o click também
export interface CheckboxProps extends CheckboxRadix.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
    return (
        <CheckboxRadix.Root
            className="w-6 h-6 p-[2px] bg-gray-800 rounded"
            {...props}
        >
            <CheckboxRadix.Indicator asChild>
                <Check weight="bold" className="h-5 w-5 text-cyan-500" />
            </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
    );
}
