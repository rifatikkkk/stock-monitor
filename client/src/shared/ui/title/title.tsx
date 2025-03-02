type Props = {
  title: string
}

export const Title: React.FC<Props> = ({ title }) => {
  return <h1 className="text-center text-2xl">{title}</h1>
}
