"use client"
import React, { createContext, useCallback } from "react"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import { ConfigProvider, notification, theme } from "antd"
import type { ThemeConfig } from "antd"
import { ArgsProps } from "antd/es/notification"

export type NotificationType = "success" | "info" | "warning" | "error"

export const themeConfig: ThemeConfig = {
  token: {
    fontSize: 14,
    colorPrimary: "#3b82f6",
    fontFamily: "var(--font-inter)",
  },
  components: {
    Button: {
      borderRadius: 8,
      primaryShadow: "none",
    },
    Input: {
      borderRadius: 8,
      colorTextPlaceholder: "#94A3B8",
    },
    DatePicker: {
      borderRadius: 8,
      colorTextPlaceholder: "#94A3B8",
    },
    Select: {
      borderRadius: 8,
      colorTextPlaceholder: "#919EAB",
    },
    Table: {
      borderRadius: 12,
    },
    Form: {
      labelColor: "#919EAB",
      labelFontSize: 13,
      labelHeight: 20,
      verticalLabelPadding: "2px",
      itemMarginBottom: 14,
    },
  },
}

type ContextProps = {
  pushNotification: ({
    type,
    ...props
  }: {
    type: NotificationType
  } & ArgsProps) => void
}

export const CommonContext = createContext<Partial<ContextProps>>({})

export const Provider = ({ children }: React.PropsWithChildren) => {
  const [api, contextHolder] = notification.useNotification({ duration: 2 })

  const pushNotification = useCallback(
    ({ type, ...props }: { type: NotificationType } & ArgsProps) => {
      api[type]({
        ...props,
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        ...themeConfig,
      }}
    >
      <CommonContext.Provider value={{ pushNotification }}>
        {contextHolder}
        <AntdRegistry>{children}</AntdRegistry>
      </CommonContext.Provider>
    </ConfigProvider>
  )
}
