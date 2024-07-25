import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx";

const buttonVariants = cva(
    "flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
    {
        variants: {
            variant: {
                default: ""
            },
            size: {
                default:"" // sm, lg
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
)

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children?: React.ReactNode;
}

export function Button({ children, className, variant, size, ...props}: ButtonProps) {
    return (
        <button
            {...props}
            className={clsx(buttonVariants({ variant, size ,className}))}
        >
            {children}
        </button>
    )
}