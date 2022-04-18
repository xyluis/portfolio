import Header from '../header'

export default function Layout ({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}