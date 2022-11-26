export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className='h-full flex items-center justify-center w-full md:h-[800px]'>
            <div className="bg-white md:max-w-[650px] md:h-auto h-screen w-full flex flex-col items-center justify-center md:justify-start p-8 text-center md:shadow-xl md:rounded-lg">
                {/* <h2 className='font-bold text-[40px]'>Welcome to Next Buzz</h2> */}
                {children}
            </div>

        </div>
    )
}