export const submit = async (total, dispatch) => {
  if (confirm(`Please confirm your total: $${total}`)) {
    dispatch({ type: 'IS_LOADING' });
    await new Promise(resolve => setTimeout(() => resolve(), 3000));

    dispatch({ type: 'RESET' });
    dispatch({ type: 'IS_NOT_LOADING' });
    setTimeout(() => {
      alert(
        `Success! 😀 \nYou\'re total is $${total}. \nPlease pick up your tickets at will call.`
      );
    }, 0);
  }
};
