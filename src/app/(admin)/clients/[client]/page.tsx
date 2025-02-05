type ParamsProps = {
  clientId: string
}

export default function ClientDetails({ clientId }: ParamsProps) {
  return (
    <div>
      <h1>Client Details</h1>
      <p>Client ID: {clientId}</p>
    </div>
  )
}
