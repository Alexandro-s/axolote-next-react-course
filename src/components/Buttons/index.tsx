

type ButtonVariantProps = "primary" | "secondary" | "ghost";
type ButtonProps = {
    children : React.ReactNode;
    variant?: ButtonVariantProps;
    className? : string;

}& React.ButtonHTMLAttributes<HTMLButtonElement>


export default function Button ({children, variant = "primary",className, ...props } : ButtonProps){

  const variants: Record<ButtonVariantProps, string> = {
    primary: `
      bg-[var(--btn-primary-bg)]
      hover:bg-[var(--btn-primary-hover)]
      text-[var(--btn-primary-text)]
    `,
    secondary: `
      bg-[var(--btn-secondary-bg)]
      border
      border-[var(--btn-secondary-border)]
      text-[var(--btn-secondary-text)]
    `,
    ghost: `
      text-[var(--btn-ghost-text)]
      hover:bg-[var(--btn-ghost-hover-bg)]
    `
  };
    return (

        <button
        {...props}
        className={`
            px-[var(--button-padding-x)]
            py-[var(--button-padding-y)]
          rounded-[var(--button-radius)]
            transition
            ${variants[variant]}
            ${className}
            `}



        >
            {children}
        </button>

    )
}



