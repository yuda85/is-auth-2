exports.handler = async (event, context) => {
  try {
    const { token } = event.queryStringParameters;

    if (!token) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Token is missing", event, context }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ token, event, context }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error", event, context }),
    };
  }
};
