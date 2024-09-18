"use client"
import { PaginationProps, Pagination as PaginationAntd } from "antd"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export const Pagination = () => {
  const { push } = useRouter()
  const [current, setCurrent] = useState(1)
  const searchParams = useSearchParams()

  const search = searchParams.get("page")

  useEffect(() => {
    if (search) {
      setCurrent(Number(search))
    }
  }, [])

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrent(page)
    push(`?page=${page}`)
  }

  return <PaginationAntd current={current} onChange={onChange} total={50} />
}
