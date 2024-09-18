"use client"
// import { readFile } from "@/utils/common"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Badge, Button } from "antd"
import { useRouter } from "next/navigation"

export const CartButton = ({ badgeNum = 0 }: { badgeNum?: number }) => {
  const { push } = useRouter()
  return (
    <Badge count={badgeNum}>
      <Button
        icon={<FontAwesomeIcon icon={faCartShopping} />}
      />
    </Badge>
  )
}
