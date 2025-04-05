import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

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
              <Image src="/english.png" width={20} height={20} alt=""/>
            </span>
            English
          </SelectItem>
          <SelectItem value="spanish">
            <Image src="/spanish.png" width={20} height={20} alt=""/>
            Español
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
