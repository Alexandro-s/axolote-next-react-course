'use client'


type ErrorMgsProps = {
    content: React.ReactNode
    pageTitle: string
    contentPage: string
}


export default function ErrorMsg({content, pageTitle, contentPage} : ErrorMgsProps) {
    return (
      <>
      <title>{pageTitle}</title>
      <div className="min-h-[240px] bg-slate-900 text-slate-100 mb-16 p-8 rounded-xl flex items-center justify-center text-center">
        <div>
            <h1 className="text-7xl/tight mb-4 font-extrabold">{contentPage}</h1>
            <div>
                {content}
            </div>
        </div>
      </div>
      </>
    )
}
// Feature futura de quiser componetizar o error
