exports.handler = async (event, context) => {
  try {
    const trueToken =
      "IS_AUTH_eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMywidXNlcm5hbWUiOiJleGFtcGxldXNlciJ9.v2sMXu-AZMMcJ27rIvjYwotjTgWh6FIQuNtLnB4MLf8";
    const { token } = event.queryStringParameters;

    if (!token) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Token is missing",
          initData: {
            redirectUrl: "https://is-auth-next.netlify.app",
            loginMethods: ["OTP", "UP"],
            appName: "WOW OPA!!",
          },
        }),
      };
    }

    if (token === trueToken) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          token,
          initData: {
            redirectUrl: "https://is-auth-next.netlify.app",
            loginMethods: ["OTP", "UP"],
            appName: "WOW OPA!!",
          },
        }),
      };
    }

    return {
      statusCode: 401,
      body: JSON.stringify({
        error: "token not valid",
        initData: {
          redirectUrl: "https://is-auth-next.netlify.app",
          loginMethods: ["OTP", "UP"],
          appName: "WOW OPA!!",
        },
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal Server Error",
        initData: {
          redirectUrl: "https://is-auth-next.netlify.app",
          loginMethods: ["OTP", "UP"],
        },
      }),
    };
  }
};
