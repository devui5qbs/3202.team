import { ButtonHTMLAttributes, ReactNode } from "react";

export interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode
}