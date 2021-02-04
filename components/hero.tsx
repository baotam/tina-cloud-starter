export const Hero = (data) => {
  const { __typename, heading, message } = data;

  return (
    <>
      <div className="hero">
        <h2 className="heading">{heading}</h2>
        <p className="message">{message}</p>
      </div>
      <style jsx>{`
        .hero {
        }

        .heading {
        }

        .message {
        }
      `}</style>
    </>
  );
};
