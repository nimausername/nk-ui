import { ImageResponse } from "next/og"

/**
 * Favicon generated from the docs sidebar breadcrumb mark:
 * black rounded square + white semibold “nk”.
 */
export const size = {
  width: 32,
  height: 32,
}

export const contentType = "image/png"

/**
 * Renders the nk mark at favicon size.
 */
const Icon = () => {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          borderRadius: 6,
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: "-0.025em",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        nk
      </div>
    ),
    { ...size }
  )
}

export default Icon
