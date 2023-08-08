exports.handler = async (event, context) => {
  try {
    const { token } = event.queryStringParameters;

    if (!token) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Token is missing" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ token }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
