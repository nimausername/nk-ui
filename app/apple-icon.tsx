import { ImageResponse } from "next/og"

/**
 * Apple touch icon — same breadcrumb mark, scaled for home-screen use.
 */
export const size = {
  width: 180,
  height: 180,
}

export const contentType = "image/png"

/**
 * Renders the nk mark at Apple touch size.
 */
const AppleIcon = () => {
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
          borderRadius: 36,
          color: "#ffffff",
          fontSize: 78,
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

export default AppleIcon
