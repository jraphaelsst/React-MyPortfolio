type Props = {
  value: number
  max: number
}

const ProgressBar = ({ value, max = 100 }: Props) => {
  return <progress value={value} max={max} />
}

export default ProgressBar
