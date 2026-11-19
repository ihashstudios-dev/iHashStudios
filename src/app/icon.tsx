import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#0D132A",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#245BFF",
          borderRadius: "8px",
          fontWeight: 900,
          fontFamily: "monospace",
          border: "1px solid rgba(36, 91, 255, 0.4)",
        }}
      >
        #
      </div>
    ),
    {
      ...size,
    }
  );
}
