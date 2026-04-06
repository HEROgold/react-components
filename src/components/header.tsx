import { ComponentPropsWithoutRef } from "react";
import { Children } from "@/interfaces/children";

interface Props extends Children, ComponentPropsWithoutRef<"header"> { }

export default function Header({ children, ...rest }: Props) {
  return <>
    <header className="header" {...rest}>
      {children}
    </header>
  </>
}
