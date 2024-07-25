import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../@/components/ui/select"

export function Selectdropdown() {
  return (
    <Select 
    // className="border rounded-lg"
    >
        <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select a platform" />
        </SelectTrigger>
        <SelectContent>
            <SelectGroup>
            <SelectLabel>Platform</SelectLabel>
            <SelectItem value="est">Github</SelectItem>
            <SelectItem value="cst">Frontend Mentor</SelectItem>
            <SelectItem value="mst">Twitter</SelectItem>
            <SelectItem value="pst">LinkedIn</SelectItem>
            <SelectItem value="akst">YouTube</SelectItem>
            <SelectItem value="hst">Facebook</SelectItem>
            <SelectItem value="est">Twitch</SelectItem>
            <SelectItem value="cst">Dev.to</SelectItem>
            <SelectItem value="mst">Codewars</SelectItem>
            <SelectItem value="pst">Codepen</SelectItem>
            <SelectItem value="akst">FreeCodeCamp</SelectItem>
            <SelectItem value="hst">GitLab</SelectItem>
            <SelectItem value="akst">Hashnode</SelectItem>
            <SelectItem value="hst">Stack Overflow</SelectItem>
            </SelectGroup>
        </SelectContent>
    </Select>
  )
}
