import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectLanguage() {
  return (
    <Select defaultValue="english">
      <SelectTrigger>
        <SelectValue placeholder="English" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="english">
            <span className="mr-2">
              <img src="/english.png" width={20} alt=""/>
            </span>
            English
          </SelectItem>
          <SelectItem value="spanish">
            <img src="/spanish.png" width={20} alt=""/>
            Español
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
