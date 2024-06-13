import { currencies } from '@/lib/constants/Store/currencies'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../Select/Select'

export function SelectCurrency() {
  return (
    <Select defaultValue="eur">
      <SelectTrigger className="w-[180px] bg-neutral-800">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        {currencies.map(({ name, value }) => (
          <SelectItem className="uppercase" value={value} key={value}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
