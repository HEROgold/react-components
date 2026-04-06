import { Children } from "@/interfaces/children";
import { ComponentPropsWithoutRef } from "react";

interface Props extends Children, ComponentPropsWithoutRef<"span"> { 
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

export default function Spinner({ ...rest }: Props) {
  return <>
    <span className={`loading loading-spinner loading-${rest.size?.toString() || 'md'}`}></span>
  </>
}
