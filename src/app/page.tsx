import Image from 'next/image'

export default function Home() {
  return (
    <main className="container my-auto flex h-full items-center justify-between gap-4 xl:my-0">
      <div className="flex h-full max-w-4xl flex-col items-start justify-start gap-4">
        <span className="font-mono md:text-xl">Hi, my name is</span>
        <h1 className="text-6xl font-bold md:text-8xl">Luís.</h1>
        <h1 className="text-6xl font-bold text-white/80 md:text-8xl">
          I build some stuff.
        </h1>
        <p>
          I love how technology can change the world and the way we see it. I
          really like backend but I&apos;ve been learning a lot about frontend
          for some time now. You can see my progress on my{' '}
          <a
            target="_blank"
            href="https://github.com/xyluis"
            className="font-bold transition-colors hover:text-white/80 hover:underline"
            rel="noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <a
          href="/"
          className="flex items-center justify-center rounded-md border border-white bg-transparent px-4 py-2 transition-colors hover:bg-white hover:text-black"
        >
          Check out my works!
        </a>
      </div>
      <div className="hidden h-60 w-60 overflow-hidden rounded-md border border-white/40 xl:flex">
        <Image
          src="https://github.com/xyluis.png"
          alt=""
          width={1080}
          height={1080}
          className="h-full w-full rounded-md"
        />
      </div>
    </main>
  )
}
