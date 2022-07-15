import React from 'react'

export default function EmbedSandBox({ src, height = 500 }) {
  return (
    <iframe
      src={src}
      style={{ width: '100%', height: height, border: 0, borderRadius: 4, overflow: 'hidden' }}
      title='EmptyCard'
      allow='accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking'
      sandbox='allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts'
    />
  )
}
