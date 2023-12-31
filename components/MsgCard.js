"use client";
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid"
import { Callout } from "@tremor/react"
function MsgCard({message,warning}) {
  return (
    <Callout className="mt-4"
        title={message}
        icon={warning ? ExclamationIcon : CheckCircleIcon}
        color={warning ? "rose" : "teal"}
        />
  )
}

export default MsgCard