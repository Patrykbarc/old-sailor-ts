type MessageSentNotificationProps = { message: string[] }

export function MessageSentNotification({
  message,
}: MessageSentNotificationProps) {
  return (
    <div className="text-neutral-300 mt-5">
      {message.map((m) => (
        <p key={m}>{m}</p>
      ))}
    </div>
  )
}
