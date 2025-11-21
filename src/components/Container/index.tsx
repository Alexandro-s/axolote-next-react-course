type ContainerProps = {
    children: React.ReactNode
}
export default function Container ({children}: ContainerProps) {
    return (
        <div className="text-white-900 bg-black min-h-screen">
              <div className="max-w-screen-lg mx-auto px-8">
                {children}

              </div>
        </div>

    )
}
