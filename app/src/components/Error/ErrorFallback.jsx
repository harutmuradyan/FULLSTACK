const ErrorFallback = ({error}) =>  {
    return (
      <>
        <pre>{error.message}</pre>
      </>
    )
}

export default ErrorFallback;