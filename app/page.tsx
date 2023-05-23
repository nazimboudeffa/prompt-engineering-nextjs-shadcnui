'use client'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Home() {
  const prompt =
    "I want you to act as a coder"
  
  return (
    <>
    <div className="flex items-center justify-center flex-col h-screen">
      <Select>
        <SelectTrigger className="w-[180px] mb-3">
          <SelectValue placeholder="Role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="coder">coder</SelectItem>
          <SelectItem value="marketer">marketer</SelectItem>
          <SelectItem value="writer">writer</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex items-center justify-center flex-col">
      <Textarea className="mb-3" defaultValue={prompt} />
      <Button variant="outline" onClick={() => {navigator.clipboard.writeText(prompt)}}>Copy</Button>
      </div>
    </div>
    </>
  )
}
