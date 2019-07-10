TloggedInMessage = (username) => {
  return {
    attachment: {
      type: 'template',
      payload: {
        template_type: 'button',
        text: `You’re still logged in as ${username}.`,
        buttons: [u],
      },
    },
  };
};

/**
 * Fun message for saying hello to a signed in user.
 */
const napMessage = {
  text: 'Oh hey there! I was just napping while you were gone 😴. But I’m awake now!',
};

/**
 * The Get Started button.
 */
const getStarted = {
  get_started: {
    payload: 'GET_STARTED'
  }
};

export default {
  createAccountMessage,
  signInGreetingMessage,
  signInSuccessMessage,
  signOutSuccessMessage,
  loggedInMessage,
  napMessage,
  getStarted,
};
