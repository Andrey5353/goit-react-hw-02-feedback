import css from 'components/Widjet/FeedbackOptions/Buttons/ButtonStyle.module.css';

export const ButtonBad = ({ onLeaveFeedback }) => {
  return (
    <button
      className={css.button}
      name="bad"
      type="button"
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  );
};
