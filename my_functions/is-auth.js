exports.handler = async (event, context) => {
  try {
    const trueToken =
      "IS_AUTH_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxldXNlciJ9.v2sMXu-AZMMcJ27rIvjYwotjTgWh6FIQuNtLnB4MLf8";
    const { token } = event.queryStringParameters;

    if (!token) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Token is missing", event, context }),
      };
    }

    if (token === trueToken) {
      return {
        statusCode: 200,
        body: JSON.stringify({ token, event, context }),
      };
    }

    return {
      statusCode: 401,
      body: JSON.stringify({ error: "token not valid" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error", event, context }),
    };
  }
};
