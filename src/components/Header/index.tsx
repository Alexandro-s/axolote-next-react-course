import Image from "next/image";


export default function Header() {
    return (
      <header className="grid grid-cols-1 sm:grid-cols-2 items-center py-16 gap-x-20 lg:gap-x-40">


            <div className="flex flex-col py-8">

            <h1 className="text-6xl font-light tracking-wider  sm:text-5xl md:text-6xl lg:text-7xl">
                Universe
            </h1>
            <p className="mt-4 text-base text-white/60 max-w-xl ">O Cosmos é tudo o que é, ou sempre foi, ou sempre será</p>

            </div>

            <div className="relative w-[380px] h-[380px] mx-auto">

                {/* ANEL EXTERNO */}
                <div className="
                    absolute inset-0
                    m-auto
                    w-[350px] h-[350px]
                    rounded-full border border-white-600/40
                "></div>

                {/* ANEL INTERMEDIÁRIO */}
                <div className="
                    absolute inset-0
                    m-auto
                    w-[320px] h-[320px]
                    rounded-full border border-gray-600/90
                "></div>

                {/* LUA COM GRADIENTE ESQUERDA */}
                <div className="absolute inset-0 m-auto w-[300px] h-[300px] rounded-full overflow-hidden z-10">

                    {/* SOMBRA À ESQUERDA */}
                    <div className="
                        absolute inset-0
                        bg-gradient-to-r
                        from-black/60
                        to-transparent
                        z-20
                    "></div>

                    <Image
                        src="/svg/lua.jfif"
                        alt="Lua"
                        width={300}
                        height={300}
                        className="rounded-full object-cover"
                    />
                </div>

            </div>

        </header>
    );
}
