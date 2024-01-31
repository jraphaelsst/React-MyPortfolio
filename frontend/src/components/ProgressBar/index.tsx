import { ProgressBarStyle } from './styles'

type Props = {
  id: string
  value: number
  max?: number
}

const ProgressBar = ({ id, value, max = 100 }: Props) => {
  return (
    <ProgressBarStyle id={id}>
      <progress value={value} max={max} />
      <span>{value}%</span>
    </ProgressBarStyle>
  )
}

export default ProgressBar
