import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType } from "react";

export type TextProps<T extends ElementType> = {
    as?: T;
    children: React.ReactNode;
};

const Text = <T extends ElementType = "div">({
    as,
    children,
    className,
    ...props
}: TextProps<T> & ComponentPropsWithoutRef<T>) => {
    const Typography = as || "div";
    return <Typography className={clsx("",className)} {...props}>{children}</Typography>
}

export default Text;
